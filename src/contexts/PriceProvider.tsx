 /* eslint-disable */ 
import React, { createContext, useEffect, useState, useCallback } from 'react'
import BigNumber from 'bignumber.js'
import multicall from '../utils/multicall'
import erc20 from '../constants/abis/erc20.json'
import { getBalanceNumber } from '../utils/formatBalance'
import { useBlock } from '../hooks/useBlock'

export interface PriceContext {
  htPrice: number
  pippiPrice: number
}

export const Context = createContext<PriceContext>({
  htPrice: 0,
  pippiPrice: 0,
})

const PriceProvider: React.FC = ({ children }) => {
  const block = useBlock()
  const [price, setPrice] = useState({
    htPrice: 0,
    pippiPrice: 0,
  })

  const fetchBalance = useCallback(async () => {
    const calls = [
      {
        // todo: replace address
        // usdt
        address: '0xD16bAbe52980554520F6Da505dF4d1b124c815a7',
        name: 'balanceOf',
        // hoo-usdt lp
        params: ['0xc755b69b0277d7c935466b41f266142d4a9d265b'],
      },
      {
        // hoo
        address: '0x3EFF9D389D13D6352bfB498BCF616EF9b1BEaC87',
        name: 'balanceOf',
        // hoo-usdt lp
        params: ['0xc755b69b0277d7c935466b41f266142d4a9d265b'],
      },
      {
        // pudding
        address: '0xbE8D16084841875a1f398E6C3eC00bBfcbFa571b',
        name: 'balanceOf',
        // todo: replace address cake-bnb lp?
        params: ['0x593de6673ad09b69103f5b95175cddd05f6880b3'],
      },
      {
        // bnb
        address: '0x3EFF9D389D13D6352bfB498BCF616EF9b1BEaC87',
        name: 'balanceOf',
        // todo: replace address
        params: ['0x593de6673ad09b69103f5b95175cddd05f6880b3'],
      },
    ]
    
    try {
      const [busd, bnb0, cake, bnb1] = await multicall(erc20, calls)
      
      const htPrice =
        getBalanceNumber(new BigNumber(busd), 6) /
        getBalanceNumber(new BigNumber(bnb0))
      const cakebnb =
        getBalanceNumber(new BigNumber(bnb1)) /
        getBalanceNumber(new BigNumber(cake))
      const pippiPrice = cakebnb * htPrice

      setPrice({
        htPrice,
        pippiPrice,
      })
    } catch (error) {
      console.log('error..', error)
    }
  }, [])

  useEffect(() => {
    fetchBalance()
  }, [setPrice, block, fetchBalance])

  return <Context.Provider value={{ ...price }}>{children}</Context.Provider>
}

export default PriceProvider
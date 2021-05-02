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
  pippiPrice: 0
})

const PriceProvider: React.FC = ({ children }) => {
  const block = useBlock()
  const [price, setPrice] = useState({
    htPrice: 0,
    pippiPrice: 0
  })

  // const fetchBalance = useCallback(async () => {
  //   const calls = [
  //     {
  //       address: '0x92a0bD4584c147D1B0e8F9185dB0BDa10B05Ed7e',  // usdt
  //       name: 'balanceOf',
  //       params: ['0x2129e956d7157ffbcfa65abbab3c66c9456dba0d'], // hoo usdt lp
  //     },
  //     {
  //       address: '0xbE8D16084841875a1f398E6C3eC00bBfcbFa571b',
  //       name: 'balanceOf',
  //       params: ['0x2129e956d7157ffbcfa65abbab3c66c9456dba0d'],// hoo usdt lp
  //     },
  //     {
  //       address: '0xbE8D16084841875a1f398E6C3eC00bBfcbFa571b', // pud
  //       name: 'balanceOf',
  //       params: ['0xf9783240ecc6126727a43ff43316d932e942fc3a'] // hoo pud lp
  //     },
  //     {
  //       address: '0x3EFF9D389D13D6352bfB498BCF616EF9b1BEaC87', // whoo
  //       name: 'balanceOf',
  //       params: ['0xf9783240ecc6126727a43ff43316d932e942fc3a'], // hoo pud lp
  //     }
  //   ]
  //   try {
  //     const [busd, bnb0, cake, bnb1] = await multicall(erc20, calls)
  //     const htPrice = getBalanceNumber(new BigNumber(busd), 8) / getBalanceNumber(new BigNumber(bnb0))
  //     const cakebnb = getBalanceNumber(new BigNumber(bnb1)) / getBalanceNumber(new BigNumber(cake))
  //     const pippiPrice = cakebnb * htPrice
  //     setPrice({
  //       htPrice,
  //       pippiPrice
  //     })
  //   } catch (error) {
  //     console.log('error..', error)
  //   }
  // }, [])

  // useEffect(() => {
  //   fetchBalance()
  // }, [setPrice, block, fetchBalance])

  return <Context.Provider value={{ ...price }}>{children}</Context.Provider>
}

export default PriceProvider

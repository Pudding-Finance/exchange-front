import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x03fF6895aB1Fdff998665E34368B69a032F50578', // TODO
  [ChainId.TESTNET]: '0xbE8D16084841875a1f398E6C3eC00bBfcbFa571b'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }

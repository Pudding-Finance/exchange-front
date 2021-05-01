export const contractAddresses = {
  sushi: {
    256: '0x8fB1D8C8085663bF574a5c44313CC50e9719FC22',
    170: '0x96D808A323d9eB1De23F7d82F83574e6969c5591',
  },
  weth: {
    256: '0x8fB1D8C8085663bF574a5c44313CC50e9719FC22',
    170: '0x96D808A323d9eB1De23F7d82F83574e6969c5591',
  }
}

const multicall = {
  170: '0xbE8D16084841875a1f398E6C3eC00bBfcbFa571b',
  128: '0x37ab26db3df780e7026f3e767f65efb739f48d8e',
}
const chainId = 170

interface AddressProps {
  170: string // Address of the contract
}
export const getAddress = (obj: AddressProps) => {
  return obj[chainId] ? obj[chainId] : obj
}

export const getMasterChefAddress = () => {
  return getAddress(contractAddresses.masterChef)
}
export const getMulticallAddress = () => {
  return multicall[chainId]
}

export const getPipiAddress = () => {
  return getAddress(contractAddresses.sushi)
}

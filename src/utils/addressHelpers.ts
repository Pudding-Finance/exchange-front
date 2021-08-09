export const contractAddresses = {
  sushi: {
    70: '0xbE8D16084841875a1f398E6C3eC00bBfcbFa571b',
    170: '0x96D808A323d9eB1De23F7d82F83574e6969c5591',
  },
  weth: {
    70: '0x3EFF9D389D13D6352bfB498BCF616EF9b1BEaC87',
    170: '0x96D808A323d9eB1De23F7d82F83574e6969c5591',
  }
}

const multicall = {
  170: '0xbE8D16084841875a1f398E6C3eC00bBfcbFa571b',
  70: '0x03fF6895aB1Fdff998665E34368B69a032F50578',
}
const chainId = 70

interface AddressProps {
  70: string // Address of the contract
}
export const getAddress = (obj: AddressProps) => {
  return obj[chainId] ? obj[chainId] : obj
}

export const getMulticallAddress = () => {
  return multicall[chainId]
}

export const getPipiAddress = () => {
  return getAddress(contractAddresses.sushi)
}

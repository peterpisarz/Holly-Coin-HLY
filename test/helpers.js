export const ETHER_ADDRESS = '0x0000000000000000000000000000000000000000'

export const EVM_Revert = 'VM Exception while processing transaction: revert'

export const ether = (n) => {
	return new web3.utils.BN(
	web3.utils.toWei(n.toString(), 'ether')
	)
}


export const tokens = (n) => ether(n)

export const formatBalance = (balance) => {
	const precision = 100
	balance = ether(balance)
	balance = Math.round(balance * precision) / precision // Use 2 decimal places
	return balance
}

const contractAddress = "0xb35c16c1ecde7d595f6abacd0038c03ac9b96330";

const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "drink",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "transactionnumber",
				"type": "uint256"
			}
		],
		"name": "drinkordered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "drink",
				"type": "string"
			}
		],
		"name": "makedrink",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "transfertoowner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "balance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "transactionnumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contractAddress = "0x6e78fef1ca3a2002ce1dd4c7e8a320053d17c2a4";

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

export const abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_factory",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_WETH",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "WETH",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenA",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "tokenB",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountADesired",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountBDesired",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountAMin",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountBMin",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "addLiquidity",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountA",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountB",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "liquidity",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountTokenDesired",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountTokenMin",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountETHMin",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "addLiquidityETH",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountToken",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountETH",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "liquidity",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "factory",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "reserveIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "reserveOut",
        "type": "uint256"
      }
    ],
    "name": "getAmountIn",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "reserveIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "reserveOut",
        "type": "uint256"
      }
    ],
    "name": "getAmountOut",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      }
    ],
    "name": "getAmountsIn",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      }
    ],
    "name": "getAmountsOut",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountA",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "reserveA",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "reserveB",
        "type": "uint256"
      }
    ],
    "name": "quote",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountB",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenA",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "tokenB",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "liquidity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountAMin",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountBMin",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "removeLiquidity",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountA",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountB",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "liquidity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountTokenMin",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountETHMin",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "removeLiquidityETH",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountToken",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountETH",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "liquidity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountTokenMin",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountETHMin",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountETH",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "liquidity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountTokenMin",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountETHMin",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "approveMax",
        "type": "bool"
      },
      {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
      },
      {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
      }
    ],
    "name": "removeLiquidityETHWithPermit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountToken",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountETH",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "liquidity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountTokenMin",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountETHMin",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "approveMax",
        "type": "bool"
      },
      {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
      },
      {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
      }
    ],
    "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountETH",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenA",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "tokenB",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "liquidity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountAMin",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountBMin",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "approveMax",
        "type": "bool"
      },
      {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
      },
      {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
      }
    ],
    "name": "removeLiquidityWithPermit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountA",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountB",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "swapETHForExactTokens",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "swapExactETHForTokens",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "swapExactTokensForETH",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "swapExactTokensForTokens",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountInMax",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "swapTokensForExactETH",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountInMax",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "swapTokensForExactTokens",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
] as const;

export const bytecode = "0x60c06040523480156200001157600080fd5b5060405162006b1038038062006b10833981810160405260408110156200003757600080fd5b8101908080519060200190929190805190602001909291905050508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b81525050505060805160601c60a05160601c6169076200020960003980610156528061157452806115b252806116e252806119c05280611f34528061220f528061230552806128a55280612a925280612bc55280612cdd5280612ea55280612f3a528061338e52806134455280613538528061364f528061373e52806137bf5280613fb6528061435452806143ad52806143e1528061446252806146a2528061486752806148fc5250806117d452806118e05280611a935280611acb5280611cc45280611dd05280612026528061212f52806122e3528061251f52806129c55280612dca5280612f79528061319a52806132a352806137fe5280613c315280613f335280613f5c5280613f9452806141c6528061438b528061478f528061493b528061553a528061557e52806158f35280615b5a528061614b5280616273528061638952506169076000f3fe60806040526004361061014f5760003560e01c80638803dbee116100b6578063c45a01551161006f578063c45a015514611001578063d06ca61f14611058578063ded9382a1461117c578063e8e337001461125e578063f305d71914611344578063fb3bdb41146113f2576101ab565b80638803dbee14610c00578063ad5c464814610d19578063ad615dec14610d70578063af2979eb14610dd3578063b6f9de9514610e80578063baa2abde14610f2d576101ab565b80634a25d94a116101085780634a25d94a1461071f5780635b0d5984146108385780635c11d79514610913578063791ac947146109d75780637ff36ab514610a9b57806385f8c25914610b9d576101ab565b806302751cec146101b0578063054d50d41461026457806318cbafe5146102c75780631f00ca74146103e05780632195995c1461050457806338ed173914610606576101ab565b366101ab577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101a957fe5b005b600080fd5b3480156101bc57600080fd5b50610247600480360360c08110156101d357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506114f4565b604051808381526020018281526020019250505060405180910390f35b34801561027057600080fd5b506102b16004803603606081101561028757600080fd5b81019080803590602001909291908035906020019092919080359060200190929190505050611651565b6040518082815260200191505060405180910390f35b3480156102d357600080fd5b50610389600480360360a08110156102ea57600080fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561031b57600080fd5b82018360208201111561032d57600080fd5b8035906020019184602083028401116401000000008311171561034f57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611667565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156103cc5780820151818401526020810190506103b1565b505050509050019250505060405180910390f35b3480156103ec57600080fd5b506104ad6004803603604081101561040357600080fd5b81019080803590602001909291908035906020019064010000000081111561042a57600080fd5b82018360208201111561043c57600080fd5b8035906020019184602083028401116401000000008311171561045e57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050611a8c565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156104f05780820151818401526020810190506104d5565b505050509050019250505060405180910390f35b34801561051057600080fd5b506105e9600480360361016081101561052857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803515159060200190929190803560ff1690602001909291908035906020019092919080359060200190929190505050611ac1565b604051808381526020018281526020019250505060405180910390f35b34801561061257600080fd5b506106c8600480360360a081101561062957600080fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561065a57600080fd5b82018360208201111561066c57600080fd5b8035906020019184602083028401116401000000008311171561068e57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611c46565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561070b5780820151818401526020810190506106f0565b505050509050019250505060405180910390f35b34801561072b57600080fd5b506107e1600480360360a081101561074257600080fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561077357600080fd5b82018360208201111561078557600080fd5b803590602001918460208302840111640100000000831117156107a757600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611eb9565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610824578082015181840152602081019050610809565b505050509050019250505060405180910390f35b34801561084457600080fd5b506108fd600480360361014081101561085c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803515159060200190929190803560ff16906020019092919080359060200190929190803590602001909291905050506122db565b6040518082815260200191505060405180910390f35b34801561091f57600080fd5b506109d5600480360360a081101561093657600080fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561096757600080fd5b82018360208201111561097957600080fd5b8035906020019184602083028401116401000000008311171561099b57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050612475565b005b3480156109e357600080fd5b50610a99600480360360a08110156109fa57600080fd5b81019080803590602001909291908035906020019092919080359060200190640100000000811115610a2b57600080fd5b820183602082011115610a3d57600080fd5b80359060200191846020830284011164010000000083111715610a5f57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061282c565b005b610b4660048036036080811015610ab157600080fd5b810190808035906020019092919080359060200190640100000000811115610ad857600080fd5b820183602082011115610aea57600080fd5b80359060200191846020830284011164010000000083111715610b0c57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050612c62565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610b89578082015181840152602081019050610b6e565b505050509050019250505060405180910390f35b348015610ba957600080fd5b50610bea60048036036060811015610bc057600080fd5b81019080803590602001909291908035906020019092919080359060200190929190505050613106565b6040518082815260200191505060405180910390f35b348015610c0c57600080fd5b50610cc2600480360360a0811015610c2357600080fd5b81019080803590602001909291908035906020019092919080359060200190640100000000811115610c5457600080fd5b820183602082011115610c6657600080fd5b80359060200191846020830284011164010000000083111715610c8857600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061311c565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610d05578082015181840152602081019050610cea565b505050509050019250505060405180910390f35b348015610d2557600080fd5b50610d2e61338c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b348015610d7c57600080fd5b50610dbd60048036036060811015610d9357600080fd5b810190808035906020019092919080359060200190929190803590602001909291905050506133b0565b6040518082815260200191505060405180910390f35b348015610ddf57600080fd5b50610e6a600480360360c0811015610df657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506133c6565b6040518082815260200191505060405180910390f35b610f2b60048036036080811015610e9657600080fd5b810190808035906020019092919080359060200190640100000000811115610ebd57600080fd5b820183602082011115610ecf57600080fd5b80359060200191846020830284011164010000000083111715610ef157600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506135d6565b005b348015610f3957600080fd5b50610fe4600480360360e0811015610f5057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050613bb0565b604051808381526020018281526020019250505060405180910390f35b34801561100d57600080fd5b50611016613f31565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561106457600080fd5b506111256004803603604081101561107b57600080fd5b8101908080359060200190929190803590602001906401000000008111156110a257600080fd5b8201836020820111156110b457600080fd5b803590602001918460208302840111640100000000831117156110d657600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050613f55565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561116857808201518184015260208101905061114d565b505050509050019250505060405180910390f35b34801561118857600080fd5b5061124160048036036101408110156111a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803515159060200190929190803560ff1690602001909291908035906020019092919080359060200190929190505050613f8a565b604051808381526020018281526020019250505060405180910390f35b34801561126a57600080fd5b50611320600480360361010081101561128257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061412d565b60405180848152602001838152602001828152602001935050505060405180910390f35b6113ce600480360360c081101561135a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506142d2565b60405180848152602001838152602001828152602001935050505060405180910390f35b61149d6004803603608081101561140857600080fd5b81019080803590602001909291908035906020019064010000000081111561142f57600080fd5b82018360208201111561144157600080fd5b8035906020019184602083028401116401000000008311171561146357600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050614627565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156114e05780820151818401526020810190506114c5565b505050509050019250505060405180910390f35b600080824281101561156e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b61159d897f00000000000000000000000000000000000000000000000000000000000000008a8a8a308a613bb0565b80935081945050506115b0898685614b05565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561162357600080fd5b505af1158015611637573d6000803e3d6000fd5b505050506116458583614cfe565b50965096945050505050565b600061165e848484614e5d565b90509392505050565b606081428110156116e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1686866001898990500381811061172957fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146117cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f556e69737761705632526f757465723a20494e56414c49445f5041544800000081525060200191505060405180910390fd5b61183b7f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050614f8d565b9150868260018451038151811061184e57fe5b602002602001015110156118ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180616858602b913960400191505060405180910390fd5b611972868660008181106118bd57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16336119587f00000000000000000000000000000000000000000000000000000000000000008a8a600081811061190c57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168b8b600181811061193657fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16615105565b8560008151811061196557fe5b6020026020010151615260565b6119be82878780806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505030615471565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d83600185510381518110611a0a57fe5b60200260200101516040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015611a4857600080fd5b505af1158015611a5c573d6000803e3d6000fd5b50505050611a818483600185510381518110611a7457fe5b6020026020010151614cfe565b509695505050505050565b6060611ab97f0000000000000000000000000000000000000000000000000000000000000000848461571c565b905092915050565b6000806000611af17f00000000000000000000000000000000000000000000000000000000000000008f8f615105565b9050600087611b00578c611b22565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b90508173ffffffffffffffffffffffffffffffffffffffff1663d505accf3330848d8c8c8c6040518863ffffffff1660e01b8152600401808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018460ff1660ff168152602001838152602001828152602001975050505050505050600060405180830381600087803b158015611c0557600080fd5b505af1158015611c19573d6000803e3d6000fd5b50505050611c2c8f8f8f8f8f8f8f613bb0565b809450819550505050509b509b9950505050505050505050565b60608142811015611cbf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b611d2b7f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050614f8d565b91508682600184510381518110611d3e57fe5b60200260200101511015611d9d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180616858602b913960400191505060405180910390fd5b611e6286866000818110611dad57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1633611e487f00000000000000000000000000000000000000000000000000000000000000008a8a6000818110611dfc57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168b8b6001818110611e2657fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16615105565b85600081518110611e5557fe5b6020026020010151615260565b611eae82878780806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505086615471565b509695505050505050565b60608142811015611f32576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16868660018989905003818110611f7b57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612021576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f556e69737761705632526f757465723a20494e56414c49445f5041544800000081525060200191505060405180910390fd5b61208d7f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505061571c565b9150868260008151811061209d57fe5b602002602001015111156120fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806167e86027913960400191505060405180910390fd5b6121c18686600081811061210c57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16336121a77f00000000000000000000000000000000000000000000000000000000000000008a8a600081811061215b57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168b8b600181811061218557fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16615105565b856000815181106121b457fe5b6020026020010151615260565b61220d82878780806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505030615471565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d8360018551038151811061225957fe5b60200260200101516040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561229757600080fd5b505af11580156122ab573d6000803e3d6000fd5b505050506122d084836001855103815181106122c357fe5b6020026020010151614cfe565b509695505050505050565b6000806123297f00000000000000000000000000000000000000000000000000000000000000008d7f0000000000000000000000000000000000000000000000000000000000000000615105565b9050600086612338578b61235a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b90508173ffffffffffffffffffffffffffffffffffffffff1663d505accf3330848c8b8b8b6040518863ffffffff1660e01b8152600401808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018460ff1660ff168152602001838152602001828152602001975050505050505050600060405180830381600087803b15801561243d57600080fd5b505af1158015612451573d6000803e3d6000fd5b505050506124638d8d8d8d8d8d6133c6565b925050509a9950505050505050505050565b80428110156124ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b61259d858560008181106124fc57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16336125977f00000000000000000000000000000000000000000000000000000000000000008989600081811061254b57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a600181811061257557fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16615105565b8a615260565b60008585600188889050038181106125b157fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561264a57600080fd5b505afa15801561265e573d6000803e3d6000fd5b505050506040513d602081101561267457600080fd5b810190808051906020019092919050505090506126d2868680806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050508561589c565b866127cb82888860018b8b9050038181106126e957fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561278257600080fd5b505afa158015612796573d6000803e3d6000fd5b505050506040513d60208110156127ac57600080fd5b8101908080519060200190929190505050615d1390919063ffffffff16565b1015612822576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180616858602b913960400191505060405180910390fd5b5050505050505050565b80428110156128a3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168585600188889050038181106128ec57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612992576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f556e69737761705632526f757465723a20494e56414c49445f5041544800000081525060200191505060405180910390fd5b612a43858560008181106129a257fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1633612a3d7f0000000000000000000000000000000000000000000000000000000000000000898960008181106129f157fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a6001818110612a1b57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16615105565b8a615260565b612a8e858580806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050503061589c565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015612b2d57600080fd5b505afa158015612b41573d6000803e3d6000fd5b505050506040513d6020811015612b5757600080fd5b8101908080519060200190929190505050905086811015612bc3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180616858602b913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015612c3657600080fd5b505af1158015612c4a573d6000803e3d6000fd5b50505050612c588482614cfe565b5050505050505050565b60608142811015612cdb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1686866000818110612d1f57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612dc5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f556e69737761705632526f757465723a20494e56414c49445f5041544800000081525060200191505060405180910390fd5b612e317f000000000000000000000000000000000000000000000000000000000000000034888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050614f8d565b91508682600184510381518110612e4457fe5b60200260200101511015612ea3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180616858602b913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db083600081518110612eec57fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b158015612f1f57600080fd5b505af1158015612f33573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb612ff17f000000000000000000000000000000000000000000000000000000000000000089896000818110612fa557fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a6001818110612fcf57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16615105565b84600081518110612ffe57fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561306f57600080fd5b505af1158015613083573d6000803e3d6000fd5b505050506040513d602081101561309957600080fd5b81019080805190602001909291905050506130b057fe5b6130fc82878780806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505086615471565b5095945050505050565b6000613113848484615d96565b90509392505050565b60608142811015613195576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b6132017f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505061571c565b9150868260008151811061321157fe5b60200260200101511115613270576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806167e86027913960400191505060405180910390fd5b6133358686600081811061328057fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff163361331b7f00000000000000000000000000000000000000000000000000000000000000008a8a60008181106132cf57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168b8b60018181106132f957fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16615105565b8560008151811061332857fe5b6020026020010151615260565b61338182878780806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505086615471565b509695505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006133bd848484615ed3565b90509392505050565b6000814281101561343f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b61346e887f00000000000000000000000000000000000000000000000000000000000000008989893089613bb0565b90508092505061353688858a73ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156134f657600080fd5b505afa15801561350a573d6000803e3d6000fd5b505050506040513d602081101561352057600080fd5b8101908080519060200190929190505050614b05565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156135a957600080fd5b505af11580156135bd573d6000803e3d6000fd5b505050506135cb8483614cfe565b509695505050505050565b804281101561364d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168585600081811061369157fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614613737576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f556e69737761705632526f757465723a20494e56414c49445f5041544800000081525060200191505060405180910390fd5b60003490507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156137a457600080fd5b505af11580156137b8573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6138767f00000000000000000000000000000000000000000000000000000000000000008989600081811061382a57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a600181811061385457fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16615105565b836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156138e057600080fd5b505af11580156138f4573d6000803e3d6000fd5b505050506040513d602081101561390a57600080fd5b810190808051906020019092919050505061392157fe5b600086866001898990500381811061393557fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231866040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156139ce57600080fd5b505afa1580156139e2573d6000803e3d6000fd5b505050506040513d60208110156139f857600080fd5b81019080805190602001909291905050509050613a56878780806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050508661589c565b87613b4f82898960018c8c905003818110613a6d57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231896040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015613b0657600080fd5b505afa158015613b1a573d6000803e3d6000fd5b505050506040513d6020811015613b3057600080fd5b8101908080519060200190929190505050615d1390919063ffffffff16565b1015613ba6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180616858602b913960400191505060405180910390fd5b5050505050505050565b6000808242811015613c2a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b6000613c577f00000000000000000000000000000000000000000000000000000000000000008c8c615105565b90508073ffffffffffffffffffffffffffffffffffffffff166323b872dd33838c6040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015613d1457600080fd5b505af1158015613d28573d6000803e3d6000fd5b505050506040513d6020811015613d3e57600080fd5b8101908080519060200190929190505050506000808273ffffffffffffffffffffffffffffffffffffffff166389afcb44896040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019150506040805180830381600087803b158015613dd157600080fd5b505af1158015613de5573d6000803e3d6000fd5b505050506040513d6040811015613dfb57600080fd5b810190808051906020019092919080519060200190929190505050915091506000613e268e8e615fb7565b5090508073ffffffffffffffffffffffffffffffffffffffff168e73ffffffffffffffffffffffffffffffffffffffff1614613e63578183613e66565b82825b80975081985050508a871015613ec7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061680f6026913960400191505060405180910390fd5b89861015613f20576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806167756026913960400191505060405180910390fd5b505050505097509795505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6060613f827f00000000000000000000000000000000000000000000000000000000000000008484614f8d565b905092915050565b6000806000613fda7f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000615105565b9050600087613fe9578c61400b565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b90508173ffffffffffffffffffffffffffffffffffffffff1663d505accf3330848d8c8c8c6040518863ffffffff1660e01b8152600401808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018460ff1660ff168152602001838152602001828152602001975050505050505050600060405180830381600087803b1580156140ee57600080fd5b505af1158015614102573d6000803e3d6000fd5b505050506141148e8e8e8e8e8e6114f4565b809450819550505050509a509a98505050505050505050565b600080600083428110156141a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b6141b78c8c8c8c8c8c61612e565b809450819550505060006141ec7f00000000000000000000000000000000000000000000000000000000000000008e8e615105565b90506141fa8d338388615260565b6142068c338387615260565b8073ffffffffffffffffffffffffffffffffffffffff16636a627842886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561428557600080fd5b505af1158015614299573d6000803e3d6000fd5b505050506040513d60208110156142af57600080fd5b810190808051906020019092919050505092505050985098509895505050505050565b6000806000834281101561434e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b61437c8a7f00000000000000000000000000000000000000000000000000000000000000008b348c8c61612e565b809450819550505060006143d17f00000000000000000000000000000000000000000000000000000000000000008c7f0000000000000000000000000000000000000000000000000000000000000000615105565b90506143df8b338388615260565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b15801561444757600080fd5b505af115801561445b573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82866040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561450757600080fd5b505af115801561451b573d6000803e3d6000fd5b505050506040513d602081101561453157600080fd5b810190808051906020019092919050505061454857fe5b8073ffffffffffffffffffffffffffffffffffffffff16636a627842886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156145c757600080fd5b505af11580156145db573d6000803e3d6000fd5b505050506040513d60208110156145f157600080fd5b81019080805190602001909291905050509250833411156146195761461833853403614cfe565b5b505096509650969350505050565b606081428110156146a0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16868660008181106146e457fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461478a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f556e69737761705632526f757465723a20494e56414c49445f5041544800000081525060200191505060405180910390fd5b6147f67f000000000000000000000000000000000000000000000000000000000000000088888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505061571c565b9150348260008151811061480657fe5b60200260200101511115614865576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806167e86027913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0836000815181106148ae57fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b1580156148e157600080fd5b505af11580156148f5573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6149b37f00000000000000000000000000000000000000000000000000000000000000008989600081811061496757fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a600181811061499157fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16615105565b846000815181106149c057fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015614a3157600080fd5b505af1158015614a45573d6000803e3d6000fd5b505050506040513d6020811015614a5b57600080fd5b8101908080519060200190929190505050614a7257fe5b614abe82878780806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505086615471565b81600081518110614acb57fe5b6020026020010151341115614afb57614afa3383600081518110614aeb57fe5b60200260200101513403614cfe565b5b5095945050505050565b600060608473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8585604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506040516020818303038152906040529060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310614bde5780518252602082019150602081019050602083039250614bbb565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114614c40576040519150601f19603f3d011682016040523d82523d6000602084013e614c45565b606091505b5091509150818015614c855750600081511480614c845750808060200190516020811015614c7257600080fd5b81019080805190602001909291905050505b5b614cf7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5472616e7366657248656c7065723a205452414e534645525f4641494c45440081525060200191505060405180910390fd5b5050505050565b60008273ffffffffffffffffffffffffffffffffffffffff1682600067ffffffffffffffff81118015614d3057600080fd5b506040519080825280601f01601f191660200182016040528015614d635781602001600182028036833780820191505090505b506040518082805190602001908083835b60208310614d975780518252602082019150602081019050602083039250614d74565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114614df9576040519150601f19603f3d011682016040523d82523d6000602084013e614dfe565b606091505b5050905080614e58576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806168356023913960400191505060405180910390fd5b505050565b6000808411614eb7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806168a7602b913960400191505060405180910390fd5b600083118015614ec75750600082115b614f1c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018061679b6028913960400191505060405180910390fd5b6000614f336103e5866164e290919063ffffffff16565b90506000614f4a84836164e290919063ffffffff16565b90506000614f7583614f676103e8896164e290919063ffffffff16565b61657790919063ffffffff16565b9050808281614f8057fe5b0493505050509392505050565b6060600282511015615007576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f556e697377617056324c6962726172793a20494e56414c49445f50415448000081525060200191505060405180910390fd5b815167ffffffffffffffff8111801561501f57600080fd5b5060405190808252806020026020018201604052801561504e5781602001602082028036833780820191505090505b509050828160008151811061505f57fe5b60200260200101818152505060005b60018351038110156150fd576000806150b18786858151811061508d57fe5b60200260200101518760018701815181106150a457fe5b60200260200101516165fa565b915091506150d38484815181106150c457fe5b60200260200101518383614e5d565b8460018501815181106150e257fe5b6020026020010181815250505050808060010191505061506e565b509392505050565b60008060006151148585615fb7565b91509150858282604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b8152601401925050506040516020818303038152906040528051906020012060405160200180807fff000000000000000000000000000000000000000000000000000000000000008152506001018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b8152601401828152602001807feea741bcd1f1df3a695ca414b9e629c1a3e5297e654776ad3bc28e3d8bdb2b59815250602001925050506040516020818303038152906040528051906020012060001c925050509392505050565b600060608573ffffffffffffffffffffffffffffffffffffffff166323b872dd868686604051602401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200193505050506040516020818303038152906040529060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b6020831061536d578051825260208201915060208101905060208303925061534a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146153cf576040519150601f19603f3d011682016040523d82523d6000602084013e6153d4565b606091505b50915091508180156154145750600081511480615413575080806020019051602081101561540157600080fd5b81019080805190602001909291905050505b5b615469576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806168836024913960400191505060405180910390fd5b505050505050565b60005b60018351038110156157165760008084838151811061548f57fe5b60200260200101518560018501815181106154a657fe5b60200260200101519150915060006154be8383615fb7565b50905060008760018601815181106154d257fe5b602002602001015190506000808373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461551a5782600061551e565b6000835b91509150600060028a510388106155355788615577565b6155767f0000000000000000000000000000000000000000000000000000000000000000878c60028c018151811061556957fe5b6020026020010151615105565b5b90506155a47f00000000000000000000000000000000000000000000000000000000000000008888615105565b73ffffffffffffffffffffffffffffffffffffffff1663022c0d9f848484600067ffffffffffffffff811180156155da57600080fd5b506040519080825280601f01601f19166020018201604052801561560d5781602001600182028036833780820191505090505b506040518563ffffffff1660e01b8152600401808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561569b578082015181840152602081019050615680565b50505050905090810190601f1680156156c85780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b1580156156ea57600080fd5b505af11580156156fe573d6000803e3d6000fd5b50505050505050505050508080600101915050615474565b50505050565b6060600282511015615796576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f556e697377617056324c6962726172793a20494e56414c49445f50415448000081525060200191505060405180910390fd5b815167ffffffffffffffff811180156157ae57600080fd5b506040519080825280602002602001820160405280156157dd5781602001602082028036833780820191505090505b50905082816001835103815181106157f157fe5b6020026020010181815250506000600183510390505b6000811115615894576000806158478786600186038151811061582657fe5b602002602001015187868151811061583a57fe5b60200260200101516165fa565b9150915061586984848151811061585a57fe5b60200260200101518383615d96565b84600185038151811061587857fe5b6020026020010181815250505050808060019003915050615807565b509392505050565b60005b6001835103811015615d0e576000808483815181106158ba57fe5b60200260200101518560018501815181106158d157fe5b60200260200101519150915060006158e98383615fb7565b50905060006159197f00000000000000000000000000000000000000000000000000000000000000008585615105565b90506000806000808473ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561596757600080fd5b505afa15801561597b573d6000803e3d6000fd5b505050506040513d606081101561599157600080fd5b81019080805190602001909291908051906020019092919080519060200190929190505050506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff1691506000808773ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff1614615a18578284615a1b565b83835b91509150615ae9828b73ffffffffffffffffffffffffffffffffffffffff166370a082318a6040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015615aa057600080fd5b505afa158015615ab4573d6000803e3d6000fd5b505050506040513d6020811015615aca57600080fd5b8101908080519060200190929190505050615d1390919063ffffffff16565b9550615af6868383614e5d565b9450505050506000808573ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1614615b3a57826000615b3e565b6000835b91509150600060028c51038a10615b55578a615b97565b615b967f0000000000000000000000000000000000000000000000000000000000000000898e60028e0181518110615b8957fe5b6020026020010151615105565b5b90508573ffffffffffffffffffffffffffffffffffffffff1663022c0d9f848484600067ffffffffffffffff81118015615bd057600080fd5b506040519080825280601f01601f191660200182016040528015615c035781602001600182028036833780820191505090505b506040518563ffffffff1660e01b8152600401808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015615c91578082015181840152602081019050615c76565b50505050905090810190601f168015615cbe5780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015615ce057600080fd5b505af1158015615cf4573d6000803e3d6000fd5b50505050505050505050505050808060010191505061589f565b505050565b6000828284039150811115615d90576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f64732d6d6174682d7375622d756e646572666c6f77000000000000000000000081525060200191505060405180910390fd5b92915050565b6000808411615df0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180616724602c913960400191505060405180910390fd5b600083118015615e005750600082115b615e55576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018061679b6028913960400191505060405180910390fd5b6000615e7e6103e8615e7087876164e290919063ffffffff16565b6164e290919063ffffffff16565b90506000615ea96103e5615e9b8887615d1390919063ffffffff16565b6164e290919063ffffffff16565b9050615ec86001828481615eb957fe5b0461657790919063ffffffff16565b925050509392505050565b6000808411615f2d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806167c36025913960400191505060405180910390fd5b600083118015615f3d5750600082115b615f92576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018061679b6028913960400191505060405180910390fd5b82615fa683866164e290919063ffffffff16565b81615fad57fe5b0490509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561603f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806167506025913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161061607957828461607c565b83835b8092508193505050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415616127576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f556e697377617056324c6962726172793a205a45524f5f41444452455353000081525060200191505060405180910390fd5b9250929050565b600080600073ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e6a439058a8a6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b15801561621a57600080fd5b505afa15801561622e573d6000803e3d6000fd5b505050506040513d602081101561624457600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff161415616381577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c9c6539689896040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b15801561634457600080fd5b505af1158015616358573d6000803e3d6000fd5b505050506040513d602081101561636e57600080fd5b8101908080519060200190929190505050505b6000806163af7f00000000000000000000000000000000000000000000000000000000000000008b8b6165fa565b915091506000821480156163c35750600081145b156163d757878780945081955050506164d5565b60006163e4898484615ed3565b90508781116164555785811015616446576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806167756026913960400191505060405180910390fd5b888180955081965050506164d3565b6000616462898486615ed3565b90508981111561646e57fe5b878110156164c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061680f6026913960400191505060405180910390fd5b80898096508197505050505b505b5050965096945050505050565b6000808214806164ff57508282838502925082816164fc57fe5b04145b616571576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f64732d6d6174682d6d756c2d6f766572666c6f7700000000000000000000000081525060200191505060405180910390fd5b92915050565b60008282840191508110156165f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f64732d6d6174682d6164642d6f766572666c6f7700000000000000000000000081525060200191505060405180910390fd5b92915050565b60008060006166098585615fb7565b50905060008061661a888888615105565b73ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561665f57600080fd5b505afa158015616673573d6000803e3d6000fd5b505050506040513d606081101561668957600080fd5b81019080805190602001909291908051906020019092919080519060200190929190505050506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff1691508273ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161461670d578082616710565b81815b809550819650505050505093509391505056fe556e697377617056324c6962726172793a20494e53554646494349454e545f4f55545055545f414d4f554e54556e697377617056324c6962726172793a204944454e544943414c5f414444524553534553556e69737761705632526f757465723a20494e53554646494349454e545f425f414d4f554e54556e697377617056324c6962726172793a20494e53554646494349454e545f4c4951554944495459556e697377617056324c6962726172793a20494e53554646494349454e545f414d4f554e54556e69737761705632526f757465723a204558434553534956455f494e5055545f414d4f554e54556e69737761705632526f757465723a20494e53554646494349454e545f415f414d4f554e545472616e7366657248656c7065723a204554485f5452414e534645525f4641494c4544556e69737761705632526f757465723a20494e53554646494349454e545f4f55545055545f414d4f554e545472616e7366657248656c7065723a205452414e534645525f46524f4d5f4641494c4544556e697377617056324c6962726172793a20494e53554646494349454e545f494e5055545f414d4f554e54a26469706673582212203bae980df4d2dded85940c547024f6ed0669e3b8cc8d9a8578ac718573cd075a64736f6c63430006060033" as const;
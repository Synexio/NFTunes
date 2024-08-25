/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  SoundToken,
  SoundTokenInterface,
} from "../../contracts/SoundToken";

const _abi = [
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "ERC1967InvalidImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "UUPSUnauthorizedCallContext",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "UUPSUnsupportedProxiableUUID",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "staffContractAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b50608051612df761006d600039600081816115e00152818161163501526118130152612df76000f3fe6080604052600436106101815760003560e01c806352d1902d116100d1578063996cba681161008a578063a9059cbb11610064578063a9059cbb14610585578063ad3cb1cc146105c2578063d547741f146105ed578063dd62ed3e1461061657610181565b8063996cba68146105085780639dc29fac14610531578063a217fddf1461055a57610181565b806352d1902d146103e457806370a082311461040f57806375b238fc1461044c57806379cc67901461047757806391d14854146104a057806395d89b41146104dd57610181565b80632f2ff15d1161013e57806340c10f191161011857806340c10f191461034d57806342966c6814610376578063485cc9551461039f5780634f1ef286146103c857610181565b80632f2ff15d146102d0578063313ce567146102f957806336568abe1461032457610181565b806301ffc9a71461018657806306fdde03146101c3578063095ea7b3146101ee57806318160ddd1461022b57806323b872dd14610256578063248a9ca314610293575b600080fd5b34801561019257600080fd5b506101ad60048036038101906101a8919061214d565b610653565b6040516101ba9190612195565b60405180910390f35b3480156101cf57600080fd5b506101d86106cd565b6040516101e59190612240565b60405180910390f35b3480156101fa57600080fd5b50610215600480360381019061021091906122f6565b61076e565b6040516102229190612195565b60405180910390f35b34801561023757600080fd5b50610240610791565b60405161024d9190612345565b60405180910390f35b34801561026257600080fd5b5061027d60048036038101906102789190612360565b6107a9565b60405161028a9190612195565b60405180910390f35b34801561029f57600080fd5b506102ba60048036038101906102b591906123e9565b6107d8565b6040516102c79190612425565b60405180910390f35b3480156102dc57600080fd5b506102f760048036038101906102f29190612440565b610806565b005b34801561030557600080fd5b5061030e610828565b60405161031b919061249c565b60405180910390f35b34801561033057600080fd5b5061034b60048036038101906103469190612440565b610831565b005b34801561035957600080fd5b50610374600480360381019061036f91906122f6565b6108ac565b005b34801561038257600080fd5b5061039d600480360381019061039891906124b7565b6108e5565b005b3480156103ab57600080fd5b506103c660048036038101906103c191906124e4565b6108f9565b005b6103e260048036038101906103dd9190612659565b610b77565b005b3480156103f057600080fd5b506103f9610b96565b6040516104069190612425565b60405180910390f35b34801561041b57600080fd5b50610436600480360381019061043191906126b5565b610bc9565b6040516104439190612345565b60405180910390f35b34801561045857600080fd5b50610461610c20565b60405161046e9190612425565b60405180910390f35b34801561048357600080fd5b5061049e600480360381019061049991906122f6565b610c44565b005b3480156104ac57600080fd5b506104c760048036038101906104c29190612440565b610c64565b6040516104d49190612195565b60405180910390f35b3480156104e957600080fd5b506104f2610cdd565b6040516104ff9190612240565b60405180910390f35b34801561051457600080fd5b5061052f600480360381019061052a9190612360565b610d7e565b005b34801561053d57600080fd5b50610558600480360381019061055391906122f6565b610eb8565b005b34801561056657600080fd5b5061056f610ef1565b60405161057c9190612425565b60405180910390f35b34801561059157600080fd5b506105ac60048036038101906105a791906122f6565b610ef8565b6040516105b99190612195565b60405180910390f35b3480156105ce57600080fd5b506105d7610f1b565b6040516105e49190612240565b60405180910390f35b3480156105f957600080fd5b50610614600480360381019061060f9190612440565b610f54565b005b34801561062257600080fd5b5061063d600480360381019061063891906124e4565b610f76565b60405161064a9190612345565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806106c657506106c58261100b565b5b9050919050565b606060006106d9611075565b90508060030180546106ea90612711565b80601f016020809104026020016040519081016040528092919081815260200182805461071690612711565b80156107635780601f1061073857610100808354040283529160200191610763565b820191906000526020600020905b81548152906001019060200180831161074657829003601f168201915b505050505091505090565b60008061077961109d565b90506107868185856110a5565b600191505092915050565b60008061079c611075565b9050806002015491505090565b6000806107b461109d565b90506107c18582856110b7565b6107cc85858561114b565b60019150509392505050565b6000806107e361123f565b905080600001600084815260200190815260200160002060010154915050919050565b61080f826107d8565b61081881611267565b610822838361127b565b50505050565b60006012905090565b61083961109d565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461089d576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108a7828261137c565b505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217756108d681611267565b6108e0838361147e565b505050565b6108f66108f061109d565b82611500565b50565b6000610903611582565b905060008160000160089054906101000a900460ff1615905060008260000160009054906101000a900467ffffffffffffffff1690506000808267ffffffffffffffff161480156109515750825b9050600060018367ffffffffffffffff16148015610986575060003073ffffffffffffffffffffffffffffffffffffffff163b145b905081158015610994575080155b156109cb576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018560000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055508315610a1b5760018560000160086101000a81548160ff0219169083151502179055505b610a8f6040518060400160405280600581526020017f534f554e440000000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f534e4400000000000000000000000000000000000000000000000000000000008152506115aa565b610a976115c0565b610a9f6115ca565b610aa76115d4565b610ad17fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217758861127b565b50856000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508315610b6e5760008560000160086101000a81548160ff0219169083151502179055507fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d26001604051610b65919061279b565b60405180910390a15b50505050505050565b610b7f6115de565b610b88826116c4565b610b9282826116f2565b5050565b6000610ba0611811565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b600080610bd4611075565b90508060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915050919050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b610c5682610c5061109d565b836110b7565b610c608282611500565b5050565b600080610c6f61123f565b905080600001600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b60606000610ce9611075565b9050806004018054610cfa90612711565b80601f0160208091040260200160405190810160405280929190818152602001828054610d2690612711565b8015610d735780601f10610d4857610100808354040283529160200191610d73565b820191906000526020600020905b815481529060010190602001808311610d5657829003601f168201915b505050505091505090565b604051602001610d8d9061280d565b6040516020818303038152906040528051906020012060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cb510e97336040518263ffffffff1660e01b8152600401610dfc9190612831565b600060405180830381865afa158015610e19573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610e4291906128ed565b604051602001610e529190612967565b6040516020818303038152906040528051906020012014610ea8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9f906129ca565b60405180910390fd5b610eb383838361114b565b505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775610ee281611267565b610eec8383611500565b505050565b6000801b81565b600080610f0361109d565b9050610f1081858561114b565b600191505092915050565b6040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b610f5d826107d8565b610f6681611267565b610f70838361137c565b50505050565b600080610f81611075565b90508060010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205491505092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60007f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00905090565b600033905090565b6110b28383836001611898565b505050565b60006110c38484610f76565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146111455781811015611135578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161112c939291906129ea565b60405180910390fd5b61114484848484036000611898565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036111bd5760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016111b49190612831565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361122f5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016112269190612831565b60405180910390fd5b61123a838383611a7e565b505050565b60007f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800905090565b6112788161127361109d565b611cbd565b50565b60008061128661123f565b90506112928484610c64565b61137057600181600001600086815260200190815260200160002060000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061130c61109d565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001915050611376565b60009150505b92915050565b60008061138761123f565b90506113938484610c64565b1561147257600081600001600086815260200190815260200160002060000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061140e61109d565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a46001915050611478565b60009150505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036114f05760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016114e79190612831565b60405180910390fd5b6114fc60008383611a7e565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036115725760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016115699190612831565b60405180910390fd5b61157e82600083611a7e565b5050565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b6115b2611d0e565b6115bc8282611d4e565b5050565b6115c8611d0e565b565b6115d2611d0e565b565b6115dc611d0e565b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148061168b57507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16611672611d8b565b73ffffffffffffffffffffffffffffffffffffffff1614155b156116c2576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217756116ee81611267565b5050565b8173ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561175a57506040513d601f19601f820116820180604052508101906117579190612a36565b60015b61179b57816040517f4c9c8ce30000000000000000000000000000000000000000000000000000000081526004016117929190612831565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b811461180257806040517faa1d49a40000000000000000000000000000000000000000000000000000000081526004016117f99190612425565b60405180910390fd5b61180c8383611de2565b505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614611896576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60006118a2611075565b9050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16036119165760006040517fe602df0500000000000000000000000000000000000000000000000000000000815260040161190d9190612831565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036119885760006040517f94280d6200000000000000000000000000000000000000000000000000000000815260040161197f9190612831565b60405180910390fd5b828160010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508115611a77578373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92585604051611a6e9190612345565b60405180910390a35b5050505050565b6000611a88611075565b9050600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603611ade5781816002016000828254611ad29190612a92565b92505081905550611bb7565b60008160000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015611b6d578481846040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401611b64939291906129ea565b60405180910390fd5b8281038260000160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611c0257818160020160008282540392505081905550611c52565b818160000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611caf9190612345565b60405180910390a350505050565b611cc78282610c64565b611d0a5780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401611d01929190612ac6565b60405180910390fd5b5050565b611d16611e55565b611d4c576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b611d56611d0e565b6000611d60611075565b905082816003019081611d739190612c91565b5081816004019081611d859190612c91565b50505050565b6000611db97f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611e75565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611deb82611e7f565b8173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a2600081511115611e4857611e428282611f4c565b50611e51565b611e50611fd0565b5b5050565b6000611e5f611582565b60000160089054906101000a900460ff16905090565b6000819050919050565b60008173ffffffffffffffffffffffffffffffffffffffff163b03611edb57806040517f4c9c8ce3000000000000000000000000000000000000000000000000000000008152600401611ed29190612831565b60405180910390fd5b80611f087f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611e75565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808473ffffffffffffffffffffffffffffffffffffffff1684604051611f769190612daa565b600060405180830381855af49150503d8060008114611fb1576040519150601f19603f3d011682016040523d82523d6000602084013e611fb6565b606091505b5091509150611fc685838361200d565b9250505092915050565b600034111561200b576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6060826120225761201d8261209c565b612094565b6000825114801561204a575060008473ffffffffffffffffffffffffffffffffffffffff163b145b1561208c57836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016120839190612831565b60405180910390fd5b819050612095565b5b9392505050565b6000815111156120af5780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61212a816120f5565b811461213557600080fd5b50565b60008135905061214781612121565b92915050565b600060208284031215612163576121626120eb565b5b600061217184828501612138565b91505092915050565b60008115159050919050565b61218f8161217a565b82525050565b60006020820190506121aa6000830184612186565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156121ea5780820151818401526020810190506121cf565b60008484015250505050565b6000601f19601f8301169050919050565b6000612212826121b0565b61221c81856121bb565b935061222c8185602086016121cc565b612235816121f6565b840191505092915050565b6000602082019050818103600083015261225a8184612207565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061228d82612262565b9050919050565b61229d81612282565b81146122a857600080fd5b50565b6000813590506122ba81612294565b92915050565b6000819050919050565b6122d3816122c0565b81146122de57600080fd5b50565b6000813590506122f0816122ca565b92915050565b6000806040838503121561230d5761230c6120eb565b5b600061231b858286016122ab565b925050602061232c858286016122e1565b9150509250929050565b61233f816122c0565b82525050565b600060208201905061235a6000830184612336565b92915050565b600080600060608486031215612379576123786120eb565b5b6000612387868287016122ab565b9350506020612398868287016122ab565b92505060406123a9868287016122e1565b9150509250925092565b6000819050919050565b6123c6816123b3565b81146123d157600080fd5b50565b6000813590506123e3816123bd565b92915050565b6000602082840312156123ff576123fe6120eb565b5b600061240d848285016123d4565b91505092915050565b61241f816123b3565b82525050565b600060208201905061243a6000830184612416565b92915050565b60008060408385031215612457576124566120eb565b5b6000612465858286016123d4565b9250506020612476858286016122ab565b9150509250929050565b600060ff82169050919050565b61249681612480565b82525050565b60006020820190506124b1600083018461248d565b92915050565b6000602082840312156124cd576124cc6120eb565b5b60006124db848285016122e1565b91505092915050565b600080604083850312156124fb576124fa6120eb565b5b6000612509858286016122ab565b925050602061251a858286016122ab565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612566826121f6565b810181811067ffffffffffffffff821117156125855761258461252e565b5b80604052505050565b60006125986120e1565b90506125a4828261255d565b919050565b600067ffffffffffffffff8211156125c4576125c361252e565b5b6125cd826121f6565b9050602081019050919050565b82818337600083830152505050565b60006125fc6125f7846125a9565b61258e565b90508281526020810184848401111561261857612617612529565b5b6126238482856125da565b509392505050565b600082601f8301126126405761263f612524565b5b81356126508482602086016125e9565b91505092915050565b600080604083850312156126705761266f6120eb565b5b600061267e858286016122ab565b925050602083013567ffffffffffffffff81111561269f5761269e6120f0565b5b6126ab8582860161262b565b9150509250929050565b6000602082840312156126cb576126ca6120eb565b5b60006126d9848285016122ab565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061272957607f821691505b60208210810361273c5761273b6126e2565b5b50919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000819050919050565b600061278561278061277b84612742565b612760565b61274c565b9050919050565b6127958161276a565b82525050565b60006020820190506127b0600083018461278c565b92915050565b600081905092915050565b7f6172746973740000000000000000000000000000000000000000000000000000600082015250565b60006127f76006836127b6565b9150612802826127c1565b600682019050919050565b6000612818826127ea565b9150819050919050565b61282b81612282565b82525050565b60006020820190506128466000830184612822565b92915050565b600067ffffffffffffffff8211156128675761286661252e565b5b612870826121f6565b9050602081019050919050565b600061289061288b8461284c565b61258e565b9050828152602081018484840111156128ac576128ab612529565b5b6128b78482856121cc565b509392505050565b600082601f8301126128d4576128d3612524565b5b81516128e484826020860161287d565b91505092915050565b600060208284031215612903576129026120eb565b5b600082015167ffffffffffffffff811115612921576129206120f0565b5b61292d848285016128bf565b91505092915050565b6000612941826121b0565b61294b81856127b6565b935061295b8185602086016121cc565b80840191505092915050565b60006129738284612936565b915081905092915050565b7f43616c6c6572206973206e6f7420616e20617274697374000000000000000000600082015250565b60006129b46017836121bb565b91506129bf8261297e565b602082019050919050565b600060208201905081810360008301526129e3816129a7565b9050919050565b60006060820190506129ff6000830186612822565b612a0c6020830185612336565b612a196040830184612336565b949350505050565b600081519050612a30816123bd565b92915050565b600060208284031215612a4c57612a4b6120eb565b5b6000612a5a84828501612a21565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612a9d826122c0565b9150612aa8836122c0565b9250828201905080821115612ac057612abf612a63565b5b92915050565b6000604082019050612adb6000830185612822565b612ae86020830184612416565b9392505050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302612b517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612b14565b612b5b8683612b14565b95508019841693508086168417925050509392505050565b6000612b8e612b89612b84846122c0565b612760565b6122c0565b9050919050565b6000819050919050565b612ba883612b73565b612bbc612bb482612b95565b848454612b21565b825550505050565b600090565b612bd1612bc4565b612bdc818484612b9f565b505050565b5b81811015612c0057612bf5600082612bc9565b600181019050612be2565b5050565b601f821115612c4557612c1681612aef565b612c1f84612b04565b81016020851015612c2e578190505b612c42612c3a85612b04565b830182612be1565b50505b505050565b600082821c905092915050565b6000612c6860001984600802612c4a565b1980831691505092915050565b6000612c818383612c57565b9150826002028217905092915050565b612c9a826121b0565b67ffffffffffffffff811115612cb357612cb261252e565b5b612cbd8254612711565b612cc8828285612c04565b600060209050601f831160018114612cfb5760008415612ce9578287015190505b612cf38582612c75565b865550612d5b565b601f198416612d0986612aef565b60005b82811015612d3157848901518255600182019150602085019450602081019050612d0c565b86831015612d4e5784890151612d4a601f891682612c57565b8355505b6001600288020188555050505b505050505050565b600081519050919050565b600081905092915050565b6000612d8482612d63565b612d8e8185612d6e565b9350612d9e8185602086016121cc565b80840191505092915050565b6000612db68284612d79565b91508190509291505056fea26469706673582212205c340f43233b050d4beb18faff6cf2154693b02cfe699e8a1341d7a9f640667364736f6c63430008140033";

type SoundTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SoundTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SoundToken__factory extends ContractFactory {
  constructor(...args: SoundTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      SoundToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SoundToken__factory {
    return super.connect(runner) as SoundToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SoundTokenInterface {
    return new Interface(_abi) as SoundTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): SoundToken {
    return new Contract(address, _abi, runner) as unknown as SoundToken;
  }
}

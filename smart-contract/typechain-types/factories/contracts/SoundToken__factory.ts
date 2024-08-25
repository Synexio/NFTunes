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
    name: "ARTIST_ROLE",
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
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b50608051612e6161006d6000396000818161164a0152818161169f015261187d0152612e616000f3fe60806040526004361061019c5760003560e01c806352d1902d116100ec5780639dc29fac1161008a578063a966a0df11610064578063a966a0df146105dd578063ad3cb1cc14610608578063d547741f14610633578063dd62ed3e1461065c5761019c565b80639dc29fac1461054c578063a217fddf14610575578063a9059cbb146105a05761019c565b806379cc6790116100c657806379cc67901461049257806391d14854146104bb57806395d89b41146104f8578063996cba68146105235761019c565b806352d1902d146103ff57806370a082311461042a57806375b238fc146104675761019c565b80632f2ff15d1161015957806340c10f191161013357806340c10f191461036857806342966c6814610391578063485cc955146103ba5780634f1ef286146103e35761019c565b80632f2ff15d146102eb578063313ce5671461031457806336568abe1461033f5761019c565b806301ffc9a7146101a157806306fdde03146101de578063095ea7b31461020957806318160ddd1461024657806323b872dd14610271578063248a9ca3146102ae575b600080fd5b3480156101ad57600080fd5b506101c860048036038101906101c391906121b7565b610699565b6040516101d591906121ff565b60405180910390f35b3480156101ea57600080fd5b506101f3610713565b60405161020091906122aa565b60405180910390f35b34801561021557600080fd5b50610230600480360381019061022b9190612360565b6107b4565b60405161023d91906121ff565b60405180910390f35b34801561025257600080fd5b5061025b6107d7565b60405161026891906123af565b60405180910390f35b34801561027d57600080fd5b50610298600480360381019061029391906123ca565b6107ef565b6040516102a591906121ff565b60405180910390f35b3480156102ba57600080fd5b506102d560048036038101906102d09190612453565b61081e565b6040516102e2919061248f565b60405180910390f35b3480156102f757600080fd5b50610312600480360381019061030d91906124aa565b61084c565b005b34801561032057600080fd5b5061032961086e565b6040516103369190612506565b60405180910390f35b34801561034b57600080fd5b50610366600480360381019061036191906124aa565b610877565b005b34801561037457600080fd5b5061038f600480360381019061038a9190612360565b6108f2565b005b34801561039d57600080fd5b506103b860048036038101906103b39190612521565b61092b565b005b3480156103c657600080fd5b506103e160048036038101906103dc919061254e565b61093f565b005b6103fd60048036038101906103f891906126c3565b610bbd565b005b34801561040b57600080fd5b50610414610bdc565b604051610421919061248f565b60405180910390f35b34801561043657600080fd5b50610451600480360381019061044c919061271f565b610c0f565b60405161045e91906123af565b60405180910390f35b34801561047357600080fd5b5061047c610c66565b604051610489919061248f565b60405180910390f35b34801561049e57600080fd5b506104b960048036038101906104b49190612360565b610c8a565b005b3480156104c757600080fd5b506104e260048036038101906104dd91906124aa565b610caa565b6040516104ef91906121ff565b60405180910390f35b34801561050457600080fd5b5061050d610d23565b60405161051a91906122aa565b60405180910390f35b34801561052f57600080fd5b5061054a600480360381019061054591906123ca565b610dc4565b005b34801561055857600080fd5b50610573600480360381019061056e9190612360565b610efe565b005b34801561058157600080fd5b5061058a610f37565b604051610597919061248f565b60405180910390f35b3480156105ac57600080fd5b506105c760048036038101906105c29190612360565b610f3e565b6040516105d491906121ff565b60405180910390f35b3480156105e957600080fd5b506105f2610f61565b6040516105ff919061248f565b60405180910390f35b34801561061457600080fd5b5061061d610f85565b60405161062a91906122aa565b60405180910390f35b34801561063f57600080fd5b5061065a600480360381019061065591906124aa565b610fbe565b005b34801561066857600080fd5b50610683600480360381019061067e919061254e565b610fe0565b60405161069091906123af565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061070c575061070b82611075565b5b9050919050565b6060600061071f6110df565b90508060030180546107309061277b565b80601f016020809104026020016040519081016040528092919081815260200182805461075c9061277b565b80156107a95780601f1061077e576101008083540402835291602001916107a9565b820191906000526020600020905b81548152906001019060200180831161078c57829003601f168201915b505050505091505090565b6000806107bf611107565b90506107cc81858561110f565b600191505092915050565b6000806107e26110df565b9050806002015491505090565b6000806107fa611107565b9050610807858285611121565b6108128585856111b5565b60019150509392505050565b6000806108296112a9565b905080600001600084815260200190815260200160002060010154915050919050565b6108558261081e565b61085e816112d1565b61086883836112e5565b50505050565b60006012905090565b61087f611107565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146108e3576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108ed82826113e6565b505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177561091c816112d1565b61092683836114e8565b505050565b61093c610936611107565b8261156a565b50565b60006109496115ec565b905060008160000160089054906101000a900460ff1615905060008260000160009054906101000a900467ffffffffffffffff1690506000808267ffffffffffffffff161480156109975750825b9050600060018367ffffffffffffffff161480156109cc575060003073ffffffffffffffffffffffffffffffffffffffff163b145b9050811580156109da575080155b15610a11576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018560000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055508315610a615760018560000160086101000a81548160ff0219169083151502179055505b610ad56040518060400160405280600581526020017f534f554e440000000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f534e440000000000000000000000000000000000000000000000000000000000815250611614565b610add61162a565b610ae5611634565b610aed61163e565b610b177fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775886112e5565b50856000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508315610bb45760008560000160086101000a81548160ff0219169083151502179055507fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d26001604051610bab9190612805565b60405180910390a15b50505050505050565b610bc5611648565b610bce8261172e565b610bd8828261175c565b5050565b6000610be661187b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b600080610c1a6110df565b90508060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915050919050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b610c9c82610c96611107565b83611121565b610ca6828261156a565b5050565b600080610cb56112a9565b905080600001600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b60606000610d2f6110df565b9050806004018054610d409061277b565b80601f0160208091040260200160405190810160405280929190818152602001828054610d6c9061277b565b8015610db95780601f10610d8e57610100808354040283529160200191610db9565b820191906000526020600020905b815481529060010190602001808311610d9c57829003601f168201915b505050505091505090565b604051602001610dd390612877565b6040516020818303038152906040528051906020012060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cb510e97336040518263ffffffff1660e01b8152600401610e42919061289b565b600060405180830381865afa158015610e5f573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610e889190612957565b604051602001610e9891906129d1565b6040516020818303038152906040528051906020012014610eee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee590612a34565b60405180910390fd5b610ef98383836111b5565b505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775610f28816112d1565b610f32838361156a565b505050565b6000801b81565b600080610f49611107565b9050610f568185856111b5565b600191505092915050565b7f877a78dc988c0ec5f58453b44888a55eb39755c3d5ed8d8ea990912aa3ef29c681565b6040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b610fc78261081e565b610fd0816112d1565b610fda83836113e6565b50505050565b600080610feb6110df565b90508060010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205491505092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60007f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00905090565b600033905090565b61111c8383836001611902565b505050565b600061112d8484610fe0565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146111af578181101561119f578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161119693929190612a54565b60405180910390fd5b6111ae84848484036000611902565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036112275760006040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161121e919061289b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036112995760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401611290919061289b565b60405180910390fd5b6112a4838383611ae8565b505050565b60007f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800905090565b6112e2816112dd611107565b611d27565b50565b6000806112f06112a9565b90506112fc8484610caa565b6113da57600181600001600086815260200190815260200160002060000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611376611107565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019150506113e0565b60009150505b92915050565b6000806113f16112a9565b90506113fd8484610caa565b156114dc57600081600001600086815260200190815260200160002060000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611478611107565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019150506114e2565b60009150505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361155a5760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401611551919061289b565b60405180910390fd5b61156660008383611ae8565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036115dc5760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016115d3919061289b565b60405180910390fd5b6115e882600083611ae8565b5050565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b61161c611d78565b6116268282611db8565b5050565b611632611d78565b565b61163c611d78565b565b611646611d78565b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614806116f557507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166116dc611df5565b73ffffffffffffffffffffffffffffffffffffffff1614155b1561172c576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775611758816112d1565b5050565b8173ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156117c457506040513d601f19601f820116820180604052508101906117c19190612aa0565b60015b61180557816040517f4c9c8ce30000000000000000000000000000000000000000000000000000000081526004016117fc919061289b565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b811461186c57806040517faa1d49a4000000000000000000000000000000000000000000000000000000008152600401611863919061248f565b60405180910390fd5b6118768383611e4c565b505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614611900576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600061190c6110df565b9050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16036119805760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401611977919061289b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036119f25760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016119e9919061289b565b60405180910390fd5b828160010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508115611ae1578373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92585604051611ad891906123af565b60405180910390a35b5050505050565b6000611af26110df565b9050600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603611b485781816002016000828254611b3c9190612afc565b92505081905550611c21565b60008160000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015611bd7578481846040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401611bce93929190612a54565b60405180910390fd5b8281038260000160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611c6c57818160020160008282540392505081905550611cbc565b818160000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611d1991906123af565b60405180910390a350505050565b611d318282610caa565b611d745780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401611d6b929190612b30565b60405180910390fd5b5050565b611d80611ebf565b611db6576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b611dc0611d78565b6000611dca6110df565b905082816003019081611ddd9190612cfb565b5081816004019081611def9190612cfb565b50505050565b6000611e237f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611edf565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611e5582611ee9565b8173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a2600081511115611eb257611eac8282611fb6565b50611ebb565b611eba61203a565b5b5050565b6000611ec96115ec565b60000160089054906101000a900460ff16905090565b6000819050919050565b60008173ffffffffffffffffffffffffffffffffffffffff163b03611f4557806040517f4c9c8ce3000000000000000000000000000000000000000000000000000000008152600401611f3c919061289b565b60405180910390fd5b80611f727f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611edf565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808473ffffffffffffffffffffffffffffffffffffffff1684604051611fe09190612e14565b600060405180830381855af49150503d806000811461201b576040519150601f19603f3d011682016040523d82523d6000602084013e612020565b606091505b5091509150612030858383612077565b9250505092915050565b6000341115612075576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60608261208c5761208782612106565b6120fe565b600082511480156120b4575060008473ffffffffffffffffffffffffffffffffffffffff163b145b156120f657836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016120ed919061289b565b60405180910390fd5b8190506120ff565b5b9392505050565b6000815111156121195780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6121948161215f565b811461219f57600080fd5b50565b6000813590506121b18161218b565b92915050565b6000602082840312156121cd576121cc612155565b5b60006121db848285016121a2565b91505092915050565b60008115159050919050565b6121f9816121e4565b82525050565b600060208201905061221460008301846121f0565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612254578082015181840152602081019050612239565b60008484015250505050565b6000601f19601f8301169050919050565b600061227c8261221a565b6122868185612225565b9350612296818560208601612236565b61229f81612260565b840191505092915050565b600060208201905081810360008301526122c48184612271565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006122f7826122cc565b9050919050565b612307816122ec565b811461231257600080fd5b50565b600081359050612324816122fe565b92915050565b6000819050919050565b61233d8161232a565b811461234857600080fd5b50565b60008135905061235a81612334565b92915050565b6000806040838503121561237757612376612155565b5b600061238585828601612315565b92505060206123968582860161234b565b9150509250929050565b6123a98161232a565b82525050565b60006020820190506123c460008301846123a0565b92915050565b6000806000606084860312156123e3576123e2612155565b5b60006123f186828701612315565b935050602061240286828701612315565b92505060406124138682870161234b565b9150509250925092565b6000819050919050565b6124308161241d565b811461243b57600080fd5b50565b60008135905061244d81612427565b92915050565b60006020828403121561246957612468612155565b5b60006124778482850161243e565b91505092915050565b6124898161241d565b82525050565b60006020820190506124a46000830184612480565b92915050565b600080604083850312156124c1576124c0612155565b5b60006124cf8582860161243e565b92505060206124e085828601612315565b9150509250929050565b600060ff82169050919050565b612500816124ea565b82525050565b600060208201905061251b60008301846124f7565b92915050565b60006020828403121561253757612536612155565b5b60006125458482850161234b565b91505092915050565b6000806040838503121561256557612564612155565b5b600061257385828601612315565b925050602061258485828601612315565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6125d082612260565b810181811067ffffffffffffffff821117156125ef576125ee612598565b5b80604052505050565b600061260261214b565b905061260e82826125c7565b919050565b600067ffffffffffffffff82111561262e5761262d612598565b5b61263782612260565b9050602081019050919050565b82818337600083830152505050565b600061266661266184612613565b6125f8565b90508281526020810184848401111561268257612681612593565b5b61268d848285612644565b509392505050565b600082601f8301126126aa576126a961258e565b5b81356126ba848260208601612653565b91505092915050565b600080604083850312156126da576126d9612155565b5b60006126e885828601612315565b925050602083013567ffffffffffffffff8111156127095761270861215a565b5b61271585828601612695565b9150509250929050565b60006020828403121561273557612734612155565b5b600061274384828501612315565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061279357607f821691505b6020821081036127a6576127a561274c565b5b50919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000819050919050565b60006127ef6127ea6127e5846127ac565b6127ca565b6127b6565b9050919050565b6127ff816127d4565b82525050565b600060208201905061281a60008301846127f6565b92915050565b600081905092915050565b7f6172746973740000000000000000000000000000000000000000000000000000600082015250565b6000612861600683612820565b915061286c8261282b565b600682019050919050565b600061288282612854565b9150819050919050565b612895816122ec565b82525050565b60006020820190506128b0600083018461288c565b92915050565b600067ffffffffffffffff8211156128d1576128d0612598565b5b6128da82612260565b9050602081019050919050565b60006128fa6128f5846128b6565b6125f8565b90508281526020810184848401111561291657612915612593565b5b612921848285612236565b509392505050565b600082601f83011261293e5761293d61258e565b5b815161294e8482602086016128e7565b91505092915050565b60006020828403121561296d5761296c612155565b5b600082015167ffffffffffffffff81111561298b5761298a61215a565b5b61299784828501612929565b91505092915050565b60006129ab8261221a565b6129b58185612820565b93506129c5818560208601612236565b80840191505092915050565b60006129dd82846129a0565b915081905092915050565b7f43616c6c6572206973206e6f7420616e20617274697374000000000000000000600082015250565b6000612a1e601783612225565b9150612a29826129e8565b602082019050919050565b60006020820190508181036000830152612a4d81612a11565b9050919050565b6000606082019050612a69600083018661288c565b612a7660208301856123a0565b612a8360408301846123a0565b949350505050565b600081519050612a9a81612427565b92915050565b600060208284031215612ab657612ab5612155565b5b6000612ac484828501612a8b565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612b078261232a565b9150612b128361232a565b9250828201905080821115612b2a57612b29612acd565b5b92915050565b6000604082019050612b45600083018561288c565b612b526020830184612480565b9392505050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302612bbb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612b7e565b612bc58683612b7e565b95508019841693508086168417925050509392505050565b6000612bf8612bf3612bee8461232a565b6127ca565b61232a565b9050919050565b6000819050919050565b612c1283612bdd565b612c26612c1e82612bff565b848454612b8b565b825550505050565b600090565b612c3b612c2e565b612c46818484612c09565b505050565b5b81811015612c6a57612c5f600082612c33565b600181019050612c4c565b5050565b601f821115612caf57612c8081612b59565b612c8984612b6e565b81016020851015612c98578190505b612cac612ca485612b6e565b830182612c4b565b50505b505050565b600082821c905092915050565b6000612cd260001984600802612cb4565b1980831691505092915050565b6000612ceb8383612cc1565b9150826002028217905092915050565b612d048261221a565b67ffffffffffffffff811115612d1d57612d1c612598565b5b612d27825461277b565b612d32828285612c6e565b600060209050601f831160018114612d655760008415612d53578287015190505b612d5d8582612cdf565b865550612dc5565b601f198416612d7386612b59565b60005b82811015612d9b57848901518255600182019150602085019450602081019050612d76565b86831015612db85784890151612db4601f891682612cc1565b8355505b6001600288020188555050505b505050505050565b600081519050919050565b600081905092915050565b6000612dee82612dcd565b612df88185612dd8565b9350612e08818560208601612236565b80840191505092915050565b6000612e208284612de3565b91508190509291505056fea26469706673582212209f5040ac28956a0cca04e5ed6cdf51069791634eef333710b141b4686371821f64736f6c63430008140033";

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

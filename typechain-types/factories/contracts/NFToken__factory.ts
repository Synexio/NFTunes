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
import type { NFToken, NFTokenInterface } from "../../contracts/NFToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "authority",
        type: "address",
      },
    ],
    name: "AccessManagedInvalidAuthority",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "delay",
        type: "uint32",
      },
    ],
    name: "AccessManagedRequiredDelay",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AccessManagedUnauthorized",
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
        internalType: "address",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
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
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
        internalType: "address",
        name: "initialAuthority",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isConsumingScheduledOp",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
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
        internalType: "address",
        name: "newAuthority",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff168152503480156200004457600080fd5b50620000556200005b60201b60201c565b620001cf565b60006200006d6200016560201b60201c565b90508060000160089054906101000a900460ff1615620000b9576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b67ffffffffffffffff80168160000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1614620001625767ffffffffffffffff8160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d267ffffffffffffffff604051620001599190620001b2565b60405180910390a15b50565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b600067ffffffffffffffff82169050919050565b620001ac816200018d565b82525050565b6000602082019050620001c96000830184620001a1565b92915050565b608051612923620001f960003960008181610fd70152818161102c01526111f701526129236000f3fe6080604052600436106101145760003560e01c806370a08231116100a0578063a9059cbb11610064578063a9059cbb14610392578063ad3cb1cc146103cf578063bf7e214f146103fa578063c4d66de814610425578063dd62ed3e1461044e57610114565b806370a08231146102ad57806379cc6790146102ea5780637a9e5e4b146103135780638fb360371461033c57806395d89b411461036757610114565b8063313ce567116100e7578063313ce567146101e957806340c10f191461021457806342966c681461023d5780634f1ef2861461026657806352d1902d1461028257610114565b806306fdde0314610119578063095ea7b31461014457806318160ddd1461018157806323b872dd146101ac575b600080fd5b34801561012557600080fd5b5061012e61048b565b60405161013b9190611d56565b60405180910390f35b34801561015057600080fd5b5061016b60048036038101906101669190611e20565b61052c565b6040516101789190611e7b565b60405180910390f35b34801561018d57600080fd5b5061019661054f565b6040516101a39190611ea5565b60405180910390f35b3480156101b857600080fd5b506101d360048036038101906101ce9190611ec0565b610567565b6040516101e09190611e7b565b60405180910390f35b3480156101f557600080fd5b506101fe610596565b60405161020b9190611f2f565b60405180910390f35b34801561022057600080fd5b5061023b60048036038101906102369190611e20565b61059f565b005b34801561024957600080fd5b50610264600480360381019061025f9190611f4a565b6105c5565b005b610280600480360381019061027b91906120ac565b6105d9565b005b34801561028e57600080fd5b506102976105f8565b6040516102a49190612121565b60405180910390f35b3480156102b957600080fd5b506102d460048036038101906102cf919061213c565b61062b565b6040516102e19190611ea5565b60405180910390f35b3480156102f657600080fd5b50610311600480360381019061030c9190611e20565b610682565b005b34801561031f57600080fd5b5061033a6004803603810190610335919061213c565b6106a2565b005b34801561034857600080fd5b5061035161078e565b60405161035e91906121a4565b60405180910390f35b34801561037357600080fd5b5061037c6107ca565b6040516103899190611d56565b60405180910390f35b34801561039e57600080fd5b506103b960048036038101906103b49190611e20565b61086b565b6040516103c69190611e7b565b60405180910390f35b3480156103db57600080fd5b506103e461088e565b6040516103f19190611d56565b60405180910390f35b34801561040657600080fd5b5061040f6108c7565b60405161041c91906121ce565b60405180910390f35b34801561043157600080fd5b5061044c6004803603810190610447919061213c565b6108ff565b005b34801561045a57600080fd5b50610475600480360381019061047091906121e9565b610b12565b6040516104829190611ea5565b60405180910390f35b60606000610497610ba7565b90508060030180546104a890612258565b80601f01602080910402602001604051908101604052809291908181526020018280546104d490612258565b80156105215780601f106104f657610100808354040283529160200191610521565b820191906000526020600020905b81548152906001019060200180831161050457829003601f168201915b505050505091505090565b600080610537610bcf565b9050610544818585610bd7565b600191505092915050565b60008061055a610ba7565b9050806002015491505090565b600080610572610bcf565b905061057f858285610be9565b61058a858585610c7d565b60019150509392505050565b60006012905090565b6105b76105aa610bcf565b6105b2610d71565b610d7e565b6105c18282610ed1565b5050565b6105d66105d0610bcf565b82610f53565b50565b6105e1610fd5565b6105ea826110bb565b6105f482826110d6565b5050565b60006106026111f5565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b600080610636610ba7565b90508060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915050919050565b6106948261068e610bcf565b83610be9565b61069e8282610f53565b5050565b60006106ac610bcf565b90506106b66108c7565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461072557806040517f068ca9d800000000000000000000000000000000000000000000000000000000815260040161071c91906121ce565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff163b0361078157816040517fc2f31e5e00000000000000000000000000000000000000000000000000000000815260040161077891906121ce565b60405180910390fd5b61078a8261127c565b5050565b600080610799611306565b90508060000160149054906101000a900460ff166107bb57600060e01b6107c4565b638fb3603760e01b5b91505090565b606060006107d6610ba7565b90508060040180546107e790612258565b80601f016020809104026020016040519081016040528092919081815260200182805461081390612258565b80156108605780601f1061083557610100808354040283529160200191610860565b820191906000526020600020905b81548152906001019060200180831161084357829003601f168201915b505050505091505090565b600080610876610bcf565b9050610883818585610c7d565b600191505092915050565b6040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b6000806108d2611306565b90508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505090565b600061090961132e565b905060008160000160089054906101000a900460ff1615905060008260000160009054906101000a900467ffffffffffffffff1690506000808267ffffffffffffffff161480156109575750825b9050600060018367ffffffffffffffff1614801561098c575060003073ffffffffffffffffffffffffffffffffffffffff163b145b90508115801561099a575080155b156109d1576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018560000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055508315610a215760018560000160086101000a81548160ff0219169083151502179055505b610a956040518060400160405280600781526020017f4e46546f6b656e000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4e544b0000000000000000000000000000000000000000000000000000000000815250611356565b610a9d61136c565b610aa686611376565b610aae61138a565b8315610b0a5760008560000160086101000a81548160ff0219169083151502179055507fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d26001604051610b0191906122e2565b60405180910390a15b505050505050565b600080610b1d610ba7565b90508060010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205491505092915050565b60007f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00905090565b600033905090565b610be48383836001611394565b505050565b6000610bf58484610b12565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610c775781811015610c67578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610c5e939291906122fd565b60405180910390fd5b610c7684848484036000611394565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610cef5760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610ce691906121ce565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d615760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610d5891906121ce565b60405180910390fd5b610d6c83838361157a565b505050565b3660008036915091509091565b6000610d88611306565b9050600080610dbe610d986108c7565b87308888600090600492610dae9392919061233e565b90610db99190612391565b6117b9565b9150915081610ec95760008163ffffffff161115610e8b5760018360000160146101000a81548160ff021916908315150217905550610dfb6108c7565b73ffffffffffffffffffffffffffffffffffffffff166394c7d7ee8787876040518463ffffffff1660e01b8152600401610e379392919061242e565b600060405180830381600087803b158015610e5157600080fd5b505af1158015610e65573d6000803e3d6000fd5b5050505060008360000160146101000a81548160ff021916908315150217905550610ec8565b856040517f068ca9d8000000000000000000000000000000000000000000000000000000008152600401610ebf91906121ce565b60405180910390fd5b5b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f435760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610f3a91906121ce565b60405180910390fd5b610f4f6000838361157a565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610fc55760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610fbc91906121ce565b60405180910390fd5b610fd18260008361157a565b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148061108257507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166110696118df565b73ffffffffffffffffffffffffffffffffffffffff1614155b156110b9576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6110d36110c6610bcf565b6110ce610d71565b610d7e565b50565b8173ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561113e57506040513d601f19601f8201168201806040525081019061113b919061248c565b60015b61117f57816040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815260040161117691906121ce565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b81146111e657806040517faa1d49a40000000000000000000000000000000000000000000000000000000081526004016111dd9190612121565b60405180910390fd5b6111f08383611936565b505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161461127a576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6000611286611306565b9050818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad826040516112fa91906121ce565b60405180910390a15050565b60007ff3177357ab46d8af007ab3fdb9af81da189e1068fefdc0073dca88a2cab40a00905090565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b61135e6119a9565b61136882826119e9565b5050565b6113746119a9565b565b61137e6119a9565b61138781611a26565b50565b6113926119a9565b565b600061139e610ba7565b9050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16036114125760006040517fe602df0500000000000000000000000000000000000000000000000000000000815260040161140991906121ce565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036114845760006040517f94280d6200000000000000000000000000000000000000000000000000000000815260040161147b91906121ce565b60405180910390fd5b828160010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508115611573578373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258560405161156a9190611ea5565b60405180910390a35b5050505050565b6000611584610ba7565b9050600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036115da57818160020160008282546115ce91906124e8565b925050819055506116b3565b60008160000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015611669578481846040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401611660939291906122fd565b60405180910390fd5b8281038260000160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036116fe5781816002016000828254039250508190555061174e565b818160000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516117ab9190611ea5565b60405180910390a350505050565b6000806000808773ffffffffffffffffffffffffffffffffffffffff168787876040516024016117eb9392919061251c565b60405160208183030381529060405263b700961360e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161183d919061259a565b600060405180830381855afa9150503d8060008114611878576040519150601f19603f3d011682016040523d82523d6000602084013e61187d565b606091505b509150915081156118d45760408151106118b257808060200190518101906118a59190612619565b80945081955050506118d3565b60208151106118d257808060200190518101906118cf9190612659565b93505b5b5b505094509492505050565b600061190d7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611a3a565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61193f82611a44565b8173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a260008151111561199c576119968282611b11565b506119a5565b6119a4611b95565b5b5050565b6119b1611bd2565b6119e7576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6119f16119a9565b60006119fb610ba7565b905082816003019081611a0e919061281b565b5081816004019081611a20919061281b565b50505050565b611a2e6119a9565b611a378161127c565b50565b6000819050919050565b60008173ffffffffffffffffffffffffffffffffffffffff163b03611aa057806040517f4c9c8ce3000000000000000000000000000000000000000000000000000000008152600401611a9791906121ce565b60405180910390fd5b80611acd7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611a3a565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808473ffffffffffffffffffffffffffffffffffffffff1684604051611b3b919061259a565b600060405180830381855af49150503d8060008114611b76576040519150601f19603f3d011682016040523d82523d6000602084013e611b7b565b606091505b5091509150611b8b858383611bf2565b9250505092915050565b6000341115611bd0576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6000611bdc61132e565b60000160089054906101000a900460ff16905090565b606082611c0757611c0282611c81565b611c79565b60008251148015611c2f575060008473ffffffffffffffffffffffffffffffffffffffff163b145b15611c7157836040517f9996b315000000000000000000000000000000000000000000000000000000008152600401611c6891906121ce565b60405180910390fd5b819050611c7a565b5b9392505050565b600081511115611c945780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600081519050919050565b600082825260208201905092915050565b60005b83811015611d00578082015181840152602081019050611ce5565b60008484015250505050565b6000601f19601f8301169050919050565b6000611d2882611cc6565b611d328185611cd1565b9350611d42818560208601611ce2565b611d4b81611d0c565b840191505092915050565b60006020820190508181036000830152611d708184611d1d565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611db782611d8c565b9050919050565b611dc781611dac565b8114611dd257600080fd5b50565b600081359050611de481611dbe565b92915050565b6000819050919050565b611dfd81611dea565b8114611e0857600080fd5b50565b600081359050611e1a81611df4565b92915050565b60008060408385031215611e3757611e36611d82565b5b6000611e4585828601611dd5565b9250506020611e5685828601611e0b565b9150509250929050565b60008115159050919050565b611e7581611e60565b82525050565b6000602082019050611e906000830184611e6c565b92915050565b611e9f81611dea565b82525050565b6000602082019050611eba6000830184611e96565b92915050565b600080600060608486031215611ed957611ed8611d82565b5b6000611ee786828701611dd5565b9350506020611ef886828701611dd5565b9250506040611f0986828701611e0b565b9150509250925092565b600060ff82169050919050565b611f2981611f13565b82525050565b6000602082019050611f446000830184611f20565b92915050565b600060208284031215611f6057611f5f611d82565b5b6000611f6e84828501611e0b565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611fb982611d0c565b810181811067ffffffffffffffff82111715611fd857611fd7611f81565b5b80604052505050565b6000611feb611d78565b9050611ff78282611fb0565b919050565b600067ffffffffffffffff82111561201757612016611f81565b5b61202082611d0c565b9050602081019050919050565b82818337600083830152505050565b600061204f61204a84611ffc565b611fe1565b90508281526020810184848401111561206b5761206a611f7c565b5b61207684828561202d565b509392505050565b600082601f83011261209357612092611f77565b5b81356120a384826020860161203c565b91505092915050565b600080604083850312156120c3576120c2611d82565b5b60006120d185828601611dd5565b925050602083013567ffffffffffffffff8111156120f2576120f1611d87565b5b6120fe8582860161207e565b9150509250929050565b6000819050919050565b61211b81612108565b82525050565b60006020820190506121366000830184612112565b92915050565b60006020828403121561215257612151611d82565b5b600061216084828501611dd5565b91505092915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61219e81612169565b82525050565b60006020820190506121b96000830184612195565b92915050565b6121c881611dac565b82525050565b60006020820190506121e360008301846121bf565b92915050565b60008060408385031215612200576121ff611d82565b5b600061220e85828601611dd5565b925050602061221f85828601611dd5565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061227057607f821691505b60208210810361228357612282612229565b5b50919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000819050919050565b60006122cc6122c76122c284612289565b6122a7565b612293565b9050919050565b6122dc816122b1565b82525050565b60006020820190506122f760008301846122d3565b92915050565b600060608201905061231260008301866121bf565b61231f6020830185611e96565b61232c6040830184611e96565b949350505050565b600080fd5b600080fd5b6000808585111561235257612351612334565b5b8386111561236357612362612339565b5b6001850283019150848603905094509492505050565b600082905092915050565b600082821b905092915050565b600061239d8383612379565b826123a88135612169565b925060048210156123e8576123e37fffffffff0000000000000000000000000000000000000000000000000000000083600403600802612384565b831692505b505092915050565b600082825260208201905092915050565b600061240d83856123f0565b935061241a83858461202d565b61242383611d0c565b840190509392505050565b600060408201905061244360008301866121bf565b8181036020830152612456818486612401565b9050949350505050565b61246981612108565b811461247457600080fd5b50565b60008151905061248681612460565b92915050565b6000602082840312156124a2576124a1611d82565b5b60006124b084828501612477565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006124f382611dea565b91506124fe83611dea565b9250828201905080821115612516576125156124b9565b5b92915050565b600060608201905061253160008301866121bf565b61253e60208301856121bf565b61254b6040830184612195565b949350505050565b600081519050919050565b600081905092915050565b600061257482612553565b61257e818561255e565b935061258e818560208601611ce2565b80840191505092915050565b60006125a68284612569565b915081905092915050565b6125ba81611e60565b81146125c557600080fd5b50565b6000815190506125d7816125b1565b92915050565b600063ffffffff82169050919050565b6125f6816125dd565b811461260157600080fd5b50565b600081519050612613816125ed565b92915050565b600080604083850312156126305761262f611d82565b5b600061263e858286016125c8565b925050602061264f85828601612604565b9150509250929050565b60006020828403121561266f5761266e611d82565b5b600061267d848285016125c8565b91505092915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b6000600883026126db7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612384565b6126e58683612384565b95508019841693508086168417925050509392505050565b600061271861271361270e84611dea565b6122a7565b611dea565b9050919050565b6000819050919050565b612732836126fd565b61274661273e8261271f565b8484546126ab565b825550505050565b600090565b61275b61274e565b612766818484612729565b505050565b5b8181101561278a5761277f600082612753565b60018101905061276c565b5050565b601f8211156127cf576127a081612686565b6127a98461269b565b810160208510156127b8578190505b6127cc6127c48561269b565b83018261276b565b50505b505050565b600082821c905092915050565b60006127f2600019846008026127d4565b1980831691505092915050565b600061280b83836127e1565b9150826002028217905092915050565b61282482611cc6565b67ffffffffffffffff81111561283d5761283c611f81565b5b6128478254612258565b61285282828561278e565b600060209050601f8311600181146128855760008415612873578287015190505b61287d85826127ff565b8655506128e5565b601f19841661289386612686565b60005b828110156128bb57848901518255600182019150602085019450602081019050612896565b868310156128d857848901516128d4601f8916826127e1565b8355505b6001600288020188555050505b50505050505056fea264697066735822122055efdc27d8b919a1a52b8c96d0b2dc17ebb193dc4950ced2d968c62067bb0bfe64736f6c63430008180033";

type NFTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFToken__factory extends ContractFactory {
  constructor(...args: NFTokenConstructorParams) {
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
      NFToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): NFToken__factory {
    return super.connect(runner) as NFToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTokenInterface {
    return new Interface(_abi) as NFTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): NFToken {
    return new Contract(address, _abi, runner) as unknown as NFToken;
  }
}

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
import type { Staff, StaffInterface } from "../../contracts/Staff";

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
        name: "account",
        type: "address",
      },
      {
        internalType: "string",
        name: "role",
        type: "string",
      },
    ],
    name: "addStaff",
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
    ],
    name: "isStaff",
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
        name: "account",
        type: "address",
      },
    ],
    name: "removeStaff",
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
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b50608051611d8861006d60003960008181610bf701528181610c4c0152610e2a0152611d886000f3fe6080604052600436106100e85760003560e01c806391d148541161008a578063c4d66de811610059578063c4d66de8146102e7578063cb510e9714610310578063d547741f1461034d578063f024ec2614610376576100e8565b806391d148541461022b578063a217fddf14610268578063ad3cb1cc14610293578063c4522c92146102be576100e8565b806336568abe116100c657806336568abe146101905780634f1ef286146101b957806352d1902d146101d557806375b238fc14610200576100e8565b806301ffc9a7146100ed578063248a9ca31461012a5780632f2ff15d14610167575b600080fd5b3480156100f957600080fd5b50610114600480360381019061010f9190611412565b61039f565b604051610121919061145a565b60405180910390f35b34801561013657600080fd5b50610151600480360381019061014c91906114ab565b610419565b60405161015e91906114e7565b60405180910390f35b34801561017357600080fd5b5061018e60048036038101906101899190611560565b610447565b005b34801561019c57600080fd5b506101b760048036038101906101b29190611560565b610469565b005b6101d360048036038101906101ce91906116e6565b6104e4565b005b3480156101e157600080fd5b506101ea610503565b6040516101f791906114e7565b60405180910390f35b34801561020c57600080fd5b50610215610536565b60405161022291906114e7565b60405180910390f35b34801561023757600080fd5b50610252600480360381019061024d9190611560565b61055a565b60405161025f919061145a565b60405180910390f35b34801561027457600080fd5b5061027d6105d3565b60405161028a91906114e7565b60405180910390f35b34801561029f57600080fd5b506102a86105da565b6040516102b591906117c1565b60405180910390f35b3480156102ca57600080fd5b506102e560048036038101906102e091906117e3565b610613565b005b3480156102f357600080fd5b5061030e600480360381019061030991906117e3565b61064a565b005b34801561031c57600080fd5b50610337600480360381019061033291906117e3565b610819565b60405161034491906117c1565b60405180910390f35b34801561035957600080fd5b50610374600480360381019061036f9190611560565b6108e9565b005b34801561038257600080fd5b5061039d600480360381019061039891906118b1565b61090b565b005b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610412575061041182610944565b5b9050919050565b6000806104246109ae565b905080600001600084815260200190815260200160002060010154915050919050565b61045082610419565b610459816109d6565b61046383836109ea565b50505050565b610471610aeb565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146104d5576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104df8282610af3565b505050565b6104ec610bf5565b6104f582610cdb565b6104ff8282610d09565b5050565b600061050d610e28565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b6000806105656109ae565b905080600001600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b6000801b81565b6040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177561063d816109d6565b61064682610eaf565b5050565b6000610654610f33565b905060008160000160089054906101000a900460ff1615905060008260000160009054906101000a900467ffffffffffffffff1690506000808267ffffffffffffffff161480156106a25750825b9050600060018367ffffffffffffffff161480156106d7575060003073ffffffffffffffffffffffffffffffffffffffff163b145b9050811580156106e5575080155b1561071c576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018560000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550831561076c5760018560000160086101000a81548160ff0219169083151502179055505b610774610f5b565b61077c610f65565b6107896000801b876109ea565b506107b47fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775876109ea565b5083156108115760008560000160086101000a81548160ff0219169083151502179055507fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d260016040516108089190611966565b60405180910390a15b505050505050565b60606000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054610864906119b0565b80601f0160208091040260200160405190810160405280929190818152602001828054610890906119b0565b80156108dd5780601f106108b2576101008083540402835291602001916108dd565b820191906000526020600020905b8154815290600101906020018083116108c057829003601f168201915b50505050509050919050565b6108f282610419565b6108fb816109d6565b6109058383610af3565b50505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775610935816109d6565b61093f8383610f6f565b505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60007f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800905090565b6109e7816109e2610aeb565b610fbf565b50565b6000806109f56109ae565b9050610a01848461055a565b610adf57600181600001600086815260200190815260200160002060000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610a7b610aeb565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001915050610ae5565b60009150505b92915050565b600033905090565b600080610afe6109ae565b9050610b0a848461055a565b15610be957600081600001600086815260200190815260200160002060000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610b85610aeb565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a46001915050610bef565b60009150505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161480610ca257507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610c89611010565b73ffffffffffffffffffffffffffffffffffffffff1614155b15610cd9576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775610d05816109d6565b5050565b8173ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610d7157506040513d601f19601f82011682018060405250810190610d6e91906119f6565b60015b610db257816040517f4c9c8ce3000000000000000000000000000000000000000000000000000000008152600401610da99190611a32565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b8114610e1957806040517faa1d49a4000000000000000000000000000000000000000000000000000000008152600401610e1091906114e7565b60405180910390fd5b610e238383611067565b505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614610ead576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6040518060400160405280600481526020017f6e756c6c000000000000000000000000000000000000000000000000000000008152506000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209081610f2f9190611bf9565b5050565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b610f636110da565b565b610f6d6110da565b565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209081610fba9190611bf9565b505050565b610fc9828261055a565b61100c5780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401611003929190611ccb565b60405180910390fd5b5050565b600061103e7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61111a565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61107082611124565b8173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a26000815111156110cd576110c782826111f1565b506110d6565b6110d5611275565b5b5050565b6110e26112b2565b611118576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6000819050919050565b60008173ffffffffffffffffffffffffffffffffffffffff163b0361118057806040517f4c9c8ce30000000000000000000000000000000000000000000000000000000081526004016111779190611a32565b60405180910390fd5b806111ad7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61111a565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808473ffffffffffffffffffffffffffffffffffffffff168460405161121b9190611d3b565b600060405180830381855af49150503d8060008114611256576040519150601f19603f3d011682016040523d82523d6000602084013e61125b565b606091505b509150915061126b8583836112d2565b9250505092915050565b60003411156112b0576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60006112bc610f33565b60000160089054906101000a900460ff16905090565b6060826112e7576112e282611361565b611359565b6000825114801561130f575060008473ffffffffffffffffffffffffffffffffffffffff163b145b1561135157836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016113489190611a32565b60405180910390fd5b81905061135a565b5b9392505050565b6000815111156113745780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6113ef816113ba565b81146113fa57600080fd5b50565b60008135905061140c816113e6565b92915050565b600060208284031215611428576114276113b0565b5b6000611436848285016113fd565b91505092915050565b60008115159050919050565b6114548161143f565b82525050565b600060208201905061146f600083018461144b565b92915050565b6000819050919050565b61148881611475565b811461149357600080fd5b50565b6000813590506114a58161147f565b92915050565b6000602082840312156114c1576114c06113b0565b5b60006114cf84828501611496565b91505092915050565b6114e181611475565b82525050565b60006020820190506114fc60008301846114d8565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061152d82611502565b9050919050565b61153d81611522565b811461154857600080fd5b50565b60008135905061155a81611534565b92915050565b60008060408385031215611577576115766113b0565b5b600061158585828601611496565b92505060206115968582860161154b565b9150509250929050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6115f3826115aa565b810181811067ffffffffffffffff82111715611612576116116115bb565b5b80604052505050565b60006116256113a6565b905061163182826115ea565b919050565b600067ffffffffffffffff821115611651576116506115bb565b5b61165a826115aa565b9050602081019050919050565b82818337600083830152505050565b600061168961168484611636565b61161b565b9050828152602081018484840111156116a5576116a46115a5565b5b6116b0848285611667565b509392505050565b600082601f8301126116cd576116cc6115a0565b5b81356116dd848260208601611676565b91505092915050565b600080604083850312156116fd576116fc6113b0565b5b600061170b8582860161154b565b925050602083013567ffffffffffffffff81111561172c5761172b6113b5565b5b611738858286016116b8565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561177c578082015181840152602081019050611761565b60008484015250505050565b600061179382611742565b61179d818561174d565b93506117ad81856020860161175e565b6117b6816115aa565b840191505092915050565b600060208201905081810360008301526117db8184611788565b905092915050565b6000602082840312156117f9576117f86113b0565b5b60006118078482850161154b565b91505092915050565b600067ffffffffffffffff82111561182b5761182a6115bb565b5b611834826115aa565b9050602081019050919050565b600061185461184f84611810565b61161b565b9050828152602081018484840111156118705761186f6115a5565b5b61187b848285611667565b509392505050565b600082601f830112611898576118976115a0565b5b81356118a8848260208601611841565b91505092915050565b600080604083850312156118c8576118c76113b0565b5b60006118d68582860161154b565b925050602083013567ffffffffffffffff8111156118f7576118f66113b5565b5b61190385828601611883565b9150509250929050565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000819050919050565b600061195061194b6119468461190d565b61192b565b611917565b9050919050565b61196081611935565b82525050565b600060208201905061197b6000830184611957565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806119c857607f821691505b6020821081036119db576119da611981565b5b50919050565b6000815190506119f08161147f565b92915050565b600060208284031215611a0c57611a0b6113b0565b5b6000611a1a848285016119e1565b91505092915050565b611a2c81611522565b82525050565b6000602082019050611a476000830184611a23565b92915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611aaf7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611a72565b611ab98683611a72565b95508019841693508086168417925050509392505050565b6000819050919050565b6000611af6611af1611aec84611ad1565b61192b565b611ad1565b9050919050565b6000819050919050565b611b1083611adb565b611b24611b1c82611afd565b848454611a7f565b825550505050565b600090565b611b39611b2c565b611b44818484611b07565b505050565b5b81811015611b6857611b5d600082611b31565b600181019050611b4a565b5050565b601f821115611bad57611b7e81611a4d565b611b8784611a62565b81016020851015611b96578190505b611baa611ba285611a62565b830182611b49565b50505b505050565b600082821c905092915050565b6000611bd060001984600802611bb2565b1980831691505092915050565b6000611be98383611bbf565b9150826002028217905092915050565b611c0282611742565b67ffffffffffffffff811115611c1b57611c1a6115bb565b5b611c2582546119b0565b611c30828285611b6c565b600060209050601f831160018114611c635760008415611c51578287015190505b611c5b8582611bdd565b865550611cc3565b601f198416611c7186611a4d565b60005b82811015611c9957848901518255600182019150602085019450602081019050611c74565b86831015611cb65784890151611cb2601f891682611bbf565b8355505b6001600288020188555050505b505050505050565b6000604082019050611ce06000830185611a23565b611ced60208301846114d8565b9392505050565b600081519050919050565b600081905092915050565b6000611d1582611cf4565b611d1f8185611cff565b9350611d2f81856020860161175e565b80840191505092915050565b6000611d478284611d0a565b91508190509291505056fea26469706673582212201d239cb4196cf19b5745aa61ddc2a479aa419e7ee092e443c792c50fe263733564736f6c63430008140033";

type StaffConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StaffConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Staff__factory extends ContractFactory {
  constructor(...args: StaffConstructorParams) {
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
      Staff & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Staff__factory {
    return super.connect(runner) as Staff__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StaffInterface {
    return new Interface(_abi) as StaffInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Staff {
    return new Contract(address, _abi, runner) as unknown as Staff;
  }
}

// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

import {Script} from "forge-std/Script.sol";
import {PriceFeed} from "../contracts/PriceFeed.sol";
import {MockDapiProxy} from "../contracts/Mocks/MockDapi.sol";

contract DeployPriceFeed is Script {
    function run() external returns (MockDapiProxy, PriceFeed){
        vm.startBroadcast();
        PriceFeed priceFeed = new PriceFeed();
        MockDapiProxy mockDapiProxy = new MockDapiProxy();
        vm.stopBroadcast();
        return (mockDapiProxy, priceFeed);
    }
}
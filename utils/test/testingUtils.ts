
import chai from "chai";
import { solidity } from "ethereum-waffle";

chai.use(solidity);

// Use HARDHAT version of providers
import { ethers } from "hardhat";
import { providers } from "ethers";

const provider = ethers.provider;

// HARDHAT-SPECIFIC Provider
export const getProvider = (): providers.JsonRpcProvider => {
  return ethers.provider;
};

// HARDHAT / WAFFLE
export const getWaffleExpect = (): Chai.ExpectStatic => {
  return chai.expect;
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWaffleExpect = exports.getProvider = void 0;
var chai_1 = __importDefault(require("chai"));
var ethereum_waffle_1 = require("ethereum-waffle");
chai_1.default.use(ethereum_waffle_1.solidity);
// Use HARDHAT version of providers
var hardhat_1 = require("hardhat");
var provider = hardhat_1.ethers.provider;
// HARDHAT-SPECIFIC Provider
var getProvider = function () {
    return hardhat_1.ethers.provider;
};
exports.getProvider = getProvider;
// HARDHAT / WAFFLE
var getWaffleExpect = function () {
    return chai_1.default.expect;
};
exports.getWaffleExpect = getWaffleExpect;

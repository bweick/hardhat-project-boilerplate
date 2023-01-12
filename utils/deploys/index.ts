import { Signer } from "ethers";

import { Test__factory } from "../../typechain/factories/Test__factory";
import { Test } from "../contracts";

export default class DeployHelper {
  private _deployerSigner: Signer;

  constructor(deployerSigner: Signer) {
    this._deployerSigner = deployerSigner;
  }

  public async deployTest(): Promise<Test> {
    const test = await new Test__factory(this._deployerSigner).deploy();
    return test;
  }
}

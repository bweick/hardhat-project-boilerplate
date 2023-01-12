import { BigNumber } from "ethers";

import { Test } from "../utils/contracts";
import { getAccounts, getWaffleExpect } from "../utils/test";
import { ZERO } from "../utils/constants";
import DeployHelper from "../utils/deploys"

const expect = getWaffleExpect();

describe("Test", () => {
  let testContract: Test;
  let deployer: DeployHelper;

  beforeEach(async () => {
    const [
      owner,
    ] = await getAccounts();
    deployer = new DeployHelper(owner.wallet);
    testContract = await deployer.deployTest();
  });

  describe("setNumber", async () => {
    let subjectNumber: BigNumber;

    beforeEach(async () => {
      subjectNumber = BigNumber.from(100);
    });

    async function subject(): Promise<any> {
      return await testContract.setNumber(subjectNumber);
    }

    it("should set the number", async () => {
      const preResult = await testContract.number();
      expect(preResult).to.eq(ZERO);

      await subject();

      const result = await testContract.number();
      expect(result).to.eq(subjectNumber);
    });
  });
});

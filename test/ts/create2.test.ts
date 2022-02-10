import { expect } from "chai";
import forEach from "mocha-each";

import { computeProxyAddress } from "../../src/create2";
import { DEPLOYER_ADDRESS, SEED_ONE, SEED_ZERO } from "../shared/constants";

export function shouldBehaveLikeCreate2(): void {
  const testSets = [
    [DEPLOYER_ADDRESS, SEED_ZERO, "0x472DE11521269dc932A577f778815c94c23724D0"],
    [DEPLOYER_ADDRESS, SEED_ONE, "0x1ef1E080142A8f3fF75c3580523A92aa2095Df7D"],
    [
      DEPLOYER_ADDRESS,
      "0x250cf77c5e9ae4bc917c7f2cb1b42e3e5d7cd29de5199c2ac358ecb811311a59",
      "0xE6aba9294042D1B1642fA7475A72d28aB0d70f3C",
    ],
  ];

  forEach(testSets).it(
    "takes %.6s... and %.8s... and returns %.6s...",
    function (deployer: string, seed: string, expected: string) {
      const result: string = computeProxyAddress(deployer, seed);
      expect(expected).to.equal(result);
    },
  );
}

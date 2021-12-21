import { expect } from "chai";
import forEach from "mocha-each";

import { computeProxyAddress } from "../../src/create2";
import { DEPLOYER_ADDRESS, SEED_ONE, SEED_ZERO } from "../shared/constants";

export function shouldBehaveLikeCreate2(): void {
  const testSets = [
    [DEPLOYER_ADDRESS, SEED_ZERO, "0x00e3e84a1a205a5baF7F53119fac85692c443d91"],
    [DEPLOYER_ADDRESS, SEED_ONE, "0xb9ED98560469bC158868672785Edf5291E3cA60D"],
    [
      DEPLOYER_ADDRESS,
      "0x250cf77c5e9ae4bc917c7f2cb1b42e3e5d7cd29de5199c2ac358ecb811311a59",
      "0x2F43ac076EA071B858C96Eb34a771F7dC9Ec1768",
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

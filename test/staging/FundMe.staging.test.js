const { ethers, getNamedAccounts, network } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config");
const { assert } = require("chai");
developmentChains.includes(network.name)
    ? describe.skip
    : describe("FundMe", async () => {
          let fundMe, deployer;
          const sendValue = ethers.utils.parseEther("1");
          beforeEach(async () => {
              deployer = (await getNamedAccounts()).deployer;
              console.log(deployer);
              fundMe = await ethers.getContract("FundMe", deployer);
          });

          it("allows people to fund and withdraw", async () => {
              await fundMe.fund({ value: sendValue, gasLimit: "1000000" });
              await fundMe.withdraw();
              const endingBalance = await ethers.provider.getBalance(
                  fundMe.address
              );
              assert.equal(endingBalance.toString(), "0");
          });
      });

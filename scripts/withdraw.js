const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
    const deployer = (await getNamedAccounts()).deployer;
    const fundMe = await ethers.getContract("FundMe", deployer);
    console.log("Withdraw contract....");
    const transactionReponse = await fundMe.withdraw();
    await transactionReponse.wait(1);
    console.log("Withdraw!");
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });

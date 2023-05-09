const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
    const deployer = (await getNamedAccounts()).deployer;
    const fundMe = await ethers.getContract("FundMe", deployer);
    console.log("Funding contract....");
    const transactionReponse = await fundMe.fund({
        value: ethers.utils.parseEther("0.1"),
    });
    await transactionReponse.wait(1);
    console.log("Funded!");
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });

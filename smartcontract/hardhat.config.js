// https://eth-goerli.g.alchemy.com/v2/KAmOQxNEBMU7O5n1SHNhSafDx0Laea11

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/KAmOQxNEBMU7O5n1SHNhSafDx0Laea11",
      accounts: [
        "7b2c43019f5833e258801cb8be686d7227ca564086aa88a9d44a28d5e76676c0",
      ],
    },
  },
};

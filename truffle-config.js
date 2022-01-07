const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider")
require('dotenv').config();
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      network_id: "*",
      host: 'localhost',
      port: 8545
    },
 polygon : {
    provider: () => new HDWalletProvider(process.env.MNEMONIC, 
      "https://rpc-mumbai.maticvigil.com"),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 6000000,
      gasPrice: 10000000000,
  }

  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
 
};

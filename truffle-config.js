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
      skipDryRun: true
  }

  ,

  matic: {
    provider: function() {
      return new HDWalletProvider(process.env.MNEMONIC,
         "https://rpc-mumbai.maticvigil.com/")
    },
    network_id: 80001,
    gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
  }

  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
 
};

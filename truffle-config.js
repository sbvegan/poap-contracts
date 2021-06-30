const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    local: {
      host: 'localhost',
      port: 9545,
      gas: 5000000,
      gasPrice: 5e9,
      network_id: '*',
    },
    ropsten: {
      provider: function() {
        if (!process.env.POAP_ROPSTEN_PK) {
          console.error('POAP_ROPSTEN_PK env variable is needed');
          process.abort();
        }
        return new HDWalletProvider(
          process.env.POAP_ROPSTEN_PK,
          'https://ropsten.infura.io/v3/cf7a7eed37254ec4b95670607e76a917'
        );
      },
      gas: 5000000,
      gasPrice: 5e9,
      network_id: 3,
    },
    kovan: {
      provider: function() {
        if (!process.env.POAP_KOVAN_PK) {
          console.error('POAP_KOVAN_PK env variable is needed');
          process.abort();
        }
        return new HDWalletProvider(
          process.env.POAP_ROPSTEN_PK,
          'https://kovan.infura.io/v3/cf7a7eed37254ec4b95670607e76a917'
        );
      },
      gas: 5000000,
      gasPrice: 5e9,
      network_id: 3,
    },
    sokol: {
      provider: function() {
        if (!process.env.POAP_SOKOL_PK) {
          console.error('POAP_SOKOL_PK env variable is needed');
          process.abort();
        }
        return new HDWalletProvider(
          process.env.POAP_SOKOL_PK,
          "https://sokol.poa.network"
        );
      },
      gas: 5000000,
      gasPrice: 5e9,
      network_id: 77,
    },
    xdai: {
      provider: function() {
        if (!process.env.POAP_XDAI_PK) {
          console.error('POAP_XDAI_PK env variable is needed');
          process.abort();
        }
        return new HDWalletProvider(
          process.env.POAP_XDAI_PK,
          "https://dai.poa.network"
        );
      },
      gas: 5000000,
      gasPrice: 5e9,
      network_id: 100,
    },
    mainnet: {
      provider: function() {
        if (!process.env.POAP_MAIN_PK) {
          console.error('POAP_MAIN_PK env variable is needed');
          process.abort();
        }
        return new HDWalletProvider(
          process.env.POAP_MAIN_PK,
          'https://mainnet.infura.io/v3/cf7a7eed37254ec4b95670607e76a917'
        );
      },
      gas: 5000000,
      gasPrice: 5e9, // 5 gwei (check https://ethgasstation.info/)
      network_id: 1,
    },
    binancetestnet: {
      provider: function() {
        if (!process.env.POAP_BINANCE_TEST_PK) {
          console.error('POAP_BINANCE_TEST_PK env variable is needed');
          process.abort();
        }
        return new HDWalletProvider(
          process.env.POAP_BINANCE_TEST_PK,
          'https://data-seed-prebsc-1-s1.binance.org:8545'
        );
      },
      gas: 5000000,
      gasPrice: 50e9,
      network_id: 97,
    },
    mumbai: {
      provider: function() {
        if (!process.env.POAP_MUMBAI_TEST_PK) {
          console.error('POAP_MUMBAI_TEST_PK env variable is needed');
          process.abort();
        }
        return new HDWalletProvider(
          process.env.POAP_MUMBAI_TEST_PK,
          'https://rpc-mumbai.maticvigil.com'
        );
      },
      gas: 5000000,
      gasPrice: 1e9,
      network_id: 80001,
    },
    polygon: {
      provider: function() {
        if (!process.env.POAP_POLYGON_PK) {
          console.error('POAP_POLYGON_PK env variable is needed');
          process.abort();
        }
        return new HDWalletProvider(
          process.env.POAP_POLYGON_PK,
          'https://rpc-mainnet.maticvigil.com'
        );
      },
      gas: 5000000,
      gasPrice: 1e9,
      network_id: 137,
    },
  },
};

require('@nomiclabs/hardhat-waffle');
require('dotenv').config({ path: '.env' });

const PROD_ALCHEMY_API_KEY_URL = process.env.PROD_ALCHEMY_API_KEY_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY_MAIN;

module.exports = {
  solidity: '0.8.10',
  networks: {
    mainnet: {
      chainId: 137,
      url: PROD_ALCHEMY_API_KEY_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

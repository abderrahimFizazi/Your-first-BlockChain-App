require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/mi_X23vNyWFDmSxYObBjNopupmD0ekKU',
      accounts: ['abec7b4a5dabaeb940f45ff06cfd02d7db2b3bdd1147ed332424cf1f6a0d7592'],
    },
  },
};
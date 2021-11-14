require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name regret spider evil hunt perfect fringe genre'; 
let testAccounts = [
"0xa69ad799a15d6978cd2cca25bf6fe1db7221a64ba1ea5afe87084b4a87720f42",
"0x0fbf843d99c71b42fd6c8a6dbfab39d6bce12ed0b6316fbba7d9ff182f447bd2",
"0xb52caed4aaaa866cf4427e39aed40ea278eedbb96237bc23e41e3fb43c4f262e",
"0x431761505dc8164206d3fe373899cb8e0dcaf6597c8093fc82803939cb5ffb89",
"0x742a05a361ec3a870e62fd1fc1f4d334b1eebf453cfcede1161f30c5264e5f94",
"0x1ab4aa0324e53393bf2e6d87eb97486727d63a5a4998f999f550abc4e763ee8f",
"0x8c7f150839704dac01ac2c76b6c5710f3e1db40147cd863db0ea97300530f935",
"0xfe788d336e95401a311d95fed77954631c6a5762c93479e3b14444f280dd7fec",
"0xb476585da0dcbc087c3d41375289817704276484722051383f298d9b97323691",
"0xb05c05ac2ffe6dfa8552f494c116fe69379bca7481ca8855ece28cf0a48ee119"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



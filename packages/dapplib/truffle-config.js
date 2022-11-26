require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million purpose install clog bone toss'; 
let testAccounts = [
"0x71642b4ea905054d39623c602952307a8bcb0bff3c94ee243f4409d8bc8bcaf6",
"0xee46dcc80a2d9dd087733b931bd365e59f9b2caf9febb3de856597d6ffb22877",
"0x7584d85b4f3be47801cea7dff187a5afc197cce72f9f4790f7d2ffd4294f8c4a",
"0x5d250e5c2fb07ead70d5b6f5f042e4a07c779add55552e3c2afe7209afddd972",
"0x5644724ed40947d3a03d2531cb2bb64946f8a9cceec5b7e34cceae448401a516",
"0x304f9bfa04d796190cc16ed07ee766ba5c4b28c1fdfa04db468cd8d2054a8de2",
"0x4e05c15798c06121dabb951b6b8ad67cc013e6612acae11df1a8f80998991637",
"0x21da553676c9dd3d9faac2e3e39a8c29ebdc3c95de8cd45bbc6ec46fa9e0bd60",
"0x18fe50d5912994e010ed0c89696fc2031953dc2a296282d0489582004b4ed5ed",
"0x46d61e08c704abed66c455d8de1b2b5975e5777631057df2e571efe40a82aae6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


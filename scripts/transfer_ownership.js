const ethers = require('ethers');

const ProxyAdminABI = [{
  "constant": true,
  "inputs": [{"name": "proxy", "type": "address"}],
  "name": "getProxyImplementation",
  "outputs": [{"name": "", "type": "address"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "proxy", "type": "address"}, {"name": "newAdmin", "type": "address"}],
  "name": "changeProxyAdmin",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "owner",
  "outputs": [{"name": "", "type": "address"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "isOwner",
  "outputs": [{"name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "proxy", "type": "address"}, {"name": "implementation", "type": "address"}, {
    "name": "data",
    "type": "bytes"
  }],
  "name": "upgradeAndCall",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "proxy", "type": "address"}, {"name": "implementation", "type": "address"}],
  "name": "upgrade",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "newOwner", "type": "address"}],
  "name": "transferOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "proxy", "type": "address"}],
  "name": "getProxyAdmin",
  "outputs": [{"name": "", "type": "address"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "anonymous": false,
  "inputs": [{"indexed": true, "name": "previousOwner", "type": "address"}, {
    "indexed": true,
    "name": "newOwner",
    "type": "address"
  }],
  "name": "OwnershipTransferred",
  "type": "event"
}];

const provider = new ethers.providers.JsonRpcProvider();
const proxyAdminAddress = '0xDD3C426fA842F890BCb793DA6ccD749Edb09c44B';

const wallet = new ethers.Wallet('',  provider);

const newProxyAdmin = '0xa7c257324B69406964622cDD981dB832D6370082'; // New
const contract = new ethers.Contract(proxyAdminAddress, ProxyAdminABI, wallet);

const main = async () => {
  console.log(`Transfering ownership!`);

  const currentOwner = await contract.functions.owner();
  console.log(`Current owner: ${currentOwner}`);
  const tx = await contract.functions.transferOwnership(newProxyAdmin, {gasPrice: 10000000000, gasLimit: 750000});
  await tx.wait();

  const newOwner = await contract.functions.owner();
  console.log(`New owner: ${newOwner}`);
};

main().catch(console.log);

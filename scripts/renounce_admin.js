const ethers = require('ethers');
const artifact = require('../build/contracts/Poap.json');

const provider = new ethers.providers.JsonRpcProvider('');
const wallet = new ethers.Wallet('',  provider);
const contract = new ethers.Contract('0x22C1f6050E56d2876009903609a2cC3fEf83B415', artifact.abi, wallet);

async function renounceAdmin() {
  const isAdmin = await contract.functions.isAdmin(wallet.address);
  if (isAdmin) {
    const tx = await contract.functions.renounceAdmin({gasPrice: 10000000000, gasLimit: 750000});
    await tx.wait();
    console.log('renounce address ', wallet.address, ' - ', tx.hash);
  }
}

renounceAdmin();

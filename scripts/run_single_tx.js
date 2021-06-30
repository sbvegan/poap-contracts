const ethers = require('ethers');

const provider = new ethers.providers.JsonRpcProvider('');
const wallet = new ethers.Wallet('',  provider);


const main = async () => {
  console.log(`Sending from: ${wallet.address}`);
  const tx = await wallet.sendTransaction({
    gasLimit: 1000000,
    gasPrice: 1e9,
    to: wallet.address,
    value: ethers.utils.parseUnits('0', 'ether').toHexString()
  });
  await tx.wait();
  console.log(`Sent tx: ${tx.nonce}`);
};
main().catch(console.log);

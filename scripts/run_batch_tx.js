const ethers = require('ethers');

const provider = new ethers.providers.JsonRpcProvider('');
const wallet = new ethers.Wallet('',  provider);

const main = async () => {
  const initialCount = await wallet.getTransactionCount();
  console.log(`Sending from: ${wallet.address} - Initial Count: ${initialCount}`);
  for( let i = 0; i + initialCount < 810; i++ ) {
    const tx = await wallet.sendTransaction({
      gasLimit: 1000000,
      gasPrice: 1e9,
      to: wallet.address,
      value: ethers.utils.parseUnits('0', 'ether').toHexString()
    });
    await tx.wait();
    console.log(`Sent tx: ${tx.nonce}`);
  }
  console.log(await wallet.getTransactionCount());
  console.log(ethers.utils.formatEther(await wallet.getBalance()));
};
main().catch(console.log);

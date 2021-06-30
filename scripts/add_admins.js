const ethers = require('ethers');
const artifact = require('./build/contracts/Poap.json');

const provider = new ethers.providers.JsonRpcProvider('');
const wallet = new ethers.Wallet('',  provider);
const contract = new ethers.Contract('0x22C1f6050E56d2876009903609a2cC3fEf83B415', artifact.abi, wallet);

const addressList = [
  '0xa7c257324B69406964622cDD981dB832D6370082',
  '0xb80f80d58fe1fc7254223c0d47849cb16106a1c8',
  '0xb6f99154cb6910e8ca856103e0b8bb61702b103f',
  '0x191167380d430036ca2cb067ab86b527e3d584ee',
  '0x4c25c9b42eb2a70f1040fe5f76baac85e5b9cc5a',
  '0xa9097d6317bc03dd50222785134eaafc30fa9913',
  '0xb2d9fcd799a91ffe9997728f8358abca37ad8986',
  '0x1f4fe9d5e315c12004dfd0e5d628abb270d84032',
  '0x4a1488583c89411fc9efe0e30d240c80b04ce606',
  '0x667fd8907f28880487f30e499bc8ee21a3184a3f',
  '0xb293f27a70f70ee42835bd5a429200c13814dd8f',
  '0xb665f05999806c4eae31829872d8483e11869470',
  '0x1bb91c07ba42753b18efec94455e74346de4f58b',
  '0x2f2675ac285e8a65c5c216d28c514dc4fb5f244b',
  '0x140af2c6bcdeeee0057eefc046bd52c31fa53df3',
  '0x495dac0e20757ec29d6e9484ac31209f0ae3c435',
  '0xb51b94cca07a9a7e80e4c4c140250098a7d9697b',
  '0x41bdc128f607a1283a93fd0c7ef1bccbd2cc5c27',
  '0x908ebd60b104a8011f00306ae6f9dbf4bff35d9f',
  '0x740c80db8ab3bacb83e6a9fc2fe721d73b9a734d'
];

async function addAdmin(addressList) {
  for (let address of addressList) {
    try{
      const isAdmin = await contract.functions.isAdmin(address);
      if (!isAdmin) {
        const tx = await contract.functions.addAdmin(address, {gasPrice: 10000000000, gasLimit: 750000});
        await tx.wait();
        console.log(address, tx);
      }
    } catch (e) {
      console.log('Error ' + address);
      console.log(e);
    }
  }
}

addAdmin(addressList);

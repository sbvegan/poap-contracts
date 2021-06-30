# Polygon deployment

## Address nonce setup
Make sure to that last TX sent by `0xe583f95bF95d0883F94EfE844442C8bfc9dd7A7F` has nonce `813`.

Scripts to help:
- `run_batch_tx.js` to get nonce to 800
- `run_single_tx.js` to execute only one tx

## Contracts deploy
```
npx zos session --network polygon --from 0xe583f95bF95d0883F94EfE844442C8bfc9dd7A7F --expires 3600
npx zos push
npx zos create PolyPoap --init initialize --args '"POAP","The Proof of Attendance Protocol","https://api.poap.xyz/metadata/",[]'
``` 

## Proxy admin owner
We need to transfer the ownership of the ProxyAdmin to a new address

```
npx zos session --network polygon --from 0xe583f95bF95d0883F94EfE844442C8bfc9dd7A7F --expires 3600
zos set-admin
``` 
Pick a network, select `All instances` and set the new admin `0xa7c257324B69406964622cDD981dB832D6370082`

If it fails, you can use the script at `scripts/transfer_ownership.js`

## How to upgrade
Start a new session with new Proxy Admin owner
```
npx zos session --network polygon --from 0xa7c257324B69406964622cDD981dB832D6370082 --expires 3600
npx zos push
npx zos update PolyPoap
```

## Add admins
Use the script at `scripts/add_admins.js` to add event minters

## Renounce Event Admin
The POAP Deployer address is now admin on the contract logic. It's necessary to remove it.
Use the script at `scripts/renounce_admin.js`

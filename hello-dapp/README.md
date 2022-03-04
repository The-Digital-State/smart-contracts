# Hello World Smart Contract

Update wallet address in Anchor.toml. Get wallet address using:

`solana config get`

- Copy Keypair Path and paste it as value of wallet in Anchor.toml in double quotes

---

## Deploy the program to localnet

Check if you are on localnet cluster:

`solana config get` (Check if rpc url is a localhost url)

If not on localnet run the following command:

`solana config set --url localhost`

In Anchor.toml: `Set cluster = "localnet"`

Build the program:

`anchor build`

Get the actual program id using:

`solana address -k target/deploy/<PROGRAM_NAME>-keypair.json`

(For this repo replace <PROGRAM_NAME> with solana_dapp )

Update program id:

- In Anchor.toml: Below [programs.localnet] update the program id in front of program name (solana_dapp) with the new program id
- In lib.rs: Update the program id used in the declare_id! function with the new one

Build the program again:

`anchor build`

Open another terminal to create and run local instance of the solana cluster:
`solana-test-validator`

Deploy to localnet:

`anchor deploy`

Open Solana Explorer Devnet (https://explorer.solana.com/?cluster=localnet) and verify if it was successfully deployed by providing the program id.

(Note: Above steps need to be performed only for the first time. After any further updates in our program, we just need to run `anchor build` and `anchor deploy`)

---

## Deploy the program to devnet.

Check if you are on devnet cluster:

`solana config get` (Check if rpc url is a devnet url)

If not on devnet run the following command:

`solana config set --url devnet`

In Anchor.toml: `Set cluster = "devnet"`

Build the program:

`anchor build`

Get the actual program id using:

`solana address -k target/deploy/<PROGRAM_NAME>-keypair.json`

(For this repo replace <PROGRAM_NAME> with solana_dapp )

Update program id:

- In Anchor.toml: Below [programs.devnet] update the program id in front of program name (solana_dapp) with the new program id
- In lib.rs: Update the program id used in the declare_id! function with the new one

Build the program again:

`anchor build`

Deploy to devnet:

`anchor deploy`

Open Solana Explorer Devnet (https://explorer.solana.com/?cluster=devnet) and verify if it was successfully deployed by providing the program id.

(Note: Above steps need to be performed only for the first time. After any further updates in our program, we just need to run `anchor build` and `anchor deploy`)

Test program (This will run the test code present in tests folder):

`anchor test`

---

## Local Testing using Browser UI (Dapp)

(Code present in app folder)

Update app/src/idl.json file by copy-pasting the content of target/idl/solana_dapp.json file

NOTE: After every deploy of an updated program we need to perform above operation.

`cd app`

`yarn`

`yarn start`

Now we can create a hello transaction on solana blockchain by connecting our wallet and pressing hello button.

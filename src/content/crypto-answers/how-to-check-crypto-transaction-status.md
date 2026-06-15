---
title: "How to Check If a Crypto Transaction Went Through"
description: "Sent crypto but it hasn't arrived? Here's how to check transaction status on any blockchain and what to do if it's stuck."
date: 2026-06-15
lastUpdated: 2026-06-15
tags:
  - transactions
  - blockchain
  - beginners
  - troubleshooting
categories:
  - crypto-answers
---

**Question from BitcoinTalk:** "I sent crypto an hour ago and it's not showing up. How do I check if it went through?"

**Short answer:** Use a blockchain explorer to look up your transaction by its hash (TXID). Every blockchain has a public explorer where you can see exactly what happened to your transaction.

## What Is a Blockchain Explorer?

A blockchain explorer is a website that lets you search and view all transactions on a blockchain. Think of it as Google for the blockchain — you can search any address, transaction hash, or block.

**Explorers by blockchain:**
- **Bitcoin:** Mempool.space, Blockchain.com
- **Ethereum:** Etherscan.io
- **Solana:** Solscan.io
- **Polygon:** Polygonscan.com
- **Litecoin:** Litecoin.space
- **All chains:** Blockchair.com (aggregator)

## How to Find Your Transaction

1. **Get the TXID (Transaction Hash)** — From the exchange or wallet where you sent the crypto. It looks like a long string of letters and numbers.
2. **Go to the correct explorer** — Use the explorer for the blockchain you sent on
3. **Paste the TXID** — You'll see the full transaction details

## What the Transaction Status Means

| Status | Meaning | What to Do |
|---|---|---|
| Pending / Unconfirmed | Waiting for miners/validators | Wait — may take minutes to hours |
| Confirmed | Added to a block | Transaction is final |
| Failed | Transaction didn't process | Check error, retry with higher fee |
| Dropped / Stuck | Replaced by another tx | Wait for timeout or resend |
| Completed but not received | Wrong network or address | Check address carefully |

## Stuck Transactions: What to Do

If a transaction is stuck (pending for hours or days):

### Bitcoin transactions
- **Check mempool congestion** — Mempool.space shows how many unconfirmed transactions
- **Replace-by-fee (RBF)** — If enabled, you can resend with a higher fee
- **CPFP (Child Pays for Parent)** — Spend the unconfirmed output with a high-fee transaction
- **Wait** — Transactions eventually confirm or drop after ~7 days

### Ethereum transactions
- **Cancel or speed up** — MetaMask lets you cancel or speed up pending transactions
- **Resend with higher gas** — Check current gas prices on Etherscan
- **Wait for nonce timeout** — Pending transactions expire if not picked up

## Common Transaction Issues

### Sent to Wrong Network
If you sent USDC on Ethereum to a Solana address, the funds are not recoverable. Always use the same network for sending and receiving.

### Insufficient Gas
If you didn't include enough gas fee, validators may ignore your transaction. Resend with a higher gas price.

### Nonce Issues (Ethereum)
If you sent multiple transactions and one failed, later transactions may be stuck. Reset your wallet's nonce or use the "clear pending" feature.

## Verdict
Always get the TXID when sending crypto. Bookmark the relevant blockchain explorer. If the transaction shows "Confirmed" on the explorer, the blockchain processed it — any issue is on the receiving end.

*Related: [What Is Gas? Transaction Fees Explained](/crypto-answers/what-is-gas-crypto-transaction-fees/) | [What to Do If You Send Crypto to Wrong Address](/crypto-answers/what-to-do-send-crypto-wrong-address/) | [How to Use a Blockchain Explorer](/crypto-basics/how-to-use-blockchain-explorer/)*

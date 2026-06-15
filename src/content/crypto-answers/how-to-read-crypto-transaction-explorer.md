---
title: "How to Read a Crypto Transaction on a Block Explorer"
description: "A block explorer shows every detail of a crypto transaction. Here's how to read what each field means and verify any transaction."
date: 2026-06-15
lastUpdated: 2026-06-15
tags:
  - blockchain
  - explorers
  - beginners
  - transactions
categories:
  - crypto-answers
---

**Question from BitcoinTalk:** "Someone sent me BTC but I can't see it. How do I use a block explorer to check?"

**Short answer:** A block explorer shows the full life of a transaction. Enter the TXID (transaction hash) on the correct explorer (Mempool.space for Bitcoin, Etherscan for Ethereum). Check "Status" = Confirmed, "To" = your address, "Value" = correct amount. If it's confirmed and shows your address, the crypto is in your wallet.

## Anatomy of a Transaction

Every blockchain transaction has the same structure:

- **Transaction Hash (TXID)** — Unique identifier (like a receipt number)
- **Status** — Pending, Confirmed, or Failed
- **Block** — Which block included the transaction
- **Timestamp** — When it was processed
- **From** — The sender's address
- **To** — The receiver's address
- **Value** — Amount transferred
- **Fee** — Network fee paid by the sender

## Reading a Bitcoin Transaction

On Mempool.space, a Bitcoin transaction shows:

- **Inputs** — Which UTXOs (unspent outputs) are being spent
- **Outputs** — Where the BTC is going (receiver + change back to sender)
- **Fee rate** — Satoshis per vbyte (higher = faster confirmation)
- **Size** — Transaction size in virtual bytes (larger = higher fee)
- **Confirmations** — How many blocks have been mined since

**What to verify:**
- Your address appears in one of the outputs
- The value going to your address matches the expected amount
- Status shows at least 1 confirmation

## Reading an Ethereum Transaction

On Etherscan, an Ethereum transaction shows:

- **Transaction Hash** — Unique ID
- **Status** — Success or Failed
- **Block** — Block number (e.g., 20,123,456)
- **From/To** — Sender and receiver
- **Value** — ETH amount (in ETH or Wei)
- **Gas Used** — Actual gas consumed (usually 21,000 for simple transfers)
- **Gas Price** — Price paid per unit of gas (in Gwei)
- **Transaction Fee** — Gas Used × Gas Price

**For ERC-20 token transfers:** Check the "Token Transfer" tab — ERC-20 transfers don't show in the main ETH value field.

## Common Fields on Any Explorer

| Field | What It Means | Why Check It |
|---|---|---|
| TXID / Hash | Transaction ID | Bookmark for tracking |
| Status / Result | Success / Pending / Failed | Did the transaction go through? |
| Block | Block number that included this tx | How many confirmations? |
| From | Sender's address | Is this the expected sender? |
| To | Receiver's address | Is this your address? |
| Value | Amount transferred | Is the amount correct? |
| Fee | Network fee | Did the sender pay enough? |
| Token Transfer | Token details | For USDC, USDT, other tokens |

## Using Explorers for Each Blockchain

| Blockchain | Best Explorer | What to Check |
|---|---|---|
| Bitcoin | Mempool.space | Fee rate, confirmation count |
| Ethereum | Etherscan.io | Gas used, token transfers |
| Solana | Solscan.io | Transaction status, account changes |
| Polygon | Polygonscan.com | Similar to Etherscan |
| BNB Chain | Bscscan.com | Similar to Etherscan |
| Arbitrum | Arbiscan.io | L1 and L2 fees |
| Optimism | Optimistic.etherscan.io | L1 and L2 fees |

## How to Verify a Payment

1. Get the TXID from the sender
2. Go to the correct explorer for that blockchain
3. Paste the TXID in the search bar
4. Check: STATUS = Confirmed
5. Check: TO = your address (exact match)
6. Check: VALUE = correct amount
7. Check: CONFIRMATIONS = at least 1 (wait for 6 for high-value)

## Red Flags

- **Unconfirmed for hours** — Check mempool congestion
- **Status = Failed** — Internal error, transaction didn't process
- **Wrong TO address** — Confirm the address character by character
- **Token transfer tab is empty** — For ERC-20 tokens, check the tab specifically

## Verdict
A block explorer is the most important verification tool in crypto. If you can read a transaction on the explorer, you never need to trust someone's word that they sent payment. Always verify the TO address, the value, and the confirmation status.

*Related: [How to Check Transaction Status](/crypto-answers/how-to-check-crypto-transaction-status/) | [How to Use a Blockchain Explorer](/crypto-basics/how-to-use-blockchain-explorer/) | [What to Do if Sent to Wrong Address](/crypto-answers/what-to-do-send-crypto-wrong-address/)*

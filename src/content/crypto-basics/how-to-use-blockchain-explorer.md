---
title: "How to Use a Blockchain Explorer: Track Any Transaction"
description: "Blockchain explorers let you look up any transaction, wallet, or block. Here's how to use Etherscan, Solscan, and other explorers like a pro."
date: 2026-06-14
lastUpdated: 2026-06-14
tags:
  - blockchain
  - beginners
  - tools
categories:
  - crypto-basics
---

A blockchain explorer is a search engine for the blockchain. You can look up any wallet address, transaction, or block to see its complete history.

If you're in crypto, you need to know how to use a blockchain explorer. It's how you verify payments, check wallet balances, investigate suspicious activity, and understand what's happening on-chain.

<aside class="callout tip">
💡 <strong>Everything on the blockchain is public.</strong> Every transaction, every wallet, every interaction. A blockchain explorer is your window into this data.
</aside>

## Popular Blockchain Explorers

| Blockchain | Best Explorer | URL |
|---|---|---|
| Bitcoin | mempool.space | mempool.space |
| Ethereum | Etherscan | etherscan.io |
| Solana | Solscan | solscan.io |
| Polygon | Polygonscan | polygonscan.com |
| Arbitrum | Arbiscan | arbiscan.io |
| Base | Basescan | basescan.io |
| BSC | BscScan | bscscan.com |

## How to Look Up a Transaction

When someone sends you crypto, you'll receive a transaction ID (TXID) — a long string of letters and numbers.

### Step 1: Copy the TXID

Example: `0x8a23f9c4e5b6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2`

### Step 2: Paste into the Explorer

1. Go to Etherscan (for Ethereum) or the appropriate explorer
2. Paste the TXID into the search bar
3. Press Enter

### Step 3: Read the Results

You'll see:

- **Transaction hash** — The unique ID of this transaction
- **Status** — Success or Failed
- **Block** — Which block included this transaction
- **From** — The sender's wallet address
- **To** — The recipient's wallet address
- **Value** — The amount transferred
- **Fee** — The gas fee paid
- **Gas price** — The price per unit of gas

## How to Look Up a Wallet Address

1. Copy the wallet address (starts with 0x for Ethereum, bc1 for Bitcoin, etc.)
2. Paste into the explorer search bar
3. You'll see:
   - **Balance** — Current balance in the wallet
   - **Total received/sent** — Lifetime activity
   - **Token holdings** — ERC-20 tokens in the wallet
   - **Transaction history** — Chronological list of all transactions

## Key Features to Know

### Transaction Status

- **Success** — Transaction confirmed and irreversible
- **Pending** — Waiting for confirmation (unconfirmed)
- **Failed** — Transaction failed (you still paid gas fees)
- **Dropped** — Transaction was cancelled or replaced

### Gas Tracker (Ethereum)

Etherscan shows current gas prices:
- **Low:** Under 10 gwei (slow, cheap)
- **Average:** 10-30 gwei (normal)
- **High:** 30+ gwei (fast, expensive)

Use this to decide how much gas to pay for your transactions.

### Token Approvals

On Etherscan, you can check which smart contracts have approval to use your tokens.

1. Go to your wallet page
2. Click "Token Approvals"
3. You'll see every contract that can spend your tokens
4. Revoke unnecessary approvals using "Revoke" button

<aside class="callout danger">
🚨 <strong>Excessive token approvals are a security risk.</strong> If you've approved a malicious contract, it can drain your tokens. Use Etherscan's Token Approvals page or Revoke.cash to clean up old approvals.
</aside>

### Contract Verification

Verified smart contracts show green checkmarks. Unverified contracts show warnings.

**Only interact with verified contracts.** Unverified contracts could contain malicious code.

### Internal Transactions

Ethereum transactions can trigger multiple internal transactions (e.g., a DEX swap involves multiple transfers). The "Internal Transactions" tab shows all sub-transactions.

## How to Verify a Payment

Someone says they sent you crypto. Here's how to verify:

1. Ask for the TXID
2. Paste into the appropriate explorer
3. Check:
   - **Status:** Is it confirmed (1+ block confirmations)?
   - **To:** Is your wallet address the recipient?
   - **Value:** Is the amount correct?
   - **Token:** Is it the right token (ETH, USDC, etc.)?

## How to Investigate a Suspicious Wallet

1. Paste the wallet address into the explorer
2. Check the transaction history for patterns
3. Look at the "To" and "From" addresses — are they exchanges (Coinbase, Binance)?
4. Check how long the wallet has been active
5. Look at the balance and token holdings

## Advanced Features

### NFT Tracker

Etherscan and Solscan show NFT holdings and transaction history for any wallet.

### Read Contract

View a smart contract's source code and interact with its read-only functions.

### Write Contract

Interact with a smart contract directly (advanced — requires understanding the contract ABI).

## Mobile Apps

| Explorer | Mobile App |
|---|---|
| Etherscan | Etherscan (iOS/Android) |
| Solscan | Solscan (web, mobile-responsive) |
| mempool.space | mempool.space (mobile web) |

## Blockchain Explorer Safety Tips

1. **Only use official URLs** — Fake explorer sites exist and can steal your information
2. **Never connect your wallet** — Legitimate explorers don't ask you to connect
3. **Never enter your seed phrase** — No explorer ever needs your seed phrase
4. **Bookmark the official sites** — Phishing sites use similar URLs

## Verdict

Blockchain explorers are essential tools for every crypto user. They let you verify transactions, check balances, investigate suspicious wallets, and understand what's happening on-chain.

Start with Etherscan (for Ethereum), Solscan (for Solana), and mempool.space (for Bitcoin). Bookmark them. Use them regularly. The more you explore, the better you'll understand how blockchains actually work.

*Related: [What Is On-Chain Analysis?](/crypto-basics/what-is-on-chain-analysis/) | [How to Research a Crypto Project](/crypto-basics/how-to-research-crypto-project-before-investing/) | [How to Keep Crypto Safe](/safe-crypto/how-to-keep-crypto-safe-complete-guide/) | [Tokenomics Explained](/crypto-basics/tokenomics-explained-evaluate-crypto-project/)*

*Blockchain explorer tips are shared on BitcoinTalk's Technical Discussion board. Experienced users explain how to read transaction data, spot patterns, and avoid common mistakes. A valuable skill for any serious crypto user.*

---
title: "What Is Gas? Understanding Crypto Transaction Fees"
description: "Gas fees pay for transactions on blockchain networks. Here's how gas works on Ethereum, Solana, and Bitcoin, and why fees vary so much."
date: 2026-06-14
lastUpdated: 2026-06-14
tags:
  - gas
  - fees
  - ethereum
  - transactions
categories:
  - crypto-answers
---

**Question from BitcoinTalk:** "Why did I pay $50 in gas fees for a simple transfer? What is gas and how is it calculated?"

**Short answer:** Gas is the fee you pay to process a transaction on a blockchain. It pays miners or validators for including your transaction in a block. Higher demand = higher fees.

## What Gas Actually Is

On Ethereum and similar blockchains, every operation requires computational work. Sending ETH, swapping tokens, minting NFTs — all require processing power.

**Gas** measures the amount of computational effort required. You pay a fee proportional to the gas your transaction uses.

Think of it like gasoline for a car:
- You pay for the amount of "fuel" your transaction needs
- When traffic is heavy (network congestion), prices go up
- You can choose to pay more for a faster trip, or wait for lighter traffic

## How Gas Fees Are Calculated

```
Total Fee = Gas Units × (Base Fee + Priority Fee)
```

### Gas Units
The amount of computational work your transaction needs.

| Transaction Type | Gas Units |
|---|---|
| Simple ETH transfer | 21,000 |
| ERC-20 token transfer | 40,000 - 65,000 |
| Uniswap swap | 120,000 - 250,000 |
| NFT mint | 60,000 - 150,000 |
| Complex DeFi interaction | 200,000 - 500,000 |

### Base Fee
The minimum fee required to get your transaction into a block. Set by the protocol based on network congestion. This fee is burned (destroyed), reducing ETH supply.

### Priority Fee (Tip)
An optional extra fee you add to incentivize validators to prioritize your transaction. Higher tip = faster confirmation.

## Gas Fee Examples

### When Ethereum is calm (gas price ~20 gwei)
- Simple ETH transfer: 21,000 gas × 20 gwei = 420,000 gwei = $0.60
- Token swap: 150,000 gas × 20 gwei = 3,000,000 gwei = $4.20

### When Ethereum is congested (gas price ~100 gwei)
- Simple ETH transfer: 21,000 × 100 = 2,100,000 gwei = $42
- Token swap: 150,000 × 100 = 15,000,000 gwei = $300

<aside class="callout tip">
💡 <strong>Gas fees fluctuate constantly.</strong> Check the current gas price before making a transaction. If fees are high, wait a few hours — they often drop during off-peak hours (weekends, late night US time).
</aside>

## Gas on Different Blockchains

| Blockchain | Fee Model | Typical Fee (Simple Transfer) | Typical Fee (Swap) |
|---|---|---|---|
| Ethereum (L1) | Gas (gwei) | $1 - $10 | $5 - $100 |
| Bitcoin | Sat/vB | $0.50 - $5 | N/A |
| Solana | Lamports | $0.0002 - $0.01 | $0.001 - $0.05 |
| Arbitrum (L2) | Gas (cheaper L1) | $0.05 - $0.50 | $0.10 - $2 |
| Base (L2) | Gas (cheaper L1) | $0.02 - $0.30 | $0.05 - $1 |
| Polygon | Gas (MATIC) | $0.001 - $0.05 | $0.01 - $0.10 |
| BNB Chain | Gas (BNB) | $0.03 - $0.30 | $0.05 - $1 |

## Why Solana and L2s Are Cheaper

**Solana** processes thousands of transactions per second with a single global state. Less competition for block space means near-zero fees.

**Layer 2s (Arbitrum, Base, Optimism)** bundle hundreds of transactions together and submit them as one batch to Ethereum. Users share the cost of submitting to Ethereum, making individual fees much lower.

**If you're paying high fees, you're probably using Ethereum mainnet directly. Use a Layer 2 instead.**

## Tips to Reduce Gas Fees

### 1. Use Layer 2s
Instead of transacting on Ethereum mainnet, use Arbitrum, Base, or Optimism. The experience is identical, but fees are 90-99% lower.

### 2. Transact During Off-Peak Hours
Gas fees follow predictable patterns:
- **Lowest:** Weekends, late night US time (midnight - 6 AM EST)
- **Highest:** Weekday afternoons US time (when US traders are active)
- **NFT mints** always spike gas (avoid them)

### 3. Set Gas Price Manually
Instead of "fast" or "instant" settings, choose "slow" or "economy." Your transaction will take longer but cost less.

### 4. Use Gas Trackers
- **ETH Gas Station** — Real-time Ethereum gas prices
- **CoinGecko Gas Tracker** — Shows gas across multiple chains
- **Blocknative Gas Estimator** — Chrome extension with live estimates

### 5. Batch Transactions
If you need to do multiple operations (e.g., approve + swap), do them in a single transaction using a DEX aggregator (1inch, ParaSwap).

<aside class="callout warning">
⚠️ <strong>Don't set gas too low or your transaction may get stuck.</strong> If gas prices spike after you submit, your transaction could remain pending for hours or days. You may need to "cancel" it by sending a replacement transaction with a higher gas price.
</aside>

## What Happens If You Set Gas Too Low?

Your transaction enters the mempool (a waiting area for pending transactions). Validators prioritize transactions with higher fees.

**If fees are too low:**
- Your transaction remains pending indefinitely
- You can "replace" it by sending the same transaction with a higher gas fee
- Or you can "cancel" it by sending a zero-value transaction to yourself with a higher gas fee

**On MetaMask:** Click the pending transaction and select "Speed Up" or "Cancel."

## Common Misunderstandings

**"Gas fees go to miners/validators"**
Partly true. The base fee is burned (destroyed). Only the priority fee (tip) goes to validators. This was introduced in Ethereum's EIP-1559 upgrade.

**"I was charged $100 in gas!"**
You weren't charged $100 — you paid $100 worth of ETH as gas. The gas price is set in gwei (1 gwei = 0.000000001 ETH). Always check the estimated $ value before confirming.

**"Gas fees on exchanges are too high"**
Exchange withdrawal fees are NOT gas fees. Exchanges charge a flat withdrawal fee that includes gas plus their own markup. Example: withdrawing ETH from an exchange may show a $5 fee when actual gas is $1 — the exchange keeps the difference.

## Gas Fees by Chain: When to Use What

| Task | Best Chain | Approx Fee |
|---|---|---|
| Send $1,000 in ETH | Base or Arbitrum | $0.05 - $0.50 |
| Swap tokens | Solana or Base | $0.001 - $0.10 |
| Buy an NFT | Polygon or Base | $0.01 - $0.05 |
| Use a DeFi protocol | Arbitrum or Optimism | $0.10 - $2 |
| Large transfer ($100K+) | Ethereum L1 | $2 - $10 |
| Send $5 in crypto | Solana or BNB Chain | $0.001 - $0.05 |

## Verdict

Gas fees pay for blockchain computation. They vary based on network congestion and transaction complexity.

**To avoid high fees:**
- Use Layer 2s (Arbitrum, Base, Optimism) instead of Ethereum mainnet
- Transact during off-peak hours
- Check gas trackers before submitting
- Don't use Ethereum mainnet for small transactions

The good news: L2s and Solana make crypto usable again. If you're paying more than $1 in fees, you're likely using the wrong chain for your transaction size.

*Gas fee complaints are the #1 topic on BitcoinTalk's "Altcoin" board. The solution is almost always: use a Layer 2.*

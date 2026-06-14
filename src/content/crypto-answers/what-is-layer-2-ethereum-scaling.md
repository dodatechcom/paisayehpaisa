---
title: "What Is a Layer 2? Ethereum Scaling Explained for Beginners"
description: "Layer 2s are secondary protocols built on top of Ethereum that process transactions faster and cheaper. Here's how Arbitrum, Base, and Optimism work."
date: 2026-06-14
lastUpdated: 2026-06-14
tags:
  - layer2
  - ethereum
  - scaling
  - arbitrum
categories:
  - crypto-answers
---

**Question from BitcoinTalk:** "Why are Ethereum fees so high? What are Layer 2s and should I use them?"

**Short answer:** Layer 2s (L2s) are networks built on top of Ethereum that process transactions for pennies instead of dollars. In 2026, most people should be using L2s for daily transactions, not Ethereum mainnet.

## The Problem: Ethereum Is Expensive

Ethereum mainnet (Layer 1 or L1) processes about 15-30 transactions per second. When many people want to use it, they compete for block space, driving up fees.

A simple ETH transfer can cost $2-50. A DeFi swap can cost $10-200. These prices make Ethereum unusable for regular people.

**The solution:** Move most transactions off the main chain.

## What Is a Layer 2?

A Layer 2 is a separate blockchain that:
- Processes transactions off the main Ethereum chain
- Periodically submits batches of transactions to Ethereum for final settlement
- Inherits Ethereum's security (your funds are safe even if the L2 fails)

**Analogy:** Ethereum mainnet is a luxury car that's expensive to drive. Layer 2s are buses — they bundle many passengers together and split the cost.

## Major Layer 2s in 2026

| L2 | Type | Market Share | Avg Transaction Fee |
|---|---|---|---|
| **Arbitrum** | Optimistic rollup | ~40% | $0.02-0.10 |
| **Base** | Optimistic rollup (Coinbase) | ~25% | $0.01-0.05 |
| **Optimism** | Optimistic rollup | ~15% | $0.02-0.10 |
| **Blast** | Optimistic rollup | ~8% | $0.02-0.08 |
| **zkSync** | ZK-rollup | ~7% | $0.03-0.15 |
| **Polygon zkEVM** | ZK-rollup | ~3% | $0.02-0.10 |
| **Linea** | ZK-rollup (ConsenSys) | ~2% | $0.02-0.10 |

## Optimistic Rollups vs ZK-Rollups

There are two technologies powering L2s:

### Optimistic Rollups (Arbitrum, Base, Optimism)
- Assume transactions are valid unless someone challenges them
- 7-day withdrawal period (to allow challenges)
- More widely adopted, more compatible with existing apps

**How they work:**
1. Transactions are processed on the L2 instantly
2. Batches are submitted to Ethereum
3. If someone suspects fraud, they have 7 days to submit a "fraud proof"
4. If fraud is proven, the batch is reversed and the fraudster is penalized

### ZK-Rollups (zkSync, Polygon zkEVM, Linea)
- Use zero-knowledge proofs to mathematically verify transactions
- No 7-day waiting period
- Technically more complex but more efficient

**How they work:**
1. Transactions are processed on the L2
2. A zk-proof (cryptographic proof of correctness) is generated
3. The proof is submitted to Ethereum
4. Ethereum instantly verifies the proof — no waiting period needed

## How to Use a Layer 2

### Step 1: Bridge Funds
Move ETH from Ethereum mainnet to the L2 using a bridge (Arbitrum Bridge, Base Bridge).

**Cost:** $2-10 for the bridge transaction (one-time)
**Time:** A few minutes

### Step 2: Add the L2 to Your Wallet
MetaMask auto-detects popular L2s. Alternatively, add the network manually using chainlist.org.

### Step 3: Use It Like Normal
Once on an L2, everything works the same as Ethereum mainnet — but fees are 99% cheaper.

**You can:**
- Send ETH for $0.02
- Swap tokens for $0.10
- Provide liquidity for $0.20
- Mint NFTs for $0.05

## Which L2 Should You Use?

| Situation | Best L2 |
|---|---|
| Most people | Arbitrum (largest ecosystem, most apps) |
| US users, Coinbase holders | Base (Coinbase-backed, growing fast) |
| DeFi farming | Arbitrum (most DeFi protocols) |
| New to L2s | Base (simplest UX, Coinbase integration) |
| Low fees + security | Optimism or Arbitrum |
| Instant withdrawals | zkSync (no 7-day wait) |

<aside class="callout tip">
💡 <strong>Use Base if you're a Coinbase user.</strong> Base was built by Coinbase and integrates seamlessly with their exchange. You can transfer between Coinbase and Base instantly with zero fees in many cases.
</aside>

## The 7-Day Withdrawal Wait

Optimistic rollups have a 7-day delay when withdrawing from L2 back to Ethereum mainnet. This is the fraud proof window.

**How to bypass the wait:**
- Use a "fast bridge" service (pays a fee to get instant settlement)
- Withdraw to an exchange (most exchanges support direct L2 deposits)
- Use a CEX (centralized exchange) as a middleman

## Are L2s Safe?

**Yes — they inherit Ethereum's security.**

If an L2 fails or gets attacked:
- The data is stored on Ethereum
- Users can exit with their funds (forcefully withdraw)
- Worst case: temporary delays, not loss of funds

**However:** Bridges between L2s can be hacked. Several bridge hacks have occurred ($300M+ lost). Use official bridges when moving between networks.

## Why You Should Use L2s

### For Beginners
- Lower fees mean you can actually use crypto without losing 50% to gas
- Base is especially beginner-friendly with Coinbase integration
- Everything works the same as Ethereum mainnet

### For DeFi Users
- Most DeFi protocols have migrated to L2s
- You earn similar yields with 99% lower fees
- Arbitrum has the deepest liquidity for farming

### For Everyone
- Ethereum mainnet is for whales and large transactions ($10K+)
- L2s are for regular people doing regular transactions
- The future of Ethereum is L2-centric

## Verdict

Layer 2s are not a niche feature — they're how Ethereum works in 2026. If you're paying more than $0.50 for any Ethereum transaction, you're using the wrong network.

**Start with Arbitrum or Base.** Bridge some ETH over, try a few transactions, and see how much cheaper everything is. You'll never go back to mainnet for daily use.

*Related: [What Is Gas? Transaction Fees Explained](/crypto-answers/what-is-gas-crypto-transaction-fees/) | [What Is DeFi?](/crypto-basics/what-is-defi-decentralized-finance-explained/) | [Centralized vs Decentralized Exchanges](/crypto-answers/centralized-vs-decentralized-exchanges/)*

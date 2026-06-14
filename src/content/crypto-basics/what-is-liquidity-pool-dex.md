---
title: "What Is a Liquidity Pool? How Decentralized Exchanges Work"
description: "Liquidity pools power decentralized exchanges. Users deposit tokens into pools, earn trading fees, and enable instant swaps. Here's how they work."
date: 2026-06-14
lastUpdated: 2026-06-14
tags:
  - defi
  - liquidity
  - uniswap
  - dex
categories:
  - crypto-basics
---

A liquidity pool is a collection of crypto tokens locked in a smart contract. It provides the liquidity needed for decentralized exchanges (DEXs) like Uniswap to function.

Instead of matching buyers with sellers (like a traditional exchange), DEXs use these pools to let you trade instantly. Your swap goes against the pool, not against another person.

## How Traditional Exchanges Work

On Coinbase or Binance, there's an **order book**. Buyers place bids (I'll buy at $X). Sellers place asks (I'll sell at $Y). When a bid and ask match, a trade happens.

**Problem:** If there aren't enough orders, you can't trade at a good price (or at all).

## How Liquidity Pools Work

Instead of matching orders, DEXs use automated market makers (AMMs).

**A simple example:**
A USDC/ETH liquidity pool contains:
- 1,000,000 USDC
- 500 ETH

When you swap 10,000 USDC for ETH:
1. The pool adds your 10,000 USDC
2. The pool removes ~4.98 ETH and sends it to you
3. The price adjusts based on the new ratio

The formula (for Uniswap-style pools):
```
x × y = k
```
Where x = amount of token A, y = amount of token B, and k is constant.

When you buy ETH (removing y), the product x×y must stay constant. So more USDC (x) must be added. The price is determined by this ratio.

<aside class="callout tip">
💡 <strong>The bigger the pool, the better the price.</strong> A pool with $100M has much less slippage (price impact) than a pool with $1M. Large trades on small pools move the price significantly.
</aside>

## How Liquidity Providers Earn

Anyone can deposit tokens into a liquidity pool and become a **liquidity provider (LP)**.

**The deal:**
- You deposit equal value of two tokens (e.g., $5K USDC + $5K ETH)
- You receive LP tokens representing your share of the pool
- Every trade in the pool pays a fee (0.01-1%)
- Fees are distributed to all LPs proportionally

**Example:**
- Uniswap ETH/USDC pool has 0.3% fee per trade
- If $10M trades through the pool in a day, that's $30K in fees
- If you own 1% of the pool, you earn $300 that day

## Impermanent Loss

This is the risk every LP must understand.

**What it is:** When the price ratio of your two deposited tokens changes, you end up with less value than if you had simply held both tokens.

**Example:**
- You deposit $5K ETH + $5K USDC (50/50, total $10K)
- ETH price doubles
- If you held: ETH = $10K, USDC = $5K, total = $15K
- In the pool: You have less ETH and more USDC due to arbitrage traders
- Your pool position may be worth $14K instead of $15K
- The $1K difference is **impermanent loss**

**When it becomes permanent:** If you withdraw from the pool while the ratio is different from when you deposited.

**When it's less of a concern:**
- Stablecoin pairs (USDC/DAI) — both are ~$1, almost no IL
- High fee pools — fees may compensate for IL
- Short holding periods — less time for price divergence

<aside class="callout warning">
⚠️ <strong>Impermanent loss is NOT a bug — it's a feature of how AMMs work.</strong> Before providing liquidity, use an IL calculator to estimate potential losses. In volatile markets, IL can easily exceed fee earnings.
</aside>

## Major DEXs and Their Pools

| DEX | Chain | Fee Tiers | TVL |
|---|---|---|---|
| **Uniswap** | Ethereum, Arbitrum, Base | 0.01%, 0.05%, 0.30%, 1% | $5B+ |
| **Curve** | Ethereum, many L2s | 0.01-0.04% | $3B+ |
| **Balancer** | Ethereum, Polygon, Arbitrum | Custom (up to 8 tokens per pool) | $1B+ |
| **PancakeSwap** | BNB Chain | 0.01%, 0.25% | $2B+ |
| **Orca** | Solana | 0.01-0.30% | $0.5B+ |

**Uniswap v3** introduced **concentrated liquidity** — you can choose a specific price range to provide liquidity within. This earns higher fees but carries more risk of IL if the price moves outside your range.

## Is Providing Liquidity Worth It?

### Good for:
- Stablecoin pairs (USDC/DAI) — low risk, steady 2-8% APY
- Large, deep pools (less IL risk per trade)
- Long-term holders who understand the risks

### Bad for:
- Volatile pairs (ETH/SOL, BTC/SHIB) — high IL risk
- Small, illiquid pools — fees don't compensate for IL
- Beginners who don't understand IL

**Realistic returns:**
| Pool Type | Typical APY | IL Risk |
|---|---|---|
| Stablecoin pair | 2-8% | Very low |
| Blue chip pair (ETH/USDC) | 5-20% | Medium |
| Volatile pair (altcoin/ETH) | 20-100% | Very high |
| Concentrated liquidity (tight range) | 50-500% | Extreme |

<aside class="callout tip">
💡 <strong>Start with stablecoin pools.</strong> Deposit USDC and DAI into a Curve or Uniswap pool. The IL is near zero, and you earn 2-8% APY. This is the safest way to learn about liquidity provision.
</aside>

## How to Provide Liquidity (Step-by-Step)

1. **Choose a DEX** — Uniswap (Arbitrum/Base for low fees)
2. **Get both tokens** — Buy equal value of each (e.g., $500 USDC + $500 DAI)
3. **Go to the "Pool" section** — Click "New Position" or "Add Liquidity"
4. **Select the pair** — Choose the two tokens
5. **Enter amounts** — The interface shows the ratio required
6. **Confirm** — Approve both tokens, then confirm the deposit
7. **Receive LP tokens** — These represent your pool share

**Tools to track:**
- **APY.vision** — Track your LP positions and fees
- **Dune Analytics** — DeFi dashboards for pool performance
- **Zapper / Zerion** — Portfolio tracking across chains

## Verdict

Liquidity pools are the engine of DeFi. They enable instant, permissionless trading without order books. As a user, they let you earn fees on your crypto.

But liquidity provision carries real risk — impermanent loss can wipe out fee earnings. Understand IL before depositing. Start with stablecoin pairs. Never provide liquidity to a pool you don't fully understand.

*Related: [What Is DeFi?](/crypto-basics/what-is-defi-decentralized-finance-explained/) | [How to Earn Interest on Crypto](/crypto-basics/how-to-earn-interest-crypto-defi-cefi/) | [What Is a Stablecoin?](/crypto-basics/what-is-stablecoin-usdc-usdt-dai/) | [What Is Gas?](/crypto-answers/what-is-gas-crypto-transaction-fees/)*

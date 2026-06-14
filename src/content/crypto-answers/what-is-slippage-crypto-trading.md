---
title: "What Is Slippage in Crypto Trading? How to Set It Correctly"
description: "Slippage is the difference between the expected price of a trade and the actual price. Here's how slippage works and how to set it in your wallet."
date: 2026-06-14
lastUpdated: 2026-06-14
tags:
  - slippage
  - trading
  - dex
  - fees
categories:
  - crypto-answers
---

**Question from BitcoinTalk:** "I tried to swap tokens on Uniswap but the transaction failed. What went wrong?"

**Short answer:** Your **slippage tolerance** was probably set too low. Slippage is the difference between the price you expect and the price you get. When the market moves during your transaction, your trade may fail if slippage exceeds your tolerance.

## What Is Slippage?

Slippage happens when the price of an asset changes between the moment you submit a transaction and the moment it's confirmed on the blockchain.

**Example:**
- You try to swap 1 ETH for 3,000 USDC
- The transaction takes 30 seconds to confirm
- In those 30 seconds, the price changes
- You receive 2,980 USDC instead of 3,000 USDC
- The 20 USDC difference is **slippage**

## Why Slippage Happens

### 1. Market Volatility
The price moves while your transaction is pending. In volatile markets, prices change every second.

### 2. Low Liquidity
On decentralized exchanges (Uniswap, PancakeSwap), large trades in low-liquidity pools cause significant price impact.

**Example:** A $1,000 trade on a $10,000 pool may cause 5-10% price impact.

### 3. Transaction Delays
Your transaction sits in the mempool waiting to be confirmed. The longer it waits, the more likely the price changes.

## Setting Slippage Tolerance

In MetaMask, Uniswap, and other DEX interfaces, you set a **slippage tolerance** — the maximum price difference you'll accept.

| Slippage Setting | Best For | Risk |
|---|---|---|
| 0.1% | Stablecoin pairs (USDC→DAI) | Transaction may fail |
| 0.5% | Normal trades (ETH→USDC) | Good balance |
| 1-2% | Low liquidity tokens | Higher chance of success |
| 5%+ | Very low liquidity | Possible bad price |
| 10%+ | Extreme volatility | Likely front-run |

### MetaMask Default: 0.5%
Most users should leave MetaMask's default at 0.5%. If transactions fail, increase to 1%.

### When to Decrease Slippage
- Trading stablecoins (USDC→DAI): Use 0.1-0.3%
- High liquidity pairs (ETH→USDC): Use 0.3-0.5%

### When to Increase Slippage
- Low liquidity tokens: Use 1-3%
- Trading during high volatility: Use 1-2%
- Transactions keep failing: Gradually increase by 0.5%

<aside class="callout danger">
🚨 <strong>Never set slippage above 5-10% for unknown tokens.</strong> High slippage allows MEV bots to front-run your transaction. They can insert their own trade before yours, causing you to buy at a much worse price. This is called a "sandwich attack."
</aside>

## Slippage vs Price Impact

These are different concepts that get confused:

| Term | Definition |
|---|---|
| **Slippage** | Difference between expected and actual price (unpredictable) |
| **Price impact** | How much your own trade moves the market price (predictable) |

**Price impact is known before you trade.** Uniswap shows it before you confirm. If price impact is 2%, you'll get 2% less than the current price regardless of slippage.

## How to Avoid Bad Slippage

### 1. Trade on High-Liquidity Pools
- Use the biggest pool for your pair
- For ETH trades: Uniswap ETH/USDC has the deepest liquidity
- For stablecoins: Curve has the best rates

### 2. Use Limit Orders
Instead of market orders, use limit orders to buy at a specific price.

**Platforms:** 1inch, CowSwap, Binance (CEX)

### 3. Avoid Weekend Trading
Crypto markets have lower liquidity on weekends. Wait until Monday if you're trading large amounts.

### 4. Check the Pool Before Trading
On Uniswap, check:
- **Liquidity depth** ($10M+ is good, $100K is risky)
- **Volume (24h)** — Higher volume = better pricing
- **Price impact shown** — If it's high, split your trade into smaller chunks

### 5. Use a DEX Aggregator
**1inch** and **ParaSwap** split your trade across multiple DEXs to get the best price. They automatically optimize for slippage.

## Slippage on Centralized Exchanges (Coinbase, Binance)

Centralized exchanges use order books, not AMMs. Slippage still applies but works differently.

| Order Type | Slippage Risk |
|---|---|
| Market order | Yes — buys at current ask price |
| Limit order | No — only fills at your price |
| Stop-loss | Yes — triggers at market price |

On CEXs, slippage depends on order book depth. A $100 market order has minimal slippage on large exchanges. A $100,000 market order may cause significant slippage.

## Slippage Settings for Popular Platforms

| Platform | Default Slippage | Where to Change |
|---|---|---|
| Uniswap | 0.5% | Settings icon (gear) |
| PancakeSwap | 0.5% | Settings → Slippage |
| MetaMask Swap | 0.5% | Settings → Advanced |
| 1inch | 1% | Settings → Slippage |
| Jupiter (Solana) | Auto (variable) | Settings → Slippage |

## Common Slippage Mistakes

1. **Setting 0.1% on a volatile pair** — Your trade will fail 90% of the time
2. **Setting 10% on a low-liquidity token** — You'll get sandwich attacked
3. **Not checking price impact** — A 15% price impact means you're losing 15% instantly
4. **Using low slippage during high volatility** — Failed transactions still cost gas!
5. **Not resubmitting after a failed transaction** — The price may have moved, requiring different settings

## Verdict

Slippage is a cost of trading on decentralized exchanges. Set it too low and your transactions fail (wasting gas fees). Set it too high and you may get a bad price or be front-run.

**The sweet spot:** 0.5% for most trades on major L1s/L2s. Increase to 1% if you're having failures. Use DEX aggregators (1inch) to minimize slippage automatically.

For beginners: stick with 0.5% on major tokens. If trades fail, try 1%. If you're trading unknown tokens, consider whether you should be trading them at all.

*Related: [How to Read a Crypto Chart](/crypto-basics/how-to-read-crypto-chart/) | [What Is Gas?](/crypto-answers/what-is-gas-crypto-transaction-fees/) | [What Is a Liquidity Pool?](/crypto-basics/what-is-liquidity-pool-dex/) | [What Is a Layer 2?](/crypto-answers/what-is-layer-2-ethereum-scaling/)*

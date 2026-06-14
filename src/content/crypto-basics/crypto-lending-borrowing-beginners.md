---
title: "Crypto Lending vs Borrowing: How It Works for Beginners"
description: "You can lend your crypto for interest or borrow against it without selling. Here's how crypto lending and borrowing work on platforms like Aave and Compound."
date: 2026-06-14
lastUpdated: 2026-06-14
tags:
  - lending
  - borrowing
  - defi
  - aave
categories:
  - crypto-basics
---

Crypto lending and borrowing let you put your crypto to work or get access to cash without selling your holdings.

**Lending** = Deposit crypto, earn interest. Lenders earn passive income.
**Borrowing** = Deposit collateral, borrow stablecoins. Borrowers get liquidity without selling.

## How Lending Works

You deposit crypto into a lending protocol (Aave, Compound, Morpho). The protocol lends your crypto to borrowers. You earn interest.

### Supply Rates (What You Earn)

| Asset | Typical APY |
|---|---|
| USDC | 5-12% |
| DAI | 5-12% |
| ETH | 1-3% |
| WBTC | 0.5-2% |

Stablecoins (USDC, DAI) earn the highest rates because there's high demand for borrowing them.

### How Interest Is Calculated

Interest rates are dynamic — they change based on **utilization rate** (how much of the pool is borrowed).

- Low utilization (30%) = low rates (2-4%)
- High utilization (80%) = high rates (8-15%)
- Max utilization (100%) = very high rates (20%+, but no one can withdraw)

### Lending Risks

1. **Smart contract risk** — A bug in the protocol could freeze or lose funds
2. **Liquidation risk** — Doesn't affect lenders directly, but affects pool health
3. **Opportunity cost** — Your crypto is locked in the protocol
4. **Interest rate volatility** — Rates change constantly

<aside class="callout tip">
💡 <strong>Lending is the safest passive income strategy in crypto.</strong> Deposit USDC on Aave (Arbitrum or Base for low fees). You earn 5-12% APY with minimal risk. Much safer than yield farming or liquidity provision.
</aside>

## How Borrowing Works

You deposit crypto as collateral and borrow stablecoins against it. You get liquidity without selling your crypto.

### How Much Can You Borrow?

The amount depends on your **loan-to-value ratio (LTV)**:

| Asset | Max LTV | Liquidation Threshold |
|---|---|---|
| ETH | 80% | 83% |
| WBTC | 75% | 80% |
| USDC | 80% | 85% |

**Example:**
- You deposit $10,000 ETH
- Max LTV is 80% → you can borrow up to $8,000 USDC
- If ETH drops to $9,638, your LTV hits 83% (liquidation threshold)
- Your position gets liquidated — the protocol sells your ETH to repay the loan

### Borrow Rates (What You Pay)

| Asset | Typical Borrow APY |
|---|---|
| USDC | 6-15% |
| DAI | 6-15% |
| ETH | 2-5% |

Borrow rates are higher than supply rates — the difference is the protocol's profit.

## Why People Borrow Against Crypto

### 1. Avoid Taxable Events
Selling crypto triggers capital gains tax. Borrowing doesn't. You get cash without selling.

**Example:** You have $100K in Bitcoin. You need $20K for a car. Instead of selling (taxable), you deposit BTC as collateral and borrow $20K USDC. No tax event.

### 2. Leverage
Borrow USDC, buy more ETH. If ETH goes up, you profit on the borrowed amount too.

**Risk:** If ETH drops, you get liquidated and lose everything.

### 3. Liquidity Without Selling
You believe in a coin long-term but need short-term cash. Borrow against it instead of selling.

## Liquidation Explained

If your collateral value drops below the liquidation threshold, the protocol liquidates your position.

**How it happens:**
1. You deposit $10K ETH, borrow $7K USDC (70% LTV — safe)
2. ETH drops 20% → your collateral is now $8K
3. LTV = $7K / $8K = 87.5%
4. Liquidation threshold (83%) is breached
5. Liquidator repays your loan + gets a bonus from your collateral
6. You lose your ETH and your borrowed USDC is gone

**How to avoid liquidation:**
- Keep LTV below 50% (deposit $10K, borrow less than $5K)
- Monitor your position regularly
- Add more collateral if the price drops
- Repay some of the loan to reduce LTV

<aside class="callout danger">
🚨 <strong>Borrowing is risky for beginners.</strong> A 30-50% crypto crash can liquidate over-leveraged positions. If you borrow, keep LTV below 40%. Never borrow to buy more crypto (leverage amplifies losses).
</aside>

## Lending vs Borrowing: Which Should You Do?

### Lend If You:
- Hold stablecoins (USDC, DAI)
- Want passive income without price risk
- Are OK with variable interest rates
- Want the safest DeFi strategy

### Borrow If You:
- Need cash but don't want to sell crypto
- Understand liquidation risk
- Keep LTV below 50%
- Have a clear repayment plan

## Major Lending Protocols

| Protocol | Chains | Key Feature |
|---|---|---|
| **Aave** | Ethereum, Arbitrum, Base, Polygon | Largest, most liquid, variable + stable rates |
| **Compound** | Ethereum, Base | Second largest, easy to use |
| **Morpho** | Ethereum, Base | Optimized rates (better than Aave/Compound) |
| **JustLend** | TRON | High rates on TRON ecosystem |
| **Spark** | Ethereum, Gnosis | Based on MakerDAO, DAI-focused |

## Step-by-Step: Lend on Aave

1. **Go to app.aave.com**
2. **Connect your wallet** (MetaMask on Arbitrum or Base for low fees)
3. **Select "Supply"** — choose USDC or DAI
4. **Enter the amount** — approve and confirm
5. **Done** — you start earning interest immediately
6. **Withdraw anytime** — click "Withdraw" to get your crypto back

## Step-by-Step: Borrow on Aave

1. **Supply collateral first** — deposit ETH or USDC
2. **Go to "Borrow"** — choose USDC or DAI
3. **Check the LTV** — don't borrow more than 50% of your collateral
4. **Confirm** — the borrowed stablecoins appear in your wallet
5. **Monitor your position** — use the dashboard to track LTV
6. **Repay** — deposit borrowed stablecoins back to close the position

## Verdict

**Lending** is one of the safest ways to earn passive income on your crypto. Deposit stablecoins on Aave, earn 5-12% APY, and benefit from compound interest.

**Borrowing** is useful for accessing liquidity without selling, but carries liquidation risk. Only borrow if you understand the risks and keep LTV well below the threshold.

For beginners: start with lending. Deposit $100 USDC on Aave to learn the process. Add more once you're comfortable.

*Related: [How to Earn Interest on Crypto](/crypto-basics/how-to-earn-interest-crypto-defi-cefi/) | [What Is DeFi?](/crypto-basics/what-is-defi-decentralized-finance-explained/) | [10 Ways to Earn Passive Income](/crypto-basics/10-legit-ways-earn-passive-income-crypto/) | [What Is a Liquidity Pool?](/crypto-basics/what-is-liquidity-pool-dex/)*

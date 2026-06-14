---
title: "APY vs APR in Crypto: What's the Difference?"
description: "APY and APR both measure returns, but APY includes compounding. Here's how to compare them and why the difference matters for your earnings."
date: 2026-06-14
lastUpdated: 2026-06-14
tags:
  - apy
  - apr
  - interest
  - defi
categories:
  - crypto-basics
---

APY and APR are everywhere in crypto. "Earn 12% APY on USDC." "20% APR on your ETH."

They look similar but are very different. Using the wrong one can make you misjudge your returns by a lot.

## The Simple Difference

| Term | Meaning | Includes Compounding? |
|---|---|---|
| **APR** | Annual Percentage Rate | No |
| **APY** | Annual Percentage Yield | Yes |

**APR** is simple interest. If you earn 12% APR, you get 12% of your deposit per year.

**APY** includes compounding. If you earn 12% APY, your interest earns interest — you get more than 12% of your initial deposit.

## APR (Simple Interest)

APR = annual rate without compounding.

**Example:**
- You deposit $10,000 at 12% APR
- Interest is paid monthly: 1% per month ($100)
- After Month 1: $10,100
- After Month 2: $10,200 (you earn 1% of $10,100 = $101, but APR ignores this)
- After 12 months: You've earned $1,200 ($10,000 × 12%)
- **Total:** $11,200

**APR is always lower than APY** for the same stated rate (if compounding occurs).

## APY (Compound Interest)

APY includes the effect of compounding — interest earned on interest.

**Example:**
- You deposit $10,000 at 12% APY
- Interest is compounded monthly
- Month 1: $10,000 + $100 = $10,100
- Month 2: $10,100 + $101 = $10,201
- Month 12: $11,268 (vs $11,200 with APR)
- **Total:** $11,268

**The extra $68 comes from compounding.** The more frequently interest compounds, the bigger the gap.

## Why Crypto Uses APY

Most DeFi protocols show APY because:
1. Interest is often paid continuously (every block, every second)
2. APY gives a more accurate picture of actual returns
3. It's the standard in the industry

Staking rewards, lending yields, and farm returns are almost always quoted as APY.

## Converting Between APR and APY

**APR → APY (monthly compounding):**
```
APY = (1 + APR ÷ n)^n - 1
```
where n = number of compounding periods per year

**Example:** 12% APR with monthly compounding
- APY = (1 + 0.12 ÷ 12)^12 - 1
- APY = (1.01)^12 - 1
- APY = 1.1268 - 1 = 0.1268 = **12.68%**

### Quick Reference Table

| Stated Rate | APR | APY (daily) | APY (monthly) |
|---|---|---|---|
| 5% | 5.00% | 5.13% | 5.12% |
| 10% | 10.00% | 10.52% | 10.47% |
| 15% | 15.00% | 16.18% | 16.08% |
| 20% | 20.00% | 22.13% | 21.94% |

The gap grows with higher rates and more frequent compounding.

## Common Crypto Scenarios

### Stablecoin Lending (Aave, Compound)
- They quote **APY** (including compounding)
- Typical: 5-12% APY on USDC
- Interest accrues every second (Ethereum block time ~12 seconds)

### Staking (ETH, SOL, DOT)
- Quoted as **APY**
- Rewards are distributed per epoch (hours or days)
- Compounding happens when you re-stake rewards

### Yield Farming
- Almost always **APY**
- Some farms quote inflated APYs that include token price speculation
- A 1,000% APY farm might only give you 50% real returns if the reward token crashes

## What to Watch Out For

### 1. "APY" That Includes Token Price
Some protocols quote APY that assumes the reward token's price stays constant. If the token drops 50%, your real APY drops by 50%.

**Example:**
- Farm says 200% APY paid in FARM token
- FARM token drops 75% over the year
- Your real return: 200% × 25% = 50% (before IL and fees)

### 2. Compounding Frequency
Daily compounding earns more than monthly compounding. For the same stated APY:
- Daily compounding: maximum effect
- Weekly: slightly less
- Monthly: significantly less

**Always check:** Does the protocol auto-compound, or do you need to manually compound?

### 3. Fixed vs Variable Rates
- **Fixed:** Rate stays the same (rare in DeFi)
- **Variable:** Rate changes based on supply and demand (common)
- The quoted APY is the current rate, not a guarantee

<aside class="callout tip">
💡 <strong>When comparing returns, always compare APY to APY.</strong> Don't compare an APR quote to an APY quote — the APY will always look higher. Convert APR to APY using the formula above, or use an online calculator.
</aside>

## Which Matters for You?

### If You're Earning Interest
**Look at APY** — it's the actual return you'll get. APR understates your earnings.

### If You're Borrowing
**Look at APR** — it's the actual cost. APY overstates what you pay (borrowers usually don't compound their debt).

### If You're Comparing
Always convert everything to APY so you're comparing apples to apples.

## Verdict

APY = what you earn (includes compounding). APR = simple rate (no compounding).

In crypto, most returns are quoted as APY. This is the number that matters for comparing earning opportunities.

If you see APR, convert it to APY to understand your real return. The difference is small for low rates (5% APR = 5.12% APY monthly) but significant for high rates (100% APR = 161% APY daily).

*Related: [How to Earn Interest on Crypto](/crypto-basics/how-to-earn-interest-crypto-defi-cefi/) | [10 Ways to Earn Passive Income](/crypto-basics/10-legit-ways-earn-passive-income-crypto/) | [Crypto Yield Farming Guide](/crypto-basics/crypto-yield-farming-beginners-guide/) | [How Much Can You Earn from Staking?](/crypto-basics/how-much-earn-crypto-staking/)*

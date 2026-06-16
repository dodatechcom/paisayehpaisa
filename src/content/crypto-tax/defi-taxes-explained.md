---
title: "DeFi Taxes: Complete Guide to Taxing DeFi Activities in 2026"
description: "How to taxes swaps, yield farming, liquidity pools, airdrops, and borrowing in DeFi. US, UK, and Canada treatment."
date: 2026-06-16
lastUpdated: 2026-06-16
tags:
  - crypto-tax
  - defi
  - yield-farming
categories:
  - crypto-tax
---

DeFi creates complex tax situations. Swapping tokens, providing liquidity, yield farming, and borrowing all have different tax treatments.

Here's the complete breakdown of DeFi taxes.

<img loading="lazy" src="/images/defi-taxes.svg" alt="DeFi tax treatment for swaps, liquidity pools, yield farming, and borrowing" style="width:100%; max-width:760px; height:auto; margin:1.5rem 0; border-radius:8px;" />

## DeFi Activities and Tax Treatment

### Token Swaps (Uniswap, SushiSwap)

| Event | Taxable? | Treatment |
|-------|---------|-----------|
| Swap ETH for USDC | Yes | Capital gains on ETH |
| Swap USDC for ETH | Yes | Capital gains on USDC |
| Swap same pegged tokens | Yes | Still taxable |
| **Each swap = a sale** | Always | Treat as disposing of old token |

**Example:** Swap 1 ETH ($2,500) for 2,500 USDC
- You disposed of ETH at $2,500
- If your ETH cost basis was $1,500, you have $1,000 capital gain
- Taxed at your capital gains rate

### Providing Liquidity (LP Tokens)

| Event | Taxable? | Treatment |
|-------|---------|-----------|
| Add liquidity (deposit tokens) | Usually no | No disposal |
| Receive LP tokens | No | Not income |
| Remove liquidity (withdraw) | Yes | Capital gains on tokens |
| Earn trading fees | Yes | Income at receipt |
| Impermanent loss | Not until realized | Only when withdrawing |

<aside class="callout info">
📌 <strong>LP provision is complex:</strong> When you deposit ETH+USDC into a liquidity pool, you may be creating a new token pair. Some tax professionals treat this as a taxable swap. Consult a CPA.
</aside>

### Yield Farming

| Event | Taxable? | Treatment |
|-------|---------|-----------|
| Stake LP tokens | No | No disposal |
| Receive farm tokens | Yes | Income at FMV |
| Sell farm tokens | Yes | Capital gains |
| Compound rewards | Yes | Income each time |

### Airdrops

| Event | Taxable? | Treatment |
|-------|---------|-----------|
| Receive airdrop | Yes | Income at FMV |
| Sell airdrop | Yes | Capital gains |
| Unclaimed airdrop | No | Not until claimed |

### Borrowing Against Crypto

| Event | Taxable? | Treatment |
|-------|---------|-----------|
| Borrow against collateral | No | Not a taxable event |
| Pay interest | No | Not deductible (personal) |
| Liquidated | Yes | Treated as sale of collateral |
| Repay loan | No | No tax event |

## Country-Specific Rules

| Activity | US | UK | Canada |
|----------|----|----|--------|
| Token Swaps | 0-20% LTCG | 18-28% CGT | 50% taxable |
| Yield Farming | 10-37% income | 20-45% income | 100% income |
| Liquidity Pools | Varies | Varies | Varies |
| Airdrops | Ordinary income | Income tax | Income at FMV |
| Borrowing | Not taxable | Not taxable | Not taxable |
| Liquidation | Taxable sale | Taxable disposal | Taxable disposition |

## Record-Keeping for DeFi

You need to track:

| Data Point | Why |
|-----------|-----|
| Date/time | To determine short vs long-term |
| Transaction type | Swap, LP, farm, borrow |
| Tokens involved | Both sides of the transaction |
| Amounts | Token amounts and USD value |
| Gas fees | For cost basis calculation |
| Wallet addresses | For audit trail |

## DeFi Tax Software

Not all tax software handles DeFi well. Here's what works:

| Software | DeFi Support | Chains | Price |
|----------|-------------|--------|-------|
| Koinly | Excellent | 300+ | $49-279 |
| CoinTracker | Good | 100+ | $59-599 |
| TokenTax | Good | Major chains | $65-799 |
| ZenLedger | Good | 20+ | $49-999 |
| Accointing | Good | 100+ | $49-299 |

<aside class="callout warning">
⚠️ <strong>DeFi is the hardest to track.</strong> Most tax software struggles with complex DeFi transactions like flash loans, yield farming, and multi-hop swaps. Consider a tax professional for complex DeFi activity.
</aside>

## Common DeFi Tax Mistakes

| Mistake | Why It's Wrong |
|---------|---------------|
| **Ignoring token swaps** | Every swap is taxable |
| **Not tracking LP positions** | Withdrawals are taxable |
| **Forgetting airdrops** | Income when received |
| **No records of gas fees** | Needed for cost basis |
| **Treating DeFi as tax-free** | All crypto is taxable |

## Summary

| Key Point | Takeaway |
|-----------|----------|
| **Swaps** | Always taxable (capital gains) |
| **Liquidity pools** | Taxable when withdrawing |
| **Yield farming** | Income at receipt |
| **Airdrops** | Income at FMV |
| **Borrowing** | Not taxable (until liquidated) |
| **Track everything** | Use DeFi-compatible tax software |

<aside class="callout tip">
💡 <strong>Pro tip:</strong> Use Koinly for DeFi taxes. It supports 300+ DeFi protocols and auto-imports from wallets like MetaMask, Trust Wallet, and Ledger.
</aside>

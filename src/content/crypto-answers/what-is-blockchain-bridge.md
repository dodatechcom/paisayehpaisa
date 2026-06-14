---
title: "What Is a Blockchain Bridge? How to Move Tokens Between Chains"
description: "A blockchain bridge lets you move crypto from one chain to another. Here's how bridges work, the risks, and which ones to use."
date: 2026-06-14
lastUpdated: 2026-06-14
tags:
  - bridge
  - cross-chain
  - interoperability
  - defi
categories:
  - crypto-answers
---

**Question from BitcoinTalk:** "How do I move my ETH from Ethereum to Arbitrum? What's the safest way to bridge?"

**Short answer:** A blockchain bridge lets you transfer crypto from one blockchain to another. Use the official bridge for the destination chain (Arbitrum Bridge, Base Bridge) for safety. Avoid unknown bridges.

## What Is a Blockchain Bridge?

A bridge is a protocol that lets you move tokens between different blockchains. For example, moving ETH from Ethereum to Arbitrum, or USDC from Solana to Ethereum.

**Why use a bridge:**
- Ethereum mainnet has high fees (use L2s instead)
- Your crypto is on one chain but you want to use an app on another
- You want to farm yields on a different chain
- You bought on one exchange but the best DEX is on another chain

## How Bridges Work

**Step 1:** You send crypto to the bridge's smart contract on Chain A
**Step 2:** The bridge locks your crypto on Chain A
**Step 3:** The bridge mints a wrapped version of your crypto on Chain B
**Step 4:** You can now use the wrapped tokens on Chain B

**To go back:** Send the wrapped tokens back to the bridge. It burns them and unlocks your original crypto on Chain A.

### Wrapped Tokens

When you bridge ETH from Ethereum to Arbitrum, you don't actually move the ETH. The bridge locks your ETH on Ethereum and mints "Wrapped ETH" (WETH) on Arbitrum. The wrapped token is always redeemable 1:1 for the original.

| Token on Chain A | Token on Chain B |
|---|---|
| ETH (Ethereum) | WETH (Arbitrum) |
| SOL (Solana) | Wrapped SOL (Ethereum) |
| BTC (Bitcoin) | WBTC (Ethereum) |

## Types of Bridges

### 1. Official L2 Bridges (Safest)
Built by the team that created the destination chain.

| Bridge | Purpose |
|---|---|
| **Arbitrum Bridge** | Ethereum → Arbitrum |
| **Base Bridge** | Ethereum → Base |
| **Optimism Bridge** | Ethereum → Optimism |
| **zkSync Bridge** | Ethereum → zkSync |

**Pros:** Most secure, built by the core team
**Cons:** Only support their specific chains

### 2. Decentralized Bridges (Trustless)
Cross-chain protocols that use validators to verify transfers.

| Bridge | Supported Chains |
|---|---|
| **Synapse** | 15+ chains |
| **Stargate** | 10+ chains |
| **Across** | Ethereum + L2s |
| **Hop Protocol** | L2s |

**Pros:** Connect many chains, good security
**Cons:** More complex, some smart contract risk

### 3. Centralized Bridges (Fastest)
Companies that handle the transfer. You send them crypto on Chain A, they send you crypto on Chain B.

| Bridge | Best For |
|---|---|
| **Portal (Wormhole)** | Solana → Ethereum |
| **Celer cBridge** | Many chains |
| **Multichain (formerly Anyswap)** | Many chains |
| **LayerZero** | Many chains (emerging standard) |

**Pros:** Fast, easy to use
**Cons:** Centralized — you must trust the company

## Bridge Risks

### Bridge Hacks
Bridges have been the #1 target for crypto hackers. Over $2B has been stolen from bridges.

| Hack | Date | Amount |
|---|---|---|
| Ronin Bridge | Mar 2022 | $620M |
| Wormhole | Feb 2022 | $320M |
| Nomad Bridge | Aug 2022 | $190M |
| Multichain | Jul 2023 | $130M |

**Why bridges get hacked:** They hold large amounts of locked crypto, making them attractive targets. Smart contract complexity creates more attack surface.

### Counterparty Risk (Centralized Bridges)
If the bridge operator goes bankrupt or acts maliciously, your funds could be frozen.

### Slippage and Fees
Bridging costs gas fees on both chains plus a bridge fee. Total cost: $2-50 depending on chains.

### Wrapped Asset Risk
The wrapped token may lose its peg to the original. If the bridge is hacked, your wrapped tokens could become worthless.

<aside class="callout danger">
🚨 <strong>Bridges are the most hacked infrastructure in crypto.</strong> Use official L2 bridges (Arbitrum Bridge, Base Bridge) when possible. For other bridges, use only the most established ones (Synapse, Stargate, LayerZero). Never use an unknown bridge.
</aside>

## Step-by-Step: Bridge from Ethereum to Arbitrum

1. **Go to bridge.arbitrum.io** (the official Arbitrum Bridge)
2. **Connect your wallet** (MetaMask connected to Ethereum mainnet)
3. **Select the amount** of ETH you want to bridge
4. **Confirm the transaction** on Ethereum mainnet (costs gas: $2-10)
5. **Wait 10-15 minutes** for the transaction to finalize
6. **Switch your wallet to Arbitrum network** (MetaMask may prompt you)
7. **Claim your ETH** on Arbitrum (second transaction, very cheap)
8. **Done** — You now have ETH on Arbitrum

## Best Practices for Bridging

1. **Use official bridges** — They're safer than third-party bridges
2. **Bridge small amounts first** — Test with $20-50 before doing larger amounts
3. **Check bridge status** — Some bridges may be paused or have issues
4. **Verify the URL** — Bridge phishing sites are common
5. **Check fees on both sides** — Gas on each chain + bridge fee
6. **Don't bridge to suspicious chains** — If you don't know the destination chain, keep your crypto where it is

## When NOT to Bridge

| Situation | Better Alternative |
|---|---|
| You just bought on Coinbase and want to use Base | Withdraw directly to Base (Coinbase supports it) |
| You want to move small amounts (<$100) | Gas fees may exceed the amount |
| You need the tokens back within hours | Optimistic rollups have 7-day withdrawal delays |

## The Future: Native Cross-Chain

Ethereum's long-term vision includes **native cross-chain functionality** — moving tokens between chains without bridges. This would eliminate bridge risk entirely.

**Current progress:**
- ERC-7683 (cross-chain intents standard) — emerging standard
- Across Protocol — intent-based bridging
- Uniswap X — cross-chain swaps without traditional bridges

## Verdict

Bridges are essential for moving between chains but carry significant risk — especially third-party bridges.

**Safest approach:** Use official L2 bridges (Arbitrum, Base, Optimism) for moving to L2s. Use established decentralized bridges (Synapse, Stargate) for other cross-chain moves. Never use unknown bridges.

Always bridge a small test amount first. And never bridge more than you're willing to lose in a worst-case scenario.

*Related: [What Is a Layer 2?](/crypto-answers/what-is-layer-2-ethereum-scaling/) | [What Is Gas?](/crypto-answers/what-is-gas-crypto-transaction-fees/) | [What Is DeFi?](/crypto-basics/what-is-defi-decentralized-finance-explained/) | [What Is a Liquidity Pool?](/crypto-basics/what-is-liquidity-pool-dex/)*

---
title: "What Is a Blockchain Reorg? Reorganizations Explained Simply"
description: "Blockchain reorganizations happen when the chain forks and a competing chain wins. Here's how reorgs work and what they mean for your transactions."
date: 2026-06-15
lastUpdated: 2026-06-15
tags:
  - blockchain
  - mining
  - technology
  - beginners
categories:
  - crypto-answers
---

**Question from BitcoinTalk:** "My Bitcoin transaction disappeared. Someone said there was a reorg. What happened?"

**Short answer:** A blockchain reorg (reorganization) happens when two miners find blocks at the same time and the network eventually chooses one chain over the other. Your transaction may appear to "unconfirm" but it will reconfirm on the winning chain. Deep reorgs (more than 2-3 blocks) are extremely rare on Bitcoin.

## What Causes a Reorg

Miners race to find new blocks. Sometimes two miners find valid blocks at nearly the same time. The network temporarily splits into two versions.

**The rule:** The longest chain (most accumulated proof of work) wins. When one chain overtakes the other, miners abandon the losing chain and its blocks are "reorganized" (reorged) out.

**Example:**
1. Block 100,001 is found by Miner A
2. Block 100,001 is also found by Miner B (at the same time)
3. Half the network builds on A's block, half on B's block
4. Miner A finds Block 100,002 — now A's chain is longer
5. Miners on B's chain switch to A's chain
6. B's block 100,001 is "reorged" out — transactions in it return to unconfirmed

## How Many Confirmations Are Safe

| Blockchain | Safe Confirmations | Time | Reorg Risk |
|---|---|---|---|
| Bitcoin | 6 confirmations (~60 min) | Very low | ~0% |
| Ethereum | 12-20 (~3-5 min) | Low | <0.1% |
| Solana | 1 (block is final) | 400ms | Very low |
| Litecoin | 6-12 (~15-30 min) | Very low | ~0% |
| Polygon | 64 (~10 min) | Low | <0.1% |
| Most PoS chains | Finality after 1 epoch | Minutes | Low |

**What this means:** When an exchange or wallet says "wait for 6 confirmations" before treating a Bitcoin transaction as final, this is why — to ensure no reorg can undo it.

## Deep Reorgs: When to Worry

Most reorgs are 1 block deep and happen daily on every proof-of-work chain.

**Deep reorgs (3+ blocks) are rare because:**
- The network is widely distributed
- Miners have financial incentives to build on the longest chain
- Mining pools coordinate to avoid deep reorgs

**Notable deep reorgs:**
- **Bitcoin (2013):** ~30 blocks during a software bug (resolved quickly)
- **Bitcoin Cash (2018):** Multiple deep reorgs during hash wars
- **Ethereum Classic (2020):** Multiple deep reorgs during 51% attacks

A 51% attack (where one entity controls >50% of hashing power) can cause deep reorgs, but this is economically impractical for major chains.

## What to Do During a Reorg

**Nothing.** Your transaction will reconfirm on the winning chain. If you received crypto and it was "undone" by a reorg, the sender can resend once the chain stabilizes.

## Verdict
Reorgs are a normal part of how proof-of-work blockchains reach consensus. Exchanges and services account for this by waiting for sufficient confirmations before treating transactions as final. One-block reorgs happen daily; deep reorgs are extremely rare on major chains.

*Related: [How Blockchain Works](/crypto-basics/how-blockchain-works-simple-explanation/) | [Proof of Work vs Proof of Stake](/crypto-basics/proof-of-work-vs-proof-of-stake/) | [How to Check Transaction Status](/crypto-answers/how-to-check-crypto-transaction-status/)*

---
title: "What Happens If I Send Crypto to the Wrong Network?"
description: "Sending USDC on Ethereum to a Solana address, or sending BSC tokens to an Ethereum wallet. Here's what happens and how to fix it."
date: 2026-06-15
lastUpdated: 2026-06-15
tags:
  - transactions
  - mistakes
  - recovery
  - beginners
categories:
  - crypto-answers
---

**Question from BitcoinTalk:** "I sent USDC on the wrong network. Can I get my money back?"

**Short answer:** It depends. If you sent between two networks that both use the same address format (like Ethereum and Polygon), recovery is possible with the receiving wallet's seed phrase. If you sent to an address on a network with a different format (like Ethereum to Solana), recovery ranges from difficult to impossible.

## Cross-Network Recovery Scenarios

### Scenario 1: Same Address Format (Recoverable)
**Ethereum ↔ Polygon ↔ BNB Chain ↔ Arbitrum ↔ Optimism ↔ Base**

These EVM-compatible chains use the same address format (0x...). If you have the seed phrase for the destination wallet, you can access the funds by importing the seed phrase into a wallet configured for the correct network.

**Recovery steps:**
1. Get the seed phrase of the destination wallet
2. Import it into MetaMask or Rabby
3. Add the correct network (e.g., Polygon if you sent there)
4. Your funds should appear on that network's balance

### Scenario 2: Different Address Format (Difficult/Impossible)
**Ethereum (0x...) → Solana (random characters)**
**Bitcoin (1..., bc1...) → Litecoin (L..., M...)**
**Ripple (r...) → Stellar (G...)**

Different address formats mean the transaction likely failed or went to a non-existent address. The funds may be lost permanently.

### Scenario 3: Exchange Deposit Gone Wrong (Recoverable with Help)
You sent tokens to an exchange deposit address on the wrong network.

**Recovery steps:**
1. Contact exchange support immediately
2. Provide: transaction hash, sending address, intended network, actual network used
3. If the exchange controls the destination wallet, they may be able to recover
4. Most major exchanges charge a recovery fee ($50-200)
5. This can take 1-30 days

## Recovery Success by Exchange

| Exchange | Recovery Possible? | Fee |
|---|---|---|
| Coinbase | Yes (most cases) | $50-100 |
| Kraken | Yes | $50-100 |
| Binance | Yes | $50-200 |
| Gemini | Depends on case | Varies |
| Smaller exchanges | Usually no | N/A |

## How to Prevent Wrong-Network Transfers

### The 3-Second Rule
Before clicking "Send" or "Withdraw," pause and read every confirmation screen aloud:
1. **What network am I using?** (Solana, Ethereum, Polygon?)
2. **Does the receiver accept this network?**
3. **Does the address format match?** (0x for EVM, random base58 for Solana)

### Test Transaction
Always send $1-5 as a test before sending large amounts. Confirm the test arrived on the correct network and address.

### Bookmark Addresses
Save frequently-used withdrawal addresses as exchange address book entries. This prevents manual entry errors.

## What NOT to Do

- **Don't resend** — If you realize the mistake, don't send again to "correct" it
- **Don't panic** — Many cases are recoverable with time
- **Don't pay "recovery services"** — These are almost always recovery scams

## Verdict
Wrong-network transfers are one of the most common and expensive mistakes in crypto. Prevention is simple: always verify the network, not just the address. If you do make a mistake, contact exchange support immediately and expect to pay a recovery fee.

*Related: [What to Do If You Send Crypto to Wrong Address](/crypto-answers/what-to-do-send-crypto-wrong-address/) | [How to Check If a Transaction Went Through](/crypto-answers/how-to-check-crypto-transaction-status/) | [How to Use a Blockchain Explorer](/crypto-basics/how-to-use-blockchain-explorer/)*

---
title: "Stuck Bitcoin Transaction? How to Fix It With RBF, CPFP, or Patience"
description: "Your Bitcoin transaction has been unconfirmed for hours or days. Here's how to fix a stuck transaction using Replace-by-Fee, Child-Pays-for-Parent, or waiting."
date: 2026-06-16
lastUpdated: 2026-06-16
tags:
  - bitcoin
  - transactions
  - fees
  - mempool
categories:
  - crypto-answers
---

"I sent Bitcoin with a low fee and it's been unconfirmed for 3 days. What do I do?"

This is one of the most common support questions on BitcoinTalk. You send a transaction, the fee was reasonable yesterday, but today the mempool is congested and miners are ignoring your transaction.

The good news: **your Bitcoin is not lost.** It's stuck in limbo, but you have options.

## Why Transactions Get Stuck

Every Bitcoin transaction needs a fee paid to miners. When the network is busy, miners prioritize transactions with higher fees. If your fee was too low relative to other pending transactions, miners skip yours.

**The main causes:**

- You set a fee during low congestion, then congestion spiked
- You used a wallet with poor fee estimation
- You manually set a fee too low to save money
- A sudden surge in network activity (NFT mints, ordinals, exchange hot wallet movements)

**How to check if your transaction is stuck:**

1. Get the transaction ID (TXID) from your wallet
2. Search it on mempool.space
3. If it shows "Unconfirmed" with a red or orange indicator, it's stuck

**A transaction is "stuck" when:**
- It's been unconfirmed for more than 1 hour during normal network conditions
- Or more than 24 hours during any conditions
- The fee rate (sat/vB) is well below the current market rate

## Option 1: Replace-by-Fee (RBF) — Best Option

RBF lets you replace your original transaction with a new one that has a higher fee. Not all wallets support it, but most modern ones do.

**Requirements:**
- Your wallet must have RBF enabled (Electrum, Bitcoin Core, BlueWallet, many others)
- The original transaction must have been created with RBF enabled (or the `-rpcservertimeout` flag wasn't set)
- The transaction must not have any confirmations yet

**How to do RBF in Electrum (most common wallet):**

1. Open Electrum
2. Go to History tab
3. Right-click the stuck transaction
4. Select "Increase fee" or "Bump fee"
5. Enter a new fee (check mempool.space for current rates)
6. The wallet creates a replacement transaction with a higher fee
7. Miners will now see your new transaction and prioritize it

**How to do RBF in Bitcoin Core:**
```
bumpfee "txid"
```
This replaces the transaction with a higher fee. Use `estimatesmartfee` first to check the current recommended rate.

**What fee should you use?**
- Check mempool.space for "High priority" fee rate
- For a stuck transaction, use the "High priority" rate (not the economy rate)
- Paying 20-50 sat/vB above the current rate ensures fast confirmation

**If RBF doesn't work:**
- Your wallet may not support it
- The transaction may have been created without RBF enabled (check if the transaction has `bip125-replaceable: yes`)
- Some old wallets don't support RBF at all — upgrade your wallet

<aside class="callout tip">
💡 <strong>Always enable RBF when sending.</strong> Most modern wallets have RBF enabled by default. If your wallet asks, choose "Yes" for RBF. It costs nothing to enable and gives you the option to bump the fee if the transaction gets stuck.
</aside>

## Option 2: Child-Pays-for-Parent (CPFP)

If RBF is not available, CPFP is your backup. This method works even when the original transaction doesn't support RBF.

**How CPFP works:**

You create a NEW transaction that spends the unconfirmed output from your stuck transaction. You attach a very high fee to this new transaction. Miners see: "To collect that high fee on the child transaction, I need to confirm the parent transaction first."

**It's called "child pays for parent"** — the child transaction pays a high enough fee that miners include both.

**How to do CPFP:**

1. Find the stuck transaction's output address (where did you send it?)
2. From THAT receiving wallet, create a new transaction sending the output back to yourself (or onward)
3. Set an intentionally high fee (80-150 sat/vB)
4. Broadcast the new transaction
5. Miners will confirm both transactions together

**Requirements:**
- You must control the receiving wallet (you can't CPFP if you sent to an exchange or another person's wallet)
- The receiving wallet must support CPFP (most do: Electrum, BlueWallet, Bitcoin Core)

**In Electrum:**
- Right-click the stuck transaction in History
- Select "Child pays for parent"
- Choose a high fee rate
- Broadcast

<aside class="callout warning">
⚠️ <strong>CPFP only works if you control the destination address.</strong> If you sent Bitcoin to an exchange or to pay someone, you can't use CPFP because you don't control their wallet. In that case, you must ask the recipient to CPFP from their side.
</aside>

## Option 3: Wait for the Transaction to Drop

All unconfirmed transactions eventually expire and return to your wallet. Bitcoin nodes drop transactions from their mempool after 2-14 days.

**What happens when it drops:**
- The transaction disappears from the mempool
- The Bitcoin returns to your original wallet
- You can then send it again with a proper fee

**How long it takes:**
- Default mempool expiry: ~2 weeks
- Some nodes drop after 72 hours
- If your transaction is "stuck" but still in the mempool, it hasn't dropped yet

**Risks of waiting:**
- If the mempool is highly congested, your transaction may stay stuck for weeks
- You can't use the Bitcoin while it's stuck
- In rare cases, a transaction can be pending for months

**The waiting is safe.** Your Bitcoin is not going anywhere. Only the original sender can spend it, and only after the transaction drops.

## Option 4: Double Spend (Risky — Not Recommended)

Some wallets let you create a "double spend" — send the same Bitcoin to a different address with a higher fee, hoping miners pick your new transaction instead of the old one.

**This is risky because:**
- It looks like a double-spend attempt (which is often associated with fraud)
- Some wallets and nodes reject double-spends
- You could end up with both transactions confirmed (sending Bitcoin twice)
- Exchanges may flag your account

**Only attempt this if:**
- RBF and CPFP are both unavailable
- You fully understand the risks
- You're using a wallet designed for this (not all wallets support it)

## Which Option Should You Use?

| Situation | Best option |
|---|---|
| Wallet supports RBF, RBF was enabled | RBF (bump fee) |
| Wallet supports RBF, RBF was NOT enabled | CPFP or wait |
| You control the destination wallet | CPFP |
| You don't control the destination wallet | RBF or wait |
| No RBF, no CPFP possible | Wait for drop |
| Transaction has been stuck for days | RBF or CPFP |
| Urgent: need to move funds now | CPFP with very high fee |

## How to Prevent Stuck Transactions

**1. Use a wallet with good fee estimation**

Modern wallets (Electrum, BlueWallet, Bitcoin Core, Ledger Live) use fee estimation algorithms that track mempool conditions. They rarely set fees too low.

**Other wallets** (especially exchange wallets) may use fixed fees or outdated estimates. If your exchange sends with a low fee, use CPFP or contact support.

**2. Check the mempool before sending**

Before sending a Bitcoin transaction, check:
- mempool.space — shows current recommended fees
- The "High priority" rate ensures confirmation in the next 1-2 blocks
- The "Economy" rate may take hours or a day

**3. Use RBF by default**

Enable RBF on every transaction. It costs nothing and gives you an escape route if the transaction gets stuck.

**4. For large amounts, pay a premium fee**

When moving significant value, pay for the highest fee tier. The difference between "high priority" ($2-5) and "economy" ($0.50-1) is trivial compared to the stress of a stuck transaction.

**5. Consider Lightning Network for small/repeated payments**

Lightning Network transactions are instant and near-zero fee. For small amounts, Lightning is better than on-chain Bitcoin.

## What NOT to Do

**Don't resend the same Bitcoin from your wallet.** If you try to send the same coins again while the original transaction is pending, your wallet should prevent it — but some wallets don't. You could accidentally create a double-spend.

**Don't close your wallet or shut down your computer.** This does not help. Your transaction is on the Bitcoin network, not on your computer. It will eventually resolve regardless.

**Don't pay a "transaction accelerator" service.** Most are scams that take your money and do nothing. A few legitimate services exist (like ViaBTC's accelerator), but they have limited slots and no guarantee. Use RBF or CPFP instead — they work better and are free.

**Don't contact exchange support unless necessary.** If you sent TO an exchange, they may be able to help once the transaction confirms. But they cannot make it confirm faster. Wait for the transaction to process naturally.

## Verdict

A stuck Bitcoin transaction is stressful but fixable.

- **If your wallet supports RBF:** Bump the fee. This is the easiest fix.
- **If you control the destination:** Use CPFP. It works even without RBF.
- **If neither is possible:** Wait 2-14 days. The unspent transaction will drop and funds will return to your wallet.

In the future, enable RBF on every transaction and check mempool.space's fee recommendations before sending. The extra $1-2 for a high fee tier is cheap insurance against days of anxiety.

*Related: [What Is Mempool and How Does It Work?](/crypto-answers/what-is-mempool-and-how-it-works/) | [What Is Gas? Transaction Fees Explained](/crypto-answers/what-is-gas-crypto-transaction-fees/) | [How to Read a Crypto Transaction on a Blockchain Explorer](/crypto-answers/how-to-read-crypto-transaction-explorer/) | [How to Check Transaction Status](/crypto-answers/how-to-check-crypto-transaction-status/)*

*BitcoinTalk's "Bitcoin Technical Support" board has an entire sticky thread "All about stuck transactions" with user-reported solutions. Search for "stuck transaction" to see hundreds of real-world cases.*

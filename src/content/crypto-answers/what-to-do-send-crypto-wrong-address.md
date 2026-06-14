---
title: "What to Do If You Send Crypto to the Wrong Address"
description: "Sent crypto to the wrong address? Here's what you can do, what you can't do, and how to prevent it from happening again."
date: 2026-06-14
lastUpdated: 2026-06-14
tags:
  - security
  - beginners
  - wallet
categories:
  - crypto-answers
---

Sending crypto to the wrong address is one of the most panic-inducing moments in crypto. Your funds disappear from your wallet, and you realize with horror that the address you pasted was wrong.

The bad news: crypto transactions are irreversible. There's no "undo" button, no bank to call, no chargeback.

The somewhat good news: depending on the situation, there might be things you can try.

<aside class="callout danger">
🚨 <strong>If someone DMs you offering to recover your crypto for a fee, they are scamming you.</strong> Recovery scammers target desperate victims. They take your money and disappear.
</aside>

## What Happens When You Send to the Wrong Address

The funds leave your wallet and arrive at the destination address. What happens next depends on who controls that address.

## Scenarios and Recovery Options

### Scenario 1: Wrong Address on Your Own Wallet

You have multiple wallets and sent to an address you control — just the wrong one.

**Possible?** Yes, if you control the destination wallet.

**What to do:**
1. Log into the destination wallet
2. Check if the funds arrived
3. Send them back to the correct wallet

If you control both addresses, this is a simple fix.

### Scenario 2: Wrong Address on the Same Network (Existing Wallet)

You sent to an address that exists on the blockchain but belongs to someone else.

**Possible?** Very unlikely. You can try contacting the address owner — but you don't know who they are.

**What to do:**
1. Check if the address is associated with an exchange (Coinbase, Kraken, Binance)
2. If yes, contact the exchange's support. They may be able to help if the address is their hot wallet
3. If it's a personal wallet, there's almost nothing you can do

### Scenario 3: Wrong Network

You sent Ethereum (ERC-20) to a Bitcoin address, or sent USDC on Solana to an Ethereum address.

**Possible?** Sometimes. The funds may be recoverable if you sent them to an address you control on a different network.

**What to do:**
1. Import the seed phrase into a wallet that supports the destination network
2. Check if the funds are visible
3. If yes, send them back using the correct network

**Example:** If you sent USDC from Solana to your Ethereum address, import your Ethereum wallet into a multi-chain wallet (like MetaMask) and check the Solana side.

### Scenario 4: Typo in Address

You made a typo in the address (e.g., copied the wrong character).

**Possible?** Almost never. Valid addresses have checksums. A typo usually results in an invalid address, and the transaction fails.

**What to do:**
1. Check the transaction status on a blockchain explorer
2. If it shows "Failed," the funds never left your wallet
3. If it shows "Success," the address exists and the funds are there

### Scenario 5: Address Poisoning

You saw a transaction in your history from an address that looks like yours (similar start and end characters). You copied that address and sent funds to it.

**This is a scam called "address poisoning."** Scammers send $0 transactions from addresses that look like yours, hoping you'll copy their address by mistake.

**What to do:** Same as Scenario 2 — almost impossible to recover.

<aside class="callout tip">
💡 <strong>Always check the full address, not just the first and last few characters.</strong> Address poisoning exploits the fact that most people only verify the first 4 and last 4 characters. Always compare character by character.
</aside>

## Step-by-Step Response

### Step 1: Don't Panic

Panic leads to bad decisions. Take a deep breath. The funds are either recoverable or they're not — panicking won't change the outcome.

### Step 2: Verify What Happened

1. Go to a blockchain explorer (Etherscan, Solscan, etc.)
2. Enter your transaction ID (TXID)
3. Check the destination address
4. Check if the transaction was successful

### Step 3: Determine the Scenario

Use the scenarios above to determine if recovery is possible.

### Step 4: Take Action (If Possible)

- If it's your own wallet: move the funds
- If it's an exchange: contact support immediately
- If it's a stranger's wallet: extremely unlikely to recover

### Step 5: Accept If Unrecoverable

This is the hardest step. If the funds are gone, accept it and move on. Raging, posting on Reddit, or paying "recovery services" will not help — and may make things worse.

## How Much Is Lost to Wrong Addresses?

Estimates suggest 3-5% of all crypto sent is lost to wrong addresses or lost private keys. That's billions of dollars worth of crypto sitting in inaccessible wallets.

You are not alone. Many experienced crypto users have made this mistake. The key is to learn from it and prevent it from happening again.

## Prevention: Never Make This Mistake Again

### 1. Always Use Copy-Paste, Never Type

Typing an address character by character is asking for trouble. Always copy-paste addresses.

### 2. Send a Test Transaction First

Before sending a large amount, send a small test transaction ($1-$10). Wait for confirmation. Then send the rest.

**This single habit prevents 99% of wrong-address disasters.**

### 3. Whitelist Addresses

Many exchanges let you whitelist withdrawal addresses. Once enabled, you can only withdraw to pre-approved addresses. New addresses require a 24-48 hour waiting period.

### 4. Verify on the Hardware Wallet Screen

If using a hardware wallet, the physical screen shows the destination address. Verify every character matches.

### 5. Use ENS or Solana Naming

Instead of pasting `0x8a23f9c4e5b6d7e8f9a0b1c2d3e4f5a6b7c8d9e0`, send to `yourname.eth` (Ethereum) or `yourname.sol` (Solana).

### 6. QR Codes

Scan QR codes instead of copy-pasting addresses when paying in person.

## The Golden Rule

**Always send a test transaction before sending the full amount.** The $1 test fee is the cheapest insurance you'll ever buy.

<aside class="callout danger">
🚨 <strong>If someone offers to recover your crypto for a fee, they are 100% scamming you.</strong> No legitimate service can recover crypto sent to the wrong address. Anyone who claims otherwise is lying.
</aside>

## Verdict

Sending crypto to the wrong address is one of the most common and costly mistakes in crypto. Most of the time, the funds are unrecoverable.

The solution is prevention: always send a test transaction, always verify the full address, and use whitelisted addresses on exchanges.

If it happens to you, accept the loss and learn the lesson. Every experienced crypto user has a "tuition payment" story — a mistake that cost them money but taught them a lesson they never forgot.

*Related: [How to Set Up a Crypto Wallet](/crypto-basics/how-to-set-up-crypto-wallet/) | [Which Crypto Wallet Should You Use?](/crypto-basics/which-crypto-wallet-should-you-use/) | [How to Move Crypto from Exchange to Cold Wallet](/safe-crypto/how-to-move-crypto-exchange-to-cold-wallet/) | [How to Keep Crypto Safe](/safe-crypto/how-to-keep-crypto-safe-complete-guide/)*

*BitcoinTalk's "Beginners" board has hundreds of threads from users who sent crypto to wrong addresses. Search for "wrong address" to read cautionary tales that will motivate you to always send test transactions.*

---
title: "How to Move Crypto from Exchange to Cold Wallet"
description: "Not your keys, not your coins. Here's a step-by-step guide to moving your crypto from an exchange to a cold wallet for maximum security."
date: 2026-06-14
lastUpdated: 2026-06-14
tags:
  - security
  - beginners
  - wallet
  - hardware-wallet
categories:
  - safe-crypto
---

"Not your keys, not your coins" is the most important phrase in crypto security. If your crypto is on an exchange, you don't truly own it — the exchange does. If the exchange gets hacked, goes bankrupt, or freezes withdrawals, your funds are at risk.

Moving your crypto to a cold wallet (hardware wallet) gives you full control. Here's how to do it safely.

<aside class="callout warning">
⚠️ <strong>Moving crypto between addresses requires extreme care.</strong> One wrong character in the address means your funds are gone forever. Read every step carefully.
</aside>

## What You Need

- A hardware wallet (Ledger, Trezor, Coldcard, or similar)
- The wallet software installed (Ledger Live, Trezor Suite, etc.)
- Your exchange login
- A small amount for test transaction fees

## Step 1: Set Up Your Hardware Wallet

1. Unbox the hardware wallet (check for tampering — if the security seal is broken, return it)
2. Connect to your computer via USB
3. Download and install the official wallet software
4. Choose "Set up new device"
5. The device will generate a 12 or 24-word seed phrase
6. **Write down the seed phrase on paper. Never photograph or type it.**
7. Store the seed phrase in a secure location (safe, safety deposit box)
8. Set a PIN code for the device

<aside class="callout danger">
🚨 <strong>Never enter your hardware wallet seed phrase into any computer or phone.</strong> The seed phrase should only ever be entered into the hardware wallet device itself. If a website asks for your seed phrase, it's a scam.
</aside>

## Step 2: Generate a Receive Address

1. Open the wallet software
2. Select the cryptocurrency you want to receive (e.g., Bitcoin)
3. Click "Receive"
4. The hardware wallet will display a receive address
5. **Verify the address on the hardware wallet screen** — never trust the software display alone

## Step 3: Start Small — Test Transaction

1. On the exchange, initiate a withdrawal of a small amount (e.g., $10 worth)
2. Paste your hardware wallet's receive address
3. Triple-check every character of the address
4. Confirm the withdrawal
5. Wait for the transaction to confirm (10-60 minutes for Bitcoin, 1-5 minutes for Ethereum/Solana)
6. Check that the funds arrived in your hardware wallet software

**Why a test transaction:** If you made a mistake with the address, you lose $10 instead of $10,000.

## Step 4: Send the Full Amount

1. Now that the test transaction worked, send the remaining balance
2. Copy the same receive address (you can reuse the same address)
3. Verify the address on the hardware wallet screen
4. Confirm the withdrawal on the exchange
5. Wait for confirmation
6. Verify the full balance arrived

## Step 5: Verify on Blockchain Explorer

1. Copy the transaction ID (TXID) from the exchange or wallet
2. Paste it into a blockchain explorer (Blockchain.com for BTC, Etherscan for ETH, Solscan for SOL)
3. Confirm the transaction shows the correct amount and destination address

<aside class="callout tip">
💡 <strong>Transaction IDs are public.</strong> Anyone can see the amount and addresses involved. This is normal. Blockchain explorers are how you verify transactions.
</aside>

## Common Mistakes to Avoid

### 1. Sending to the Wrong Network

This is the most common mistake. If you send Ethereum (ERC-20) tokens to a Bitcoin address, the funds are lost. If you send BSC tokens to an Ethereum address, the funds may be recoverable (but it's complicated).

**Always match the network:**
- BTC → Bitcoin network (BTC)
- ETH → Ethereum network (ERC-20)
- SOL → Solana network
- MATIC → Polygon network

### 2. Not Verifying on the Hardware Wallet Screen

The computer screen could be compromised. Always verify the address on the hardware wallet's physical screen before confirming.

### 3. Forgetting About Minimum Withdrawals

Most exchanges have minimum withdrawal amounts ($10-$50 equivalent). If you try to withdraw less, the transaction will fail but you'll still pay the fee.

### 4. Ignoring Withdrawal Fees

Exchange withdrawal fees vary. Some exchanges charge high fees for certain assets. Check the fee before withdrawing.

| Asset | Typical Withdrawal Fee |
|---|---|
| BTC | $1-$5 |
| ETH | $3-$10 |
| USDC (ERC-20) | $3-$8 |
| SOL | $0.01-$0.05 |

## Which Cryptos Should Be in Cold Storage?

**Store in cold storage:**
- Long-term holdings (BTC, ETH)
- Large amounts (over $1,000)
- Assets you won't trade for months or years

**Keep on exchange or hot wallet:**
- Small amounts you might sell soon
- Funds for active trading
- Staking assets (some cold wallets support staking)

## How Often to Move Funds

- **Immediately** — Move large purchases from exchange to cold storage right away
- **Weekly/Monthly** — Batch smaller purchases and move together to reduce fees
- **Only when necessary** — If you're a long-term holder, move once and leave it

## Verdict

Moving crypto from an exchange to a cold wallet is essential for anyone holding significant amounts. The process is simple but requires attention to detail.

**Quick checklist:**
- [ ] Hardware wallet set up with seed phrase backed up
- [ ] Test transaction sent and verified
- [ ] Full amount sent and confirmed
- [ ] Funds verified on hardware wallet

Once your funds are in cold storage, you have full control. No exchange can freeze them. No hacker can steal them (unless they get your hardware wallet and PIN). No bank can block them.

This is the freedom that crypto promises — but only if you take custody of your own coins.

*Related: [Which Crypto Wallet Should You Use?](/crypto-basics/which-crypto-wallet-should-you-use/) | [How to Set Up a Crypto Wallet](/crypto-basics/how-to-set-up-crypto-wallet/) | [How to Use a Hardware Wallet](/safe-crypto/how-to-use-hardware-wallet-ledger-trezor/) | [How to Keep Crypto Safe](/safe-crypto/how-to-keep-crypto-safe-complete-guide/)*

*Moving crypto to cold storage is a rite of passage on BitcoinTalk. Experienced users help newcomers through their first withdrawal. The community motto: "if you don't hold the keys, you don't hold the coins."*

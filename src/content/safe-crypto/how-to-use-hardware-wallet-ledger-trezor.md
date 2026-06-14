---
title: "How to Use a Hardware Wallet: Ledger and Trezor Setup Guide"
description: "Step-by-step guide to setting up a Ledger or Trezor hardware wallet. How to buy, initialize, secure your seed phrase, and move crypto to cold storage."
date: 2026-06-14
lastUpdated: 2026-06-14
tags:
  - hardware-wallet
  - ledger
  - trezor
  - cold-storage
categories:
  - safe-crypto
---

A hardware wallet is the safest way to store crypto. Your private keys never touch the internet — they stay on a physical device that you control.

This guide walks through setting up a Ledger or Trezor, step by step.

<aside class="callout warning">
⚠️ <strong>Buy your hardware wallet directly from the manufacturer.</strong> Ledger: ledger.com. Trezor: trezor.io. Do NOT buy from Amazon, eBay, or third-party sellers — the device could be tampered with.
</aside>

## Which Hardware Wallet Should You Buy?

| Wallet | Price | Best For |
|---|---|---|
| **Ledger Nano S Plus** | $79 | Beginners, budget-friendly |
| **Ledger Nano X** | $149 | Bluetooth, mobile use |
| **Trezor Model One** | $59 | Open-source fans, budget |
| **Trezor Model T** | $219 | Touch screen, advanced features |
| **Coldcard** | $120-180 | Bitcoin maxis, air-gapped |

For most people: **Ledger Nano S Plus** ($79) or **Ledger Nano X** ($149) if you want Bluetooth.

## Part 1: Initial Setup

### Ledger Setup

1. **Unbox** — Check the tamper-evident seal. If broken, return immediately.
2. **Connect** — Plug into your computer via USB (Nano X: or use Bluetooth).
3. **Download Ledger Live** — ledger.com/live — install on your computer or phone.
4. **Choose "Initialize a new device"** — do NOT choose "Restore" (that's for existing wallets).
5. **Set a PIN** — 4-8 digits. Store this separately from your seed phrase.
6. **Write down your recovery phrase** — 24 words displayed on the device. Write on the card provided.
7. **Confirm your recovery phrase** — The device asks you to select words in order.
8. **Install apps** — In Ledger Live, go to "Manager" and install Bitcoin (BTC) and Ethereum (ETH) apps.

### Trezor Setup

1. **Unbox** — Check for tampering.
2. **Connect** — Plug into your computer via USB.
3. **Go to trezor.io/start** — Download Trezor Suite.
4. **Choose "Create a new wallet"** — do NOT recover an existing one.
5. **Set a PIN** — Use the on-screen matrix to enter your PIN.
6. **Write down your recovery phrase** — 20-24 words shown on the screen.
7. **Confirm** — Select some words to verify.
8. **Install apps** — Trezor Suite handles this automatically.

## Part 2: Securing Your Seed Phrase

This is the most critical step. Your seed phrase can recover your funds even if the device is destroyed or lost.

**Do:**
- Write on the provided cards or a metal plate (Cryptosteel, Billfodl)
- Store in a fireproof safe or safety deposit box
- Keep a backup copy in a second location (different building)
- Use a passphrase (25th word) for additional security (advanced)

**Never:**
- Enter your seed phrase on your computer or phone
- Take a photo or screenshot
- Store in any cloud service
- Share with anyone

<aside class="callout danger">
🚨 <strong>If someone asks for your seed phrase — even if they claim to be from Ledger or Trezor support — they're trying to steal from you.</strong> The device manufacturer will NEVER ask for your seed phrase. No legitimate service ever needs it.
</aside>

## Part 3: Receiving Your First Crypto

1. Open Ledger Live or Trezor Suite
2. Go to "Receive"
3. Select the asset (BTC or ETH)
4. Verify the address on your device screen (not just computer screen)
5. Copy the address
6. Send from your exchange to this address
7. Wait for confirmations (1-30 minutes)

**Always verify the address on the device screen — not just your computer.** Some malware can change the displayed address on your computer while showing the correct address in the app.

## Part 4: Using Your Hardware Wallet

### For Transactions
1. Connect your device
2. Open the app (Ledger: open Bitcoin app on device)
3. In Ledger Live, choose "Send"
4. Enter the destination address and amount
5. Confirm the transaction on your device screen
6. Press the button to sign

**Every transaction must be physically confirmed on the device.** An attacker needs physical access to your device AND your PIN to steal funds.

### For DeFi (Ledger + MetaMask)
1. Connect your Ledger to your computer
2. Open MetaMask browser extension
3. Click "Connect Hardware Wallet" (in MetaMask settings)
4. Select "Ledger" and connect
5. Your Ledger addresses appear in MetaMask
6. Use MetaMask as normal — every transaction must be confirmed on the Ledger

This gives you hardware wallet security while using DeFi apps.

## Part 5: Common Tasks

### Checking Your Balance
- Open Ledger Live or Trezor Suite
- Your portfolio updates automatically
- You don't need the device connected to see your balance

### Receiving Crypto
- Generate an address in Ledger Live
- Verify on the device
- Share the address with the sender

### Sending Crypto
- Enter the amount and address
- Confirm the details on the device
- Click "Sign" on the device
- Check the transaction on the computer

### Updating Firmware
- Ledger: Ledger Live → Settings → Device → Update firmware
- Trezor: Trezor Suite → Settings → Device → Update
- **Always update firmware before updating the computer app** (Ledger recommendation)
- Your funds remain accessible after updates (recovery phrase is safe)

## Troubleshooting

| Problem | Solution |
|---|---|
| Computer doesn't detect device | Try a different USB cable / port |
| Ledger Live says "No device found" | Restart Ledger Live, reconnect device |
| Forgot your PIN | You can reset the device (3 wrong PINs), but need your seed phrase to recover |
| Device is lost or stolen | Buy a new one, restore with seed phrase — your crypto is safe |
| Ledger app says "Not enough gas" | Buy a small amount of ETH for fees |
| Transaction pending for hours | Check Etherscan — may need to speed up with higher gas |

## When NOT to Use a Hardware Wallet

- **Daily spending** — Keep $100-500 in a hot wallet (MetaMask, Trust Wallet) for convenience
- **Trading** — Keep trading funds on an exchange (minimize withdrawal fees)
- **Testing** — Use a software wallet for small test transactions

## Verdict

A hardware wallet is the best $79-149 you'll spend on crypto. It protects your keys from malware, phishing, and computer compromise.

**Setup takes 30 minutes. Security lasts forever.**

Once set up: use the hardware wallet for long-term holdings, a hot wallet for daily spending, and exchanges only for buying and selling.

*Related: [Hot Wallets vs Cold Wallets](/safe-crypto/hot-wallets-vs-cold-wallets/) | [How to Set Up a Crypto Wallet](/crypto-basics/how-to-set-up-crypto-wallet/) | [What Is a Seed Phrase?](/safe-crypto/what-is-a-seed-phrase/) | [How to Create a Strong Security Plan](/safe-crypto/how-to-create-strong-security-plan/)*

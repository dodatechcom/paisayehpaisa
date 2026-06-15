---
title: "Crypto Wallet Drainers: How Fake dApps Steal Everything"
description: "Wallet drainers are malicious dApps that trick you into approving unlimited spending. Here's how they work and how to protect yourself."
date: 2026-06-15
lastUpdated: 2026-06-15
tags:
  - wallet-drainer
  - dapps
  - approvals
  - crypto-scam
categories:
  - crypto-scam
---

Wallet drainers are the most sophisticated crypto scam in 2026. They're not obvious scams — they look like real decentralized applications (dApps) with functional interfaces, token prices, and transaction histories. But underneath, they're designed to drain everything from your wallet in a single signature.

## How Wallet Drainers Work

1. **You visit a fake dApp** — Through a phishing link, a hacked Twitter account, or a malicious ad
2. **The dApp looks real** — Same UI as Uniswap, OpenSea, or a popular game
3. **You "connect" your wallet** — This gives the dApp your wallet address (normal for any dApp)
4. **You sign a transaction** — The dApp presents a transaction that looks like "claim tokens" or "verify wallet"
5. **The signature is an approval** — You just approved the scammer to spend ALL your tokens (or a specific token)
6. **Your wallet is drained** — Within minutes or hours, the scammer transfers everything

## Why They're So Dangerous

- **They don't ask for your seed phrase** — Victims think they're safe because they're "just signing"
- **The transaction looks legitimate** — The UI tricks you into accepting a transaction with hidden permissions
- **They drain slowly** — Smart drainers wait hours or days so you don't connect the theft to the fake dApp
- **They can drain specific tokens** — They check your wallet balance and only drain high-value assets

## Types of Drainer Permissions

| Permission Type | What It Does | How to Spot |
|---|---|---|
| ERC-20 Approve | Allows spending of a specific token | Red warning in MetaMask: "Spend limit" |
| ERC-721 Approve | Allows transferring your NFTs | Red warning: "Transfer your NFTs" |
| Set Approval For All | Allows spending ALL your tokens/NFTs | DANGEROUS — unlimited permission |
| Permit | Off-chain approval (no transaction fee for scammer) | No visible transaction until drained |

## How to Spot a Wallet Drainer

- **URL is slightly wrong** — Always verify the domain carefully
- **Asks you to "verify wallet"** — Legitimate dApps don't ask for "verification"
- **Claims you have unclaimed tokens** — "Claim your airdrop!" or "Free tokens available"
- **Asks you to sign a "message"** — Many drainers hide approvals as "just a signature"
- **No clear function** — Why does this dApp need permission to spend your tokens?
- **New project** — Registered domain within the last 30 days

## How to Protect Yourself

### Before Connecting Your Wallet
- **Check the URL** — Is this the official domain? (check the project's Twitter/Discord)
- **Use a burner wallet** — Only keep what you need for this specific interaction
- **Check the dApp on DappRadar** — See if it's known and tracked

### When Signing a Transaction
- **Read the MetaMask warning** — Red text means danger
- **Check what you're approving** — Is it a specific amount or "unlimited"?
- **Check the contract address** — Does it match the official contract?
- **Never sign "Set Approval For All"** without absolute certainty

### After Interacting
- **Use Revoke.cash** — Immediately revoke any approvals you didn't intend
- **Monitor your wallet** — Check for unexpected transactions
- **Use a hardware wallet** — Adds a physical confirmation step

## The "Blind Signing" Risk

Hardware wallets like Ledger and Trezor show transaction details on the device screen. But some EVM transactions are too complex to display, leading to "blind signing" where you approve without seeing details.

**Protection:** Use Ledger's blind signing only with trusted dApps. Disable blind signing in the Ethereum app settings when not in use.

## What to Do If You Signed a Drainer

1. **Use Revoke.cash IMMEDIATELY** — Revoke all token approvals on all chains
2. **Move remaining funds** to a new wallet with a new seed phrase
3. **Do NOT interact with the drainer again** — Some drainers can detect you and drain in the same block
4. **Check all wallets** — If you used multiple wallets, check them all

## Verdict

Wallet drainers are the most advanced crypto scam. They target the approval mechanism that makes DeFi work. The best defense is simple: never sign a transaction you don't fully understand, use burner wallets for new dApps, and regularly check revoke.cash for unnecessary approvals.

*Related: [NFT Scams: Fake Mints and Phishing](/crypto-scam/nft-scams-fake-mints-phishing-copycats/) | [How to Spot a Fake Wallet](/crypto-scam/how-to-spot-fake-crypto-wallet/) | [Crypto Malware](/crypto-scam/crypto-malware-hackers-steal-from-device/)*

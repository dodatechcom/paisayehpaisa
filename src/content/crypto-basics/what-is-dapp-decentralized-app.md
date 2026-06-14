---
title: "What Is a DApp? Decentralized Apps Explained"
description: "A dApp is an app that runs on a blockchain instead of a central server. No company controls it, no one can shut it down. Here's how dApps work."
date: 2026-06-14
lastUpdated: 2026-06-14
tags:
  - dapp
  - decentralized
  - apps
  - blockchain
categories:
  - crypto-basics
---

A dApp (decentralized application) is an app that runs on a blockchain. Unlike a regular app (Gmail, Twitter, Uber) that runs on a company's servers, a dApp runs on a decentralized network of computers.

**No single person or company controls a dApp.** The code is public. Anyone can use it. No one can shut it down.

## Regular Apps vs dApps

| Feature | Regular App (Gmail) | dApp (Uniswap) |
|---|---|---|
| Server | Google's private servers | Thousands of blockchain nodes |
| Data storage | Google's databases | Public blockchain |
| Ownership | Google | Users (via governance token) |
| Shutdown risk | Google can shut it down | No one can shut it down |
| Censorship | Google can block users | No one can block users |
| Updates | Google decides | Community votes |
| Fees | Google sets fees | Smart contract sets fees |

## Popular dApps You Should Know

| dApp | Category | What It Does |
|---|---|---|
| **Uniswap** | DeFi (Exchange) | Swap tokens without an exchange |
| **Aave** | DeFi (Lending) | Lend and borrow crypto |
| **OpenSea** | NFT Marketplace | Buy and sell NFTs |
| **Curve** | DeFi (Exchange) | Stablecoin swaps with low fees |
| **MakerDAO** | DeFi (Stablecoin) | Mint DAI stablecoin |
| **ENS** | Domain names | Register .eth domains |
| **Aragon** | DAO creation | Create and manage DAOs |
| **Audius** | Music streaming | Decentralized Spotify |

## How dApps Work

A dApp has two parts:

### 1. Smart Contracts (Backend)
The code that runs the dApp. Deployed on a blockchain (usually Ethereum, Solana, Arbitrum). Immutable and transparent — anyone can read the code.

### 2. Frontend (Interface)
The website or mobile app you interact with. This CAN be hosted on a regular web server (AWS, Cloudflare). The frontend is just a window to the smart contracts.

**The key insight:** Even if the frontend goes down, the smart contracts keep running. You can always interact with them directly through Etherscan or a custom interface.

## How to Use a dApp

1. **Install a wallet** — MetaMask (Ethereum), Phantom (Solana)
2. **Buy the base token** — ETH for Ethereum dApps, SOL for Solana dApps
3. **Visit the dApp website** — app.uniswap.org, app.aave.com
4. **Connect your wallet** — Click "Connect Wallet" in the dApp
5. **Interact** — Swap, lend, borrow, mint — each action is a blockchain transaction
6. **Confirm in wallet** — MetaMask shows the transaction details. Read them, confirm.

<aside class="callout warning">
⚠️ <strong>Connecting your wallet to a dApp costs nothing.</strong> The scam is when the dApp asks you to sign a malicious transaction. Always read what you're signing in MetaMask before confirming.
</aside>

## dApp Categories

### DeFi (Decentralized Finance)
The largest category. Lending, borrowing, trading, and earning interest without banks.
- Uniswap, Aave, Compound, Curve, MakerDAO

### Gaming and NFTs
Blockchain games and NFT marketplaces.
- Axie Infinity, Gods Unchained, OpenSea, Blur

### Social
Decentralized social media, content platforms.
- Lens Protocol, Farcaster, Audius

### Infrastructure
Tools and services for blockchain development.
- ENS (domain names), Chainlink (oracles), The Graph (indexing)

### DAOs
Protocols for decentralized governance.
- Aragon, Snapshot, Compound Governance

## dApps on Different Chains

| Chain | Number of dApps | Gas Cost | Best For |
|---|---|---|---|
| **Ethereum** | 3,000+ | High | Most dApps, DeFi |
| **Arbitrum** | 500+ | Low | Ethereum dApps cheap |
| **Base** | 400+ | Low | Ethereum dApps cheap |
| **Solana** | 400+ | Very low | Fast, cheap trading |
| **Polygon** | 500+ | Very low | Gaming, NFTs |
| **BNB Chain** | 1,000+ | Low | Meme coins, DeFi |

## The "DappRadar" Problem

DappRadar and similar analytics sites rank dApps by usage. But these rankings can be manipulated:
- **Wash trading** — Bots trade back and forth to inflate volume
- **Sybil attacks** — Fake wallets simulate activity
- **Bounties** — Projects pay for usage

**Don't trust rankings blindly.** Check if the dApp is actually useful by:
- Reading the whitepaper
- Checking the team
- Trying it with a small amount
- Reading discussions on BitcoinTalk or Reddit

## How to Evaluate a dApp

| Factor | Good Sign | Bad Sign |
|---|---|---|
| Team | Known, doxxed | Anonymous |
| Audit | Audited by reputable firm | No audit |
| Time active | 1+ year | Less than 3 months |
| TVL (DeFi) | $10M+ | Under $100K |
| Users | Real engagement | Bot activity |
| Code | Open source, active GitHub | Closed source, no GitHub |

## Risks of dApps

### Smart Contract Risk
A bug in the smart contract can lead to loss of funds. Even audited contracts can have bugs.

### Frontend Hacks
The dApp's website can be compromised. A malicious version could ask you to sign bad transactions.

**Solution:** Use a hardware wallet. Even if the website is compromised, you must physically confirm each transaction on the device. Read the transaction details on the device screen.

### Oracle Manipulation
Some dApps rely on external data (prices from Chainlink). If the oracle is manipulated, the dApp may behave incorrectly.

### Regulatory Risk
Some dApps may be considered securities or unlicensed exchanges in certain countries. Using them could have legal implications.

## The Future: Account Abstraction

dApps are getting easier to use. **Account abstraction** (ERC-4337) lets you:
- Pay gas fees with any token (not just ETH)
- Use social recovery (no more seed phrases)
- Set spending limits and auto-payments
- Use biometric auth (Face ID directly)

This is being adopted in 2025-2026 and will make dApps much more user-friendly.

## Verdict

DApps are applications without a middleman. You connect your wallet and interact directly with smart contracts. No account creation, no KYC, no one can block you.

For beginners: Uniswap (swap tokens) and Aave (lend USDC) are the safest dApps to start with. Always read what you're signing. Never connect your main wallet to unknown dApps.

*Related: [What Is DeFi?](/crypto-basics/what-is-defi-decentralized-finance-explained/) | [What Is a Smart Contract?](/crypto-basics/what-is-smart-contract/) | [What Is a DAO?](/crypto-basics/what-is-dao-decentralized-autonomous-organization/) | [What Is a Layer 2?](/crypto-answers/what-is-layer-2-ethereum-scaling/)*

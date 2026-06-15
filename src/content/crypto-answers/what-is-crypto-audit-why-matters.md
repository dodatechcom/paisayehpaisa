---
title: "What Is a Crypto Audit and Why Does It Matter?"
description: "Smart contract audits review code for vulnerabilities and bugs. Here's what audits cover, which firms are reputable, and whether you can trust audited projects."
date: 2026-06-15
lastUpdated: 2026-06-15
tags:
  - audit
  - security
  - defi
  - research
categories:
  - crypto-answers
---

**Question from BitcoinTalk:** "What does it mean when a crypto project is 'audited'? Can I trust it?"

**Short answer:** A crypto audit is a professional security review of a project's smart contract code. It finds bugs, vulnerabilities, and logic errors. But an audit is not a guarantee of safety — many audited projects have still been hacked.

## What Auditors Check

When a security firm audits a smart contract, they look for:

- **Reentrancy attacks** — Can an attacker drain funds by recursively calling the contract?
- **Integer overflows/underflows** — Can math errors lead to fund loss?
- **Access control flaws** — Can unauthorized users access admin functions?
- **Oracle manipulation** — Can price feeds be manipulated?
- **Flash loan attacks** — Can the contract be exploited with borrowed funds?
- **Logic errors** — Does the contract behave as intended?
- **Centralization risks** — Can the team pause, freeze, or drain funds?

## Reputable Audit Firms

| Firm | Cost | Known For |
|---|---|---|
| Trail of Bits | $100-500K | Gold standard, deep analysis |
| OpenZeppelin | $50-200K | Industry standard, Defender platform |
| Certik | $30-150K | Largest auditor, Skynet ratings |
| Hacken | $20-80K | Strong reputation |
| ConsenSys Diligence | $100-300K | Enterprise-grade audits |
| Code4rena | Variable | Crowdsourced audits |
| Sherlock | Variable | Community audits with insurance |

## The Limits of Audits

**An audit is not a safety guarantee.** Here's why:

- **Audits check the code, not the team** — A rug pull doesn't need a code exploit
- **Audits find known vulnerability patterns** — New attack types may be missed
- **Audits are point-in-time** — Code changes after the audit create new risks
- **Audits can be biased** — The project pays the auditor; some firms are lenient
- **No audit is 100% comprehensive** — Even Trail of Bits audits miss things

**Famous "audited" hacks:**
- Axie Infinity (Ronin bridge) — $620M stolen, code was audited
- Wormhole bridge — $320M stolen, audited by Kudelski
- Nomad bridge — $190M stolen, audited by Quantstamp

## How to Evaluate an Audit

1. **Read the audit report** — It should be publicly available on the auditor's website
2. **Check for "critical" findings** — Every audit has some findings; critical ones should be fixed
3. **Check the date** — Recent audits are better than 6-month-old ones
4. **Check the auditor's reputation** — Is this a top-tier firm or an unknown name?
5. **Check for multiple audits** — One audit is good; two from different firms is better

## Verdict
Treat audits as one signal among many. A Certik audit is better than no audit. A Trail of Bits audit is better than a Certik audit. But audits don't prevent rug pulls, governance attacks, or oracle manipulation.

*Related: [How to Verify If a Crypto Project Is Legitimate](/crypto-scam/how-to-verify-legitimate-crypto-project/) | [Rug Pulls Explained](/crypto-scam/rug-pulls-explained-how-to-spot-early/) | [How to Research a Crypto Project](/crypto-basics/how-to-research-crypto-project-before-investing/)*

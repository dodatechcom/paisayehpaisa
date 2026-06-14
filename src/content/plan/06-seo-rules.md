# SEO Rules for PaisayehPaisa.com

> Adapted from existing SEO guide + crypto-specific additions.

## 1. URL Structure

- Short, keyword-focused, hyphens only
- Matches category slug:
  - `/crypto-basics/best-exchanges-india/`
  - `/crypto-answers/which-wallet-should-i-use/`
- No deep nesting (`/crypto-basics/guide/` not `/crypto/basics/guide/`)
- Tools at `/crypto-tools/dca-calculator/` — add `<meta name="robots" content="noindex">` to prevent ranking over content pages

## 2. First-Paragraph-as-Snippet Rule

The first line after the heading is the most visible line on Google. It MUST:
- Summarize the page in one sentence
- Contain the primary keyword naturally
- Be 140–165 characters
- Stand alone without the heading

Example:
> Choosing your first crypto wallet is confusing — here's how to pick the right one for security, convenience, and your budget.

## 3. Title & First 2 Lines Match

The page title and first 2 lines must share keyword intent. If title is "Best Crypto Wallets for Beginners", the first 2 lines must also contain "crypto wallets" and "beginners".

## 4. Semantic Keywords

Each article must naturally include 5–10 related keywords. For a wallet guide: "hot wallet", "cold storage", "seed phrase", "hardware wallet", "mobile wallet", "exchange wallet", "private key".

## 5. Freshness Date (CRITICAL for crypto)

Crypto changes fast. Every article must show `lastUpdated` prominently near the title. Stale dates hurt ranking for "which wallet" type queries.

Frontmatter:
```yaml
title: "..."
description: "..."
date: 2026-06-14
lastUpdated: 2026-06-14
```

Component shows: "Published Jun 14, 2026 · Updated Jun 14, 2026"

## 6. SERP Gap Analysis (Before Writing)

1. Search the primary keyword
2. Analyze top 5 results
3. Identify gaps (missing sections, outdated examples)
4. Write to beat them, not replicate them

For crypto: most top results are either too technical or too promotional. Gap = simple, honest, beginner-focused.

## 7. Teacher's Mindset

Write as if teaching a classroom of beginners:
- Define terms before using them
- Explain why, not just what
- Use analogies (seed phrase = master password for your money)
- Anticipate questions beginners ask

## 8. Tone & Voice

- Unbiased, genuine suggestion
- Pros AND cons of products
- "You" and "I" — conversational but authoritative
- Never feel like a sales pitch

## 9. Internal Linking

- Every article links to at least 2 other articles on the site
- Use descriptive anchor text
- Pillar + cluster: each category has 1 comprehensive pillar page, satellite articles link to it

## 10. Pillar & Cluster Model

| Category | Pillar page | Satellites |
|---|---|---|
| Crypto Basics | "Crypto for Beginners: The Complete Guide" | Exchange reviews, wallet guides, DCA explainer |
| Safe Crypto | "How to Keep Your Crypto Safe" | Seed phrase guide, 2FA setup, hardware wallet setup |
| Crypto Scam | "How to Spot a Crypto Scam" | Phishing guide, fake wallet list, recovery scam warnings |
| Crypto Answers | N/A (each Q&A standalone) | — |
| Crypto Tax | "Crypto Tax Guide by Country" | India guide, US guide, UK guide |

## 11. Categories & Tags

- Every article filed under 1 category (slug matches URL)
- 3–5 tags per article
- Categories in breadcrumbs

## 12. Frontmatter Template

```yaml
---
title: "SEO Title Here | PaisayehPaisa"
description: "Meta description 150–160 characters"
date: 2026-06-14
lastUpdated: 2026-06-14
draft: false
tags:
  - tag1
  - tag2
  - tag3
categories:
  - crypto-basics
cover:
  image: "/images/slug/cover.webp"
  alt: "Descriptive alt text"
---
```

## 13. Images & Media

- Use diagrams where helpful (wallet comparison, scam flowchart)
- Mermaid for flowcharts: embed as SVG via Astro component
- All images lazy loaded
- WebP format
- Place in `public/images/{slug}/`

## 14. Schema Markup

Auto-generated on every article:
- **Article schema** — headline, description, datePublished, dateModified, author, publisher
- **Breadcrumbs** — category → article
- **FAQ schema** — for Q&A format articles in Crypto Answers

## 15. hreflang (set up from day 1)

Even with English only, include base hreflang so adding Russian later is seamless:
```html
<link rel="alternate" hreflang="en" href="https://paisayehpaisa.com/crypto-basics/..." />
<link rel="alternate" hreflang="x-default" href="https://paisayehpaisa.com/crypto-basics/..." />
```

## 16. Disclaimer

Every article footer includes a crypto disclaimer:
> "This content is for educational purposes only. Not financial advice. Do your own research before investing."

## 17. Performance

- No heavy JS frameworks
- Navigation buttons minimum 44×44px touch targets
- Astro's built-in minification enabled
- Tools (DCA calculator, scam checker) load as separate JS bundles, not global

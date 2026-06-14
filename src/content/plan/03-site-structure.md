# Site Structure (Categories)

> Categories to be decided with user input.

## Proposed categories
1. **Beginner Guides** — starting from zero
2. **Security** — wallets, seed phrases, 2FA
3. **Scam Checker** — how to identify scams
4. **Crypto Tax** — country-specific guides
5. **Tools** — calculators and checkers

## Callout Cards (in articles)

Highlight important lines with colored cards using HTML in markdown:

```markdown
<aside class="callout danger">
🚨 <strong>Your warning text here.</strong>
</aside>
```

**Types:**
- `danger` (red) — security warnings, "never do X"
- `warning` (amber) — important caution, "be careful"
- `tip` (green) — best practices, recommendations
- `info` (blue) — general notes, definitions

Multiple callouts per article supported. Place each on its own line in the .md file.

## Navigation
Home → [Categories] → Article

## Pages
- Homepage (featured articles + tools)
- Category pages (list of articles)
- Individual article pages
- Tool pages (interactive)
- About / Contact

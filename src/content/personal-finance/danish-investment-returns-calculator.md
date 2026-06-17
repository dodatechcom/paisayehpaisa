---
title: "Danish Investment Returns Calculator: Calculate Your Portfolio Growth"
description: "How to calculate investment returns in Denmark — simple, annualized, total, tax-adjusted, and real returns. Includes a worked example with Danish tax rates and fee comparisons."
date: 2026-06-16
lastUpdated: 2026-06-16
tags:
  - investment-returns
  - portfolio-tracking
  - danish-investing
  - capital-gains-tax
  - aktiesparekonto
  - etfs
  - compound-interest
  - fees
  - benchmarks
categories:
  - personal-finance
draft: false
---

Calculating your investment return correctly means understanding five different types of return: simple, annualized, total, tax-adjusted, and real. Most investors make the mistake of only looking at one. This guide covers all five with Danish-specific examples.

## Simple Return

The most basic calculation:

**Simple Return = (Current Value - Purchase Price) / Purchase Price × 100**

### Example

You bought an ETF for DKK 100,000. It is now worth DKK 120,000.

(DKK 120,000 - DKK 100,000) / DKK 100,000 × 100 = **20% return**

Simple return works for a single transaction. It does not account for time held or additional contributions.

## Annualized Return

When you hold an investment for multiple years, simple return is misleading. A 20% return over 1 year is very different from a 20% return over 10 years.

**Annualized Return = (Ending Value / Beginning Value)^(1/years) - 1**

### Example

You invested DKK 100,000 ten years ago. It is now worth DKK 200,000.

(DKK 200,000 / DKK 100,000)^(1/10) - 1 = **7.18% annualized return**

This is the number you should compare against benchmarks and inflation.

### Formula for Multiple Contributions

If you made regular contributions (monthly investments), use the **IRR (Internal Rate of Return)** or the **XIRR function in Excel/Google Sheets.** This accounts for the timing of each cash flow.

`=XIRR(values, dates)` where values are the cash flows (negative for investments, positive for current value) and dates are the transaction dates.

## Total Return

Price return alone is incomplete. Total return includes all income and gains:

**Total Return = (Dividends Received + Capital Gains) / Initial Investment × 100**

### Example

You invested DKK 100,000 in a global ETF:

- Price appreciation: DKK 30,000
- Dividends received over 5 years: DKK 15,000
- Total return: (DKK 15,000 + DKK 30,000) / DKK 100,000 × 100 = **45%**

If you only looked at price return, you would report 30%. Total return is 45%.

**Always use accumulating ETFs for FIRE.** Dividends are reinvested automatically, compounding without tax drag (until you sell). Distributing ETFs trigger dividend tax events each year.

## Tax-Adjusted Return

Denmark taxes investment returns at 27% (up to DKK 61,000/year) and 42% above that. Your gross return is not your real return.

### Regular Taxable Account

If your gross return is 10% and you are in the 42% tax bracket:

Net return = 10% × (1 - 0.42) = **5.8%**

If you are within the 27% bracket:

Net return = 10% × (1 - 0.27) = **7.3%**

### Aktiesparekonto

The aktiesparekonto is taxed at a flat 17% on gains:

Net return = 10% × (1 - 0.17) = **8.3%**

This 1.0-2.5% annual difference compounds dramatically over 20-30 years.

### Tax Drag Example

On DKK 1,000,000 invested for 30 years at 7% gross return:

| Account Type | Tax Rate | Net Return | Final Value |
|-------------|----------|------------|-------------|
| Taxable (42%) | 42% | 4.06% | DKK 3,280,000 |
| Taxable (27%) | 27% | 5.11% | DKK 4,400,000 |
| Aktiesparekonto (17%) | 17% | 5.81% | DKK 5,350,000 |

The difference between the worst and best tax treatment is **DKK 2,070,000** on a DKK 1M portfolio over 30 years. Maximize your aktiesparekonto first.

## Real Return

Nominal returns are misleading if you do not account for inflation. Real return shows your actual purchasing power growth.

**Real Return = Nominal Return - Inflation Rate**

### Example

- Nominal return: 7%
- Inflation: 2%
- Real return: **5%**

Over 30 years at 5% real return, DKK 1,000,000 becomes DKK 4,320,000 in today's purchasing power. At 7% nominal (2% inflation), it becomes DKK 7,610,000 — but that future money buys less.

**Always think in real returns for long-term planning.** Your FIRE number should be expressed in today's DKK, and your return expectations should be real (after inflation).

## Cost Impact: Fees Matter More Than You Think

Investment fees directly reduce your return. Small differences compound into large sums.

### Fee Comparison

| Platform | Annual Fee | 30-Year Cost on DKK 1,000,000 |
|----------|-----------|-------------------------------|
| Nordnet (index ETF) | 0.15% | DKK 45,000 |
| Danske Bank (managed fund) | 0.50% | DKK 150,000 |
| Private bank (advisory) | 1.00% | DKK 300,000 |
| Robo-advisor | 0.75% | DKK 225,000 |

The difference between 0.15% and 1.00% fees over 30 years on DKK 1M is **DKK 255,000.** That is a car. Or two years of expenses for lean FIRE.

### How to Minimize Fees

- Use a direct index platform like Nordnet with low-cost ETFs (TER under 0.20%)
- Avoid actively managed funds with expense ratios above 0.50%
- Use accumulating ETFs to avoid transaction costs from reinvesting dividends
- Check platform fees (Nordnet charges no custody fee for Danish investors on standard accounts)

## Worked Example: Full Portfolio Calculation

**Profile:** DKK 500,000 invested in a global ETF (e.g., iShares Core MSCI World, IWDA)

| Item | Value |
|------|-------|
| Initial investment | DKK 500,000 |
| Investment period | 20 years |
| Average annual return (nominal) | 7% |
| Dividends reinvested | Yes (accumulating ETF) |
| Annual fee (TER) | 0.18% |
| Tax rate on gains | 27% up to DKK 61,000, 42% above |

### Gross Final Value

DKK 500,000 × (1.07)^20 = **DKK 1,934,842**

### Dividends (included in total return)

Assuming 1.8% annual dividend yield, reinvested, included in the 7% total return figure above. No separate calculation needed for accumulating ETFs.

### Tax on Gains

Total gain: DKK 1,934,842 - DKK 500,000 = DKK 1,434,842

Assuming 27% on the first DKK 61,000 per year over 20 years (DKK 1,220,000 total at 27%) and 42% on the remainder (DKK 214,842):

- Tax at 27%: DKK 1,220,000 × 0.27 = DKK 329,400
- Tax at 42%: DKK 214,842 × 0.42 = DKK 90,234
- **Total tax: DKK 419,634**

### Net Final Value

DKK 1,934,842 - DKK 419,634 = **DKK 1,515,208**

Your DKK 500,000 becomes DKK 1.5M after 20 years, even after Danish taxes. That is a 3.03x multiple on your initial investment.

### Net Return Calculation

Net annualized return = (DKK 1,515,208 / DKK 500,000)^(1/20) - 1 = **5.69%**

This is your real-world return after tax. Compare this to benchmarks, not the gross 7%.

## How to Track Your Returns

### Monthly

- Update portfolio values in a spreadsheet or tracking app
- Record all transactions (buys, sells, dividends received)
- Calculate current simple return from each position

### Quarterly

- Calculate annualized return for each position
- Compare to relevant benchmark (see below)
- Review fee impact
- Rebalance if allocations drift more than 5% from target

### Tools

- **Nordnet app:** automatic portfolio tracking for Danish accounts
- **Sharesight:** supports Danish stocks and ETFs, calculates total return including dividends
- **Excel / Google Sheets:** build a custom tracker with `XIRR()` for accurate annualized returns
- **Portfolio Visualizer:** backtest portfolios and compare to benchmarks

## Common Mistakes

1. **Only looking at price return.** If your ETF went from DKK 100 to DKK 120 but paid DKK 10 in dividends, your total return is 30%, not 20%.

2. **Ignoring inflation.** A 7% return with 3% inflation is only 4% real. Over 20 years, that difference is hundreds of thousands of DKK.

3. **Forgetting fees.** A 1% annual fee seems small. Over 30 years on DKK 1M, it costs DKK 300,000.

4. **Not accounting for tax.** Your 10% gross return is not 10% in your pocket. Denmark takes 27-42%.

5. **Comparing to the wrong benchmark.** A Danish stock portfolio should be compared to C25, not S&P 500. A global portfolio should be compared to MSCI World.

6. **Including pension in FIRE calculations.** Danish pension is locked until 60+. Your FIRE portfolio is separate.

7. **Chasing last year's returns.** A fund that returned 20% last year may return -10% this year. Use long-term averages (5-10 years) for planning.

## Benchmarks for Danish Investors

Compare your returns against relevant benchmarks, not arbitrary targets:

| Benchmark | What It Tracks | Use For |
|-----------|---------------|---------|
| C25 (OMX C25) | 25 largest Danish companies | Danish-only portfolios |
| MSCI World | Global developed markets | Global ETF portfolios |
| MSCI ACWI | All-country world index | Total global exposure |
| S&P 500 | 500 largest US companies | US-only portfolios |
| OMX Copenhagen | All listed Danish shares | Broad Danish exposure |
| Euro Stoxx 50 | 50 largest Eurozone companies | European portfolios |

If your global ETF portfolio returns 5.5% after tax and fees, and MSCI World returned 7% gross, your 1.5% underperformance is explained by tax (0.8%) and fees (0.2%). That is normal and expected for Danish investors.

## Tips for Calculating Returns

1. **Calculate total return including dividends.** Price return is only half the story. Use accumulating ETFs and track total return.

2. **Adjust for inflation.** Think in real returns for long-term planning. Your FIRE number is in today's DKK.

3. **Account for fees.** Every 0.1% in fees costs you DKK 30,000 per million over 30 years. Choose low-cost platforms and ETFs.

4. **Compare to the right benchmark.** Match your portfolio composition to the benchmark. A 60/40 global portfolio should be compared to a blended index, not pure equity.

5. **Track monthly, review quarterly.** Monthly tracking keeps you disciplined. Quarterly reviews let you catch drift and rebalance.

6. **Use XIRR for accuracy.** If you make regular contributions, simple return calculations are wrong. Use XIRR for annualized return.

7. **Don't panic over short-term returns.** One year of underperformance means nothing. Judge your portfolio over 5-10 year periods.

8. **Separate FIRE portfolio from pension.** Danish pension is locked until 60+. Track it separately with different return expectations.

Your investment return is not just a number — it is a measure of how well your money is working for you. Calculate it correctly, adjust for the Danish tax reality, and compare it to benchmarks that matter.

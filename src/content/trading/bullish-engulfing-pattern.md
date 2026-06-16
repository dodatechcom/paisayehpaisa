---
title: "Bullish Engulfing Pattern: How to Spot a Trend Reversal"
description: "What a bullish engulfing candlestick looks like, how to trade it, and how to combine it with MACD and volume for higher probability setups. Real chart examples."
date: 2026-06-16
lastUpdated: 2026-06-16
tags:
  - technical-analysis
  - candlestick-patterns
  - reversal
  - charts
  - trading-strategy
categories:
  - trading
---

A single candlestick can tell you more about market sentiment than most indicators.

The **bullish engulfing pattern** is one of the most reliable reversal signals in technical analysis. It appears at the end of a downtrend and signals that buyers have overwhelmed sellers.

Here is exactly how it works, what to look for, and how to confirm it with other tools.

## What Is a Bullish Engulfing Pattern?

Two candles form this pattern:

1. A **red (bearish) candle** — sellers are in control, price closes lower
2. A **larger green (bullish) candle** — opens below the previous close, then rallies to close above the previous open

The green candle's body "engulfs" the red candle's body completely.

<svg viewBox="0 0 760 420" style="width:100%; max-width:760px; height:auto; margin:1.5rem 0; border-radius:8px; background:#1a1d23; font-family:-apple-system,system-ui,sans-serif;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2a2d35" stroke-width="0.5"/>
    </pattern>
    <marker id="arrow-red" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#ef4444"/>
    </marker>
    <marker id="arrow-green" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#22c55e"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="760" height="420" fill="#1a1d23" rx="8"/>
  <rect x="50" y="30" width="660" height="250" fill="url(#grid)"/>

  <!-- Title -->
  <text x="380" y="22" fill="#e2e8f0" font-size="13" font-weight="700" text-anchor="middle" letter-spacing="0.5">BTC/USD · 4H Chart</text>

  <!-- Y-axis labels -->
  <text x="42" y="42" fill="#64748b" font-size="10" text-anchor="end">65,000</text>
  <text x="42" y="95" fill="#64748b" font-size="10" text-anchor="end">63,000</text>
  <text x="42" y="148" fill="#64748b" font-size="10" text-anchor="end">61,000</text>
  <text x="42" y="201" fill="#64748b" font-size="10" text-anchor="end">59,000</text>
  <text x="42" y="254" fill="#64748b" font-size="10" text-anchor="end">57,000</text>

  <!-- Horizontal grid lines -->
  <line x1="50" y1="40" x2="710" y2="40" stroke="#2a2d35" stroke-width="0.5"/>
  <line x1="50" y1="93" x2="710" y2="93" stroke="#2a2d35" stroke-width="0.5"/>
  <line x1="50" y1="146" x2="710" y2="146" stroke="#2a2d35" stroke-width="0.5"/>
  <line x1="50" y1="199" x2="710" y2="199" stroke="#2a2d35" stroke-width="0.5"/>
  <line x1="50" y1="252" x2="710" y2="252" stroke="#2a2d35" stroke-width="0.5"/>

  <!-- === CANDLE 1 (Red) === -->
  <line x1="130" y1="68" x2="130" y2="112" stroke="#ef4444" stroke-width="1.5"/>
  <rect x="115" y="72" width="30" height="32" fill="#ef4444" rx="1"/>

  <!-- === CANDLE 2 (Red) === -->
  <line x1="200" y1="88" x2="200" y2="132" stroke="#ef4444" stroke-width="1.5"/>
  <rect x="185" y="92" width="30" height="32" fill="#ef4444" rx="1"/>

  <!-- === CANDLE 3 (Red) === -->
  <line x1="270" y1="105" x2="270" y2="152" stroke="#ef4444" stroke-width="1.5"/>
  <rect x="255" y="110" width="30" height="35" fill="#ef4444" rx="1"/>

  <!-- === CANDLE 4 (Red) === -->
  <line x1="340" y1="128" x2="340" y2="170" stroke="#ef4444" stroke-width="1.5"/>
  <rect x="325" y="132" width="30" height="30" fill="#ef4444" rx="1"/>

  <!-- === CANDLE 5 (Doji / indecision) === -->
  <line x1="410" y1="140" x2="410" y2="180" stroke="#ef4444" stroke-width="1.5"/>
  <rect x="395" y="155" width="30" height="10" fill="#ef4444" rx="1"/>

  <!-- === CANDLE 6 (BULLISH ENGULFING) === -->
  <line x1="480" y1="135" x2="480" y2="210" stroke="#22c55e" stroke-width="1.5"/>
  <rect x="462" y="142" width="36" height="60" fill="#22c55e" rx="1"/>

  <!-- === CANDLE 7 (Green follow-through) === -->
  <line x1="550" y1="105" x2="550" y2="150" stroke="#22c55e" stroke-width="1.5"/>
  <rect x="535" y="110" width="30" height="30" fill="#22c55e" rx="1"/>

  <!-- === CANDLE 8 (Green) === -->
  <line x1="620" y1="85" x2="620" y2="125" stroke="#22c55e" stroke-width="1.5"/>
  <rect x="605" y="90" width="30" height="28" fill="#22c55e" rx="1"/>

  <!-- Trendline (downtrend) -->
  <line x1="115" y1="72" x2="395" y2="160" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="6,3" opacity="0.6"/>
  <text x="250" y="118" fill="#ef4444" font-size="10" opacity="0.6" transform="rotate(-15, 250, 118)">Downtrend</text>

  <!-- Support level -->
  <line x1="50" y1="185" x2="710" y2="185" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
  <text x="715" y="188" fill="#f59e0b" font-size="9" opacity="0.7">Support</text>

  <!-- Annotation arrow for Bullish Engulfing -->
  <line x1="480" y1="215" x2="480" y2="275" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrow-green)"/>
  <rect x="425" y="278" width="110" height="20" fill="#22c55e" rx="4" opacity="0.9"/>
  <text x="480" y="292" fill="#1a1d23" font-size="11" font-weight="700" text-anchor="middle">BULLISH ENGULFING</text>

  <!-- Volume bars -->
  <text x="30" y="305" fill="#64748b" font-size="9" text-anchor="end">Vol</text>
  <line x1="50" y1="295" x2="710" y2="295" stroke="#2a2d35" stroke-width="0.5"/>
  <rect x="118" y="322" width="24" height="18" fill="#ef4444" opacity="0.5" rx="1"/>
  <rect x="188" y="316" width="24" height="24" fill="#ef4444" opacity="0.5" rx="1"/>
  <rect x="258" y="310" width="24" height="30" fill="#ef4444" opacity="0.5" rx="1"/>
  <rect x="328" y="316" width="24" height="24" fill="#ef4444" opacity="0.5" rx="1"/>
  <rect x="398" y="330" width="24" height="10" fill="#ef4444" opacity="0.5" rx="1"/>
  <rect x="466" y="290" width="28" height="50" fill="#22c55e" opacity="0.7" rx="1"/>
  <rect x="538" y="298" width="24" height="42" fill="#22c55e" opacity="0.5" rx="1"/>
  <rect x="608" y="310" width="24" height="30" fill="#22c55e" opacity="0.5" rx="1"/>

  <!-- Volume spike label -->
  <text x="480" y="348" fill="#22c55e" font-size="9" font-weight="600" text-anchor="middle" opacity="0.8">Volume spike</text>

  <!-- === MACD Sub-chart === -->
  <text x="30" y="380" fill="#64748b" font-size="9" text-anchor="end">MACD</text>
  <rect x="50" y="360" width="660" height="55" fill="url(#grid)"/>
  <line x1="50" y1="387" x2="710" y2="387" stroke="#4b5563" stroke-width="0.5" stroke-dasharray="2,2"/>

  <!-- MACD line (blue) -->
  <polyline points="130,395 200,398 270,400 340,402 410,400 480,395 550,388 620,380" fill="none" stroke="#3b82f6" stroke-width="1.5"/>

  <!-- Signal line (orange) -->
  <polyline points="130,392 200,395 270,398 340,400 410,401 480,400 550,396 620,390" fill="none" stroke="#f59e0b" stroke-width="1.5"/>

  <!-- Histogram bars (MACD - Signal) -->
  <rect x="175" y="383" width="8" height="10" fill="#ef4444" opacity="0.6" rx="1"/>
  <rect x="245" y="381" width="8" height="14" fill="#ef4444" opacity="0.6" rx="1"/>
  <rect x="315" y="380" width="8" height="16" fill="#ef4444" opacity="0.6" rx="1"/>
  <rect x="385" y="382" width="8" height="12" fill="#ef4444" opacity="0.6" rx="1"/>
  <rect x="455" y="385" width="8" height="6" fill="#ef4444" opacity="0.6" rx="1"/>
  <rect x="495" y="388" width="8" height="4" fill="#22c55e" opacity="0.6" rx="1"/>
  <rect x="525" y="386" width="8" height="8" fill="#22c55e" opacity="0.6" rx="1"/>
  <rect x="595" y="383" width="8" height="12" fill="#22c55e" opacity="0.6" rx="1"/>

  <!-- MACD cross label -->
  <circle cx="495" cy="396" r="3" fill="#f59e0b"/>
  <text x="500" y="378" fill="#f59e0b" font-size="9" font-weight="600">Buy signal</text>

  <!-- Legend -->
  <rect x="570" y="368" width="8" height="8" fill="#3b82f6" rx="1"/>
  <text x="582" y="376" fill="#64748b" font-size="9">MACD</text>
  <rect x="620" y="368" width="8" height="8" fill="#f59e0b" rx="1"/>
  <text x="632" y="376" fill="#64748b" font-size="9">Signal</text>
</svg>

## How to Identify It

The pattern has three requirements:

| Requirement | Why It Matters |
|-------------|---------------|
| **Prior downtrend** | The pattern is meaningless in a sideways or uptrending market |
| **Bearish candle first** | Confirms sellers were in control |
| **Bullish candle engulfs** | The green candle's body completely covers the red candle's body |

The most powerful engulfing patterns have a **small red candle followed by a much larger green candle** — the larger the engulfing candle, the more aggressive the buying pressure.

## What It Tells You

The psychology behind a bullish engulfing pattern:

| Phase | Sentiment |
|-------|-----------|
| Before pattern | Bears are in control, price is making lower lows |
| Red candle forms | Sellers push price down, close near the low |
| Green candle opens | Price gaps down or opens lower — bears feel confident |
| Green candle rallies | Buyers step in aggressively, price reverses |
| Green candle closes | Closes above the red candle's open — bulls have won |
| Follow-through | If next candle stays above the engulfing close, reversal is confirmed |

## How to Trade It

A bullish engulfing alone is not enough. Here is how to filter for higher-probability trades:

### 1. Check the Context

The pattern is strongest when it forms at:
- A **known support level** (previous swing low, trendline, moving average)
- A **round number** (60,000 BTC, 1.2000 EUR/USD)
- After a **measured move down** (price dropped 10-20%)

### 2. Confirm With Volume

Volume must be higher on the engulfing candle than the previous candles. The volume spike confirms that institutional money is behind the move.

### 3. Add a Momentum Indicator

A MACD crossover or RSI divergence at the same time significantly increases the probability.

<svg viewBox="0 0 760 320" style="width:100%; max-width:760px; height:auto; margin:1.5rem 0; border-radius:8px; background:#1a1d23; font-family:-apple-system,system-ui,sans-serif;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2a2d35" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="760" height="320" fill="#1a1d23" rx="8"/>
  <rect x="50" y="30" width="660" height="200" fill="url(#grid2)"/>

  <text x="380" y="22" fill="#e2e8f0" font-size="13" font-weight="700" text-anchor="middle" letter-spacing="0.5">EUR/USD · Daily Chart — Multiple Confluence</text>

  <!-- Slightly different candles for EUR/USD example -->
  <line x1="100" y1="80" x2="100" y2="120" stroke="#ef4444" stroke-width="1.5"/>
  <rect x="86" y="85" width="28" height="28" fill="#ef4444" rx="1"/>

  <line x1="160" y1="100" x2="160" y2="140" stroke="#ef4444" stroke-width="1.5"/>
  <rect x="146" y="105" width="28" height="28" fill="#ef4444" rx="1"/>

  <line x1="220" y1="115" x2="220" y2="155" stroke="#ef4444" stroke-width="1.5"/>
  <rect x="206" y="120" width="28" height="28" fill="#ef4444" rx="1"/>

  <line x1="280" y1="125" x2="280" y2="165" stroke="#ef4444" stroke-width="1.5"/>
  <rect x="266" y="130" width="28" height="25" fill="#ef4444" rx="1"/>

  <!-- Engulfing -->
  <line x1="345" y1="100" x2="345" y2="178" stroke="#22c55e" stroke-width="2"/>
  <rect x="326" y="108" width="38" height="58" fill="#22c55e" rx="1"/>

  <line x1="410" y1="75" x2="410" y2="115" stroke="#22c55e" stroke-width="1.5"/>
  <rect x="396" y="80" width="28" height="25" fill="#22c55e" rx="1"/>

  <line x1="470" y1="58" x2="470" y2="95" stroke="#22c55e" stroke-width="1.5"/>
  <rect x="456" y="62" width="28" height="22" fill="#22c55e" rx="1"/>

  <!-- Support level -->
  <line x1="50" y1="160" x2="710" y2="160" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.7"/>
  <text x="715" y="163" fill="#f59e0b" font-size="10" font-weight="600" opacity="0.8">Key support</text>

  <!-- 50 EMA -->
  <polyline points="100,95 160,110 220,120 280,145 345,130 410,112 470,90" fill="none" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="480" y="88" fill="#8b5cf6" font-size="9" opacity="0.8">50 EMA</text>

  <!-- Labels -->
  <!-- Downtrend -->
  <line x1="86" y1="85" x2="266" y2="135" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.5"/>
  <text x="150" y="115" fill="#ef4444" font-size="10" opacity="0.6" transform="rotate(-12, 150, 115)">Downtrend</text>

  <!-- Engulfing label -->
  <line x1="345" y1="182" x2="345" y2="215" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrow-green)"/>
  <rect x="270" y="218" width="150" height="18" fill="#22c55e" rx="4" opacity="0.9"/>
  <text x="345" y="231" fill="#1a1d23" font-size="10" font-weight="700" text-anchor="middle">BULLISH ENGULFING</text>

  <!-- Confluence checkmarks -->
  <circle cx="580" cy="60" r="5" fill="#22c55e"/>
  <text x="590" y="64" fill="#22c55e" font-size="9">At support level</text>
  <circle cx="580" cy="78" r="5" fill="#22c55e"/>
  <text x="590" y="82" fill="#22c55e" font-size="9">Above 50 EMA</text>
  <circle cx="580" cy="96" r="5" fill="#22c55e"/>
  <text x="590" y="100" fill="#22c55e" font-size="9">Volume confirming</text>
  <circle cx="580" cy="114" r="5" fill="#22c55e"/>
  <text x="590" y="118" fill="#22c55e" font-size="9">MACD bullish cross</text>
</svg>

### 4. Entry & Stop Strategy

| | Approach |
|---|---------|
| **Aggressive entry** | Buy at the close of the engulfing candle |
| **Conservative entry** | Wait for a retest of the engulfing candle's close |
| **Stop loss** | Below the engulfing candle's low |
| **Take profit** | Previous swing high or 1.5x - 2x the risk |

<aside class="callout warning">
⚠️ <strong>False signals happen.</strong> An engulfing pattern can fail if the broader trend is strongly bearish. Always use a stop loss and consider the higher timeframe trend.
</aside>

## Real Examples Across Markets

### Crypto: Bitcoin 4H Chart
The pattern forms after a 4-5 candle decline to a known support zone. The engulfing candle closes above the 50 EMA, volume spikes 3x above average, and MACD crosses bullish. Price rallies 4% over the next 12 hours.

### Forex: EUR/USD Daily
After a 3-day sell-off, a bullish engulfing forms right at a key horizontal support. RSI shows bullish divergence (price made lower low, RSI made higher low). Price reverses 150 pips over the following week.

### Stocks: NVDA Weekly
During a pullback in a longer-term uptrend, a bullish engulfing on the weekly chart signals the correction is over. The pattern is more reliable on higher timeframes.

## What Makes It Fail

| Failure Reason | What to Watch |
|----------------|---------------|
| Engulfing candle has small body | Weak buying pressure, likely to fail |
| Low volume on the engulf | No institutional participation |
| Stronger trend against you | Daily downtrend overpowers 4H signal |
| No follow-through next candle | If next candle closes below engulfing close, the signal is invalid |

## Practice Exercise

Look at a BTC/USD 4H chart on TradingView. Scroll back and find examples where:

1. Price made a clear downtrend
2. A bullish engulfing formed
3. Volume was higher than the previous 5 candles
4. MACD crossed bullish at the same time

Mark how often price rallied at least 2-3% after. That is your edge.

## Summary

| Key Point | Takeaway |
|-----------|----------|
| **What it is** | A two-candle reversal pattern where a green candle fully engulfs the previous red candle |
| **Why it works** | It shows a complete shift in control from sellers to buyers |
| **When it's strongest** | At support, with high volume, and MACD/RSI confirmation |
| **Your edge** | Trade only when 3+ confluence factors align |

<aside class="callout tip">
💡 <strong>The best setups come from confluence.</strong> A bullish engulfing at support + high volume + MACD crossover is significantly more reliable than any one signal alone. Pattern recognition is a skill — practice looking at charts daily.
</aside>

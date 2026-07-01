import type { APIRoute } from 'astro';

const categoryColors: Record<string, string> = {
  'crypto-basics': '#2563eb',
  'safe-crypto': '#059669',
  'crypto-scam': '#dc2626',
  'crypto-answers': '#7c3aed',
  'crypto-tax': '#d97706',
  'trading': '#f97316',
  'insurance': '#6366f1',
  'investing': '#10b981',
  'blog': '#8b5cf6',
  'personal-finance': '#0ea5e9',
};

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length > maxChars) {
      if (currentLine) lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine = currentLine ? currentLine + ' ' + word : word;
    }
  }
  if (currentLine) lines.push(currentLine.trim());
  return lines.slice(0, 3);
}

export const GET: APIRoute = ({ url }) => {
  const title = url.searchParams.get('title') || 'PaisayehPaisa';
  const category = url.searchParams.get('category') || 'personal-finance';
  const color = categoryColors[category] || '#0ea5e9';

  const lines = wrapText(title, 28);
  const lineHeight = 52;
  const startY = lines.length === 1 ? 170 : lines.length === 2 ? 155 : 140;

  const textElements = lines.map((line, i) =>
    `<text x="640" y="${startY + i * lineHeight}" font-family="Arial, Helvetica, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle">${escapeXml(line)}</text>`
  ).join('\n    ');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${color}"/>
      <stop offset="100%" style="stop-color:${adjustColor(color, 30)}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="6" fill="url(#accent)"/>
  <rect x="60" y="540" width="1080" height="1" fill="#334155" opacity="0.5"/>
  <text x="640" y="80" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="bold" fill="${color}" text-anchor="middle">PaisayehPaisa</text>
  <text x="640" y="115" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="#94a3b8" text-anchor="middle">${category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</text>
  ${textElements}
  <text x="640" y="580" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#64748b" text-anchor="middle">paisayehpaisa.com</text>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function adjustColor(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, (num >> 16) + amount);
  const g = Math.min(255, ((num >> 8) & 0x00FF) + amount);
  const b = Math.min(255, (num & 0x0000FF) + amount);
  return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
}

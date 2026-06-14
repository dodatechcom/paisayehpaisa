export const tagStyles: Record<string, { color: string; bg: string; icon: string }> = {
  wallets: { color: '#1e40af', bg: '#dbeafe', icon: '💳' },
  beginners: { color: '#065f46', bg: '#d1fae5', icon: '🌱' },
  security: { color: '#7c3aed', bg: '#ede9fe', icon: '🔒' },
  'hardware-wallet': { color: '#b91c1c', bg: '#fee2e2', icon: '🛡️' },
  'hot-wallet': { color: '#c2410c', bg: '#ffedd5', icon: '🔥' },
  scam: { color: '#991b1b', bg: '#fecaca', icon: '⚠️' },
  phishing: { color: '#7c2d12', bg: '#fed7aa', icon: '🎣' },
  exchange: { color: '#1e40af', bg: '#bfdbfe', icon: '🏛️' },
  bitcoin: { color: '#92400e', bg: '#fef3c7', icon: '₿' },
  defi: { color: '#6b21a8', bg: '#e9d5ff', icon: '🏗️' },
  nft: { color: '#be185d', bg: '#fce7f3', icon: '🖼️' },
  tax: { color: '#1e3a5f', bg: '#cbd5e1', icon: '💰' },
  regulation: { color: '#3b0764', bg: '#d8b4fe', icon: '⚖️' },
  privacy: { color: '#164e63', bg: '#cffafe', icon: '🕵️' },
  default: { color: '#4338ca', bg: '#eef2ff', icon: '🏷️' },
};

export function getTagStyle(tag: string) {
  return tagStyles[tag] || tagStyles.default;
}

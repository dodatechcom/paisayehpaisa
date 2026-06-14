declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"crypto-answers": {
"best-crypto-apps-daily-trading.md": {
	id: "best-crypto-apps-daily-trading.md";
  slug: "best-crypto-apps-daily-trading";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"best-crypto-exchange-beginners.md": {
	id: "best-crypto-exchange-beginners.md";
  slug: "best-crypto-exchange-beginners";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"best-crypto-exchanges-us-compared.md": {
	id: "best-crypto-exchanges-us-compared.md";
  slug: "best-crypto-exchanges-us-compared";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"best-crypto-news-sources-research.md": {
	id: "best-crypto-news-sources-research.md";
  slug: "best-crypto-news-sources-research";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"best-crypto-portfolio-tracker-apps.md": {
	id: "best-crypto-portfolio-tracker-apps.md";
  slug: "best-crypto-portfolio-tracker-apps";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"best-crypto-staking-platforms-2026.md": {
	id: "best-crypto-staking-platforms-2026.md";
  slug: "best-crypto-staking-platforms-2026";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"can-you-really-get-rich-from-crypto.md": {
	id: "can-you-really-get-rich-from-crypto.md";
  slug: "can-you-really-get-rich-from-crypto";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"centralized-vs-decentralized-exchanges.md": {
	id: "centralized-vs-decentralized-exchanges.md";
  slug: "centralized-vs-decentralized-exchanges";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"crypto-copy-trading-guide.md": {
	id: "crypto-copy-trading-guide.md";
  slug: "crypto-copy-trading-guide";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"how-to-read-crypto-whitepaper.md": {
	id: "how-to-read-crypto-whitepaper.md";
  slug: "how-to-read-crypto-whitepaper";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"how-to-sell-crypto-low-fees.md": {
	id: "how-to-sell-crypto-low-fees.md";
  slug: "how-to-sell-crypto-low-fees";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"how-to-withdraw-crypto-to-bank-account.md": {
	id: "how-to-withdraw-crypto-to-bank-account.md";
  slug: "how-to-withdraw-crypto-to-bank-account";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"is-crypto-good-investment-2026.md": {
	id: "is-crypto-good-investment-2026.md";
  slug: "is-crypto-good-investment-2026";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"public-key-vs-private-key.md": {
	id: "public-key-vs-private-key.md";
  slug: "public-key-vs-private-key";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"should-you-use-crypto-debit-card.md": {
	id: "should-you-use-crypto-debit-card.md";
  slug: "should-you-use-crypto-debit-card";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"what-happens-if-exchange-collapses.md": {
	id: "what-happens-if-exchange-collapses.md";
  slug: "what-happens-if-exchange-collapses";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"what-is-bitcoin-halving.md": {
	id: "what-is-bitcoin-halving.md";
  slug: "what-is-bitcoin-halving";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"what-is-blockchain-bridge.md": {
	id: "what-is-blockchain-bridge.md";
  slug: "what-is-blockchain-bridge";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"what-is-gas-crypto-transaction-fees.md": {
	id: "what-is-gas-crypto-transaction-fees.md";
  slug: "what-is-gas-crypto-transaction-fees";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"what-is-layer-2-ethereum-scaling.md": {
	id: "what-is-layer-2-ethereum-scaling.md";
  slug: "what-is-layer-2-ethereum-scaling";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"what-is-slippage-crypto-trading.md": {
	id: "what-is-slippage-crypto-trading.md";
  slug: "what-is-slippage-crypto-trading";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"what-to-do-send-crypto-wrong-address.md": {
	id: "what-to-do-send-crypto-wrong-address.md";
  slug: "what-to-do-send-crypto-wrong-address";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
};
"crypto-basics": {
"10-legit-ways-earn-passive-income-crypto.md": {
	id: "10-legit-ways-earn-passive-income-crypto.md";
  slug: "10-legit-ways-earn-passive-income-crypto";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"10-percent-rule-crypto-portfolio-allocation.md": {
	id: "10-percent-rule-crypto-portfolio-allocation.md";
  slug: "10-percent-rule-crypto-portfolio-allocation";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"ai-and-crypto-can-ai-help-trade-better.md": {
	id: "ai-and-crypto-can-ai-help-trade-better.md";
  slug: "ai-and-crypto-can-ai-help-trade-better";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"apy-vs-apr-crypto.md": {
	id: "apy-vs-apr-crypto.md";
  slug: "apy-vs-apr-crypto";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"are-meme-coins-worth-risk-2026.md": {
	id: "are-meme-coins-worth-risk-2026.md";
  slug: "are-meme-coins-worth-risk-2026";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"best-crypto-side-hustles-2026.md": {
	id: "best-crypto-side-hustles-2026.md";
  slug: "best-crypto-side-hustles-2026";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"best-cryptocurrencies-beginners-low-risk.md": {
	id: "best-cryptocurrencies-beginners-low-risk.md";
  slug: "best-cryptocurrencies-beginners-low-risk";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"best-defi-platforms-passive-income.md": {
	id: "best-defi-platforms-passive-income.md";
  slug: "best-defi-platforms-passive-income";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"best-meme-coins-that-could-explode.md": {
	id: "best-meme-coins-that-could-explode.md";
  slug: "best-meme-coins-that-could-explode";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"cheapest-crypto-exchanges-low-fees-guide.md": {
	id: "cheapest-crypto-exchanges-low-fees-guide.md";
  slug: "cheapest-crypto-exchanges-low-fees-guide";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"coinbase-vs-binance-which-is-better.md": {
	id: "coinbase-vs-binance-which-is-better.md";
  slug: "coinbase-vs-binance-which-is-better";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"crypto-for-beginners-complete-guide.md": {
	id: "crypto-for-beginners-complete-guide.md";
  slug: "crypto-for-beginners-complete-guide";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"crypto-lending-borrowing-beginners.md": {
	id: "crypto-lending-borrowing-beginners.md";
  slug: "crypto-lending-borrowing-beginners";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"crypto-narratives-2026.md": {
	id: "crypto-narratives-2026.md";
  slug: "crypto-narratives-2026";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"crypto-vs-gambling-recognizing-thin-line.md": {
	id: "crypto-vs-gambling-recognizing-thin-line.md";
  slug: "crypto-vs-gambling-recognizing-thin-line";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"crypto-vs-stocks-which-is-better.md": {
	id: "crypto-vs-stocks-which-is-better.md";
  slug: "crypto-vs-stocks-which-is-better";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"crypto-yield-farming-beginners-guide.md": {
	id: "crypto-yield-farming-beginners-guide.md";
  slug: "crypto-yield-farming-beginners-guide";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"ethereum-vs-solana-which-is-better.md": {
	id: "ethereum-vs-solana-which-is-better.md";
  slug: "ethereum-vs-solana-which-is-better";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-blockchain-works-simple-explanation.md": {
	id: "how-blockchain-works-simple-explanation.md";
  slug: "how-blockchain-works-simple-explanation";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-crypto-market-cycles-work.md": {
	id: "how-crypto-market-cycles-work.md";
  slug: "how-crypto-market-cycles-work";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-defi-changing-traditional-banking.md": {
	id: "how-defi-changing-traditional-banking.md";
  slug: "how-defi-changing-traditional-banking";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-much-earn-crypto-staking.md": {
	id: "how-much-earn-crypto-staking.md";
  slug: "how-much-earn-crypto-staking";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-to-buy-crypto-safely.md": {
	id: "how-to-buy-crypto-safely.md";
  slug: "how-to-buy-crypto-safely";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-to-earn-interest-crypto-defi-cefi.md": {
	id: "how-to-earn-interest-crypto-defi-cefi.md";
  slug: "how-to-earn-interest-crypto-defi-cefi";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-to-make-daily-income-crypto.md": {
	id: "how-to-make-daily-income-crypto.md";
  slug: "how-to-make-daily-income-crypto";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-to-read-crypto-chart.md": {
	id: "how-to-read-crypto-chart.md";
  slug: "how-to-read-crypto-chart";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-to-research-crypto-project-before-investing.md": {
	id: "how-to-research-crypto-project-before-investing.md";
  slug: "how-to-research-crypto-project-before-investing";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-to-set-up-crypto-wallet.md": {
	id: "how-to-set-up-crypto-wallet.md";
  slug: "how-to-set-up-crypto-wallet";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-to-spot-early-gems-100x-crypto.md": {
	id: "how-to-spot-early-gems-100x-crypto.md";
  slug: "how-to-spot-early-gems-100x-crypto";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-to-start-crypto-trading-100-dollars.md": {
	id: "how-to-start-crypto-trading-100-dollars.md";
  slug: "how-to-start-crypto-trading-100-dollars";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-to-use-blockchain-explorer.md": {
	id: "how-to-use-blockchain-explorer.md";
  slug: "how-to-use-blockchain-explorer";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-whales-manipulate-crypto-markets.md": {
	id: "how-whales-manipulate-crypto-markets.md";
  slug: "how-whales-manipulate-crypto-markets";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"is-bitcoin-still-worth-buying-2026.md": {
	id: "is-bitcoin-still-worth-buying-2026.md";
  slug: "is-bitcoin-still-worth-buying-2026";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"is-crypto-legal-us-2026.md": {
	id: "is-crypto-legal-us-2026.md";
  slug: "is-crypto-legal-us-2026";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"layer-1-vs-layer-2-blockchains.md": {
	id: "layer-1-vs-layer-2-blockchains.md";
  slug: "layer-1-vs-layer-2-blockchains";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"lost-private-key-what-to-do.md": {
	id: "lost-private-key-what-to-do.md";
  slug: "lost-private-key-what-to-do";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"new-crypto-projects-june-2026.md": {
	id: "new-crypto-projects-june-2026.md";
  slug: "new-crypto-projects-june-2026";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"play-to-earn-games-that-actually-pay.md": {
	id: "play-to-earn-games-that-actually-pay.md";
  slug: "play-to-earn-games-that-actually-pay";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"proof-of-work-vs-proof-of-stake.md": {
	id: "proof-of-work-vs-proof-of-stake.md";
  slug: "proof-of-work-vs-proof-of-stake";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"psychology-of-hodler-keep-calm-during-dips.md": {
	id: "psychology-of-hodler-keep-calm-during-dips.md";
  slug: "psychology-of-hodler-keep-calm-during-dips";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"real-world-assets-rwa-tokenizing-real-estate-gold.md": {
	id: "real-world-assets-rwa-tokenizing-real-estate-gold.md";
  slug: "real-world-assets-rwa-tokenizing-real-estate-gold";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"rise-of-layer-2-networks-near-zero-gas-fees.md": {
	id: "rise-of-layer-2-networks-near-zero-gas-fees.md";
  slug: "rise-of-layer-2-networks-near-zero-gas-fees";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"risks-of-defi-decentralized-finance.md": {
	id: "risks-of-defi-decentralized-finance.md";
  slug: "risks-of-defi-decentralized-finance";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"taking-profits-how-to-pull-out-capital-safely.md": {
	id: "taking-profits-how-to-pull-out-capital-safely.md";
  slug: "taking-profits-how-to-pull-out-capital-safely";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"tokenomics-explained-evaluate-crypto-project.md": {
	id: "tokenomics-explained-evaluate-crypto-project.md";
  slug: "tokenomics-explained-evaluate-crypto-project";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"top-ai-cryptocurrencies-to-watch.md": {
	id: "top-ai-cryptocurrencies-to-watch.md";
  slug: "top-ai-cryptocurrencies-to-watch";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"top-mistakes-beginners-make-crypto.md": {
	id: "top-mistakes-beginners-make-crypto.md";
  slug: "top-mistakes-beginners-make-crypto";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"top-undervalued-altcoins-2026.md": {
	id: "top-undervalued-altcoins-2026.md";
  slug: "top-undervalued-altcoins-2026";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"upcoming-crypto-airdrops-2026.md": {
	id: "upcoming-crypto-airdrops-2026.md";
  slug: "upcoming-crypto-airdrops-2026";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"what-is-bitcoin-mining-profitable.md": {
	id: "what-is-bitcoin-mining-profitable.md";
  slug: "what-is-bitcoin-mining-profitable";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"what-is-crypto-airdrop-free-tokens.md": {
	id: "what-is-crypto-airdrop-free-tokens.md";
  slug: "what-is-crypto-airdrop-free-tokens";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"what-is-cryptocurrency-beginners-guide.md": {
	id: "what-is-cryptocurrency-beginners-guide.md";
  slug: "what-is-cryptocurrency-beginners-guide";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"what-is-dao-decentralized-autonomous-organization.md": {
	id: "what-is-dao-decentralized-autonomous-organization.md";
  slug: "what-is-dao-decentralized-autonomous-organization";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"what-is-dapp-decentralized-app.md": {
	id: "what-is-dapp-decentralized-app.md";
  slug: "what-is-dapp-decentralized-app";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"what-is-dca-crypto-beginners.md": {
	id: "what-is-dca-crypto-beginners.md";
  slug: "what-is-dca-crypto-beginners";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"what-is-defi-decentralized-finance-explained.md": {
	id: "what-is-defi-decentralized-finance-explained.md";
  slug: "what-is-defi-decentralized-finance-explained";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"what-is-depin-earn-crypto-sharing-resources.md": {
	id: "what-is-depin-earn-crypto-sharing-resources.md";
  slug: "what-is-depin-earn-crypto-sharing-resources";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"what-is-liquidity-pool-dex.md": {
	id: "what-is-liquidity-pool-dex.md";
  slug: "what-is-liquidity-pool-dex";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"what-is-meme-coin-should-you-invest.md": {
	id: "what-is-meme-coin-should-you-invest.md";
  slug: "what-is-meme-coin-should-you-invest";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"what-is-mev-crypto.md": {
	id: "what-is-mev-crypto.md";
  slug: "what-is-mev-crypto";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"what-is-nft-still-relevant.md": {
	id: "what-is-nft-still-relevant.md";
  slug: "what-is-nft-still-relevant";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"what-is-on-chain-analysis.md": {
	id: "what-is-on-chain-analysis.md";
  slug: "what-is-on-chain-analysis";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"what-is-smart-contract.md": {
	id: "what-is-smart-contract.md";
  slug: "what-is-smart-contract";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"what-is-stablecoin-usdc-usdt-dai.md": {
	id: "what-is-stablecoin-usdc-usdt-dai.md";
  slug: "what-is-stablecoin-usdc-usdt-dai";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"what-is-testnet-blockchain.md": {
	id: "what-is-testnet-blockchain.md";
  slug: "what-is-testnet-blockchain";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"what-is-token-vs-coin.md": {
	id: "what-is-token-vs-coin.md";
  slug: "what-is-token-vs-coin";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"which-crypto-wallet-should-you-use.md": {
	id: "which-crypto-wallet-should-you-use.md";
  slug: "which-crypto-wallet-should-you-use";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"why-not-fomo-next-big-coin.md": {
	id: "why-not-fomo-next-big-coin.md";
  slug: "why-not-fomo-next-big-coin";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"will-crypto-replace-banks.md": {
	id: "will-crypto-replace-banks.md";
  slug: "will-crypto-replace-banks";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
};
"crypto-scam": {
"fake-crypto-airdrops-scam.md": {
	id: "fake-crypto-airdrops-scam.md";
  slug: "fake-crypto-airdrops-scam";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"how-to-avoid-pump-and-dump-schemes.md": {
	id: "how-to-avoid-pump-and-dump-schemes.md";
  slug: "how-to-avoid-pump-and-dump-schemes";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"how-to-spot-crypto-scam-complete-guide.md": {
	id: "how-to-spot-crypto-scam-complete-guide.md";
  slug: "how-to-spot-crypto-scam-complete-guide";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"how-to-spot-crypto-scam.md": {
	id: "how-to-spot-crypto-scam.md";
  slug: "how-to-spot-crypto-scam";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"how-to-spot-fake-crypto-exchange.md": {
	id: "how-to-spot-fake-crypto-exchange.md";
  slug: "how-to-spot-fake-crypto-exchange";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"how-to-spot-fake-wallet-app.md": {
	id: "how-to-spot-fake-wallet-app.md";
  slug: "how-to-spot-fake-wallet-app";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"recovery-scams-how-scammers-target-victims-again.md": {
	id: "recovery-scams-how-scammers-target-victims-again.md";
  slug: "recovery-scams-how-scammers-target-victims-again";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"rug-pulls-explained-how-to-spot-early.md": {
	id: "rug-pulls-explained-how-to-spot-early.md";
  slug: "rug-pulls-explained-how-to-spot-early";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
};
"crypto-tax": {
"crypto-tax-calculator-guide.md": {
	id: "crypto-tax-calculator-guide.md";
  slug: "crypto-tax-calculator-guide";
  body: string;
  collection: "crypto-tax";
  data: InferEntrySchema<"crypto-tax">
} & { render(): Render[".md"] };
"crypto-tax-guide-beginners.md": {
	id: "crypto-tax-guide-beginners.md";
  slug: "crypto-tax-guide-beginners";
  body: string;
  collection: "crypto-tax";
  data: InferEntrySchema<"crypto-tax">
} & { render(): Render[".md"] };
"crypto-tax-guide-by-country.md": {
	id: "crypto-tax-guide-by-country.md";
  slug: "crypto-tax-guide-by-country";
  body: string;
  collection: "crypto-tax";
  data: InferEntrySchema<"crypto-tax">
} & { render(): Render[".md"] };
"do-i-need-report-small-crypto-transactions.md": {
	id: "do-i-need-report-small-crypto-transactions.md";
  slug: "do-i-need-report-small-crypto-transactions";
  body: string;
  collection: "crypto-tax";
  data: InferEntrySchema<"crypto-tax">
} & { render(): Render[".md"] };
"filing-crypto-taxes-budget-best-software-compared.md": {
	id: "filing-crypto-taxes-budget-best-software-compared.md";
  slug: "filing-crypto-taxes-budget-best-software-compared";
  body: string;
  collection: "crypto-tax";
  data: InferEntrySchema<"crypto-tax">
} & { render(): Render[".md"] };
"how-tax-authorities-track-crypto.md": {
	id: "how-tax-authorities-track-crypto.md";
  slug: "how-tax-authorities-track-crypto";
  body: string;
  collection: "crypto-tax";
  data: InferEntrySchema<"crypto-tax">
} & { render(): Render[".md"] };
"how-to-avoid-crypto-tax-notice.md": {
	id: "how-to-avoid-crypto-tax-notice.md";
  slug: "how-to-avoid-crypto-tax-notice";
  body: string;
  collection: "crypto-tax";
  data: InferEntrySchema<"crypto-tax">
} & { render(): Render[".md"] };
"how-to-read-crypto-tax-report.md": {
	id: "how-to-read-crypto-tax-report.md";
  slug: "how-to-read-crypto-tax-report";
  body: string;
  collection: "crypto-tax";
  data: InferEntrySchema<"crypto-tax">
} & { render(): Render[".md"] };
"how-to-report-crypto-losses-taxes.md": {
	id: "how-to-report-crypto-losses-taxes.md";
  slug: "how-to-report-crypto-losses-taxes";
  body: string;
  collection: "crypto-tax";
  data: InferEntrySchema<"crypto-tax">
} & { render(): Render[".md"] };
"staking-airdrops-defi-how-free-cryptos-taxed.md": {
	id: "staking-airdrops-defi-how-free-cryptos-taxed.md";
  slug: "staking-airdrops-defi-how-free-cryptos-taxed";
  body: string;
  collection: "crypto-tax";
  data: InferEntrySchema<"crypto-tax">
} & { render(): Render[".md"] };
"understanding-per-transaction-vda-taxes.md": {
	id: "understanding-per-transaction-vda-taxes.md";
  slug: "understanding-per-transaction-vda-taxes";
  body: string;
  collection: "crypto-tax";
  data: InferEntrySchema<"crypto-tax">
} & { render(): Render[".md"] };
};
"crypto-tools": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "crypto-tools";
  data: InferEntrySchema<"crypto-tools">;
  render(): Render[".md"];
}>;
"plan": {
"01-project-overview.md": {
	id: "01-project-overview.md";
  slug: "01-project-overview";
  body: string;
  collection: "plan";
  data: any
} & { render(): Render[".md"] };
"02-content-strategy.md": {
	id: "02-content-strategy.md";
  slug: "02-content-strategy";
  body: string;
  collection: "plan";
  data: any
} & { render(): Render[".md"] };
"03-site-structure.md": {
	id: "03-site-structure.md";
  slug: "03-site-structure";
  body: string;
  collection: "plan";
  data: any
} & { render(): Render[".md"] };
"04-roadmap.md": {
	id: "04-roadmap.md";
  slug: "04-roadmap";
  body: string;
  collection: "plan";
  data: any
} & { render(): Render[".md"] };
"05-bitcointalk-top-questions.md": {
	id: "05-bitcointalk-top-questions.md";
  slug: "05-bitcointalk-top-questions";
  body: string;
  collection: "plan";
  data: any
} & { render(): Render[".md"] };
"06-seo-rules.md": {
	id: "06-seo-rules.md";
  slug: "06-seo-rules";
  body: string;
  collection: "plan";
  data: any
} & { render(): Render[".md"] };
};
"safe-crypto": {
"best-hardware-wallets-compared-2026.md": {
	id: "best-hardware-wallets-compared-2026.md";
  slug: "best-hardware-wallets-compared-2026";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
"best-vpns-crypto-traders.md": {
	id: "best-vpns-crypto-traders.md";
  slug: "best-vpns-crypto-traders";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
"common-phishing-attacks-crypto.md": {
	id: "common-phishing-attacks-crypto.md";
  slug: "common-phishing-attacks-crypto";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
"hot-wallets-vs-cold-wallets.md": {
	id: "hot-wallets-vs-cold-wallets.md";
  slug: "hot-wallets-vs-cold-wallets";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
"how-to-create-strong-security-plan.md": {
	id: "how-to-create-strong-security-plan.md";
  slug: "how-to-create-strong-security-plan";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
"how-to-keep-crypto-safe-complete-guide.md": {
	id: "how-to-keep-crypto-safe-complete-guide.md";
  slug: "how-to-keep-crypto-safe-complete-guide";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
"how-to-move-crypto-exchange-to-cold-wallet.md": {
	id: "how-to-move-crypto-exchange-to-cold-wallet.md";
  slug: "how-to-move-crypto-exchange-to-cold-wallet";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
"how-to-stay-anonymous-crypto-legally.md": {
	id: "how-to-stay-anonymous-crypto-legally.md";
  slug: "how-to-stay-anonymous-crypto-legally";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
"how-to-use-hardware-wallet-ledger-trezor.md": {
	id: "how-to-use-hardware-wallet-ledger-trezor.md";
  slug: "how-to-use-hardware-wallet-ledger-trezor";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
"how-to-use-vpn-for-crypto.md": {
	id: "how-to-use-vpn-for-crypto.md";
  slug: "how-to-use-vpn-for-crypto";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
"p2p-trading-safety-avoid-bank-freezes.md": {
	id: "p2p-trading-safety-avoid-bank-freezes.md";
  slug: "p2p-trading-safety-avoid-bank-freezes";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
"what-is-a-seed-phrase.md": {
	id: "what-is-a-seed-phrase.md";
  slug: "what-is-a-seed-phrase";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
"what-is-two-factor-authentication.md": {
	id: "what-is-two-factor-authentication.md";
  slug: "what-is-two-factor-authentication";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"beginner-guides": Record<string, {
  id: string;
  collection: "beginner-guides";
  data: any;
}>;
"scam-checker": Record<string, {
  id: string;
  collection: "scam-checker";
  data: any;
}>;
"security": Record<string, {
  id: string;
  collection: "security";
  data: any;
}>;
"tools": Record<string, {
  id: string;
  collection: "tools";
  data: any;
}>;

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}

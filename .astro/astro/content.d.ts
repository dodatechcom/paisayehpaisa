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
		"blog": {
"ai-investing-2026.md": {
	id: "ai-investing-2026.md";
  slug: "ai-investing-2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"best-money-habits-to-start-today.md": {
	id: "best-money-habits-to-start-today.md";
  slug: "best-money-habits-to-start-today";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"best-savings-accounts-uk-2026.md": {
	id: "best-savings-accounts-uk-2026.md";
  slug: "best-savings-accounts-uk-2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"bitcoin-etf-impact-2026.md": {
	id: "bitcoin-etf-impact-2026.md";
  slug: "bitcoin-etf-impact-2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"crypto-market-update-q2-2026.md": {
	id: "crypto-market-update-q2-2026.md";
  slug: "crypto-market-update-q2-2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fed-rate-cuts-2026.md": {
	id: "fed-rate-cuts-2026.md";
  slug: "fed-rate-cuts-2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-ai-is-changing-personal-finance-2026.md": {
	id: "how-ai-is-changing-personal-finance-2026.md";
  slug: "how-ai-is-changing-personal-finance-2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-to-build-credit-score-uk-2026.md": {
	id: "how-to-build-credit-score-uk-2026.md";
  slug: "how-to-build-credit-score-uk-2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-to-save-for-a-deposit-uk.md": {
	id: "how-to-save-for-a-deposit-uk.md";
  slug: "how-to-save-for-a-deposit-uk";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"summer-financial-checklist-2026.md": {
	id: "summer-financial-checklist-2026.md";
  slug: "summer-financial-checklist-2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"uk-housing-market-outlook-2026.md": {
	id: "uk-housing-market-outlook-2026.md";
  slug: "uk-housing-market-outlook-2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"uk-mortgage-rates-explained.md": {
	id: "uk-mortgage-rates-explained.md";
  slug: "uk-mortgage-rates-explained";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
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
"best-crypto-long-term-holding-2026-2030.md": {
	id: "best-crypto-long-term-holding-2026-2030.md";
  slug: "best-crypto-long-term-holding-2026-2030";
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
"best-crypto-remittances-send-money-home.md": {
	id: "best-crypto-remittances-send-money-home.md";
  slug: "best-crypto-remittances-send-money-home";
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
"best-way-send-crypto-internationally.md": {
	id: "best-way-send-crypto-internationally.md";
  slug: "best-way-send-crypto-internationally";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"can-you-insure-crypto-holdings.md": {
	id: "can-you-insure-crypto-holdings.md";
  slug: "can-you-insure-crypto-holdings";
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
"can-you-use-crypto-everyday-shopping-2026.md": {
	id: "can-you-use-crypto-everyday-shopping-2026.md";
  slug: "can-you-use-crypto-everyday-shopping-2026";
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
"cex-vs-dex-vs-hybrid-exchange-differences.md": {
	id: "cex-vs-dex-vs-hybrid-exchange-differences.md";
  slug: "cex-vs-dex-vs-hybrid-exchange-differences";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"crypto-contrarian-investing-buy-when-others-panic.md": {
	id: "crypto-contrarian-investing-buy-when-others-panic.md";
  slug: "crypto-contrarian-investing-buy-when-others-panic";
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
"crypto-money-transmitter-licenses-explained.md": {
	id: "crypto-money-transmitter-licenses-explained.md";
  slug: "crypto-money-transmitter-licenses-explained";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"crypto-news-fatigue-how-to-filter-noise.md": {
	id: "crypto-news-fatigue-how-to-filter-noise.md";
  slug: "crypto-news-fatigue-how-to-filter-noise";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"crypto-regulation-india-2026.md": {
	id: "crypto-regulation-india-2026.md";
  slug: "crypto-regulation-india-2026";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"crypto-travel-rule-privacy.md": {
	id: "crypto-travel-rule-privacy.md";
  slug: "crypto-travel-rule-privacy";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"dubai-uae-crypto-regulation-global-hub.md": {
	id: "dubai-uae-crypto-regulation-global-hub.md";
  slug: "dubai-uae-crypto-regulation-global-hub";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"fit21-crypto-regulation-us.md": {
	id: "fit21-crypto-regulation-us.md";
  slug: "fit21-crypto-regulation-us";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"how-do-crypto-credit-cards-work.md": {
	id: "how-do-crypto-credit-cards-work.md";
  slug: "how-do-crypto-credit-cards-work";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"how-does-mica-affect-defi.md": {
	id: "how-does-mica-affect-defi.md";
  slug: "how-does-mica-affect-defi";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"how-to-avoid-exchange-withdrawal-limits-freezes.md": {
	id: "how-to-avoid-exchange-withdrawal-limits-freezes.md";
  slug: "how-to-avoid-exchange-withdrawal-limits-freezes";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"how-to-check-crypto-transaction-status.md": {
	id: "how-to-check-crypto-transaction-status.md";
  slug: "how-to-check-crypto-transaction-status";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"how-to-choose-crypto-exchange-2026.md": {
	id: "how-to-choose-crypto-exchange-2026.md";
  slug: "how-to-choose-crypto-exchange-2026";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"how-to-read-coinmarketcap-coingecko-like-pro.md": {
	id: "how-to-read-coinmarketcap-coingecko-like-pro.md";
  slug: "how-to-read-coinmarketcap-coingecko-like-pro";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"how-to-read-crypto-transaction-explorer.md": {
	id: "how-to-read-crypto-transaction-explorer.md";
  slug: "how-to-read-crypto-transaction-explorer";
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
"how-to-recover-bitcoin-from-wallet-dot-dat.md": {
	id: "how-to-recover-bitcoin-from-wallet-dot-dat.md";
  slug: "how-to-recover-bitcoin-from-wallet-dot-dat";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"how-to-recover-hacked-crypto-account.md": {
	id: "how-to-recover-hacked-crypto-account.md";
  slug: "how-to-recover-hacked-crypto-account";
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
"is-crypto-mining-profitable-2026.md": {
	id: "is-crypto-mining-profitable-2026.md";
  slug: "is-crypto-mining-profitable-2026";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"mine-bitcoin-on-phone-truth.md": {
	id: "mine-bitcoin-on-phone-truth.md";
  slug: "mine-bitcoin-on-phone-truth";
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
"sec-vs-crypto-enforcement-history.md": {
	id: "sec-vs-crypto-enforcement-history.md";
  slug: "sec-vs-crypto-enforcement-history";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"self-custodial-vs-custodial-wallet.md": {
	id: "self-custodial-vs-custodial-wallet.md";
  slug: "self-custodial-vs-custodial-wallet";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"sent-crypto-wrong-network-how-to-fix.md": {
	id: "sent-crypto-wrong-network-how-to-fix.md";
  slug: "sent-crypto-wrong-network-how-to-fix";
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
"singapore-crypto-regulation-safe-haven.md": {
	id: "singapore-crypto-regulation-safe-haven.md";
  slug: "singapore-crypto-regulation-safe-haven";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"stuck-bitcoin-transaction-how-to-fix-rbf-cpfp.md": {
	id: "stuck-bitcoin-transaction-how-to-fix-rbf-cpfp.md";
  slug: "stuck-bitcoin-transaction-how-to-fix-rbf-cpfp";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"ultimate-beginners-crypto-checklist.md": {
	id: "ultimate-beginners-crypto-checklist.md";
  slug: "ultimate-beginners-crypto-checklist";
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
"what-happens-to-crypto-in-divorce.md": {
	id: "what-happens-to-crypto-in-divorce.md";
  slug: "what-happens-to-crypto-in-divorce";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"what-happens-to-crypto-when-i-die.md": {
	id: "what-happens-to-crypto-when-i-die.md";
  slug: "what-happens-to-crypto-when-i-die";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"what-is-bear-market-how-to-survive.md": {
	id: "what-is-bear-market-how-to-survive.md";
  slug: "what-is-bear-market-how-to-survive";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"what-is-bitcoin-etf.md": {
	id: "what-is-bitcoin-etf.md";
  slug: "what-is-bitcoin-etf";
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
"what-is-blockchain-reorg-reorganization.md": {
	id: "what-is-blockchain-reorg-reorganization.md";
  slug: "what-is-blockchain-reorg-reorganization";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"what-is-crypto-audit-why-matters.md": {
	id: "what-is-crypto-audit-why-matters.md";
  slug: "what-is-crypto-audit-why-matters";
  body: string;
  collection: "crypto-answers";
  data: InferEntrySchema<"crypto-answers">
} & { render(): Render[".md"] };
"what-is-fiat-on-ramp-buy-crypto.md": {
	id: "what-is-fiat-on-ramp-buy-crypto.md";
  slug: "what-is-fiat-on-ramp-buy-crypto";
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
"what-is-kyc-why-exchanges-require.md": {
	id: "what-is-kyc-why-exchanges-require.md";
  slug: "what-is-kyc-why-exchanges-require";
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
"what-is-mica-eu-crypto-regulation.md": {
	id: "what-is-mica-eu-crypto-regulation.md";
  slug: "what-is-mica-eu-crypto-regulation";
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
"what-is-vasp-virtual-asset-service-provider.md": {
	id: "what-is-vasp-virtual-asset-service-provider.md";
  slug: "what-is-vasp-virtual-asset-service-provider";
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
"where-is-crypto-banned-countries-illegal.md": {
	id: "where-is-crypto-banned-countries-illegal.md";
  slug: "where-is-crypto-banned-countries-illegal";
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
"10-underestimated-crypto-mistakes-beginners.md": {
	id: "10-underestimated-crypto-mistakes-beginners.md";
  slug: "10-underestimated-crypto-mistakes-beginners";
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
"are-meme-coins-gambling.md": {
	id: "are-meme-coins-gambling.md";
  slug: "are-meme-coins-gambling";
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
"best-crypto-research-tools-2026.md": {
	id: "best-crypto-research-tools-2026.md";
  slug: "best-crypto-research-tools-2026";
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
"biggest-bitcoin-losses-history-lessons.md": {
	id: "biggest-bitcoin-losses-history-lessons.md";
  slug: "biggest-bitcoin-losses-history-lessons";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"bitcoin-address-reuse-privacy.md": {
	id: "bitcoin-address-reuse-privacy.md";
  slug: "bitcoin-address-reuse-privacy";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"bitcoin-dust-explained.md": {
	id: "bitcoin-dust-explained.md";
  slug: "bitcoin-dust-explained";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"bull-bear-market-crypto.md": {
	id: "bull-bear-market-crypto.md";
  slug: "bull-bear-market-crypto";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"can-crypto-transactions-be-reversed.md": {
	id: "can-crypto-transactions-be-reversed.md";
  slug: "can-crypto-transactions-be-reversed";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"can-quantum-computers-break-bitcoin.md": {
	id: "can-quantum-computers-break-bitcoin.md";
  slug: "can-quantum-computers-break-bitcoin";
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
"crypto-banking-best-neobanks-2026.md": {
	id: "crypto-banking-best-neobanks-2026.md";
  slug: "crypto-banking-best-neobanks-2026";
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
"crypto-for-teens-under-18.md": {
	id: "crypto-for-teens-under-18.md";
  slug: "crypto-for-teens-under-18";
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
"crypto-market-cap-explained.md": {
	id: "crypto-market-cap-explained.md";
  slug: "crypto-market-cap-explained";
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
"crypto-portfolio-rebalancing-when-how.md": {
	id: "crypto-portfolio-rebalancing-when-how.md";
  slug: "crypto-portfolio-rebalancing-when-how";
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
"crypto-wallets-explained.md": {
	id: "crypto-wallets-explained.md";
  slug: "crypto-wallets-explained";
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
"future-crypto-regulation-trends-2027.md": {
	id: "future-crypto-regulation-trends-2027.md";
  slug: "future-crypto-regulation-trends-2027";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-bitcoin-etfs-changed-crypto-investing.md": {
	id: "how-bitcoin-etfs-changed-crypto-investing.md";
  slug: "how-bitcoin-etfs-changed-crypto-investing";
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
"how-to-build-diversified-crypto-portfolio.md": {
	id: "how-to-build-diversified-crypto-portfolio.md";
  slug: "how-to-build-diversified-crypto-portfolio";
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
"how-to-convert-crypto-to-cash-without-exchange.md": {
	id: "how-to-convert-crypto-to-cash-without-exchange.md";
  slug: "how-to-convert-crypto-to-cash-without-exchange";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-to-create-crypto-emergency-plan.md": {
	id: "how-to-create-crypto-emergency-plan.md";
  slug: "how-to-create-crypto-emergency-plan";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-to-earn-crypto-on-bitcointalk-bounties-signatures.md": {
	id: "how-to-earn-crypto-on-bitcointalk-bounties-signatures.md";
  slug: "how-to-earn-crypto-on-bitcointalk-bounties-signatures";
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
"how-to-earn-yield-on-bitcoin-compounding.md": {
	id: "how-to-earn-yield-on-bitcoin-compounding.md";
  slug: "how-to-earn-yield-on-bitcoin-compounding";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-to-explain-crypto-to-family.md": {
	id: "how-to-explain-crypto-to-family.md";
  slug: "how-to-explain-crypto-to-family";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-to-get-early-access-promising-crypto-projects.md": {
	id: "how-to-get-early-access-promising-crypto-projects.md";
  slug: "how-to-get-early-access-promising-crypto-projects";
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
"how-to-mentor-friend-new-to-crypto.md": {
	id: "how-to-mentor-friend-new-to-crypto.md";
  slug: "how-to-mentor-friend-new-to-crypto";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-to-read-candlestick-charts-beginners.md": {
	id: "how-to-read-candlestick-charts-beginners.md";
  slug: "how-to-read-candlestick-charts-beginners";
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
"how-to-read-crypto-charts.md": {
	id: "how-to-read-crypto-charts.md";
  slug: "how-to-read-crypto-charts";
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
"how-to-stake-crypto.md": {
	id: "how-to-stake-crypto.md";
  slug: "how-to-stake-crypto";
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
"how-to-stay-compliant-p2p-trading.md": {
	id: "how-to-stay-compliant-p2p-trading.md";
  slug: "how-to-stay-compliant-p2p-trading";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"how-to-track-whales-smart-money-onchain.md": {
	id: "how-to-track-whales-smart-money-onchain.md";
  slug: "how-to-track-whales-smart-money-onchain";
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
"how-to-use-defi-lending-platforms-safely.md": {
	id: "how-to-use-defi-lending-platforms-safely.md";
  slug: "how-to-use-defi-lending-platforms-safely";
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
"investing-vs-trading-crypto-which-is-right-for-you.md": {
	id: "investing-vs-trading-crypto-which-is-right-for-you.md";
  slug: "investing-vs-trading-crypto-which-is-right-for-you";
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
"is-cryptocurrency-a-scam-balanced-response.md": {
	id: "is-cryptocurrency-a-scam-balanced-response.md";
  slug: "is-cryptocurrency-a-scam-balanced-response";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"is-self-custody-too-complicated-for-beginners.md": {
	id: "is-self-custody-too-complicated-for-beginners.md";
  slug: "is-self-custody-too-complicated-for-beginners";
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
"market-orders-vs-limit-orders-vs-stop-loss.md": {
	id: "market-orders-vs-limit-orders-vs-stop-loss.md";
  slug: "market-orders-vs-limit-orders-vs-stop-loss";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"mobile-vs-desktop-hot-wallets.md": {
	id: "mobile-vs-desktop-hot-wallets.md";
  slug: "mobile-vs-desktop-hot-wallets";
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
"should-beginners-try-crypto-arbitrage.md": {
	id: "should-beginners-try-crypto-arbitrage.md";
  slug: "should-beginners-try-crypto-arbitrage";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"should-you-buy-the-dip-strategy.md": {
	id: "should-you-buy-the-dip-strategy.md";
  slug: "should-you-buy-the-dip-strategy";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"should-you-learn-crypto-first-or-buy-first.md": {
	id: "should-you-learn-crypto-first-or-buy-first.md";
  slug: "should-you-learn-crypto-first-or-buy-first";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"should-you-quit-job-to-trade-crypto.md": {
	id: "should-you-quit-job-to-trade-crypto.md";
  slug: "should-you-quit-job-to-trade-crypto";
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
"trading-addiction-how-to-recognize-and-stop.md": {
	id: "trading-addiction-how-to-recognize-and-stop.md";
  slug: "trading-addiction-how-to-recognize-and-stop";
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
"what-drives-crypto-prices.md": {
	id: "what-drives-crypto-prices.md";
  slug: "what-drives-crypto-prices";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"what-if-satoshi-nakamoto-returns.md": {
	id: "what-if-satoshi-nakamoto-returns.md";
  slug: "what-if-satoshi-nakamoto-returns";
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
"what-is-crypto-escrow-and-how-does-it-work.md": {
	id: "what-is-crypto-escrow-and-how-does-it-work.md";
  slug: "what-is-crypto-escrow-and-how-does-it-work";
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
"what-to-know-before-recommending-bitcoin-to-friend.md": {
	id: "what-to-know-before-recommending-bitcoin-to-friend.md";
  slug: "what-to-know-before-recommending-bitcoin-to-friend";
  body: string;
  collection: "crypto-basics";
  data: InferEntrySchema<"crypto-basics">
} & { render(): Render[".md"] };
"where-to-learn-crypto-best-resources.md": {
	id: "where-to-learn-crypto-best-resources.md";
  slug: "where-to-learn-crypto-best-resources";
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
"why-beginners-should-not-trade-futures-leverage.md": {
	id: "why-beginners-should-not-trade-futures-leverage.md";
  slug: "why-beginners-should-not-trade-futures-leverage";
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
"why-people-understand-bitcoin-but-dont-buy.md": {
	id: "why-people-understand-bitcoin-but-dont-buy.md";
  slug: "why-people-understand-bitcoin-but-dont-buy";
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
"ai-voice-deepfake-scams.md": {
	id: "ai-voice-deepfake-scams.md";
  slug: "ai-voice-deepfake-scams";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"coin-minting-exploiters-scam.md": {
	id: "coin-minting-exploiters-scam.md";
  slug: "coin-minting-exploiters-scam";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"crypto-job-offer-scams-remote-work.md": {
	id: "crypto-job-offer-scams-remote-work.md";
  slug: "crypto-job-offer-scams-remote-work";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"crypto-malware-hackers-steal-from-device.md": {
	id: "crypto-malware-hackers-steal-from-device.md";
  slug: "crypto-malware-hackers-steal-from-device";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"crypto-wallet-drainers-fake-dapps.md": {
	id: "crypto-wallet-drainers-fake-dapps.md";
  slug: "crypto-wallet-drainers-fake-dapps";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"defi-bridge-scams-fake-bridges.md": {
	id: "defi-bridge-scams-fake-bridges.md";
  slug: "defi-bridge-scams-fake-bridges";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"fake-airdrop-scams-advanced-tactics.md": {
	id: "fake-airdrop-scams-advanced-tactics.md";
  slug: "fake-airdrop-scams-advanced-tactics";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"fake-celebrity-endorsement-scams.md": {
	id: "fake-celebrity-endorsement-scams.md";
  slug: "fake-celebrity-endorsement-scams";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"fake-crypto-airdrops-scam.md": {
	id: "fake-crypto-airdrops-scam.md";
  slug: "fake-crypto-airdrops-scam";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"fake-crypto-trading-bots.md": {
	id: "fake-crypto-trading-bots.md";
  slug: "fake-crypto-trading-bots";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"fake-customer-support-scams-social-media.md": {
	id: "fake-customer-support-scams-social-media.md";
  slug: "fake-customer-support-scams-social-media";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"fake-ico-presale-scams.md": {
	id: "fake-ico-presale-scams.md";
  slug: "fake-ico-presale-scams";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"fake-mining-pool-scams.md": {
	id: "fake-mining-pool-scams.md";
  slug: "fake-mining-pool-scams";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"fake-staking-pool-scams.md": {
	id: "fake-staking-pool-scams.md";
  slug: "fake-staking-pool-scams";
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
"how-to-spot-fake-crypto-wallet.md": {
	id: "how-to-spot-fake-crypto-wallet.md";
  slug: "how-to-spot-fake-crypto-wallet";
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
"how-to-verify-legitimate-crypto-project.md": {
	id: "how-to-verify-legitimate-crypto-project.md";
  slug: "how-to-verify-legitimate-crypto-project";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"nft-scams-fake-mints-phishing-copycats.md": {
	id: "nft-scams-fake-mints-phishing-copycats.md";
  slug: "nft-scams-fake-mints-phishing-copycats";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"pig-butchering-crypto-scam.md": {
	id: "pig-butchering-crypto-scam.md";
  slug: "pig-butchering-crypto-scam";
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
"social-media-crypto-theft-tactics.md": {
	id: "social-media-crypto-theft-tactics.md";
  slug: "social-media-crypto-theft-tactics";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"spear-phishing-targeted-attacks.md": {
	id: "spear-phishing-targeted-attacks.md";
  slug: "spear-phishing-targeted-attacks";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"telegram-signal-group-scams.md": {
	id: "telegram-signal-group-scams.md";
  slug: "telegram-signal-group-scams";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"ultimate-crypto-scam-prevention-checklist.md": {
	id: "ultimate-crypto-scam-prevention-checklist.md";
  slug: "ultimate-crypto-scam-prevention-checklist";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"why-do-crypto-scams-still-work.md": {
	id: "why-do-crypto-scams-still-work.md";
  slug: "why-do-crypto-scams-still-work";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
"why-technical-knowledge-not-enough-against-scams.md": {
	id: "why-technical-knowledge-not-enough-against-scams.md";
  slug: "why-technical-knowledge-not-enough-against-scams";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
};
"crypto-tax": {
"crypto-regulation-australia-what-you-need.md": {
	id: "crypto-regulation-australia-what-you-need.md";
  slug: "crypto-regulation-australia-what-you-need";
  body: string;
  collection: "crypto-tax";
  data: InferEntrySchema<"crypto-tax">
} & { render(): Render[".md"] };
"crypto-regulation-brazil-latin-america.md": {
	id: "crypto-regulation-brazil-latin-america.md";
  slug: "crypto-regulation-brazil-latin-america";
  body: string;
  collection: "crypto-tax";
  data: InferEntrySchema<"crypto-tax">
} & { render(): Render[".md"] };
"crypto-tax-calculator-guide.md": {
	id: "crypto-tax-calculator-guide.md";
  slug: "crypto-tax-calculator-guide";
  body: string;
  collection: "crypto-tax";
  data: InferEntrySchema<"crypto-tax">
} & { render(): Render[".md"] };
"crypto-tax-canada-2026.md": {
	id: "crypto-tax-canada-2026.md";
  slug: "crypto-tax-canada-2026";
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
"crypto-tax-loss-harvesting.md": {
	id: "crypto-tax-loss-harvesting.md";
  slug: "crypto-tax-loss-harvesting";
  body: string;
  collection: "crypto-tax";
  data: InferEntrySchema<"crypto-tax">
} & { render(): Render[".md"] };
"crypto-tax-uk-2026.md": {
	id: "crypto-tax-uk-2026.md";
  slug: "crypto-tax-uk-2026";
  body: string;
  collection: "crypto-tax";
  data: InferEntrySchema<"crypto-tax">
} & { render(): Render[".md"] };
"defi-taxes-explained.md": {
	id: "defi-taxes-explained.md";
  slug: "defi-taxes-explained";
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
"does-government-track-your-crypto.md": {
	id: "does-government-track-your-crypto.md";
  slug: "does-government-track-your-crypto";
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
"how-to-file-crypto-taxes.md": {
	id: "how-to-file-crypto-taxes.md";
  slug: "how-to-file-crypto-taxes";
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
"japan-crypto-tax-regulation-history.md": {
	id: "japan-crypto-tax-regulation-history.md";
  slug: "japan-crypto-tax-regulation-history";
  body: string;
  collection: "crypto-tax";
  data: InferEntrySchema<"crypto-tax">
} & { render(): Render[".md"] };
"nft-taxes-explained.md": {
	id: "nft-taxes-explained.md";
  slug: "nft-taxes-explained";
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
"staking-income-taxes.md": {
	id: "staking-income-taxes.md";
  slug: "staking-income-taxes";
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
"insurance": {
"auto-insurance-explained.md": {
	id: "auto-insurance-explained.md";
  slug: "auto-insurance-explained";
  body: string;
  collection: "insurance";
  data: InferEntrySchema<"insurance">
} & { render(): Render[".md"] };
"auto-insurance-full-vs-liability.md": {
	id: "auto-insurance-full-vs-liability.md";
  slug: "auto-insurance-full-vs-liability";
  body: string;
  collection: "insurance";
  data: InferEntrySchema<"insurance">
} & { render(): Render[".md"] };
"health-insurance-basics.md": {
	id: "health-insurance-basics.md";
  slug: "health-insurance-basics";
  body: string;
  collection: "insurance";
  data: InferEntrySchema<"insurance">
} & { render(): Render[".md"] };
"hmo-vs-ppo.md": {
	id: "hmo-vs-ppo.md";
  slug: "hmo-vs-ppo";
  body: string;
  collection: "insurance";
  data: InferEntrySchema<"insurance">
} & { render(): Render[".md"] };
"home-renters-insurance.md": {
	id: "home-renters-insurance.md";
  slug: "home-renters-insurance";
  body: string;
  collection: "insurance";
  data: InferEntrySchema<"insurance">
} & { render(): Render[".md"] };
"how-premiums-are-calculated.md": {
	id: "how-premiums-are-calculated.md";
  slug: "how-premiums-are-calculated";
  body: string;
  collection: "insurance";
  data: InferEntrySchema<"insurance">
} & { render(): Render[".md"] };
"life-insurance-101.md": {
	id: "life-insurance-101.md";
  slug: "life-insurance-101";
  body: string;
  collection: "insurance";
  data: InferEntrySchema<"insurance">
} & { render(): Render[".md"] };
"renters-vs-homeowners.md": {
	id: "renters-vs-homeowners.md";
  slug: "renters-vs-homeowners";
  body: string;
  collection: "insurance";
  data: InferEntrySchema<"insurance">
} & { render(): Render[".md"] };
"term-vs-whole-life.md": {
	id: "term-vs-whole-life.md";
  slug: "term-vs-whole-life";
  body: string;
  collection: "insurance";
  data: InferEntrySchema<"insurance">
} & { render(): Render[".md"] };
"uk-car-insurance-guide.md": {
	id: "uk-car-insurance-guide.md";
  slug: "uk-car-insurance-guide";
  body: string;
  collection: "insurance";
  data: InferEntrySchema<"insurance">
} & { render(): Render[".md"] };
"uk-home-insurance-guide.md": {
	id: "uk-home-insurance-guide.md";
  slug: "uk-home-insurance-guide";
  body: string;
  collection: "insurance";
  data: InferEntrySchema<"insurance">
} & { render(): Render[".md"] };
"uk-life-insurance-guide.md": {
	id: "uk-life-insurance-guide.md";
  slug: "uk-life-insurance-guide";
  body: string;
  collection: "insurance";
  data: InferEntrySchema<"insurance">
} & { render(): Render[".md"] };
"uk-private-health-insurance-guide.md": {
	id: "uk-private-health-insurance-guide.md";
  slug: "uk-private-health-insurance-guide";
  body: string;
  collection: "insurance";
  data: InferEntrySchema<"insurance">
} & { render(): Render[".md"] };
"us-vs-uk-vs-canada-insurance.md": {
	id: "us-vs-uk-vs-canada-insurance.md";
  slug: "us-vs-uk-vs-canada-insurance";
  body: string;
  collection: "insurance";
  data: InferEntrySchema<"insurance">
} & { render(): Render[".md"] };
};
"investing": {
"asset-allocation-by-age.md": {
	id: "asset-allocation-by-age.md";
  slug: "asset-allocation-by-age";
  body: string;
  collection: "investing";
  data: InferEntrySchema<"investing">
} & { render(): Render[".md"] };
"best-etfs-2026.md": {
	id: "best-etfs-2026.md";
  slug: "best-etfs-2026";
  body: string;
  collection: "investing";
  data: InferEntrySchema<"investing">
} & { render(): Render[".md"] };
"crypto-vs-gold.md": {
	id: "crypto-vs-gold.md";
  slug: "crypto-vs-gold";
  body: string;
  collection: "investing";
  data: InferEntrySchema<"investing">
} & { render(): Render[".md"] };
"dividend-investing.md": {
	id: "dividend-investing.md";
  slug: "dividend-investing";
  body: string;
  collection: "investing";
  data: InferEntrySchema<"investing">
} & { render(): Render[".md"] };
"etf-vs-mutual-fund.md": {
	id: "etf-vs-mutual-fund.md";
  slug: "etf-vs-mutual-fund";
  body: string;
  collection: "investing";
  data: InferEntrySchema<"investing">
} & { render(): Render[".md"] };
"how-to-invest-1000.md": {
	id: "how-to-invest-1000.md";
  slug: "how-to-invest-1000";
  body: string;
  collection: "investing";
  data: InferEntrySchema<"investing">
} & { render(): Render[".md"] };
"how-to-invest-10000.md": {
	id: "how-to-invest-10000.md";
  slug: "how-to-invest-10000";
  body: string;
  collection: "investing";
  data: InferEntrySchema<"investing">
} & { render(): Render[".md"] };
"investing-after-60.md": {
	id: "investing-after-60.md";
  slug: "investing-after-60";
  body: string;
  collection: "investing";
  data: InferEntrySchema<"investing">
} & { render(): Render[".md"] };
"investing-at-40.md": {
	id: "investing-at-40.md";
  slug: "investing-at-40";
  body: string;
  collection: "investing";
  data: InferEntrySchema<"investing">
} & { render(): Render[".md"] };
"investing-at-50.md": {
	id: "investing-at-50.md";
  slug: "investing-at-50";
  body: string;
  collection: "investing";
  data: InferEntrySchema<"investing">
} & { render(): Render[".md"] };
"investing-in-your-20s.md": {
	id: "investing-in-your-20s.md";
  slug: "investing-in-your-20s";
  body: string;
  collection: "investing";
  data: InferEntrySchema<"investing">
} & { render(): Render[".md"] };
"investing-in-your-30s.md": {
	id: "investing-in-your-30s.md";
  slug: "investing-in-your-30s";
  body: string;
  collection: "investing";
  data: InferEntrySchema<"investing">
} & { render(): Render[".md"] };
"market-crash-strategy.md": {
	id: "market-crash-strategy.md";
  slug: "market-crash-strategy";
  body: string;
  collection: "investing";
  data: InferEntrySchema<"investing">
} & { render(): Render[".md"] };
"passive-income-portfolio.md": {
	id: "passive-income-portfolio.md";
  slug: "passive-income-portfolio";
  body: string;
  collection: "investing";
  data: InferEntrySchema<"investing">
} & { render(): Render[".md"] };
"safe-investments-high-returns.md": {
	id: "safe-investments-high-returns.md";
  slug: "safe-investments-high-returns";
  body: string;
  collection: "investing";
  data: InferEntrySchema<"investing">
} & { render(): Render[".md"] };
"stocks-vs-real-estate.md": {
	id: "stocks-vs-real-estate.md";
  slug: "stocks-vs-real-estate";
  body: string;
  collection: "investing";
  data: InferEntrySchema<"investing">
} & { render(): Render[".md"] };
};
"personal-finance": {
"annuities-explained.md": {
	id: "annuities-explained.md";
  slug: "annuities-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"attendance-allowance-guide.md": {
	id: "attendance-allowance-guide.md";
  slug: "attendance-allowance-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"bailiffs-your-rights.md": {
	id: "bailiffs-your-rights.md";
  slug: "bailiffs-your-rights";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"balance-transfer-credit-cards.md": {
	id: "balance-transfer-credit-cards.md";
  slug: "balance-transfer-credit-cards";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"bankruptcy-and-debt-solutions-comprehensive.md": {
	id: "bankruptcy-and-debt-solutions-comprehensive.md";
  slug: "bankruptcy-and-debt-solutions-comprehensive";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"best-bank-accounts-2026.md": {
	id: "best-bank-accounts-2026.md";
  slug: "best-bank-accounts-2026";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"best-credit-cards-2026.md": {
	id: "best-credit-cards-2026.md";
  slug: "best-credit-cards-2026";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"best-personal-loans-2026.md": {
	id: "best-personal-loans-2026.md";
  slug: "best-personal-loans-2026";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"best-savings-accounts.md": {
	id: "best-savings-accounts.md";
  slug: "best-savings-accounts";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"broadband-deals-guide.md": {
	id: "broadband-deals-guide.md";
  slug: "broadband-deals-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"budgeting-basics.md": {
	id: "budgeting-basics.md";
  slug: "budgeting-basics";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"buy-to-let-guide.md": {
	id: "buy-to-let-guide.md";
  slug: "buy-to-let-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"cancelling-mobile-contract.md": {
	id: "cancelling-mobile-contract.md";
  slug: "cancelling-mobile-contract";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"capital-gains-tax-explained.md": {
	id: "capital-gains-tax-explained.md";
  slug: "capital-gains-tax-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"car-finance-explained.md": {
	id: "car-finance-explained.md";
  slug: "car-finance-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"cashback-websites-guide.md": {
	id: "cashback-websites-guide.md";
  slug: "cashback-websites-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"cheap-petrol-diesel.md": {
	id: "cheap-petrol-diesel.md";
  slug: "cheap-petrol-diesel";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"cheap-travel-money.md": {
	id: "cheap-travel-money.md";
  slug: "cheap-travel-money";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"common-scams-how-to-spot-them.md": {
	id: "common-scams-how-to-spot-them.md";
  slug: "common-scams-how-to-spot-them";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"comparison-websites-tips.md": {
	id: "comparison-websites-tips.md";
  slug: "comparison-websites-tips";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"consumer-rights-guide.md": {
	id: "consumer-rights-guide.md";
  slug: "consumer-rights-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"council-tax-discounts-explained.md": {
	id: "council-tax-discounts-explained.md";
  slug: "council-tax-discounts-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"council-tax-rebanding-guide.md": {
	id: "council-tax-rebanding-guide.md";
  slug: "council-tax-rebanding-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"credit-card-rewards-explained.md": {
	id: "credit-card-rewards-explained.md";
  slug: "credit-card-rewards-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"credit-ratings-explained.md": {
	id: "credit-ratings-explained.md";
  slug: "credit-ratings-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"credit-unions-explained.md": {
	id: "credit-unions-explained.md";
  slug: "credit-unions-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-a-kasse-for-expats.md": {
	id: "danish-a-kasse-for-expats.md";
  slug: "danish-a-kasse-for-expats";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-aktiesparekonto-deep-dive.md": {
	id: "danish-aktiesparekonto-deep-dive.md";
  slug: "danish-aktiesparekonto-deep-dive";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-aps-formation-guide.md": {
	id: "danish-aps-formation-guide.md";
  slug: "danish-aps-formation-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-banking-fees-comparison.md": {
	id: "danish-banking-fees-comparison.md";
  slug: "danish-banking-fees-comparison";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-banking-for-expats.md": {
	id: "danish-banking-for-expats.md";
  slug: "danish-banking-for-expats";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-bookkeeping-requirements.md": {
	id: "danish-bookkeeping-requirements.md";
  slug: "danish-bookkeeping-requirements";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-budgeting-and-saving-guide.md": {
	id: "danish-budgeting-and-saving-guide.md";
  slug: "danish-budgeting-and-saving-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-business-deductions-guide.md": {
	id: "danish-business-deductions-guide.md";
  slug: "danish-business-deductions-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-business-insurance-guide.md": {
	id: "danish-business-insurance-guide.md";
  slug: "danish-business-insurance-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-buying-and-selling-shares.md": {
	id: "danish-buying-and-selling-shares.md";
  slug: "danish-buying-and-selling-shares";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-car-buying-tax-guide.md": {
	id: "danish-car-buying-tax-guide.md";
  slug: "danish-car-buying-tax-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-closing-a-business.md": {
	id: "danish-closing-a-business.md";
  slug: "danish-closing-a-business";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-corporate-tax-guide.md": {
	id: "danish-corporate-tax-guide.md";
  slug: "danish-corporate-tax-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-cost-of-living-breakdown.md": {
	id: "danish-cost-of-living-breakdown.md";
  slug: "danish-cost-of-living-breakdown";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-credit-score-system.md": {
	id: "danish-credit-score-system.md";
  slug: "danish-credit-score-system";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-cross-border-business.md": {
	id: "danish-cross-border-business.md";
  slug: "danish-cross-border-business";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-cryptocurrency-tax-guide.md": {
	id: "danish-cryptocurrency-tax-guide.md";
  slug: "danish-cryptocurrency-tax-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-debt-consolidation-guide.md": {
	id: "danish-debt-consolidation-guide.md";
  slug: "danish-debt-consolidation-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-dividend-investing-guide.md": {
	id: "danish-dividend-investing-guide.md";
  slug: "danish-dividend-investing-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-dividend-reinvestment-guide.md": {
	id: "danish-dividend-reinvestment-guide.md";
  slug: "danish-dividend-reinvestment-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-dividend-stocks-deep-dive.md": {
	id: "danish-dividend-stocks-deep-dive.md";
  slug: "danish-dividend-stocks-deep-dive";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-emigration-share-tax.md": {
	id: "danish-emigration-share-tax.md";
  slug: "danish-emigration-share-tax";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-employment-tax-guide.md": {
	id: "danish-employment-tax-guide.md";
  slug: "danish-employment-tax-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-esg-investing-guide.md": {
	id: "danish-esg-investing-guide.md";
  slug: "danish-esg-investing-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-estate-planning-guide.md": {
	id: "danish-estate-planning-guide.md";
  slug: "danish-estate-planning-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-etfs-vs-investment-funds.md": {
	id: "danish-etfs-vs-investment-funds.md";
  slug: "danish-etfs-vs-investment-funds";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-expat-tax-checklist.md": {
	id: "danish-expat-tax-checklist.md";
  slug: "danish-expat-tax-checklist";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-financial-independence-calculator.md": {
	id: "danish-financial-independence-calculator.md";
  slug: "danish-financial-independence-calculator";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-financial-literacy-guide.md": {
	id: "danish-financial-literacy-guide.md";
  slug: "danish-financial-literacy-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-financial-planning-for-couples.md": {
	id: "danish-financial-planning-for-couples.md";
  slug: "danish-financial-planning-for-couples";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-financial-planning-for-families.md": {
	id: "danish-financial-planning-for-families.md";
  slug: "danish-financial-planning-for-families";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-financial-planning-for-women.md": {
	id: "danish-financial-planning-for-women.md";
  slug: "danish-financial-planning-for-women";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-fire-movement.md": {
	id: "danish-fire-movement.md";
  slug: "danish-fire-movement";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-first-30-days-financial-checklist.md": {
	id: "danish-first-30-days-financial-checklist.md";
  slug: "danish-first-30-days-financial-checklist";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-foreign-custody-account-tax.md": {
	id: "danish-foreign-custody-account-tax.md";
  slug: "danish-foreign-custody-account-tax";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-green-investing-guide.md": {
	id: "danish-green-investing-guide.md";
  slug: "danish-green-investing-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-health-insurance-for-expats.md": {
	id: "danish-health-insurance-for-expats.md";
  slug: "danish-health-insurance-for-expats";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-high-earner-tax-optimization.md": {
	id: "danish-high-earner-tax-optimization.md";
  slug: "danish-high-earner-tax-optimization";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-home-buying-guide.md": {
	id: "danish-home-buying-guide.md";
  slug: "danish-home-buying-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-insurance-comparison.md": {
	id: "danish-insurance-comparison.md";
  slug: "danish-insurance-comparison";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investing-for-beginners.md": {
	id: "danish-investing-for-beginners.md";
  slug: "danish-investing-for-beginners";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-account-types.md": {
	id: "danish-investment-account-types.md";
  slug: "danish-investment-account-types";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-after-divorce.md": {
	id: "danish-investment-after-divorce.md";
  slug: "danish-investment-after-divorce";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-accountants.md": {
	id: "danish-investment-for-accountants.md";
  slug: "danish-investment-for-accountants";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-architects.md": {
	id: "danish-investment-for-architects.md";
  slug: "danish-investment-for-architects";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-charity-donors.md": {
	id: "danish-investment-for-charity-donors.md";
  slug: "danish-investment-for-charity-donors";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-children.md": {
	id: "danish-investment-for-children.md";
  slug: "danish-investment-for-children";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-consultants.md": {
	id: "danish-investment-for-consultants.md";
  slug: "danish-investment-for-consultants";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-couples.md": {
	id: "danish-investment-for-couples.md";
  slug: "danish-investment-for-couples";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-creatives.md": {
	id: "danish-investment-for-creatives.md";
  slug: "danish-investment-for-creatives";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-dentists.md": {
	id: "danish-investment-for-dentists.md";
  slug: "danish-investment-for-dentists";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-dual-citizens.md": {
	id: "danish-investment-for-dual-citizens.md";
  slug: "danish-investment-for-dual-citizens";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-early-retirees.md": {
	id: "danish-investment-for-early-retirees.md";
  slug: "danish-investment-for-early-retirees";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-engineers.md": {
	id: "danish-investment-for-engineers.md";
  slug: "danish-investment-for-engineers";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-entrepreneurs.md": {
	id: "danish-investment-for-entrepreneurs.md";
  slug: "danish-investment-for-entrepreneurs";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-freelancers.md": {
	id: "danish-investment-for-freelancers.md";
  slug: "danish-investment-for-freelancers";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-government-employees.md": {
	id: "danish-investment-for-government-employees.md";
  slug: "danish-investment-for-government-employees";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-healthcare-workers.md": {
	id: "danish-investment-for-healthcare-workers.md";
  slug: "danish-investment-for-healthcare-workers";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-high-net-worth.md": {
	id: "danish-investment-for-high-net-worth.md";
  slug: "danish-investment-for-high-net-worth";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-immigrants.md": {
	id: "danish-investment-for-immigrants.md";
  slug: "danish-investment-for-immigrants";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-inheritors.md": {
	id: "danish-investment-for-inheritors.md";
  slug: "danish-investment-for-inheritors";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-it-professionals.md": {
	id: "danish-investment-for-it-professionals.md";
  slug: "danish-investment-for-it-professionals";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-journalists.md": {
	id: "danish-investment-for-journalists.md";
  slug: "danish-investment-for-journalists";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-lawyers.md": {
	id: "danish-investment-for-lawyers.md";
  slug: "danish-investment-for-lawyers";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-marketing-professionals.md": {
	id: "danish-investment-for-marketing-professionals.md";
  slug: "danish-investment-for-marketing-professionals";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-part-time-workers.md": {
	id: "danish-investment-for-part-time-workers.md";
  slug: "danish-investment-for-part-time-workers";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-project-managers.md": {
	id: "danish-investment-for-project-managers.md";
  slug: "danish-investment-for-project-managers";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-remote-workers.md": {
	id: "danish-investment-for-remote-workers.md";
  slug: "danish-investment-for-remote-workers";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-sales-professionals.md": {
	id: "danish-investment-for-sales-professionals.md";
  slug: "danish-investment-for-sales-professionals";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-scientists.md": {
	id: "danish-investment-for-scientists.md";
  slug: "danish-investment-for-scientists";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-second-home-owners.md": {
	id: "danish-investment-for-second-home-owners.md";
  slug: "danish-investment-for-second-home-owners";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-seniors.md": {
	id: "danish-investment-for-seniors.md";
  slug: "danish-investment-for-seniors";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-social-workers.md": {
	id: "danish-investment-for-social-workers.md";
  slug: "danish-investment-for-social-workers";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-students.md": {
	id: "danish-investment-for-students.md";
  slug: "danish-investment-for-students";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-teachers.md": {
	id: "danish-investment-for-teachers.md";
  slug: "danish-investment-for-teachers";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-widows-widowers.md": {
	id: "danish-investment-for-widows-widowers.md";
  slug: "danish-investment-for-widows-widowers";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-for-young-adults.md": {
	id: "danish-investment-for-young-adults.md";
  slug: "danish-investment-for-young-adults";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-fraud-protection.md": {
	id: "danish-investment-fraud-protection.md";
  slug: "danish-investment-fraud-protection";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-glossary.md": {
	id: "danish-investment-glossary.md";
  slug: "danish-investment-glossary";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-mistakes-to-avoid.md": {
	id: "danish-investment-mistakes-to-avoid.md";
  slug: "danish-investment-mistakes-to-avoid";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-platform-comparison.md": {
	id: "danish-investment-platform-comparison.md";
  slug: "danish-investment-platform-comparison";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-portfolio-examples.md": {
	id: "danish-investment-portfolio-examples.md";
  slug: "danish-investment-portfolio-examples";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-psychology-guide.md": {
	id: "danish-investment-psychology-guide.md";
  slug: "danish-investment-psychology-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-returns-calculator.md": {
	id: "danish-investment-returns-calculator.md";
  slug: "danish-investment-returns-calculator";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-investment-strategies-deep-dive.md": {
	id: "danish-investment-strategies-deep-dive.md";
  slug: "danish-investment-strategies-deep-dive";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-mortgage-tax-deduction.md": {
	id: "danish-mortgage-tax-deduction.md";
  slug: "danish-mortgage-tax-deduction";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-mortgage-types-explained.md": {
	id: "danish-mortgage-types-explained.md";
  slug: "danish-mortgage-types-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-passive-income-guide.md": {
	id: "danish-passive-income-guide.md";
  slug: "danish-passive-income-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-payslip-explained-for-expats.md": {
	id: "danish-payslip-explained-for-expats.md";
  slug: "danish-payslip-explained-for-expats";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-pension-consolidation-guide.md": {
	id: "danish-pension-consolidation-guide.md";
  slug: "danish-pension-consolidation-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-pension-drawdown-guide.md": {
	id: "danish-pension-drawdown-guide.md";
  slug: "danish-pension-drawdown-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-pension-investing-guide.md": {
	id: "danish-pension-investing-guide.md";
  slug: "danish-pension-investing-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-portfolio-construction-guide.md": {
	id: "danish-portfolio-construction-guide.md";
  slug: "danish-portfolio-construction-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-portfolio-rebalancing-guide.md": {
	id: "danish-portfolio-rebalancing-guide.md";
  slug: "danish-portfolio-rebalancing-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-property-investment-tax.md": {
	id: "danish-property-investment-tax.md";
  slug: "danish-property-investment-tax";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-property-management-guide.md": {
	id: "danish-property-management-guide.md";
  slug: "danish-property-management-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-real-estate-investment-strategies.md": {
	id: "danish-real-estate-investment-strategies.md";
  slug: "danish-real-estate-investment-strategies";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-reits-and-property-funds.md": {
	id: "danish-reits-and-property-funds.md";
  slug: "danish-reits-and-property-funds";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-rental-market-guide-for-expats.md": {
	id: "danish-rental-market-guide-for-expats.md";
  slug: "danish-rental-market-guide-for-expats";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-researcher-tax-scheme.md": {
	id: "danish-researcher-tax-scheme.md";
  slug: "danish-researcher-tax-scheme";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-retirement-planning-timeline.md": {
	id: "danish-retirement-planning-timeline.md";
  slug: "danish-retirement-planning-timeline";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-robo-advisors-guide.md": {
	id: "danish-robo-advisors-guide.md";
  slug: "danish-robo-advisors-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-salary-negotiation-guide.md": {
	id: "danish-salary-negotiation-guide.md";
  slug: "danish-salary-negotiation-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-share-tax-overview.md": {
	id: "danish-share-tax-overview.md";
  slug: "danish-share-tax-overview";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-side-hustle-ideas.md": {
	id: "danish-side-hustle-ideas.md";
  slug: "danish-side-hustle-ideas";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-side-hustle-tax-guide.md": {
	id: "danish-side-hustle-tax-guide.md";
  slug: "danish-side-hustle-tax-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-starting-a-business.md": {
	id: "danish-starting-a-business.md";
  slug: "danish-starting-a-business";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-stock-market-overview.md": {
	id: "danish-stock-market-overview.md";
  slug: "danish-stock-market-overview";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-stock-market-sectors-guide.md": {
	id: "danish-stock-market-sectors-guide.md";
  slug: "danish-stock-market-sectors-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-stock-market-sectors.md": {
	id: "danish-stock-market-sectors.md";
  slug: "danish-stock-market-sectors";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-student-finance-guide.md": {
	id: "danish-student-finance-guide.md";
  slug: "danish-student-finance-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-tax-calculator-guide.md": {
	id: "danish-tax-calculator-guide.md";
  slug: "danish-tax-calculator-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-tax-on-foreign-income.md": {
	id: "danish-tax-on-foreign-income.md";
  slug: "danish-tax-on-foreign-income";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-tax-optimization-strategies.md": {
	id: "danish-tax-optimization-strategies.md";
  slug: "danish-tax-optimization-strategies";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-tax-return-guide.md": {
	id: "danish-tax-return-guide.md";
  slug: "danish-tax-return-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"danish-vat-guide.md": {
	id: "danish-vat-guide.md";
  slug: "danish-vat-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"debt-consolidation-loans.md": {
	id: "debt-consolidation-loans.md";
  slug: "debt-consolidation-loans";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"debt-help-guide.md": {
	id: "debt-help-guide.md";
  slug: "debt-help-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"debt-snowball-vs-avalanche.md": {
	id: "debt-snowball-vs-avalanche.md";
  slug: "debt-snowball-vs-avalanche";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"debt-solutions-explained.md": {
	id: "debt-solutions-explained.md";
  slug: "debt-solutions-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"dividend-tax-explained.md": {
	id: "dividend-tax-explained.md";
  slug: "dividend-tax-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"emergency-fund-deep-dive.md": {
	id: "emergency-fund-deep-dive.md";
  slug: "emergency-fund-deep-dive";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"emergency-fund-guide.md": {
	id: "emergency-fund-guide.md";
  slug: "emergency-fund-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"fire-financial-independence-guide.md": {
	id: "fire-financial-independence-guide.md";
  slug: "fire-financial-independence-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"first-time-buyers-guide.md": {
	id: "first-time-buyers-guide.md";
  slug: "first-time-buyers-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"fixed-vs-variable-mortgage.md": {
	id: "fixed-vs-variable-mortgage.md";
  slug: "fixed-vs-variable-mortgage";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"flight-cancellation-rights.md": {
	id: "flight-cancellation-rights.md";
  slug: "flight-cancellation-rights";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"flight-delay-compensation-guide.md": {
	id: "flight-delay-compensation-guide.md";
  slug: "flight-delay-compensation-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"free-cheap-wills.md": {
	id: "free-cheap-wills.md";
  slug: "free-cheap-wills";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"fscs-protection-explained.md": {
	id: "fscs-protection-explained.md";
  slug: "fscs-protection-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"gambling-debt-help.md": {
	id: "gambling-debt-help.md";
  slug: "gambling-debt-help";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"gift-aid-explained.md": {
	id: "gift-aid-explained.md";
  slug: "gift-aid-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"gift-cards-and-vouchers-guide.md": {
	id: "gift-cards-and-vouchers-guide.md";
  slug: "gift-cards-and-vouchers-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"gifts-and-inheritance-tax.md": {
	id: "gifts-and-inheritance-tax.md";
  slug: "gifts-and-inheritance-tax";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"having-a-baby-costs-guide.md": {
	id: "having-a-baby-costs-guide.md";
  slug: "having-a-baby-costs-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"help-to-buy-and-shared-ownership.md": {
	id: "help-to-buy-and-shared-ownership.md";
  slug: "help-to-buy-and-shared-ownership";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"home-improvement-disputes.md": {
	id: "home-improvement-disputes.md";
  slug: "home-improvement-disputes";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"how-to-appeal-parking-ticket.md": {
	id: "how-to-appeal-parking-ticket.md";
  slug: "how-to-appeal-parking-ticket";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"how-to-choose-a-broker.md": {
	id: "how-to-choose-a-broker.md";
  slug: "how-to-choose-a-broker";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"how-to-claim-flight-compensation.md": {
	id: "how-to-claim-flight-compensation.md";
  slug: "how-to-claim-flight-compensation";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"how-to-complain-financial-ombudsman.md": {
	id: "how-to-complain-financial-ombudsman.md";
  slug: "how-to-complain-financial-ombudsman";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"how-to-get-a-mortgage.md": {
	id: "how-to-get-a-mortgage.md";
  slug: "how-to-get-a-mortgage";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"how-to-haggle-bills.md": {
	id: "how-to-haggle-bills.md";
  slug: "how-to-haggle-bills";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"how-to-read-a-payslip.md": {
	id: "how-to-read-a-payslip.md";
  slug: "how-to-read-a-payslip";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"how-to-reduce-your-tax-bill.md": {
	id: "how-to-reduce-your-tax-bill.md";
  slug: "how-to-reduce-your-tax-bill";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"how-to-save-on-all-bills.md": {
	id: "how-to-save-on-all-bills.md";
  slug: "how-to-save-on-all-bills";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"how-to-save-on-energy-bills.md": {
	id: "how-to-save-on-energy-bills.md";
  slug: "how-to-save-on-energy-bills";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"how-to-switch-bank-account.md": {
	id: "how-to-switch-bank-account.md";
  slug: "how-to-switch-bank-account";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"how-to-transfer-a-pension.md": {
	id: "how-to-transfer-a-pension.md";
  slug: "how-to-transfer-a-pension";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"how-to-transfer-an-isa.md": {
	id: "how-to-transfer-an-isa.md";
  slug: "how-to-transfer-an-isa";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"improving-credit-score.md": {
	id: "improving-credit-score.md";
  slug: "improving-credit-score";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"income-tax-basics.md": {
	id: "income-tax-basics.md";
  slug: "income-tax-basics";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"index-funds-explained.md": {
	id: "index-funds-explained.md";
  slug: "index-funds-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"inheritance-tax-planning.md": {
	id: "inheritance-tax-planning.md";
  slug: "inheritance-tax-planning";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"interest-rates-explained.md": {
	id: "interest-rates-explained.md";
  slug: "interest-rates-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"investing-101-beginners-guide.md": {
	id: "investing-101-beginners-guide.md";
  slug: "investing-101-beginners-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"investing-for-children.md": {
	id: "investing-for-children.md";
  slug: "investing-for-children";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"isa-vs-lisa-vs-pension.md": {
	id: "isa-vs-lisa-vs-pension.md";
  slug: "isa-vs-lisa-vs-pension";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"isas-explained.md": {
	id: "isas-explained.md";
  slug: "isas-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"lasting-power-of-attorney.md": {
	id: "lasting-power-of-attorney.md";
  slug: "lasting-power-of-attorney";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"lost-or-stolen-payment-cards.md": {
	id: "lost-or-stolen-payment-cards.md";
  slug: "lost-or-stolen-payment-cards";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"lump-sum-investing-vs-dollar-cost-averaging.md": {
	id: "lump-sum-investing-vs-dollar-cost-averaging.md";
  slug: "lump-sum-investing-vs-dollar-cost-averaging";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"marriage-allowance-guide.md": {
	id: "marriage-allowance-guide.md";
  slug: "marriage-allowance-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"mortgage-arrears-guide.md": {
	id: "mortgage-arrears-guide.md";
  slug: "mortgage-arrears-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"mortgage-overpayment-calculator.md": {
	id: "mortgage-overpayment-calculator.md";
  slug: "mortgage-overpayment-calculator";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"mortgage-overpayments-vs-investments.md": {
	id: "mortgage-overpayments-vs-investments.md";
  slug: "mortgage-overpayments-vs-investments";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"national-insurance-explained.md": {
	id: "national-insurance-explained.md";
  slug: "national-insurance-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"package-holiday-cancellation-rights.md": {
	id: "package-holiday-cancellation-rights.md";
  slug: "package-holiday-cancellation-rights";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"parking-tickets-and-debt-collectors.md": {
	id: "parking-tickets-and-debt-collectors.md";
  slug: "parking-tickets-and-debt-collectors";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"payday-loans-warning.md": {
	id: "payday-loans-warning.md";
  slug: "payday-loans-warning";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"pension-auto-enrolment-guide.md": {
	id: "pension-auto-enrolment-guide.md";
  slug: "pension-auto-enrolment-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"pension-credit-guide.md": {
	id: "pension-credit-guide.md";
  slug: "pension-credit-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"pension-drawdown-explained.md": {
	id: "pension-drawdown-explained.md";
  slug: "pension-drawdown-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"pension-scam-recovery.md": {
	id: "pension-scam-recovery.md";
  slug: "pension-scam-recovery";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"pension-scams-guide.md": {
	id: "pension-scams-guide.md";
  slug: "pension-scams-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"pension-types-explained.md": {
	id: "pension-types-explained.md";
  slug: "pension-types-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"pip-personal-independence-payment-guide.md": {
	id: "pip-personal-independence-payment-guide.md";
  slug: "pip-personal-independence-payment-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"power-of-attorney-financial.md": {
	id: "power-of-attorney-financial.md";
  slug: "power-of-attorney-financial";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"premium-bonds-guide.md": {
	id: "premium-bonds-guide.md";
  slug: "premium-bonds-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"private-parking-tickets-guide.md": {
	id: "private-parking-tickets-guide.md";
  slug: "private-parking-tickets-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"property-tax-guide.md": {
	id: "property-tax-guide.md";
  slug: "property-tax-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"regular-investing-explained.md": {
	id: "regular-investing-explained.md";
  slug: "regular-investing-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"regular-savings-accounts.md": {
	id: "regular-savings-accounts.md";
  slug: "regular-savings-accounts";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"remortgaging-guide.md": {
	id: "remortgaging-guide.md";
  slug: "remortgaging-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"rent-a-room-scheme.md": {
	id: "rent-a-room-scheme.md";
  slug: "rent-a-room-scheme";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"rent-arrears-what-to-do.md": {
	id: "rent-arrears-what-to-do.md";
  slug: "rent-arrears-what-to-do";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"rsus-explained.md": {
	id: "rsus-explained.md";
  slug: "rsus-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"salary-sacrifice-explained.md": {
	id: "salary-sacrifice-explained.md";
  slug: "salary-sacrifice-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"savings-goal-calculator.md": {
	id: "savings-goal-calculator.md";
  slug: "savings-goal-calculator";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"savings-tax-explained.md": {
	id: "savings-tax-explained.md";
  slug: "savings-tax-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"section75-and-chargeback-claims.md": {
	id: "section75-and-chargeback-claims.md";
  slug: "section75-and-chargeback-claims";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"self-assessment-tax-return-guide.md": {
	id: "self-assessment-tax-return-guide.md";
  slug: "self-assessment-tax-return-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"selling-on-ebay-vinted.md": {
	id: "selling-on-ebay-vinted.md";
  slug: "selling-on-ebay-vinted";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"severe-mental-impairment-council-tax.md": {
	id: "severe-mental-impairment-council-tax.md";
  slug: "severe-mental-impairment-council-tax";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"side-hustles-tax-guide.md": {
	id: "side-hustles-tax-guide.md";
  slug: "side-hustles-tax-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"state-pension-explained.md": {
	id: "state-pension-explained.md";
  slug: "state-pension-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"streaming-savings-guide.md": {
	id: "streaming-savings-guide.md";
  slug: "streaming-savings-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"student-bank-accounts.md": {
	id: "student-bank-accounts.md";
  slug: "student-bank-accounts";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"student-budgeting-guide.md": {
	id: "student-budgeting-guide.md";
  slug: "student-budgeting-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"student-discounts-complete-guide.md": {
	id: "student-discounts-complete-guide.md";
  slug: "student-discounts-complete-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"student-loans-explained.md": {
	id: "student-loans-explained.md";
  slug: "student-loans-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"supermarket-saving-tips.md": {
	id: "supermarket-saving-tips.md";
  slug: "supermarket-saving-tips";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"tax-codes-explained.md": {
	id: "tax-codes-explained.md";
  slug: "tax-codes-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"tax-when-someone-dies.md": {
	id: "tax-when-someone-dies.md";
  slug: "tax-when-someone-dies";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"train-delay-compensation.md": {
	id: "train-delay-compensation.md";
  slug: "train-delay-compensation";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"travel-credit-cards.md": {
	id: "travel-credit-cards.md";
  slug: "travel-credit-cards";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"types-of-borrowing-explained.md": {
	id: "types-of-borrowing-explained.md";
  slug: "types-of-borrowing-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-annuities-guide.md": {
	id: "uk-annuities-guide.md";
  slug: "uk-annuities-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-bank-switching-guide.md": {
	id: "uk-bank-switching-guide.md";
  slug: "uk-bank-switching-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-benefits-calculator-guide.md": {
	id: "uk-benefits-calculator-guide.md";
  slug: "uk-benefits-calculator-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-benefits-for-families-guide.md": {
	id: "uk-benefits-for-families-guide.md";
  slug: "uk-benefits-for-families-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-benefits-guide.md": {
	id: "uk-benefits-guide.md";
  slug: "uk-benefits-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-bereavement-financial-checklist.md": {
	id: "uk-bereavement-financial-checklist.md";
  slug: "uk-bereavement-financial-checklist";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-best-bank-accounts-guide.md": {
	id: "uk-best-bank-accounts-guide.md";
  slug: "uk-best-bank-accounts-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-broadband-guide.md": {
	id: "uk-broadband-guide.md";
  slug: "uk-broadband-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-budgeting-guide.md": {
	id: "uk-budgeting-guide.md";
  slug: "uk-budgeting-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-capital-gains-tax-guide.md": {
	id: "uk-capital-gains-tax-guide.md";
  slug: "uk-capital-gains-tax-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-car-buying-guide.md": {
	id: "uk-car-buying-guide.md";
  slug: "uk-car-buying-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-car-finance-guide.md": {
	id: "uk-car-finance-guide.md";
  slug: "uk-car-finance-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-care-costs-guide.md": {
	id: "uk-care-costs-guide.md";
  slug: "uk-care-costs-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-carers-allowance-guide.md": {
	id: "uk-carers-allowance-guide.md";
  slug: "uk-carers-allowance-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-child-benefit-guide.md": {
	id: "uk-child-benefit-guide.md";
  slug: "uk-child-benefit-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-child-trust-fund-guide.md": {
	id: "uk-child-trust-fund-guide.md";
  slug: "uk-child-trust-fund-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-childcare-costs-guide.md": {
	id: "uk-childcare-costs-guide.md";
  slug: "uk-childcare-costs-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-consumer-credit-act-guide.md": {
	id: "uk-consumer-credit-act-guide.md";
  slug: "uk-consumer-credit-act-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-contractor-ir35-guide.md": {
	id: "uk-contractor-ir35-guide.md";
  slug: "uk-contractor-ir35-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-council-tax-appeals-guide.md": {
	id: "uk-council-tax-appeals-guide.md";
  slug: "uk-council-tax-appeals-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-council-tax-guide.md": {
	id: "uk-council-tax-guide.md";
  slug: "uk-council-tax-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-council-tax-reduction-guide.md": {
	id: "uk-council-tax-reduction-guide.md";
  slug: "uk-council-tax-reduction-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-credit-building-guide.md": {
	id: "uk-credit-building-guide.md";
  slug: "uk-credit-building-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-credit-cards-guide.md": {
	id: "uk-credit-cards-guide.md";
  slug: "uk-credit-cards-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-credit-score-guide.md": {
	id: "uk-credit-score-guide.md";
  slug: "uk-credit-score-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-cryptocurrency-tax-guide.md": {
	id: "uk-cryptocurrency-tax-guide.md";
  slug: "uk-cryptocurrency-tax-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-cycle-to-work-scheme-guide.md": {
	id: "uk-cycle-to-work-scheme-guide.md";
  slug: "uk-cycle-to-work-scheme-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-debt-management-guide.md": {
	id: "uk-debt-management-guide.md";
  slug: "uk-debt-management-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-dividend-growth-investing-guide.md": {
	id: "uk-dividend-growth-investing-guide.md";
  slug: "uk-dividend-growth-investing-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-dividend-investing-guide.md": {
	id: "uk-dividend-investing-guide.md";
  slug: "uk-dividend-investing-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-eis-seis-vct-guide.md": {
	id: "uk-eis-seis-vct-guide.md";
  slug: "uk-eis-seis-vct-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-electric-car-salary-sacrifice-guide.md": {
	id: "uk-electric-car-salary-sacrifice-guide.md";
  slug: "uk-electric-car-salary-sacrifice-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-emergency-fund-deep-dive.md": {
	id: "uk-emergency-fund-deep-dive.md";
  slug: "uk-emergency-fund-deep-dive";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-emerging-markets-guide.md": {
	id: "uk-emerging-markets-guide.md";
  slug: "uk-emerging-markets-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-emigrating-financial-guide.md": {
	id: "uk-emigrating-financial-guide.md";
  slug: "uk-emigrating-financial-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-employer-benefits-guide.md": {
	id: "uk-employer-benefits-guide.md";
  slug: "uk-employer-benefits-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-energy-bills-guide.md": {
	id: "uk-energy-bills-guide.md";
  slug: "uk-energy-bills-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-estate-planning-guide.md": {
	id: "uk-estate-planning-guide.md";
  slug: "uk-estate-planning-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-etf-guide.md": {
	id: "uk-etf-guide.md";
  slug: "uk-etf-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-ethical-investing-guide.md": {
	id: "uk-ethical-investing-guide.md";
  slug: "uk-ethical-investing-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-factor-investing-guide.md": {
	id: "uk-factor-investing-guide.md";
  slug: "uk-factor-investing-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-financial-abuse-guide.md": {
	id: "uk-financial-abuse-guide.md";
  slug: "uk-financial-abuse-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-financial-calculators-guide.md": {
	id: "uk-financial-calculators-guide.md";
  slug: "uk-financial-calculators-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-financial-health-check.md": {
	id: "uk-financial-health-check.md";
  slug: "uk-financial-health-check";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-financial-planning-for-women.md": {
	id: "uk-financial-planning-for-women.md";
  slug: "uk-financial-planning-for-women";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-financial-planning-guide.md": {
	id: "uk-financial-planning-guide.md";
  slug: "uk-financial-planning-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-financial-wellbeing-guide.md": {
	id: "uk-financial-wellbeing-guide.md";
  slug: "uk-financial-wellbeing-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-fire-guide.md": {
	id: "uk-fire-guide.md";
  slug: "uk-fire-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-first-time-buyers-guide.md": {
	id: "uk-first-time-buyers-guide.md";
  slug: "uk-first-time-buyers-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-help-to-save-guide.md": {
	id: "uk-help-to-save-guide.md";
  slug: "uk-help-to-save-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-hmrc-time-to-pay-guide.md": {
	id: "uk-hmrc-time-to-pay-guide.md";
  slug: "uk-hmrc-time-to-pay-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-home-buying-guide.md": {
	id: "uk-home-buying-guide.md";
  slug: "uk-home-buying-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-identity-theft-protection.md": {
	id: "uk-identity-theft-protection.md";
  slug: "uk-identity-theft-protection";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-index-funds-guide.md": {
	id: "uk-index-funds-guide.md";
  slug: "uk-index-funds-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-inheritance-tax-guide.md": {
	id: "uk-inheritance-tax-guide.md";
  slug: "uk-inheritance-tax-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-insurance-guide.md": {
	id: "uk-insurance-guide.md";
  slug: "uk-insurance-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-investing-for-beginners.md": {
	id: "uk-investing-for-beginners.md";
  slug: "uk-investing-for-beginners";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-investment-bonds-guide.md": {
	id: "uk-investment-bonds-guide.md";
  slug: "uk-investment-bonds-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-investment-platforms-guide.md": {
	id: "uk-investment-platforms-guide.md";
  slug: "uk-investment-platforms-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-investment-trusts-guide.md": {
	id: "uk-investment-trusts-guide.md";
  slug: "uk-investment-trusts-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-isa-complete-guide.md": {
	id: "uk-isa-complete-guide.md";
  slug: "uk-isa-complete-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-joint-mortgage-guide.md": {
	id: "uk-joint-mortgage-guide.md";
  slug: "uk-joint-mortgage-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-junior-isa-guide.md": {
	id: "uk-junior-isa-guide.md";
  slug: "uk-junior-isa-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-lifetime-isa-guide.md": {
	id: "uk-lifetime-isa-guide.md";
  slug: "uk-lifetime-isa-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-making-tax-digital-guide.md": {
	id: "uk-making-tax-digital-guide.md";
  slug: "uk-making-tax-digital-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-marriage-allowance-guide.md": {
	id: "uk-marriage-allowance-guide.md";
  slug: "uk-marriage-allowance-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-money-after-divorce.md": {
	id: "uk-money-after-divorce.md";
  slug: "uk-money-after-divorce";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-money-for-couples.md": {
	id: "uk-money-for-couples.md";
  slug: "uk-money-for-couples";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-money-for-over-50s-guide.md": {
	id: "uk-money-for-over-50s-guide.md";
  slug: "uk-money-for-over-50s-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-money-mindset-guide.md": {
	id: "uk-money-mindset-guide.md";
  slug: "uk-money-mindset-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-mortgage-overpayment-guide.md": {
	id: "uk-mortgage-overpayment-guide.md";
  slug: "uk-mortgage-overpayment-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-national-insurance-guide.md": {
	id: "uk-national-insurance-guide.md";
  slug: "uk-national-insurance-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-packaged-bank-accounts-guide.md": {
	id: "uk-packaged-bank-accounts-guide.md";
  slug: "uk-packaged-bank-accounts-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-parental-leave-pay-guide.md": {
	id: "uk-parental-leave-pay-guide.md";
  slug: "uk-parental-leave-pay-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-pension-dashboard-guide.md": {
	id: "uk-pension-dashboard-guide.md";
  slug: "uk-pension-dashboard-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-pension-drawdown-guide.md": {
	id: "uk-pension-drawdown-guide.md";
  slug: "uk-pension-drawdown-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-pension-scams-guide.md": {
	id: "uk-pension-scams-guide.md";
  slug: "uk-pension-scams-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-pension-tax-relief-guide.md": {
	id: "uk-pension-tax-relief-guide.md";
  slug: "uk-pension-tax-relief-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-pension-transfer-guide.md": {
	id: "uk-pension-transfer-guide.md";
  slug: "uk-pension-transfer-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-personal-loans-guide.md": {
	id: "uk-personal-loans-guide.md";
  slug: "uk-personal-loans-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-power-of-attorney-guide.md": {
	id: "uk-power-of-attorney-guide.md";
  slug: "uk-power-of-attorney-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-pre-nuptial-agreements-guide.md": {
	id: "uk-pre-nuptial-agreements-guide.md";
  slug: "uk-pre-nuptial-agreements-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-premium-bonds-guide.md": {
	id: "uk-premium-bonds-guide.md";
  slug: "uk-premium-bonds-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-probate-guide.md": {
	id: "uk-probate-guide.md";
  slug: "uk-probate-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-property-investment-guide.md": {
	id: "uk-property-investment-guide.md";
  slug: "uk-property-investment-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-property-rental-guide.md": {
	id: "uk-property-rental-guide.md";
  slug: "uk-property-rental-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-redundancy-rights-guide.md": {
	id: "uk-redundancy-rights-guide.md";
  slug: "uk-redundancy-rights-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-reit-guide.md": {
	id: "uk-reit-guide.md";
  slug: "uk-reit-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-remortgage-guide.md": {
	id: "uk-remortgage-guide.md";
  slug: "uk-remortgage-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-rental-income-tax-guide.md": {
	id: "uk-rental-income-tax-guide.md";
  slug: "uk-rental-income-tax-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-right-to-buy-guide.md": {
	id: "uk-right-to-buy-guide.md";
  slug: "uk-right-to-buy-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-robo-advisors-guide.md": {
	id: "uk-robo-advisors-guide.md";
  slug: "uk-robo-advisors-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-salary-negotiation-guide.md": {
	id: "uk-salary-negotiation-guide.md";
  slug: "uk-salary-negotiation-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-salary-sacrifice-guide.md": {
	id: "uk-salary-sacrifice-guide.md";
  slug: "uk-salary-sacrifice-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-savings-accounts-guide.md": {
	id: "uk-savings-accounts-guide.md";
  slug: "uk-savings-accounts-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-savings-rates-guide.md": {
	id: "uk-savings-rates-guide.md";
  slug: "uk-savings-rates-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-self-assessment-tax-return-guide.md": {
	id: "uk-self-assessment-tax-return-guide.md";
  slug: "uk-self-assessment-tax-return-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-self-employed-deep-dive.md": {
	id: "uk-self-employed-deep-dive.md";
  slug: "uk-self-employed-deep-dive";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-self-employed-tax-guide.md": {
	id: "uk-self-employed-tax-guide.md";
  slug: "uk-self-employed-tax-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-shared-ownership-guide.md": {
	id: "uk-shared-ownership-guide.md";
  slug: "uk-shared-ownership-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-side-hustles-guide.md": {
	id: "uk-side-hustles-guide.md";
  slug: "uk-side-hustles-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-sipp-guide.md": {
	id: "uk-sipp-guide.md";
  slug: "uk-sipp-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-small-cap-investing-guide.md": {
	id: "uk-small-cap-investing-guide.md";
  slug: "uk-small-cap-investing-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-social-fund-crisis-support-guide.md": {
	id: "uk-social-fund-crisis-support-guide.md";
  slug: "uk-social-fund-crisis-support-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-state-pension-forecast-guide.md": {
	id: "uk-state-pension-forecast-guide.md";
  slug: "uk-state-pension-forecast-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-statutory-sick-pay-guide.md": {
	id: "uk-statutory-sick-pay-guide.md";
  slug: "uk-statutory-sick-pay-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-stock-trading-guide.md": {
	id: "uk-stock-trading-guide.md";
  slug: "uk-stock-trading-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-student-loans-guide.md": {
	id: "uk-student-loans-guide.md";
  slug: "uk-student-loans-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-tax-codes-guide.md": {
	id: "uk-tax-codes-guide.md";
  slug: "uk-tax-codes-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-tax-free-childcare-guide.md": {
	id: "uk-tax-free-childcare-guide.md";
  slug: "uk-tax-free-childcare-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-tax-planning-guide.md": {
	id: "uk-tax-planning-guide.md";
  slug: "uk-tax-planning-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-tech-investing-guide.md": {
	id: "uk-tech-investing-guide.md";
  slug: "uk-tech-investing-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-will-writing-guide.md": {
	id: "uk-will-writing-guide.md";
  slug: "uk-will-writing-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"uk-workplace-pension-guide.md": {
	id: "uk-workplace-pension-guide.md";
  slug: "uk-workplace-pension-guide";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"universal-credit-explained.md": {
	id: "universal-credit-explained.md";
  slug: "universal-credit-explained";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"used-car-buying-rights.md": {
	id: "used-car-buying-rights.md";
  slug: "used-car-buying-rights";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
"vat-explained-for-consumers.md": {
	id: "vat-explained-for-consumers.md";
  slug: "vat-explained-for-consumers";
  body: string;
  collection: "personal-finance";
  data: InferEntrySchema<"personal-finance">
} & { render(): Render[".md"] };
};
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
"android-crypto-security-guide.md": {
	id: "android-crypto-security-guide.md";
  slug: "android-crypto-security-guide";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
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
"can-someone-steal-crypto-with-wallet-address.md": {
	id: "can-someone-steal-crypto-with-wallet-address.md";
  slug: "can-someone-steal-crypto-with-wallet-address";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
"clipboard-hijacking-crypto-address-malware.md": {
	id: "clipboard-hijacking-crypto-address-malware.md";
  slug: "clipboard-hijacking-crypto-address-malware";
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
"counterfeit-hardware-wallets-how-to-spot-fakes.md": {
	id: "counterfeit-hardware-wallets-how-to-spot-fakes.md";
  slug: "counterfeit-hardware-wallets-how-to-spot-fakes";
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
"how-to-buy-crypto-anonymously-kyc-vs-no-kyc.md": {
	id: "how-to-buy-crypto-anonymously-kyc-vs-no-kyc.md";
  slug: "how-to-buy-crypto-anonymously-kyc-vs-no-kyc";
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
"how-to-safely-connect-wallet-to-dapp.md": {
	id: "how-to-safely-connect-wallet-to-dapp.md";
  slug: "how-to-safely-connect-wallet-to-dapp";
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
"most-secure-desktop-wallet-long-term-storage.md": {
	id: "most-secure-desktop-wallet-long-term-storage.md";
  slug: "most-secure-desktop-wallet-long-term-storage";
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
"paper-wallets-why-this-method-is-dangerous.md": {
	id: "paper-wallets-why-this-method-is-dangerous.md";
  slug: "paper-wallets-why-this-method-is-dangerous";
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
"what-makes-crypto-wallet-trustworthy.md": {
	id: "what-makes-crypto-wallet-trustworthy.md";
  slug: "what-makes-crypto-wallet-trustworthy";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
"where-to-store-seed-phrase-paper-metal-backup.md": {
	id: "where-to-store-seed-phrase-paper-metal-backup.md";
  slug: "where-to-store-seed-phrase-paper-metal-backup";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
"why-exchanges-freeze-withdrawals-wallet-flags.md": {
	id: "why-exchanges-freeze-withdrawals-wallet-flags.md";
  slug: "why-exchanges-freeze-withdrawals-wallet-flags";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
"why-move-crypto-off-exchanges.md": {
	id: "why-move-crypto-off-exchanges.md";
  slug: "why-move-crypto-off-exchanges";
  body: string;
  collection: "safe-crypto";
  data: InferEntrySchema<"safe-crypto">
} & { render(): Render[".md"] };
};
"trading": {
"bullish-engulfing-pattern.md": {
	id: "bullish-engulfing-pattern.md";
  slug: "bullish-engulfing-pattern";
  body: string;
  collection: "trading";
  data: InferEntrySchema<"trading">
} & { render(): Render[".md"] };
"doji-candlestick-pattern.md": {
	id: "doji-candlestick-pattern.md";
  slug: "doji-candlestick-pattern";
  body: string;
  collection: "trading";
  data: InferEntrySchema<"trading">
} & { render(): Render[".md"] };
"geopolitical-events-financial-markets.md": {
	id: "geopolitical-events-financial-markets.md";
  slug: "geopolitical-events-financial-markets";
  body: string;
  collection: "trading";
  data: InferEntrySchema<"trading">
} & { render(): Render[".md"] };
"hammer-shooting-star.md": {
	id: "hammer-shooting-star.md";
  slug: "hammer-shooting-star";
  body: string;
  collection: "trading";
  data: InferEntrySchema<"trading">
} & { render(): Render[".md"] };
"leverage-trading-margin-guide.md": {
	id: "leverage-trading-margin-guide.md";
  slug: "leverage-trading-margin-guide";
  body: string;
  collection: "trading";
  data: InferEntrySchema<"trading">
} & { render(): Render[".md"] };
"market-liquidity-explained.md": {
	id: "market-liquidity-explained.md";
  slug: "market-liquidity-explained";
  body: string;
  collection: "trading";
  data: InferEntrySchema<"trading">
} & { render(): Render[".md"] };
"price-discovery-markets-fair-value.md": {
	id: "price-discovery-markets-fair-value.md";
  slug: "price-discovery-markets-fair-value";
  body: string;
  collection: "trading";
  data: InferEntrySchema<"trading">
} & { render(): Render[".md"] };
"risk-management-position-sizing.md": {
	id: "risk-management-position-sizing.md";
  slug: "risk-management-position-sizing";
  body: string;
  collection: "trading";
  data: InferEntrySchema<"trading">
} & { render(): Render[".md"] };
"seasonal-patterns-market-cycles.md": {
	id: "seasonal-patterns-market-cycles.md";
  slug: "seasonal-patterns-market-cycles";
  body: string;
  collection: "trading";
  data: InferEntrySchema<"trading">
} & { render(): Render[".md"] };
"stocks-forex-crypto-choosing-your-market.md": {
	id: "stocks-forex-crypto-choosing-your-market.md";
  slug: "stocks-forex-crypto-choosing-your-market";
  body: string;
  collection: "trading";
  data: InferEntrySchema<"trading">
} & { render(): Render[".md"] };
"technical-analysis-for-beginners.md": {
	id: "technical-analysis-for-beginners.md";
  slug: "technical-analysis-for-beginners";
  body: string;
  collection: "trading";
  data: InferEntrySchema<"trading">
} & { render(): Render[".md"] };
"trading-bots-automation-guide.md": {
	id: "trading-bots-automation-guide.md";
  slug: "trading-bots-automation-guide";
  body: string;
  collection: "trading";
  data: InferEntrySchema<"trading">
} & { render(): Render[".md"] };
"trading-psychology-fomo-fear-revenge.md": {
	id: "trading-psychology-fomo-fear-revenge.md";
  slug: "trading-psychology-fomo-fear-revenge";
  body: string;
  collection: "trading";
  data: InferEntrySchema<"trading">
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

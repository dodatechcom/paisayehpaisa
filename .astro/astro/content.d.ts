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
"best-crypto-exchange-beginners.md": {
	id: "best-crypto-exchange-beginners.md";
  slug: "best-crypto-exchange-beginners";
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
"how-to-read-crypto-whitepaper.md": {
	id: "how-to-read-crypto-whitepaper.md";
  slug: "how-to-read-crypto-whitepaper";
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
"what-happens-if-exchange-collapses.md": {
	id: "what-happens-if-exchange-collapses.md";
  slug: "what-happens-if-exchange-collapses";
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
};
"crypto-basics": {
"10-legit-ways-earn-passive-income-crypto.md": {
	id: "10-legit-ways-earn-passive-income-crypto.md";
  slug: "10-legit-ways-earn-passive-income-crypto";
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
"crypto-for-beginners-complete-guide.md": {
	id: "crypto-for-beginners-complete-guide.md";
  slug: "crypto-for-beginners-complete-guide";
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
"how-blockchain-works-simple-explanation.md": {
	id: "how-blockchain-works-simple-explanation.md";
  slug: "how-blockchain-works-simple-explanation";
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
"how-to-read-crypto-chart.md": {
	id: "how-to-read-crypto-chart.md";
  slug: "how-to-read-crypto-chart";
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
"what-is-meme-coin-should-you-invest.md": {
	id: "what-is-meme-coin-should-you-invest.md";
  slug: "what-is-meme-coin-should-you-invest";
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
"how-to-report-crypto-losses-taxes.md": {
	id: "how-to-report-crypto-losses-taxes.md";
  slug: "how-to-report-crypto-losses-taxes";
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

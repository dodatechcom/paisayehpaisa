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
};
"crypto-basics": {
"what-is-dca-crypto-beginners.md": {
	id: "what-is-dca-crypto-beginners.md";
  slug: "what-is-dca-crypto-beginners";
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
"how-to-spot-crypto-scam.md": {
	id: "how-to-spot-crypto-scam.md";
  slug: "how-to-spot-crypto-scam";
  body: string;
  collection: "crypto-scam";
  data: InferEntrySchema<"crypto-scam">
} & { render(): Render[".md"] };
};
"crypto-tax": {
"crypto-tax-guide-beginners.md": {
	id: "crypto-tax-guide-beginners.md";
  slug: "crypto-tax-guide-beginners";
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
"what-is-a-seed-phrase.md": {
	id: "what-is-a-seed-phrase.md";
  slug: "what-is-a-seed-phrase";
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

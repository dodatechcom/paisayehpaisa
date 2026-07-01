import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const personalFinance = await getCollection('personal-finance', ({ data }) => !data.draft);
  const cryptoBasics = await getCollection('crypto-basics', ({ data }) => !data.draft);
  const cryptoTax = await getCollection('crypto-tax', ({ data }) => !data.draft);
  const investing = await getCollection('investing', ({ data }) => !data.draft);
  const blog = await getCollection('blog', ({ data }) => !data.draft);
  const insurance = await getCollection('insurance', ({ data }) => !data.draft);
  const trading = await getCollection('trading', ({ data }) => !data.draft);
  const safeCrypto = await getCollection('safe-crypto', ({ data }) => !data.draft);
  const cryptoScam = await getCollection('crypto-scam', ({ data }) => !data.draft);
  const cryptoAnswers = await getCollection('crypto-answers', ({ data }) => !data.draft);

  const items = [
    ...personalFinance.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.description,
      link: `/personal-finance/${item.id}/`,
    })),
    ...cryptoBasics.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.description,
      link: `/crypto-basics/${item.id}/`,
    })),
    ...cryptoTax.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.description,
      link: `/crypto-tax/${item.id}/`,
    })),
    ...investing.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.description,
      link: `/investing/${item.id}/`,
    })),
    ...blog.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.description,
      link: `/blog/${item.id}/`,
    })),
    ...insurance.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.description,
      link: `/insurance/${item.id}/`,
    })),
    ...trading.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.description,
      link: `/trading/${item.id}/`,
    })),
    ...safeCrypto.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.description,
      link: `/safe-crypto/${item.id}/`,
    })),
    ...cryptoScam.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.description,
      link: `/crypto-scam/${item.id}/`,
    })),
    ...cryptoAnswers.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.description,
      link: `/crypto-answers/${item.id}/`,
    })),
  ].sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  return rss({
    title: 'PaisayehPaisa — Personal Finance & Crypto Guide',
    description: 'Comprehensive personal finance, crypto, investing, and insurance guides for US, UK, Canada, and Denmark.',
    site: context.site!,
    items,
  });
}

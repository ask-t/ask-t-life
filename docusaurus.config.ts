import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ask-t',
  tagline: 'Frontend Developer & Designer',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // PostCSS plugins will be handled by postcss.config.cjs
  plugins: [],

  // Set the production url of your site here
  url: 'https://ask-t.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For Vercel deployment, use '/'
  baseUrl: '/',

  // Vercel specific configuration
  trailingSlash: false,

  // Ensure proper baseUrl handling
  baseUrlIssueBanner: false,

  // Vercel deployment config
  organizationName: 'ask-t',
  projectName: 'ask-t-portfolio',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Vercel specific settings
  noIndex: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ask-t/ask-t.main-1/tree/main/',
        },
        blog: {
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime, locale }) =>
            defaultReadingTime({ content, frontMatter, locale, options: { wordsPerMinute: 300 } }),
          feedOptions: {
            type: 'all',
            title: 'ask-t Blog',
            description: 'Frontend development insights and thoughts',
            copyright: `Copyright © ${new Date().getFullYear()} ask-t.`,
            language: 'en',
          },
          blogTitle: 'Technical Blog',
          blogDescription: 'Insights on web development, architecture, and technology',
          blogSidebarTitle: 'Recent Posts',
          blogSidebarCount: 5,
          postsPerPage: 10,
          archiveBasePath: 'archive',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ask-t',
      hideOnScroll: true,
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/profile', label: 'About', position: 'left' },
        { to: '/projects', label: 'Projects', position: 'left' },
        {
          type: 'dropdown',
          label: 'Resources',
          position: 'left',
          items: [
            { to: '/blog', label: 'Blog' },
            { to: '/docs/intro', label: 'Documentation' },
            { to: '/docs/WRITING_GUIDE', label: 'Writing Guide' },
          ],
        },
        { href: 'https://github.com/ask-t', label: 'GitHub', position: 'right' },
        { href: 'mailto:please.ask.takahashi@gmail.com', label: 'Contact', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Work',
          items: [
            { label: 'Projects', to: '/projects' },
            { label: 'Blog', to: '/blog' },
            { label: 'Profile', to: '/profile' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Documentation', to: '/docs/intro' },
            { label: 'Writing Guide', to: '/docs/WRITING_GUIDE' },
            { label: 'API Reference', to: '/docs/api/overview' },
          ],
        },
        {
          title: 'Connect',
          items: [
            { label: 'GitHub', href: 'https://github.com/ask-t' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/ask-t' },
            { label: 'Email', href: 'mailto:please.ask.takahashi@gmail.com' },
          ],
        },
        {
          title: 'About',
          items: [
            { label: 'BYU-Hawaii', href: 'https://www.byuh.edu/' },
            { label: 'Computer Science', to: '/profile' },
            { label: 'Laie, HI', href: 'https://www.google.com/maps/place/Laie,+HI' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Asuku Takahashi. Built with Docusaurus.`,
    },
    algolia: {
      // Algolia検索の設定（オプション）
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
    },
  }
};

export default config;

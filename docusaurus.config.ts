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
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'english-learning',
        path: 'english-learning',
        routeBasePath: 'english-learning',
        sidebarPath: './sidebarsEnglish.ts',
        editUrl: 'https://github.com/ask-t/ask-t.main-1/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'general-conference',
        path: 'general-conference',
        routeBasePath: 'general-conference',
        sidebarPath: './sidebarsGeneralConference.ts',
        editUrl: 'https://github.com/ask-t/ask-t.main-1/tree/main/',
      },
    ],
  ],

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
        blog: false, // Blog disabled
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
      hideOnScroll: false,
      logo: {
        alt: 'ask-t Logo',
        src: 'img/logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/daily', label: 'Daily TODO', position: 'left' },
        { to: '/profile', label: 'About', position: 'left' },
        { to: '/projects', label: 'Projects', position: 'left' },
        {
          type: 'dropdown',
          label: 'Learning',
          position: 'left',
          items: [
            { to: '/english-learning', label: 'English Learning' },
            { to: '/general-conference', label: 'General Conference' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Resources',
          position: 'left',
          items: [
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
          title: 'Navigate',
          items: [
            { label: 'Home', to: '/' },
            { label: 'About Me', to: '/profile' },
            { label: 'Projects', to: '/projects' },
            { label: 'Daily TODO', to: '/daily' },
          ],
        },
        {
          title: 'Learning',
          items: [
            { label: 'English Learning', to: '/english-learning' },
            { label: 'General Conference', to: '/general-conference' },
            { label: 'Documentation', to: '/docs/intro' },
          ],
        },
        {
          title: 'Connect',
          items: [
            { 
              label: 'GitHub',
              href: 'https://github.com/ask-t',
            },
            { 
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/ask-t',
            },
            { 
              label: 'Email',
              href: 'mailto:please.ask.takahashi@gmail.com',
            },
          ],
        },
      ],
      logo: {
        alt: 'ask-t Logo',
        src: 'img/logo.svg',
        width: 50,
        height: 50,
      },
      copyright: `© ${new Date().getFullYear()} Asuku Takahashi — BYU-Hawaii CS Student`,
    },
  }
};

export default config;

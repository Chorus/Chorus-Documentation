/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Encore Licensed Behavior Analyst',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/EncoreLogo.svg',
    infoLink: 'http://encoresupport.org/',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Chorus Documentation', // Title for your website.
  tagline: 'Chorus Documentation',
  url: 'https://docs.chorus.cloud', // Your website URL
  baseUrl: '/',

  // Used for publishing and more
  projectName: 'Chorus-Documentation',
  organizationName: 'chorus',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'ChorusCloudOverview', label: 'Docs'},
    { blog: true, label: 'Blog' }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/ChorusWhite.png',
  footerIcon: 'img/ChorusSquare.png',
  favicon: 'img/ChorusSquare.png',

  /* Colors for website */
  colors: {
    primaryColor: '#6F32A0',
    secondaryColor: '#00CDF1',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Chorus Software Solutions`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  //twitterImage: 'img/undraw_tweetstorm.svg',

  // The option to expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
     repoUrl: 'https://github.com/Chorus/Chorus-Documentation',

  gaTrackingId: 'UA-142505503-1',
  cname: 'docs.chorus.cloud'
};

module.exports = siteConfig;

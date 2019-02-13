module.exports = {
  base: "/vuepress-blog/",
  title: "VuePress Blog",
  description: "Just playing around",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Mongo DB", link: "/mongodb/" },
      { text: "External", link: "https://google.com" }
    ],
    // sidebar: 'auto'
    sidebar: {
      '/guide/': [
          '',
          'More Informations'
      ],
      '/mongodb/': [
        '',
        'Introduction',
      ]
    }
  },
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false,
      permalinkSymbol: ""
    }
  }
};

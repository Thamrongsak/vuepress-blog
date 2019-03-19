module.exports = {
  base: "/vuepress-blog/",
  title: "Developer Docs",
  description: "Just playing around",
  themeConfig: {
    logo: 'https://res.cloudinary.com/dokxwm6rb/image/upload/c_thumb,w_35,g_face/v1552965557/vuepress-blog/768px-Circle-icons-dev.svg.png',
    nav: [
      { text: "Home", link: "/" },
      { text: "Setup Project", link: "/setup-project/" },
      { text: "Linux", link: "" },
      { text: "Javascript", link: "" },
      { text: "PHP", link: "" },
      { text: "Mongo DB", link: "/mongodb/" }
    ],
    // displayAllHeaders: true,
    sidebar: {
      '/setup-project/': [
        '',
        'create-repository',
        'create-jenkins',
        'gitlab-integrate-webhook',
      ],
      '/guide/': [
          '',
          'More Informations'
      ],
      '/mongodb/': [
        '',
        // 'Introduction',
      ]
    }
  },
  head: [
    ['link',
      {
        rel: 'icon',
        href: 'https://res.cloudinary.com/dokxwm6rb/image/upload/c_thumb,w_35,g_face/v1552965557/vuepress-blog/768px-Circle-icons-dev.svg.png'
      }
    ]
  ],
  // serviceWorker: true
  // serviceWorker: { updatePopup: true }
  serviceWorker: {
    updatePopup: true // Boolean | Object, default to undefined.
    // If set to true, the default text config will be: 
    // updatePopup: { 
    //    message: "New content is available.", 
    //    buttonText: "Refresh" 
    // }
  }
};

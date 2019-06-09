// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Anne Bouchara',
  siteDescription: 'Site personnel d’Anne Bouchara',
  siteUrl: 'https://www.annebouchara.fr',
  titleTemplate: '%s · Anne Bouchara',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss'
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/*.md',
        typeName: 'Post',
        route: '/txt/:slug',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        modulePath: `static/admin/index.js`,
        configPath: `static/admin/config.yml`,
        htmlPath: `static/admin/index.html`,
        publicPath: `/admin`,
        htmlTitle: 'Éditeur'
      }
    },
  ]
}

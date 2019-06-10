// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './assets/css/tailwind.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'fr-FR' }

  head.meta.push({
    name: 'keywords',
    content: 'Anne Bouchara, Nouvelles, Histoires, Littérature'
  })

  head.meta.push({
    name: 'author',
    content: 'Anne Bouchara'
  })
}

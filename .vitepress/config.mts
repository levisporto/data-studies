import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Data Analytics by LeviS",
  description: "Anotações das Aulas",
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Anotações', link: '/aula1' },
       { text: 'Links', link: '/links' }
    ],

    sidebar: [
      {
        text: 'Links úteis', link: '/links',
        items: [
          { text: 'Aula 1', link: '/aula1' },
          { text: 'Aula 2', link: '/aula2' },
          { text: 'Fontes', link: '/fontes' }
        ]
      }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/levisporto/' },
       { icon: 'instagram', link: 'https://www.instagram.com/levisporto' },
        { icon: 'linkedin', link: 'https://www.linkedin.com/in/levisporto/' }
    ]
  }
})

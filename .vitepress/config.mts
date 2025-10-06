import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Data Analytics by LeviS",
  description: "Anotações das Aulas",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Anotações', link: '/anotacoes' },
       { text: 'Links', link: '/links' }
    ],

    sidebar: [
      {
        text: 'Aulas',
        items: [
          { text: 'Aula 1', link: '/aula1' },
          { text: 'Aula 2', link: '/aula2' }
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

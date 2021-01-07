export default {
  pt: {
    header: {
      links: [
        {
          name: 'Home',
          url: '/'
        },
        {
          name: 'Sobre',
          url: '#about'
        },
        {
          name: 'Portfólio',
          url: '#portfolio'
        },
        {
          name: 'Contato',
          url: '#contact'
        }
      ]
    },
    banner: [
      'Seja bem vindo!',
      'Me chamo Daniel',
      'Construo sites 💻',
      'E amo ☕'
    ],
    about: {
      title: 'Entre e tome uma xícara de café...',
      messages: [
        'Meu nome é Daniel e sou apaixonado por tecnologia. Possuo um perfil voltado ao frontend mas também me aventuro no backend. Trabalhei alguns anos por conta própria e hoje sou Desenvolvedor Frontend pela Catho.',
        'Gosto de resolver desafios e atualmente concentro meus estudos em Node, React e NextJS❤️'
      ]
    },
    techs: [
      {
        title: 'DE TUDO UM POUCO',
        description:
          'Do PHP ao Python, já vi muita coisa! Mas atualmente meu foco tem sido nas seguintes tecnologias:',
        icon: 'monitor'
      },
      {
        title: 'REACTJS',
        description:
          'Uma biblioteca Javascript que lhe fornece super poderes na criação de interfaces',
        icon: 'react'
      },
      {
        title: 'NODEJS',
        description:
          'Javascript nunca é demais... e seu potencial no backend é indiscutível',
        icon: 'node'
      },
      {
        title: 'NEXTJS',
        description:
          'Framework para trabalhar com React possibilitando otimizações incríveis com SSR e SSG',
        icon: 'next'
      }
    ],
    portfolio: {
      title: 'PORTFÓLIO',
      description:
        'Alguns dos projetos que criei ou participei. A flag open source leva você ao repositório! 😉',
      buttonText: 'Veja Mais',
      projects: [
        {
          title: 'OCC Educación',
          description:
            'Um projeto incrível de renovação de um site completo. Trabalhei nesse projeto durante minha atuação pela Catho Educação.',
          picture: '/projects/occ.png',
          openSource: false,
          repoUrl: '',
          websiteUrl: 'https://www.occ.com.mx/educacion'
        },
        {
          title: 'Cursos Rápidos',
          description:
            'Ainda pela Catho Educação conseguimos lançar uma nova página para a venda de cursos online. Outro projeto que me orgulho de ter participado.',
          picture: '/projects/catho-edu.png',
          openSource: false,
          repoUrl: '',
          websiteUrl: 'https://www.catho.com.br/educacao/cursos-online'
        },
        {
          title: 'EasyBank',
          description:
            'Uma landing page para um banco digital fictício. Criado em um desafio proposto pelo Frontend Menthor.',
          picture: '/projects/challenge02.png',
          openSource: true,
          repoUrl: 'https://github.com/profdangarcia/front-challenge-02',
          websiteUrl: 'https://front-challenge-02.now.sh/'
        },
        {
          title: 'Places in the World',
          description:
            'Uma aplicação com Theme Switcher que consome uma API gratuita, a REST Countries. Primeiro projeto que utilizei Typescript por conta própria.',
          picture: '/projects/challenge03.png',
          openSource: true,
          repoUrl: 'https://github.com/profdangarcia/front-challenge-03',
          websiteUrl: 'https://front-challenge-03.vercel.app/'
        }
      ]
    }
  },
  en: {
    header: {
      links: [
        {
          name: 'Home',
          url: '/'
        },
        {
          name: 'About',
          url: '#about'
        },
        {
          name: 'Portfolio',
          url: '#portfolio'
        },
        {
          name: 'Contact',
          url: '#contact'
        }
      ]
    },
    banner: ['Be Welcome!', "I'm Daniel", 'Web Developer 💻', 'And I love ☕'],
    about: {
      title: 'Come in and have a cup of coffee...',
      messages: [
        "My name is Daniel and I am passionate about technology. I have a crush for the frontend but I also venture into the backend. I worked for a few years on my own and today I'm a Frontend Developer at Catho.",
        'I like to solve challenges and currently focus my studies on Node, React and NextJS❤️'
      ]
    },
    techs: [
      {
        title: 'A LITTLE BIT OF EVERYTHING',
        description:
          "From PHP to Python, I've seen a lot! But currently my focus has been on the following technologies:",
        icon: 'monitor'
      },
      {
        title: 'REACTJS',
        description:
          'A Javascript library that gives you super powers creating interfaces',
        icon: 'react'
      },
      {
        title: 'NODEJS',
        description:
          'Javascript never hurts ... and its potential in the backend is indisputable',
        icon: 'node'
      },
      {
        title: 'NEXTJS',
        description:
          'Framework to work with React enabling incredible optimizations with SSR and SSG',
        icon: 'next'
      }
    ],
    portfolio: {
      title: 'PORTFOLIO',
      description:
        'Some of the projects I created or participated in. The open source flag takes you to the repository! 😉',
      buttonText: 'See More',
      projects: [
        {
          title: 'OCC Educación',
          description:
            'An incredible project to renovate a complete website. I worked on this project while working for Catho Educação.',
          picture: '/projects/occ.png',
          openSource: false,
          repoUrl: '',
          websiteUrl: 'https://www.occ.com.mx/educacion'
        },
        {
          title: 'Quick Courses',
          description:
            'Still through Catho Educação we managed to launch a new page for the sale of online courses. Another project that I am proud to have participated in.',
          picture: '/projects/catho-edu.png',
          openSource: false,
          repoUrl: '',
          websiteUrl: 'https://www.catho.com.br/educacao/cursos-online'
        },
        {
          title: 'EasyBank',
          description:
            'A landing page for a fictitious digital bank. Created in a challenge proposed by Frontend Menthor.',
          picture: '/projects/challenge02.png',
          openSource: true,
          repoUrl: 'https://github.com/profdangarcia/front-challenge-02',
          websiteUrl: 'https://front-challenge-02.now.sh/'
        },
        {
          title: 'Places in the World',
          description:
            'An application with Theme Switcher that consumes a free API, REST Countries. First project that I used Typescript on my own.',
          picture: '/projects/challenge03.png',
          openSource: true,
          repoUrl: 'https://github.com/profdangarcia/front-challenge-03',
          websiteUrl: 'https://front-challenge-03.vercel.app/'
        }
      ]
    }
  }
}

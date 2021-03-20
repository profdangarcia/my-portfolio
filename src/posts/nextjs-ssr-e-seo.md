---
id: 1
title: "O que você precisa saber sobre NextJS e SSR"
description: "Neste primeiro post vamos conversar sobre NextJS e as vantagens de se utilizar SSR (Server Side Rendering)"
image: "https://drive.google.com/uc?export=view&id=1HiiRaFVzQcm3fvepA0Q2vJs3SnFo5fBa"
author: "Daniel Garcia"
date: "20 Mar. 2021"
---

[NextJs](https://nextjs.org/) é um poderoso framework capaz de facilitar nossa vida ao trabalhar com ReactJS. Repleto de otimizações no que diz respeito ao front-end, a ferramenta vem para resolver diversos problemas do desenvolvimento web que podemos enfrentar no nosso dia a dia.

Além da facilidade para se adicionar novas configurações ao projeto base, aos fáceis mecanismos para criação de rotas da aplicação e ao manter o mecanismo de [Single Page Application (SPA)](https://www.devmedia.com.br/ja-ouviu-falar-em-single-page-applications/39009) do React, o NextJS possibilita trabalharmos com **SSR (Server Side Rendering)**, **SPA (Static Page Generation)** e uma forma que podemos considerar como mista entre esses dois modos. Nesse post vamos explorar o primeiro desses mecanismos.

## SSR

Server Side Rendering, ou SSR, significa que a renderização da sua página irá ocorrer no lado do servidor, e não do cliente. Ao lidarmos com SSR precisamos ter em mente que cada uma das requisições à sua página exigirá que um servidor, ou se preferir, uma máquina, esteja rodando e disponível a realizar todo o processamento necessário para gerar sua página e entregar ao usuário.

Sendo assim, trata-se de um processo bastante diferente dos mecanismos tradicionais onde a página consiste em arquivos HTML, CSS e Javascript que seu navegador é capaz de interpretar e exibir em tela. Nesse caso também estaremos lidando com esse mesmo tipo de arquivo, pois são os únicos que seu navegador entende, mas tais arquivos são gerados de forma dinâmica em um servidor Node (fornecido pela própria aplicação NextJS) e só então entregues ao usuário. Parece algo mais custoso do que deixar todos esses arquivos já prontos para os usuários, não??

E é mesmo! Mas se algo existe, deve existir um motivo! Veremos abaixo quando utilizar SSR.

## Páginas dinâmicas, Javascript e Crawlers

![SEO](https://agenciatropica.com.br/wp-content/uploads/2018/01/SEO-gif.gif)

Atualmente, ter sua página nos primeiros resultados de qualquer site de busca (não estou falando só do Google, hein!? ME PATROCINA BING!) tem se tornado algo cada vez mais cobiçado e de grande valor para um negócio. Apesar de existirem diversas estratégias para que isso ocorra (você pode pagar anúncios também), o termo mais utilizado para tratar da qualidade da sua página frente aos mecanismos de busca é o **SEO - Search Engine Optimization** (otimização para mecanismos de busca).

Existem diversas boas práticas ao se desenvolver um site que devem ser levadas em conta para torná-la mais relevante aos crawlers (robôs indexadores de conteúdo), e quanto mais delas forem utilizadas maior a chance de se sobressair nos resultados de pesquisas.

Imagine um cenário de um e-commerce, em que cada página de produto é única, que para gerar a página ocorra uma requisição à um servidor para recuperar o nome, os preços e todas as informações relevantes ao produto para popular o website. Sendo a requisição controlada via Javascript eis o problema: crawlers acessam as páginas com a única finalidade de analisar o conteúdo escrito (tags HTML e textos), sendo assim o fazem **desabilitando todo o javascript da página**. O que o robozinho do Google iria enxergar ao tentar indexar a página? Provavelmente quase nada de relevante e o site desse e-commerce não iria aparecer nos mecanismos de busca.

E qual a relação do SSR com tudo isso? Basicamente o de solucionar tal problema. Se, ao realizar a requisição à sua página, todo o processamento for realizado em um servidor, inclusive a requisição a todos esses dados dinâmicos que compõem o website, a página já estará pronta ao chegar ao cliente e aos crawlers e o problema está resolvido! O e-commerce já poderá melhorar seu posicionamento nos resultados de pesquisa. 🙌

## Utilizando SSR no NextJS

Antes de sair utilizando, vale lembrar que SSR não deve ser a primeira opção ao criar uma página, gerar páginas já estáticas possibilitará maior perfomance e uma melhor experiência de usuário. SSR é recomendado para páginas em que o conteúdo seja extremamente dinâmico e que haja preocupação com o posicionamento da página nos resultados de buscas.

Utilizar o Server Side Rendering no NextJS é bastante simples. Todos os arquivos que representam [páginas](https://nextjs.org/docs/routing/introduction) podem ter um método assíncrono chamado ```getServerSideProps```. Basicamente, ao implementar esse método em uma rota da aplicação fará com que o NextJS realize todo o processamento da página do lado do servidor antes de entregar ao usuário. Veja o exemplo abaixo:

~~~javascript
export async function getServerSideProps(context) {
  const res = await fetch(`https://...`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product: data
    },
  }
}
~~~

O método ```getServerSideProps``` precisa retornar um objeto contendo ou uma chave ```props``` ou ```notFound```. A primeira opção representa os dados que serão passados via props ao componente que representa sua página. O segundo caso é um booleano que fará com que o NextJS responda com o status 404 para o usuário.

Simples, não? Apenas lembre-se: todo código que será executado nesse método irá acontecer **NO SERVIDOR**, sendo assim você não terá acesso às variáveis globais do navegador, como por exemplo ```window```, e não poderá acessar coisas como ```sessionStorage``` ou ```localStorage```.


### Mais?

- Quer saber mais sobre NextJS? Consulte a [documentação oficial](https://nextjs.org/docs/getting-started)

- Quer ver mais posts como esse? Me mande [uma mensagem](https://dangarcia-devel.vercel.app/#contact) ou me encontre nas redes sociais.

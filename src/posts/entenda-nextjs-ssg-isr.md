---
id: 2
title: "O verdadeiro poder do NextJS com SSG e ISR"
description: "Conheça a feature do NextJS que o tornou o framework mais desejado para React na atualidade e uma alternativa ao SSR"
image: "/posts/post2-thumb.png"
author: "Daniel Garcia"
date: "02 Abr. 2021"
---

No <a href="/blog/nextjs-ssr-e-seo" target="_blank">último post</a> mostrei a capacidade do NextJS em renderizar conteúdos do lado do servidor e já entregá-lo pronto ao cliente, o chamado SSR (server side rendering). Apesar de ser uma feature importante, deve ser utilizada somente quando houver grande necessidade, uma vez que todas as requests à página exigirão processamento do servidor, podendo gerar lentidão e outros problemas em caso de muitos acessos simultâneos e uma infraestrutura não preparada pra isso.

Hoje vamos conversar sobre outras possibilidades fornecidas pelo framework para lidar com páginas dinâmicas de forma estática, a feature conhecida por SSG (static site generation) e ISR (incremental static regeneration).

Para ambos os casos o objetivo final é gerar páginas estáticas que podem ser servidas via  <a href="https://www.akamai.com/br/pt/cdn/what-is-a-cdn.jsp" target="_blank">CDN</a>, <a href="https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/UsingBucket.html" target="_blank">buckets S3</a>, entre outras possibilidades, fornecendo uma incrível qualidade em relação à performance da aplicação sem depender de um servidor para lidar com todas as requests.

Nesse post vamos compreender esses dois mecanismos fornecidos pelo NextJS e suas aplicações.

## SSG - Static Site Generation

SSG é a capacidade de gerar páginas estáticas a partir do código React produzido. Cada uma das páginas em sua aplicação NextJS pode ser convertida para arquivos HTML, JS e CSS estáticos que irão gerar seu website e fornecidos aos usuários que acessarem tais páginas. Este mecanismo já é padrão para toda nova página, que representa uma rota, na sua aplicação Next. No momento do build o próprio framework é capaz de identificar quais páginas podem ou não ser geradas de forma estática, mecanismo conhecido por <a href="https://nextjs.org/blog/next-9#automatic-static-optimization" target="_blank">Automatic Static Optimization</a>. Vamos entender como ele identifica tais páginas.

No post em que falamos sobre SSR identificamos as páginas que gostaríamos que fossem renderizadas do lado do servidor ao implementar o método ```getServerSideProps```. E aquelas que não implementamos o método? Todas elas serão, automaticamente, geradas de forma estática no momento do build da aplicação. Tal capacidade já torna o NextJS uma ferramenta incrível para criação de websites, mas seria ele capaz de fazer isso também com páginas que possuem conteúdos dinâmicos? Como por exemplo a página de listagem de posts de blog? E a resposta é sim!🎉

![Dancinha da vitória](https://gif-avatars.com/img/200x200/cachorro-e-menino-dancando.gif)

Assim como o ```getServerSideProps```, todas as páginas de rotas de uma aplicação Next podem implementar o método ```getStaticProps```, de forma análoga ao primeiro caso, todo código escrito no método será executado pelo servidor Node fornecido pelo framework, mas nesse caso no momento do build da aplicação. Por exemplo, se você precisa buscar os dados de todos (ou alguns) dos posts do seu blog que se encontram em um CMS, por exemplo, como título, autor etc, é possível realizar o fetch nesse método, formatar os dados e retornar as props necessárias para que a página seja criada. Todo esse processo será realizado durante o build da aplicação, possibilitando a criação de uma página estática. Um exemplo do método pode ser visualizado abaixo:

~~~javascript
export async function getStaticProps(context) {
  const res = await fetch(`https://.../posts`)
  const posts = await res.json()

  return {
    props: { posts },
  }
}
~~~

Realmente uma feature muito poderosa! Mas você pode se perguntar: quando mais posts forem sendo criados, precisarei fazer novos builds da aplicação? Um novo deploy para que seja gerada uma nova página estática? E sim, seria necessário, se não fosse a existência da outra feature fornecida pelo Next, o Incremental Static Regeneration.


## ISR - Incremental Static Regeneration

Quando falamos de SSR vimos que o método ```getServerSideProps``` precisa retornar um objeto que contenha um objeto contendo uma chave ```props```, um objeto contendo os dados que serão fornecidos à página ou uma chave ```notFound``` contendo um valor ```true```, fazendo com que o Next retorne uma página 404 ao usuário. Quando lidamos com o método ```getStaticProps``` tudo isso também é verdade, mas temos uma opção extra.

Ao retornar um objeto contendo a chave ```props``` com os dados da página podemos adicionar uma segunda chave ```revalidate``` com um valor numérico em segundos. Trata-se de um valor opcional, mas que quando utilizado dá significado ao que chamamos de ISR. Definindo tal valor fará com que uma vez a cada intervalo de tempo definido o servidor do Next execute novamente seu método de ```getStaticProps``` do lado do servidor e gere novamente uma nova página estática com os dados atualizados. E isso é absolutamente incrível 🤯! Podemos imaginar que essa feature realiza uma mescla entre o SSR e o SSG, mas com a vantagem de que apenas uma request no intervalo de tempo especificado seja renderizada do lado do servidor. Para o exemplo anterior bastaria fazer:

~~~javascript
export async function getStaticProps(context) {
  const res = await fetch(`https://.../posts`)
  const posts = await res.json()

  return {
    props: { posts },
    revalidate: 60, // 1 minute
  }
}
~~~

Nesse caso, a cada 1 minuto uma nova página estática seria gerada novamente, e caso existam novos posts eles já estarão disponíveis para listagem! É ou não uma poderosa ferramenta?

![Mind blow](https://media1.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif)


Existe agora apenas uma questão a ser resolvida que, caso você não tenha se perguntado, seria uma dúvida que poderia lhe ocorrer ao trabalhar com NextJS. O método ```getStaticProps``` pode ser bastante intuitivo para gerar uma página com uma rota bem definida, por exemplo a rota **/blog**. Mas como utilizar o método em uma rota dinâmica, como por exemplo **/blog/[postSlug]** ? Responderei essa questão abaixo.

## SSG e ISR para rotas dinâmicas

Em uma aplicação NextJS, cada arquivo localizado no diretório ```pages``` da aplicação representa uma rota, por exemplo, o arquivo ```pages/blog/index.jsx``` representa a página **/blog**. Para criar uma rota que receba um parâmetro que possa ser recuperado via <a href="https://blog.rocketseat.com.br/tipos-de-parametros-nas-requisicoes-rest/#:~:text=%E2%9C%85%20Route%20params,dados%20da%20requisi%C3%A7%C3%A3o%20na%20rota.&text=Nesse%20exemplo%20acima%20busco%2C%20atualizo,%3A%20tgmarinho%20ou%20id%3A%20380327." target="_blank">route params</a> basta criar o arquivo com o nome envolto em **colchetes**. Sendo assim o arquivo localizado em ```pages/blog/[postSlug].jsx``` representa qualquer rota do tipo **/blog/nome-do-post**. Dessa forma, como gerar páginas estáticas sendo que são diversas as possibilidades de slugs para os nomes dos posts?

O NextJS trás uma solução extremamente simples para lidar com esse tipo de página. Ao implementarmos o método ```getStaticProps``` em uma rota dinâmica, torna-se obrigatória a implementação de um segundo método chamado ```getStaticPaths```. Este segundo método possui duas principais responsabilidades: definir **quais são as páginas (slugs) que serão geradas de forma estática** e também **definir como o Next deve lidar com requisições de slugs que não tenham sido gerados de forma estática no momento do build**. O exemplo abaixo demonstra como os dois métodos devem trabalhar juntos:

~~~javascript
export async function getStaticPaths() {
  return {
    paths: [
      { params: { postSlug: 'my-post-1'} },
      { params: { postSlug: 'my-post-2'} },
      { params: { postSlug: 'my-post-3'} }
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://.../posts/${params.postSlug}`)
  const post = await res.json()

  if(!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post },
    revalidate: 60, // 1 minute
  }
}
~~~

Vamos entender como o código acima funciona. Nesse caso, no momento do build da aplicação o  método ```getStaticPaths``` fornece ao método ```getStaticProps``` quais são os **paths** que devem gerar páginas estáticas. O método deve retornar um objeto contendo duas chaves: **paths** e **fallback**. **Paths** deve conter um array com objetos no formato:

~~~javascript
  {
    params: {
      param1: '...',
      param2: '...'
    }
  }
~~~

Cada um dos parâmetros dinâmicos que a rota precisa receber devem constar no objeto **params**. Por exemplo, se a estrutura de pastas de sua rota dinâmica é: ```/pages/[categorySlug]/[productSlug]/index.jsx``` representando uma rota de um produto específico em uma categoria específica, seu objeto deveria ter o formato, por exemplo:

~~~javascript
  {
    params: {
      categorySlug: 'informatica',
      productSlug: 'mouse-gamer'
    }
  }
~~~

Também é possível, dentro do método ```getStaticPaths``` recuperar através de uma request todos os **paths** que darão origem a páginas estáticas, nesse caso poderíamos fazer o seguinte para o primeiro exemplo:

~~~javascript
export async function getStaticPaths() {
  const res = await fetch(`https://.../posts`)
  const posts = await res.json()
  const paths = posts.map(post => {
    return {
      params: { postSlug: post.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://.../posts/${params.postSlug}`)
  const post = await res.json()

  if(!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post },
    revalidate: 60, // 1 minute
  }
}
~~~

Nesse caso, no momento do build, para cada post existente no seu CMS uma página estática seria gerada. Sendo assim, é importante ter cuidado ao fazer algo desse tipo, se pensarmos no cenário de milhares de posts, ou até mesmo centenas deles, podemos tornar o processo de build da aplicação bastante demorado, seria recomendado limitar essa quantidade. Um e-commerce, por exemplo, poderia gerar estaticamente páginas dos 20 produtos mais acessados já no processo de build.

Falta entender o que representa o valor passado para o **fallback** também retornado no método ```getStaticPaths```, e é o que faremos a seguir.


## Static Paths e Fallback

Como mencionado anteriormente, a função do método ```getStaticPaths``` é a de determinar quais páginas serão geradas de forma estática durante o build da aplicação (os **paths**) e a de como lidar com requests com parâmetros que não foram gerados de forma estática, nesse caso o **fallback** irá determinar.

Basicamente, três valores são válidos como fallback: **false**, **true** ou **'blocking'**. Veremos as três possibilidades!

### fallback: false

Este é o caso mais direto. Se você garante que todos os paths válidos foram retornados diretamente em ```getStaticPaths``` e já foram gerados de forma estática durante o build, definir ```fallback: false``` fará com que qualquer request com um parâmetro que não foi considerado em **paths** retorne um **404 not found** ao usuário.

No caso do exemplo:

~~~javascript
export async function getStaticPaths() {
  return {
    paths: [
      { params: { postSlug: 'my-post-1'} },
      { params: { postSlug: 'my-post-2'} },
      { params: { postSlug: 'my-post-3'} }
    ],
    fallback: false
  }
}
~~~

A página **/blog/my-post-1** seria acessada normalmente, enquanto tentar acessar a url **/blog/my-post-4** retornaria 404 de forma automática.

### fallback: 'blocking'

Geralmente não teremos todas as páginas de uma rota dinâmica sendo geradas de forma estática durante o build, mas queremos que, caso a rota seja válida, como por exemplo o post exista, essa página tenha a chance de ser gerada de forma estática. Definindo ```fallback: 'blocking'``` faremos com que **a primeira** tentativa de acesso em uma rota não contemplada pelos **paths** tenha o comportamento de uma página SSR. Primeiramente o servidor tentará gerar uma versão estática da página e, caso consiga, as próximas requests já terão disponíveis a página.

Fazer essa escolha faz com que a primeira request à rota possa demorar o tempo necessário da criação da página para que seja retornado algo ao usuário e, enquanto o processo ocorre, ele deverá ficar aguardando.
Em muitos casos esse tempo de espera pode ser curto, mas em um cenário que haja necessidade de comunicação com diversas APIs com acessos à bases de dados, fará com que a experiência desse usuário não seja das melhores.

Mas vale ressaltar que somente o primeiro acesso será impactado. Demais acessos já terão as requests acontecendo de forma muito mais rápida uma vez que a página já foi gerada estáticamente e será revalidada de tempos em tempos pelo ```getStaticProps```.

### fallback: true

Pode ser que correr o risco de fornecer o tempo de espera para que a página seja gerada de forma estática ao usuário sem dar nenhum feedback não seja uma opção. Para esses casos utilizamos a opção do ```fallback: true```.

Com essa opção teremos o seguinte fluxo:

- O usuário tenta acessar uma rota não contemplada nos **paths**;
- Imediamenta a página é carregada, por exemplo, com um loading;
- Após os dados serem processados a página é atualizada automaticamente com seu conteúdo ou com status 404;
- As próximas requests não terão o loading pois a página já terá sido gerada de forma estática.

Essa escolha exige alguns cuidados, como por exemplo uma boa definição de UX quanto ao loading, por exemplo utilizando-se Skeletons, e como lidar com o fallback. Para isso deve ser utilizado o *hook* fornecido pelo próprio Next chamado **useRouter()**. Abaixo um exemplo de como o fallback deve ser tratado na página:

~~~javascript
// pages/posts/[id].js
import { useRouter } from 'next/router'

function Post({ post }) {
  const router = useRouter()

  // caso seja fallback
  // retorna o componente de loading
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <YourAmazingPostPage />
  )
}
~~~

## Conclusão

Pudemos perceber que com o NextJS temos a flexibilidade de definir como nossas páginas serão tratadas de forma individual. A capacidade de lidar com SSG e ISR fez com que o framework se popularizasse rapidamente, tornando-o uma ótima opção para qualquer tipo de projeto.

Apesar de parecer que as duas opções tratadas nesse post resolvam todos os tipos de problemas, muitas vezes utilizar SSR torna-se necessário, sendo uma boa opção, por exemplo, para lidar com requisições autenticadas que necessitem ocorrer em um servidor, e não do lado do cliente.

VALE LEMBRAR: todo código que será executado em ```getStaticProps``` e ```getStaticPaths``` irá acontecer **NO SERVIDOR**, sendo assim você não terá acesso às variáveis globais do navegador, como por exemplo ```window```, e não poderá acessar coisas como ```sessionStorage``` ou ```localStorage```!

Espero ter conseguido trazer um bom overview da ferramenta e das opções de geração de páginas disponíveis com ela.

### Mais?

- Quer saber mais sobre NextJS? Consulte a <a href="https://nextjs.org/docs/getting-started" target="_blank">documentação oficial</a>

- Perdeu o post sobre SSR? Veja <a href="/blog/nextjs-ssr-e-seo" target="_blank">aqui</a>

- Quer ver mais posts como esse? Me mande <a href="/#contact" target="_blank">uma mensagem</a> ou me encontre nas redes sociais.

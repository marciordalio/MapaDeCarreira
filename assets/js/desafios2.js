// Nova implementação para exibir os desafios, com lógica diferente da função original.

function exibirDesafios(destino) {
  const desafiosInfo = {
    titulo: 'Desafio 21 dias de código',
    subtitulo: 'Projetos',
    descricao: `Desafio da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a> criado com o propósito de prática diária em 21 dias consecutivos com vários pequenos projetos diferentes.`,
    repo: 'https://github.com/lucyanovidio/desafio-21-dias-codigo-rocketseat',
    repoLabel: 'Acessar repositório completo'
  };

  const desafiosLista = [
    {
      nome: 'Desafio 1',
      imagem: './assets/images/projects/desafios/1.png',
      alt: 'Imagem tema do projeto de desafio de código.',
      repo: 'https://github.com/lucyanovidio/desafio-21-dias-codigo-rocketseat/tree/main/dia-1',
      demo: 'https://github.com/lucyanovidio/desafio-21-dias-codigo-rocketseat/',
      descricao: 'Criar um repositório no Github para por os 21 desafios de cada dia.'
    },
    {
      nome: 'Desafio 2',
      imagem: './assets/images/projects/desafios/2.gif',
      alt: 'Imagem do projeto.',
      repo: 'https://github.com/lucyanovidio/desafio-21-dias-codigo-rocketseat/tree/main/dia-2',
      demo: 'https://github.com/lucyanovidio/desafio-21-dias-codigo-rocketseat/',
      descricao: ''
    },
    // ...adicione os outros desafios seguindo o mesmo padrão...
  ];

  function iconeGithub() {
    return `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\" /><path d=\"M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z\" fill=\"rgba(255,255,255,1)\"/></svg>`;
  }
  function iconeDemo() {
    return `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\" /><path d=\"M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z\"/></svg>`;
  }

  let cardsHtml = desafiosLista.map(item => `
    <div class=\"card\">
      <h3>${item.nome}</h3>
      <div class=\"img-wrapper\">
        <img src=\"${item.imagem}\" alt=\"${item.alt}\" />
        <div class=\"buttons\">
          <a href=\"${item.repo}\" target=\"_blank\" title=\"Repositório no Github\">${iconeGithub()}</a>
          <a href=\"${item.demo}\" target=\"_blank\" title=\"Ver Projeto\">${iconeDemo()}</a>
        </div>
      </div>
      <p>${item.descricao || ''}</p>
    </div>
  `).join('');

  destino.innerHTML = `
    <header>
      <h4>${desafiosInfo.subtitulo}</h4>
      <h2>${desafiosInfo.titulo}</h2>
      <p>${desafiosInfo.descricao}</p>
      <a href=\"${desafiosInfo.repo}\" target=\"_blank\">${iconeGithub()} ${desafiosInfo.repoLabel}</a>
    </header>
    <div class=\"content\"><div class=\"cards\">${cardsHtml}</div></div>
  `;
}

export { exibirDesafios };

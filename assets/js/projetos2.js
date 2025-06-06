// Nova implementação para exibir projetos de portfólio, com lógica diferente da função original.

function mostrarProjetos(destino) {
  const listaProjetos = [
  ]
  

  let cardsHtml = listaProjetos.map(proj => `
    <div class=\"card\">
      <h3>${proj.titulo}</h3>
      <div class=\"img-wrapper\">
        <img src=\"${proj.imagem}\" alt=\"${proj.alt}\" />
        <div class=\"buttons\">
          <a href=\"${proj.repo}\" target=\"_blank\" title=\"Repositório no Github\">${iconeGithub()}</a>
          <a href=\"${proj.demo}\" target=\"_blank\" title=\"Ver Projeto\">${iconeDemo()}</a>
        </div>
      </div>
      <p>${proj.descricao}</p>
      <p>${proj.stack}</p>
    </div>
  `).join('');

  }

export { mostrarProjetos };

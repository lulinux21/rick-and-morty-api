const maxPersonagens = 671;

refreshPage = () => {
  window.location.reload();
};

getIdPersonagens = () => {
  return Math.floor(Math.random() * maxPersonagens);
};
getCharacter = () => {
  const ids = [
    getIdPersonagens(),
    getIdPersonagens(),
    getIdPersonagens(),
    getIdPersonagens(),
  ];
  const linkApi = `https://rickandmortyapi.com/api/character/${ids}
`;
  return fetch(linkApi, {
    method: "GET",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let section = document.querySelector(".personagens");
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        // Cria Div persona
        let div = document.createElement("div");
        div.classList.add("box-persona");
        section.appendChild(div);
        // Cria as imagens
        let imagem = document.createElement("img");
        imagem.src = element.image;
        imagem.alt = element.name;
        div.appendChild(imagem);
        // Cria o nome
        let name = document.createElement("h2");
        name.innerHTML = element.name;
        div.appendChild(name);
        console.log(imagem);
      }
    });
};
getCharacter();

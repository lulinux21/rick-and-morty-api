const maxPersonagens = 671;
let image = document.getElementById("image");
let personagemOne = document.getElementById("personagemOne");
let image2 = document.getElementById("image2");
let personagemTwo = document.getElementById("personagemTwo");
let image3 = document.getElementById("image3");
let personagemThree = document.getElementById("personagemThree");
let image4 = document.getElementById("image4");
let personagemFour = document.getElementById("personagemFour");

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
      // Personagem 1
      image.src = data[0].image;
      personagemOne.innerText = data[0].name;
      // Personagem 2
      image2.src = data[1].image;
      personagemTwo.innerText = data[1].name;
      // Personagem 3
      image3.src = data[2].image;
      personagemThree.innerText = data[2].name;
      // Personagem 4
      image4.src = data[3].image;
      personagemFour.innerText = data[3].name;
    });
};
getCharacter();

const url = "https://rickandmortyapi.com/api/character";

function makeCard(character) {
    const { image, name, status, species } = character;

    const card = document.querySelector("#root"); 

    const cardsContainer = document.createElement("div");
    cardsContainer.id = "cards-container";
    cardsContainer.className = "cards-container";

    const characterImage = document.createElement("img");
    characterImage.src = image;

    const title = document.createElement("h5");
    title.textContent = name;

    const characterStatus = document.createElement("p");
    characterStatus.textContent = `Status: ${status}`;

    const characterSpecies = document.createElement("p");
    characterSpecies.textContent = `Species: ${species}`;

    cardsContainer.appendChild(characterImage);
    cardsContainer.appendChild(title);
    cardsContainer.appendChild(characterStatus);
    cardsContainer.appendChild(characterSpecies);

    card.appendChild(cardsContainer);
};

async function getCharacter() {
    try {
        const response = await fetch(url);
        const { results } = await response.json();
        results.forEach(character => makeCard(character));
    } catch (error) {
        console.error(error);
    }
}

getCharacter();

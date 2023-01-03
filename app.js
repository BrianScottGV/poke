const listaPokemon = document.querySelector("#listaPokemon");
let url = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
    fetch(url + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
}

function mostrarPokemon(poke) {
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
    <section class="cards">
        <article class="cards__pokemon" id="listaPokemon">
            <div class="cards__div">
                <img src="${poke.sprites.other["official-artwork"].front_default}" alt="pokemon for default" class="cards__images">
                <h2 class="card__ name">${poke.name}</h2>
                <p class="card__id">#${poke.id}</p>
            </div>
        </article>
        `;
        listaPokemon.append(div);
}

    /*esto era mi intento de barra de busqueda*/
  const searchPokemon = event => {
    event.preventDefault();
    const {value} = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
  }

  const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    const { stats, types} = data;

    pokeName.textContent = data.name;
    pokeIMg.setAtribute('src', sprite);
    pokeId.textContent = `Nº ${data.id}`;
  }
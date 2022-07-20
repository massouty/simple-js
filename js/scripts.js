alert('Hallo World');
let favoriteFood = 'Turkish Food';
document.write(favoriteFood);

let pokemonlist = [{ name: 'Bulbasaur', height: 7, type: ['grass', 'poison'] },
{ name: 'Butterfree', height: 11, type: ['grass', 'bug', 'flying'] },
{ name: 'machop', height: 8, type: ['fighting', 'bug', 'grass'] }];

for (let i = 0; i < pokemonlist.length; i++) {
    if (pokemonlist[i].height < 8 && pokemonlist[i].height > 5) {
        document.write(pokemonlist[i].name + " is small body/ ");
    }
    else if (pokemonlist[i].height < 11) {
        document.write(pokemonlist[i].name + " is normal body/ ");
    } else { document.write(pokemonlist[i].name + " is big body,wow!/"); }
}

// this is for task 1.5 JS
pokemonlist.forEach(function (pokemon) {
    if (pokemon.height < 8 && pokemon.height > 5) {
        document.write(pokemon.name + " is small body/ ");
    }
    else if (pokemon.height < 11) {
        document.write(pokemon.name + " is normal body/ ");
    } else { document.write(pokemon.name + " is big body,wow!/"); }
});

let pokemon1 = "Bulbasaur(Height:7)";
document.write(pokemon1);
let pokemon2 = "Butterfree(Height:11)-wow , this is big";
document.write(pokemon2);
let pokemon3 = "machop(Height:7)";
document.write(pokemon3);


let pokemonRepository = (function () {
  let repository = [
    {
      name: "Bulbasaur",
      height: 0.7,
      types: ["grass", "poison"],
    },
    {
      name: "Charizard",
      height: 1.7,
      types: ["fire", "flying"],
    },
    {
      name: "Squirtle",
      height: 1,
      types: ["water"],
    },
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return repository;
  }
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

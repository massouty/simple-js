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
// this is task 1.6 , where make some changing for task 1.7, 
//therefore, I delet code for task 1.6  to avoid any conflect 
//and rebuild for task 1.7

/*let pokemonRepository = (function () {
  let repository = [ ];

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
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button1");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function()
    {showDetails(pokemon)});
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  }

})();
pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});*/

let pokemonRepository = (function () {  //  Entered the IIFE function and now the pokemonList is "protected"
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150';
  let modalContainer = document.querySelector('#modal-container');



  function add(pokemon) {   //Entered add function that declares typeof pokemon
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("Pokemon is not correct");
    }
  }

  function getAll() {    //Added getAll function to get all pokemon
    return pokemonList;  //Return function takes the pokemon from the array
  }

  function addListItem(pokemon) {  // Function addListItem is used for DOM
    let pokemonList = document.querySelector(".pokemon-list");  //.pokemon-list is ul in index
    let pokemonItem = document.createElement("li");
    pokemonList.classList.add("group-list-item");
    pokemonList.classList.add("col-sm-4", "col-md-6", "col-lg-12");
    let buttonItem = document.createElement("button");  // creating a button
    buttonItem.classList.add("pokemonButton");
    buttonItem.innerText = pokemon.name;
    buttonItem.setAttribute("data-toggle", "modal");
    buttonItem.setAttribute("data-target", "#pokemon-modal");
    $(buttonItem).addClass('button-class btn-block btn m1');
    pokemonItem.appendChild(buttonItem);  // calling the listpokemon to the button
    pokemonList.appendChild(pokemonItem);  // calling the pokemonList to the list
    buttonItem.addEventListener("click", function (event) {
       showDetails(pokemon);

     });
   }

function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url). then(function (response) {
      return response.json();
    }).then(function (details) {
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.weight = details.weight;
      pokemon.types = details.types.map((type) => type.type.name).join(',');
      pokemon.abilities = details.abilities.map((ability) => ability.ability.name).join(',');
    }).catch(function (e) {
      console.error(e);
    });
  }
  function showDetails(pokemon) {
   pokemonRepository.loadDetails(pokemon).then(function () {
       // console.log(item);
       showModal(pokemon);
   });
}

  //        <!---------------------------  Modal -------------------------------->


  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");


    modalTitle.empty();
    modalBody.empty();
    // Name
    let nameElement = $('<h1>' + pokemon.name + '</h1>');
    // Pokemon image
    let imageElement = $('<img class="pokemon-img">')
    imageElement.attr("src", pokemon.imageUrl);
    // Height
    let heightElement = $('<p>' + 'Height : ' + pokemon.height + '</p>');
    // Weight
    let weightElement = $('<p>' + 'Weight : ' + pokemon.weight + '</p>');
    // Type
    let typeElement = $('<p>' + 'Types : ' + pokemon.types + '</p>');
    // Abilities
    let abilitiesElement = $('<p>' + 'Abilities : ' + pokemon.abilities + '</p>');

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typeElement);
    modalBody.append(abilitiesElement);

  }

  return {
    add: add,         //Calling add function
    getAll: getAll,    //Calling getAll function
    addListItem: addListItem,  //Calling addListItem function
    loadList: loadList,
    showDetails: showDetails,
    loadDetails: loadDetails

  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});


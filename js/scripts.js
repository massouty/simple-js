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

let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function (event) {
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
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }
 
  

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
    
  };
})();

(function() {
  
  let modalContainer = document.querySelector('#modal-container');

  function showModal(pokemon) {

    modalContainer.innerHTML = '';
  
    let modal = document.createElement('div');
    modal.classList.add('modal');
  
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);
  
    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;
    let contentElement = document.createElement('p');
    contentElement.innerText = `Height: ${pokemon.height}`;
  
    let imgElement = document.createElement('img');
    imgElement.classList.add('img-element');
    imgElement.src = pokemon.imageUrl;
  
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(imgElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);
  
    modalContainer.classList.add('is-visible');
  }
  
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });
  
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  
  });
  document.querySelector('#show-modal').addEventListener('click', () => {
    return showModal(pokemon);
  });

})();


pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
})();

alert('Hallo World');
let favoriteFood = 'Turkish Food';
document.write(favoriteFood);

let pokemonlist = [{ name: 'Bulbasaur', height: 7, type: ['grass', 'poison'] },
{ name: 'Butterfree', height: 11, type: ['grass', 'bug', 'flying'] },
{ name: 'machop', height: 8, type: ['fighting', 'bug', 'grass'] }];

/*for (let i = 0; i < pokemonlist.length; i++) {
    if (pokemonlist[i].height < 8 && pokemonlist[i].height > 5) {
        document.write(pokemonlist[i].name + " is small body/ ");
    }
    else if (pokemonlist[i].height < 11) {
        document.write(pokemonlist[i].name + " is normal body/ ");
    } else { document.write(pokemonlist[i].name + " is big body,wow!/"); }
}
*/
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
    let pokemonList = [{ name: 'Bulbasaur', height: 7, type: ['grass', 'poison'] },
    { name: 'Butterfree', height: 11, type: ['grass', 'bug', 'flying'] },
    { name: 'machop', height: 8, type: ['fighting', 'bug', 'grass'] }];

    return {
        add: function (pokemon) {
            pokemonList.push(pokemon);
        },
        getAll: function () {
            return pokemonList;
        }
    };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Lola' });
console.log(pokemonRepository.getAll()); 

// Dom task in js

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


let pokemon1 = "Bulbasaur(Height:7)";
document.write(pokemon1);
let pokemon2 = "Butterfree(Height:11)-wow , this is big";
document.write(pokemon2);
let pokemon3 = "machop(Height:7)";
document.write(pokemon3);
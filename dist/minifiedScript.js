alert("Hallo World");let favoriteFood="Turkish Food";document.write(favoriteFood);let pokemonlist=[{name:"Bulbasaur",height:7,type:["grass","poison"]},{name:"Butterfree",height:11,type:["grass","bug","flying"]},{name:"machop",height:8,type:["fighting","bug","grass"]}];for(let i=0;i<pokemonlist.length;i++)pokemonlist[i].height<8&&pokemonlist[i].height>5?document.write(pokemonlist[i].name+" is small body/ "):pokemonlist[i].height<11?document.write(pokemonlist[i].name+" is normal body/ "):document.write(pokemonlist[i].name+" is big body,wow!/");pokemonlist.forEach(function(a){a.height<8&&a.height>5?document.write(a.name+" is small body/ "):a.height<11?document.write(a.name+" is normal body/ "):document.write(a.name+" is big body,wow!/")});let pokemon1="Bulbasaur(Height:7)";document.write(pokemon1);let pokemon2="Butterfree(Height:11)-wow , this is big";document.write(pokemon2);let pokemon3="machop(Height:7)";document.write(pokemon3);let pokemonRepository=function(){let d=[];function a(a){"object"==typeof a&&"name"in a&&"detailsUrl"in a?d.push(a):console.log("Pokemon is not correct")}function b(){return d}function c(a){pokemonRepository.loadDetails(a).then(function(){e(a)})}function e(a){let b=$(".modal-body"),c=$(".modal-title");c.empty(),b.empty();let e=$("<h1>"+a.name+"</h1>"),d=$('<img class="pokemon-img">');d.attr("src",a.imageUrl);let f=$("<p>Height : "+a.height+"</p>"),g=$("<p>Weight : "+a.weight+"</p>"),h=$("<p>Types : "+a.types+"</p>"),j=$("<p>Abilities : "+a.abilities+"</p>");c.append(e),b.append(d),b.append(f),b.append(g),b.append(h),b.append(j)}return document.querySelector("#modal-container"),{add:a,getAll:b,addListItem:function(e){let b=document.querySelector(".pokemon-list"),d=document.createElement("li");b.classList.add("group-list-item"),b.classList.add("col-sm-4","col-md-6","col-lg-12");let a=document.createElement("button");a.classList.add("pokemonButton"),a.innerText=e.name,a.setAttribute("data-toggle","modal"),a.setAttribute("data-target","#pokemon-modal"),$(a).addClass("button-class btn-block btn m1"),d.appendChild(a),b.appendChild(d),a.addEventListener("click",function(a){c(e)})},loadList:function(){return fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150").then(function(a){return a.json()}).then(function(b){b.results.forEach(function(b){a({name:b.name,detailsUrl:b.url})})}).catch(function(a){console.error(a)})},showDetails:c,loadDetails:function(a){return fetch(a.detailsUrl).then(function(a){return a.json()}).then(function(b){a.imageUrl=b.sprites.front_default,a.height=b.height,a.weight=b.weight,a.types=b.types.map(a=>a.type.name).join(","),a.abilities=b.abilities.map(a=>a.ability.name).join(",")}).catch(function(a){console.error(a)})}}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(a){pokemonRepository.addListItem(a)})})
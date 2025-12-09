let pokemon = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle", "Eevee", "Jigglypuff", "Meowth", "Psyduck"];

console.log(pokemon);
console.log("O primeiro Pokémon é: " + pokemon[0]);
console.log("O último Pokémon é: " + pokemon[7]);

pokemon.push("Snorlax");
console.log("Após adicionar Snorlax: " + pokemon);
console.log("Agora o ultimo pokemon é: " + pokemon[8]);

pokemon.pop("Snorlax");
console.log("Após excluirmos o Srnorlax: " + pokemon);


console.log("____________________________________________")

let timePokemon = [["Pikachu", "Elétrico", 5],
["Charmander", "Fogo", 8],
["Bulbasaur", "Planta", 7],
["Squirtle", "Água", 6]];

console.log(timePokemon);

console.log("O primeiro Pokémon do time é: " + timePokemon[0][0]);
console.log("O tipo do segundo Pokémon é: " + timePokemon[1][1]);
console.log("O nível do quarto Pokémon é: " + timePokemon[3][2]);

timePokemon.push(["Jigglypuff", "Normal/Fada", 4]);
console.log("Após adicionar Jigglypuff: " + timePokemon);

timePokemon.pop();
console.log("Após excluir Jigglypuff: " + timePokemon);

console.log("O time de Pokémons tem " + timePokemon.length + " membros.");

console.log("____________________________________________")

//Exercicios extras
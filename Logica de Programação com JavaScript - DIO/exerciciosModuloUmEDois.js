// ====================================================================
// NOVOS EXERCÍCIOS: VARIÁVEIS E CONSTANTES
// ====================================================================

// --------------------------------------------------------------------
// Exercício Fácil 1: Cadastro de Herói
// --------------------------------------------------------------------
//
// Crie uma constante para armazenar o nome de um herói.
// Crie uma variável para armazenar a experiência (XP) do herói, começando com 0.
// Imprima o nome e a XP do herói no console, como no exemplo: "O herói [nome] tem [xp] de experiência."
//
// Seu código abaixo:
//

const nomeHeroi = "Arqueiro Místico";
let xpHeroi = 0;

console.log(`O herói ${nomeHeroi} tem ${xpHeroi} de experiência.`);

// --------------------------------------------------------------------
// Exercício Médio 2: Calculadora de Dano
// --------------------------------------------------------------------
//
// Declare uma constante `danoBase` com o valor 10.
// Declare uma constante `bonusDeAtaque` com o valor 5.
// Declare uma variável `danoTotal`.
// Calcule o dano total somando `danoBase` e `bonusDeAtaque` e armazene o resultado em `danoTotal`.
// Imprima o resultado no console: "O dano total do ataque é: [danoTotal]".
//
// Seu código abaixo:
//

const danoBase = 10;
const bonusDeAtaque = 5;
let danoTotal = danoBase + bonusDeAtaque;

console.log(`O dano total do ataque é: ${danoTotal}`);




// --------------------------------------------------------------------
// Exercício Desafio 3: Simulação de Batalha
// --------------------------------------------------------------------
//
// Declare uma variável `vidaDoMonstro` com o valor 100.
// Declare uma constante `poderDeAtaque` com o valor 25.
// Simule três ataques ao monstro. A cada ataque, subtraia o `poderDeAtaque` da `vidaDoMonstro`.
// Imprima a vida do monstro no console antes do primeiro ataque.
// Imprima a vida do monstro no console após cada um dos três ataques.
//
// Seu código abaixo:
//

let vidaDoPokemon = 100;
const poderDeAtaque = 25;

console.log(`A vida do Pokémon antes do ataque é: ${vidaDoPokemon}`);
console.log("--- Primeiro Ataque ---");

vidaDoPokemon -= poderDeAtaque;
console.log(`A vida do Pokémon após o primeiro ataque é: ${vidaDoPokemon}`);
vidaDoPokemon -= poderDeAtaque;
console.log(`A vida do Pokémon após o segundo ataque é: ${vidaDoPokemon}`);
vidaDoPokemon -= poderDeAtaque;
console.log(`A vida do Pokémon após o terceiro ataque é: ${vidaDoPokemon}`);


// ====================================================================
// NOVOS EXERCÍCIOS: VETORES E MATRIZES
// ====================================================================

// --------------------------------------------------------------------
// Exercício Fácil 1: Mochila de Itens
// --------------------------------------------------------------------
//
// Crie um vetor (array) chamado `mochila` que contenha os seguintes itens: "Poção", "Espada", "Escudo", "Mapa".
// Imprima no console o primeiro item da mochila.
// Imprima no console o terceiro item da mochila.
//
// Seu código abaixo:
//

let mochila = ["Poção de Vida",
               "Espada Quebrada",
               "Escudo Quebrado",
               "Mapa do Tesouro",
               "Poção de Mana"];

console.log(mochila[0]);
console.log(mochila[2]);


// --------------------------------------------------------------------
// Exercício Médio 2: Organizando a Equipe Pokémon
// --------------------------------------------------------------------
//
// Dado o vetor `equipePokemon = ["Pikachu", "Raichu", "Onix"]`.
// 1. Substitua "Raichu" por "Charizard". (Dica: você pode acessar o índice diretamente).
// 2. Adicione "Gengar" ao final da equipe.
// 3. Remova o primeiro Pokémon da equipe. (Dica: pesquise sobre o método .shift() para arrays).
// Ao final, imprima a equipe atualizada no console.
//
// Seu código abaixo:
//

let equipePokemon = ["Pikachu", "Raichu", "Onix"];


// 1. Substituindo
equipePokemon[1] = "Charizard";

// 2. Adicionando ao final
equipePokemon.push("Gengar");

// 3. Removendo o primeiro
equipePokemon.shift();

console.log(equipePokemon);


// --------------------------------------------------------------------
// Exercício Desafio 3: Pokédex Avançada
// --------------------------------------------------------------------
//
// Dada a matriz (array 2D) `pokedex`:
// let pokedex = [
//   ["Pikachu", "Elétrico", 90],
//   ["Charizard", "Fogo/Voador", 200],
//   ["Gengar", "Fantasma/Venenoso", 150]
// ];
//
// 1. Adicione um novo Pokémon à Pokédex: ["Blastoise", "Água", 220].
// 2. Usando um loop `for`, encontre e imprima no console o NOME do Pokémon que tem o poder (terceiro elemento) maior que 180.
//
// Seu código abaixo:
//

let pokedex = [["Pikachu", "Elétrico", 90],
               ["Charizard", "Fogo/Voador", 200],
               ["Gengar", "Fantasma/Venenoso", 150]];

// 1. Adicionando novo Pokémon
pokedex.push(["Blastoise", "Água", 220]);

// 2. Encontrando Pokémon com poder > 180
let pokemonForte = false;
for (let i = 0; i < pokedex.length; i++) {
    if (pokedex[i][2] > 180) {
        console.log(pokedex[i][0]);
        pokemonForte = true;
    }
    
    if (pokemonForte === false && i === pokedex.length - 1) {
        console.log("Nenhum Pokémon com poder maior que 180 foi encontrado.");
    }
}
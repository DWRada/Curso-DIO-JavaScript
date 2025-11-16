function escrevaNome(nome) {
    return `Meu nome é ` + nome;
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaNome(`Douglas `) + 'Você é maior de idade.');
        } else {
        console.log('Você é menor de idade.');
    }
}
verificarIdade(34);

//Exercício IMC
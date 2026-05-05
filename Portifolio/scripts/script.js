const NOME = "Isaac Rezende";
let tituloProfissional = "Systems Developer";
let minhaBio = "Sou um cara ai." +
    " Antes eu não era nada";
let anoFormatura = 2026;

let mesFormatura = 12;
let diaFormatura = 31;
let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;

let dataAtual = new Date(); // Data atual, data completa, biblioteca de data do JavaScript
let mesAtual = dataAtual.getMonth() + 1; // Mês atual (0-11, por isso +1)
let anoAtual = dataAtual.getFullYear(); // Ano atual
let diaAtual = dataAtual.getDate(); // Dia atual

let indefinido;
let nulo = null;

let curso = {
    nome: "Desenvolvedor de Sistemas",
    semestre: 3,
    disciplinaAtual: "Linguagem de Programação",
};

console.log(typeof nulo); 
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);    
console.log(typeof curso);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = "Ano de formatura: " + anoFormatura;
document.getElementById("tempoRestanteParaFormatura").innerText = `Tempo restante para formatura: \n ${anoFormatura - anoAtual} anos, ${mesFormatura - mesAtual} meses e ${diaFormatura - diaAtual} dias`;
document.getElementById("tempoPorcentagemParaFormatura").innerText = `Porcentagem de Conclusão: \n ${Math.round(((anoAtual - anoIngresso) + (mesAtual - mesIngresso) / 12 + (diaAtual - diaIngresso) / 365) / ((anoFormatura - anoIngresso) + (mesFormatura - mesIngresso) / 12 + (diaFormatura - diaIngresso) / 365) * 100)}%`;
document.getElementById("tempoPercorrido").innerText = `Tempo percorrido: \n ${anoAtual - anoIngresso} anos, ${mesAtual - mesIngresso} meses e ${diaAtual - diaIngresso} dias`;


























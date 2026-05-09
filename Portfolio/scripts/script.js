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

let diasRestantes = diaFormatura - diaAtual;
let mesesRestantes = mesFormatura - mesAtual;
let anosRestantes = anoFormatura - anoAtual;

if (diasRestantes <= 0 && mesesRestantes <= 0 && anosRestantes <= 0) {
    document.getElementById("tempoRestanteParaFormatura").innerText = `Curso Concluído!`;
};

let nota = 8; 
let aprovado = (nota >= 6)? "Aprovado" : "Reprovado";

document.write(`<p> Nota: ${nota} - ${aprovado} </p>`);

let diaSemana = dataAtual.getDay() + 1; 

let diaEscrito;

switch (diaSemana) {
    case 1: diaEscrito = "Domingo"; break;
    case 2: diaEscrito = "Segunda-feira"; break;
    case 3: diaEscrito = "Terça-feira"; break;
    case 4: diaEscrito = "Quarta-feira"; break;
    case 5: diaEscrito = "Quinta-feira"; break;
    case 6: diaEscrito = "Sexta-feira"; break;
    case 7: diaEscrito = "Sábado"; break;
    default: diaEscrito = "Dia inválido";
}

document.write(`<p> Hoje é: ${diaEscrito} </p>`);

// ─── QUIZ DE PERFIL ───────────────────────────────────────────
const btnVisual      = document.getElementById("btn-visual");
const btnLogica      = document.getElementById("btn-logica");
const resultadoQuiz  = document.getElementById("resultado-quiz");

let pontosFront  = 0;
let pontosBack   = 0;

btnVisual.addEventListener("click", function() {
  pontosFront++;
  exibirPerfil();
});

btnLogica.addEventListener("click", function() {
  pontosBack++;
  exibirPerfil();
});

function exibirPerfil() {
  if (pontosFront > pontosBack) {
    resultadoQuiz.textContent = "🎨 Perfil Front-End!";
  } else if (pontosBack > pontosFront) {
    resultadoQuiz.textContent = "⚙️ Perfil Back-End!";
  } else {
    resultadoQuiz.textContent = "🔄 Perfil Full Stack — você é dos dois!";
  }
}

btnVisual.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>🎨 Você tem perfil Front-End!</strong><br>
    Você curte criar interfaces, trabalhar com cores, layouts e a experiência do usuário.
    Tecnologias pra você: HTML, CSS, React, Vue.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f4fd";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});

btnLogica.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>⚙️ Você tem perfil Back-End!</strong><br>
    Você curte resolver problemas complexos, trabalhar com dados e fazer a mágica acontecer nos bastidores.
    Tecnologias pra você: Node.js, Python, bancos de dados.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f8f0";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});

for (let i = 0; i <= 20; i++) {
    let pares = (i % 2 === 0) ? "Par" : "Ímpar";
    console.log(`${i} - ${pares}`);
}

let object = {
    nome: "Isaac",
    idade: 18,
    curso : "Desenvolvimento de Sistemas"
};

for (let chave in object) {
  document.write(`<p>${chave}: ${object[chave]}</p>`);
}

let alunos = ["Isaac", "Bob", "Charlie", "Anderson", "Ethan"];

for (let contem of alunos) {
  if (contem === "Isaac") {
    document.write(`<p> ${contem} - Encontrado! </p>`);
 } else {
    document.write(`<p> ${contem} - Não é o Isaac. </p>`);
 }
}


let num = prompt("Diga um numero impar:");
while (num % 2 === 0) {
    num = prompt("Número inválido! Por favor, digite um número ímpar:");
}

do {
    num = prompt("Diga um numero impar:");
} while (num % 2 === 0);

let fruta = [/*0*/"Maçã", /*1*/"Banana", /*2*/"Laranja", /*3*/"Uva"];
//indice começa em 0
console.log(fruta.length); //Quantidade de itens no array

fruta.push("Abacaxi"); //Adiciona um item no final do array
fruta.unshift("Morango");
fruta.shift(); //Remove o primeiro item do array
fruta.pop(); //Remove o último item do array

console.log(fruta.indexOf("Abacaxi")); //Retorna o índice do item

fruta.splice(2, 1); //Remove 1 item a partir do índice 2 (Laranja)
fruta.splice(3,0,"Melancia","maça verde", "kiwi"); // A partir do índice 3, remove 0 itens e adiciona "Melancia", "maça verde" e "kiwi"

fruta.forEach(function(item) {
    console.log(item);
});

let clientes = [
{nome: "Isaac",
  numeroCartao: 12345, 
  cvv: "67",
  limite: 15000
},
{nome: "Bob",
  numeroCartao: 67890, 
  cvv: "89",
  limite: 20000
},
{nome: "Charlie",
  numeroCartao: 54321, 
  cvv: "45",
  limite: 10000
}
];

for (let cliente of clientes) {
    if (cliente.nome === "Isaac") {
        console.log(`Cliente encontrado: ${cliente.nome}, Cartão: ${cliente.numeroCartao}, CVV: ${cliente.cvv}, Limite: ${cliente.limite}`);
    } else {
        console.log(`Cliente ${cliente.nome} - Não é o Isaac.`);
    }
}

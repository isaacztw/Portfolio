const NOME = "Isaac Rezende";
const tituloProfissional = "Systems Developer";
const minhaBio = "Sou um cara ai. Antes eu não era nada";
const anoFormatura = 2026;
const mesFormatura = 12;
const diaFormatura = 31;
const anoIngresso = 2025;
const mesIngresso = 1;
const diaIngresso = 1;

const dataAtual = new Date();
const mesAtual = dataAtual.getMonth() + 1;
const anoAtual = dataAtual.getFullYear();
const diaAtual = dataAtual.getDate();

let indefinido;
const nulo = null;

const curso = {
  nome: "Desenvolvedor de Sistemas",
  semestre: 3,
  disciplinaAtual: "Linguagem de Programação",
};

const habilidades = [
  "Python",
  "HTML e CSS",
  "Git/Github",
  "MySQL",
  "Lógica de Programação",
];

const btnVisual = document.getElementById("btn-visual");
const btnLogica = document.getElementById("btn-logica");
const resultadoQuiz = document.getElementById("resultado-quiz");

let pontosFront = 0;
let pontosBack = 0;

function getElement(id) {
  return document.getElementById(id);
}

function setText(id, text) {
  const element = getElement(id);
  if (element) {
    element.innerText = text;
  }
}

function criarListaHabilidades() {
  const lista = document.createElement("ul");
  let indice = 0;
  do {
    const item = document.createElement("li");
    item.innerText = habilidades[indice];
    lista.appendChild(item);
    indice++;
  } while (indice < habilidades.length);
  return lista;
}

function mostrarHabilidades() {
  const container = getElement("Habilidades");
  if (!container) return;
  container.innerHTML = "<h3>Habilidades</h3>";
  container.appendChild(criarListaHabilidades());
}

function calcularTempoRestante() {
  const anos = anoFormatura - anoAtual;
  const meses = mesFormatura - mesAtual;
  const dias = diaFormatura - diaAtual;
  return { anos, meses, dias };
}

function calcularPorcentagemConclusao() {
  const periodoDecorrido = (anoAtual - anoIngresso) + (mesAtual - mesIngresso) / 12 + (diaAtual - diaIngresso) / 365;
  const periodoTotal = (anoFormatura - anoIngresso) + (mesFormatura - mesIngresso) / 12 + (diaFormatura - diaIngresso) / 365;
  return Math.round((periodoDecorrido / periodoTotal) * 100);
}

function calcularTempoPercorrido() {
  const anos = anoAtual - anoIngresso;
  const meses = mesAtual - mesIngresso;
  const dias = diaAtual - diaIngresso;
  return { anos, meses, dias };
}

function formatarTempo(tempo) {
  return `${tempo.anos} anos, ${tempo.meses} meses e ${tempo.dias} dias`;
}

function atualizarInformacoesAcademicas() {
  setText("anoFormatura", `Ano de formatura: ${anoFormatura}`);
  const tempoRestante = calcularTempoRestante();
  setText("tempoRestanteParaFormatura", `Tempo restante para formatura: \n ${formatarTempo(tempoRestante)}`);
  setText("tempoPorcentagemParaFormatura", `Porcentagem de Conclusão: \n ${calcularPorcentagemConclusao()}%`);
  setText("tempoPercorrido", `Tempo percorrido: \n ${formatarTempo(calcularTempoPercorrido())}`);
}

function aplicarConclusaoSeNecessario() {
  const { anos, meses, dias } = calcularTempoRestante();
  if (dias <= 0 && meses <= 0 && anos <= 0) {
    setText("tempoRestanteParaFormatura", "Curso Concluído!");
  }
}

function exibirTiposBasicos() {
  console.log(typeof nulo);
  console.log(typeof indefinido);
  console.log(typeof anoFormatura);
  console.log(typeof minhaBio);
  console.log(typeof tituloProfissional);
  console.log(typeof NOME);
  console.log(typeof curso);
}

function mostrarDadosPessoais() {
  setText("meuNome", NOME);
  setText("tituloProfissional", tituloProfissional);
  setText("minhaBio", minhaBio);
}

function obterDiaDaSemana() {
  const diaSemana = dataAtual.getDay() + 1;
  switch (diaSemana) {
    case 1:
      return "Domingo";
    case 2:
      return "Segunda-feira";
    case 3:
      return "Terça-feira";
    case 4:
      return "Quarta-feira";
    case 5:
      return "Quinta-feira";
    case 6:
      return "Sexta-feira";
    case 7:
      return "Sábado";
    default:
      return "Dia inválido";
  }
}

function exibirNotaAprovacao() {
  const nota = 8;
  const aprovado = nota >= 6 ? "Aprovado" : "Reprovado";
  document.write(`<p> Nota: ${nota} - ${aprovado} </p>`);
}

function exibirDiaDaSemana() {
  document.write(`<p> Hoje é: ${obterDiaDaSemana()} </p>`);
}

function configurarQuiz() {
  if (!btnVisual || !btnLogica || !resultadoQuiz) {
    return;
  }

  btnVisual.addEventListener("click", () => {
    pontosFront++;
    definirResultadoVisual();
    exibirPerfil();
  });

  btnLogica.addEventListener("click", () => {
    pontosBack++;
    definirResultadoLogica();
    exibirPerfil();
  });
}

function exibirPerfil() {
  if (!resultadoQuiz) return;
  if (pontosFront > pontosBack) {
    resultadoQuiz.textContent = "🎨 Perfil Front-End!";
  } else if (pontosBack > pontosFront) {
    resultadoQuiz.textContent = "⚙️ Perfil Back-End!";
  } else {
    resultadoQuiz.textContent = "🔄 Perfil Full Stack — você é dos dois!";
  }
}

function aplicarEstiloResultadoQuiz(corFundo) {
  resultadoQuiz.style.backgroundColor = corFundo;
  resultadoQuiz.style.padding = "12px";
  resultadoQuiz.style.borderRadius = "8px";
  resultadoQuiz.style.marginTop = "10px";
}

function definirResultadoVisual() {
  resultadoQuiz.innerHTML = `
    <strong>🎨 Você tem perfil Front-End!</strong><br>
    Você curte criar interfaces, trabalhar com cores, layouts e a experiência do usuário.
    Tecnologias pra você: HTML, CSS, React, Vue.
  `;
  aplicarEstiloResultadoQuiz("#e8f4fd");
}

function definirResultadoLogica() {
  resultadoQuiz.innerHTML = `
    <strong>⚙️ Você tem perfil Back-End!</strong><br>
    Você curte resolver problemas complexos, trabalhar com dados e fazer a mágica acontecer nos bastidores.
    Tecnologias pra você: Node.js, Python, bancos de dados.
  `;
  aplicarEstiloResultadoQuiz("#e8f8f0");
}

function exibirNumerosParesEImpares() {
  for (let i = 0; i <= 20; i++) {
    const pares = i % 2 === 0 ? "Par" : "Ímpar";
    console.log(`${i} - ${pares}`);
  }
}

function mostrarPropriedadesObjeto() {
  const object = {
    nome: "Isaac",
    idade: 18,
    curso: "Desenvolvimento de Sistemas",
  };

  for (const chave in object) {
    document.write(`<p>${chave}: ${object[chave]}</p>`);
  }
}

function mostrarAlunos() {
  const alunos = ["Isaac", "Bob", "Charlie", "Anderson", "Ethan"];
  for (const contem of alunos) {
    if (contem === "Isaac") {
      document.write(`<p> ${contem} - Encontrado! </p>`);
    } else {
      document.write(`<p> ${contem} - Não é o Isaac. </p>`);
    }
  }
}

function solicitarNumeroImpar(mensagem) {
  let numero = prompt(mensagem);
  while (numero % 2 === 0) {
    numero = prompt("Número inválido! Por favor, digite um número ímpar:");
  }
  return numero;
}

function processarEntradaNumeroImpar() {
  solicitarNumeroImpar("Diga um numero impar:");
  do {
    prompt("Diga um numero impar:");
  } while (prompt("Diga um numero impar:") % 2 === 0);
}

function manipularFrutas() {
  const fruta = ["Maçã", "Banana", "Laranja", "Uva"];
  console.log(fruta.length);
  fruta.push("Abacaxi");
  fruta.unshift("Morango");
  fruta.shift();
  fruta.pop();
  console.log(fruta.indexOf("Abacaxi"));
  fruta.splice(2, 1);
  fruta.splice(3, 0, "Melancia", "maça verde", "kiwi");
  fruta.forEach(function (item) {
    console.log(item);
  });
}

function analisarClientes() {
  const clientes = [
    {
      nome: "Isaac",
      numeroCartao: 12345,
      cvv: "67",
      limite: 15000,
    },
    {
      nome: "Bob",
      numeroCartao: 67890,
      cvv: "89",
      limite: 20000,
    },
    {
      nome: "Charlie",
      numeroCartao: 54321,
      cvv: "45",
      limite: 10000,
    },
  ];

  for (const cliente of clientes) {
    if (cliente.nome === "Isaac") {
      console.log(`Cliente encontrado: ${cliente.nome}, Cartão: ${cliente.numeroCartao}, CVV: ${cliente.cvv}, Limite: ${cliente.limite}`);
    } else {
      console.log(`Cliente ${cliente.nome} - Não é o Isaac.`);
    }
  }
}

function apresentarProjetos() {
  const projetos = [
    {
      nome: "Aplicação de Estacionamento",
      tecnologias: ["Python", "Tkinter", "fpdf2"],
      conhecimentos: "VsCODE, Github, pip, PyInstaller, PyPDF2",
      descricao: "Aplicação desktop para controle de estacionamento, com geração de recibos em PDF e interface gráfica para cadastro de veículo e controle de vagas",
    },
    {
      nome: "Lyrics",
      tecnologias: ["HTML", "JavaScript", "CSS", "GitHub", "NodeJS", "Local API"],
      conhecimentos: "VsCODE, Github, npm, Express, API local, Fetch API",
      descricao: "Site para buscar letras de músicas, utilizando API local para armazenar as letras e tecnologias web",
    },
    {
      nome: "AutoClick",
      tecnologias: ["Python"],
      conhecimentos: "VsCODE, Github, PyAutoGUI, Keyboard, Tkinter",
      descricao: "Um simples autoclick para quem tem preguiça de ficar clicando",
    },
  ];

  console.log("Projetos definidos:", projetos);
  console.table(projetos);
}

function inicializarPagina() {
  exibirTiposBasicos();
  mostrarDadosPessoais();
  mostrarHabilidades();
  atualizarInformacoesAcademicas();
  aplicarConclusaoSeNecessario();
  exibirNotaAprovacao();
  exibirDiaDaSemana();
  configurarQuiz();
  exibirNumerosParesEImpares();
  mostrarPropriedadesObjeto();
  mostrarAlunos();
  processarEntradaNumeroImpar();
  manipularFrutas();
  analisarClientes();
  apresentarProjetos();
}

inicializarPagina();

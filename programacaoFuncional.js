//Map, Filter, Reduce, ForEach => Predicados para arrays

const arrayNomes = [
  "Gabryel",
  "Caio",
  "Suetone",
  "Maria",
  "Laura",
  "Layla",
  "Cauã",
  "Simone",
];
const arrayNumeros = [1, 2, 3, 4, 5];

// for (let index = 0; index < arrayNomes.length; index++) {
//   console.log(arrayNomes[index]);
// }

arrayNomes.forEach((nome) => console.log(nome));
arrayNumeros.forEach((numero) => console.log(numero));

const filtrados = arrayNomes.filter((nome) => {
  if (nome.startsWith("G")) {
    return nome;
  }
});

console.log("aqui", filtrados);

// let acc = 0;
// for (let index = 0; index < arrayNumeros.length; index++) {
//   acc += arrayNumeros[index];
// }
// console.log(acc);

const somados = arrayNumeros.reduce((acc, num) => {
  return acc + num;
});

console.log("aqui de novo", somados);

//TODO: Json
const arrayJson = [
  {
    nome: "Gabryel",
    matricula: "123456",
    email: "gabryel@email.com",
  },
  {
    nome: "Suetone",
    matricula: "789012",
    email: "suetone@email.com",
  },
  {
    nome: "Caio",
    matricula: "654321",
    email: "caio@email.com",
  },
];

console.log(arrayJson);

// for (let i = 0; i < arrayJson.length; i++) {
//   console.log(arrayJson[i].nome, arrayJson[i].email);
// }

arrayJson.map((aluno) => console.log(aluno.nome, aluno.email));
arrayNomes.map((nome) => {
  nome.startsWith("L") ? console.log(nome) : "";
});

// console.log(arrayJson[0].nome, arrayJson[0].email);

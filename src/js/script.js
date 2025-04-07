// var nome = "fiap"
// console.log (nome)

// let idade = 19;
// console.log(idade)

// const sobrenome = "fiapinho"
// console.log(sobrenome)

// // declarando um variavel indefinida
// let nome1;
// console.log(nome1)
// // declarando uma variavel nula
// let nome2=null;
// console.log(nome2)
// // TIPOS DE VARIAVEIS
// let exemplo1 =10;
// console.log(typeof exemplo1)

// let exemplo2 ="tecnologia"
// console.log(typeof exemplo2)

// let exemplo3 =true;
// console.log(typeof exemplo3)

// let exemplo4 ={}
// console.log(typeof exemplo4)

// let exemplo5 =[]
// console.log(typeof exemplo5)

// //COVERSÕES

// let numfloat =123.456;
// console.log(parseInt(numfloat));

// let numString ="123.456";
// console.log(parseFloat(numString));

// //METODOS
// //lenght = verifica o tamanho da string
// let frasconste ="o mundo da tecnologia"
// console.log(frase.length);

// //indexOF - retorna um trecho do texto
// let texto="A programação indomavel e sustentavel"
// console.log(texto.indexOf(""))

// //slice - retorna um trecho do texto com inicio e final

// let info ="Processamento de ponta"
// console.log(info.slice(16,25))

//operadores aritmeticos

// const num1=10;
// const num2=10;

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)

// Operadores logicos
// const num3=20;
// const num4=30;

// console.log(num3 < num4)
// console.log(num3 > num4 && num4 < num3);
// console.log(num3 > num4 || num4 < num3);

//operadores de comparação
//== - compara o valor
//=== - compara o valor e o tipo de variavel 

// console.log(num3 == num4);
// console.log(num3 === num4);

//ESTRUTURA CONDICIONAL

// let logado="fiap"

// if(logado=="fiap"){
//     console.log("é verdadeiro")
// }

// //if/else
// let usuario="teste"
// if(usuario == "teste"){
//     console.log("Usuario Correto")
// }else{
//     console.log("Usuario Errado")
// }

// if encadeado / alinhado

// let idade =15

// if(idade < 15){
//     console.log("Menor de Idade")
// }else if(idade >15 && idade < 18){
//     console.log("não é maior mais pode entrar")
// }else{
//     console.log("Pode entrar é maior")
// }

// switch

// let time ="corinthians"

// switch(time){
//     case "Corinthians":
//         console.log("melhor time")
//         break;
//     case "São Paulo":
//         console.log("Não é o melhor time")
//         break
//     case "Palmeiras":
//         console.log("Não tem mundial")
//         break;
//     default:
//         console.log("nenhuma das alternativas")        
// }


// ternario

let valor = 100

let resultado = valor == 100 ? "certo":"Errado"
console.log(resultado)

//ternario encadeado
let produto = "notebook"
const desconto =true

const preco= produto === "notebook" ? desconto ? 100 :200 : produto ==="mouse" ? 30 :100;
console.log(preco)

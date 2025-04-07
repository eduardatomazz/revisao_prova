
//atividade 1
let numeros = prompt ("Digite a quantidade de números:");
let x = 1;
let somatorio = 0;
while (x <= numeros){
    let numero = parseInt(prompt ("Digite um número:"));
    somatorio = somatorio + numero;
    x = x + 1;
}
console.log("A soma dos números é:" + somatorio)

//atividade 2
let contagem = 10;

function contagemRegressiva(){
    setInterval(() => {
        if(contagem >= 0){
            console.log(contagem);
            contagem--; 
            if (contagem === 0) {
                console.log("lançamento!");
                clearInterval(contagemRegressiva); 
              }
        }

      }, 1000);
} 

contagemRegressiva();

//atividade 3

let x = 1;
let somatoriogb = 0;
let somatoriogm = 0;
while (x <= 12){
    let gb = parseInt(prompt ("Digite o ganho bruto:"));
    let gm = parseInt(prompt ("Digite os gastos mensais:"));
    somatoriogb = somatoriogb + gb;
    somatoriogm = somatoriogm + gm;
    x = x + 1;
}
let total = somatoriogb - somatoriogm
console.log("Total de ganhos: " + somatoriogb)
console.log("Total de gastos: " + somatoriogm)
console.log("Saldo final: " + total)
if (somatoriogb > somatoriogm){
    console.log("Teve lucro")
} else {
    console.log("Teve prejuízo")
}

//atividade 4
let numeros = [];

for(let i = 0; i < 4; i++){
    numeros[i] = prompt("Digite um número");
}

numeros.sort((a,b) => b - a);

console.log(numeros);

//atividade 5
let numero = parseInt(prompt("Digite um número"));
if (numero % 2 === 0){
    console.log("É par!")
    resultado = numero + 1 
    console.log("Transformado: " + resultado)
}
if (numero % 2 === 1){
    console.log("É ímpar!")
    resultado = numero + 1 
    console.log("Transformado: " + resultado)
}
//atividade 6
function verificaLetra() {
  let letra = prompt("Digite uma letra");
  switch(letra.toLowerCase()){
    case "a":
      console.log('É uma vogal!');
      break;
    case "e":
      console.log('É uma vogal!')
      break;
    case "i":
      console.log('É uma vogal!')
      break;
    case "o":
      console.log('É uma vogal!')
      break;
    case "u":
      console.log('É uma vogal!')
      break;
    default:
      console.log('É uma consoante!')
  }
}

verificaLetra();

//atividade 7
function Picole(){
  let picoles = {"Chocolate":1.50,"Morango":2.50,"Creme":2.50,"Manga":3.20,"Melancia":3.40,"Vanilla Ice":3.00,"Céu Azul":3.60,"Brownie":4.00,"Hawaiano":5.00};

  console.log("Qual sabor de picolé deseja?");
  for (let sabor in picoles) {
      console.log("- " + sabor);
  }

  let picoleEscolhido = prompt("Digite o sabor que deseja(Escreva o nome do sabor exatamente como está na tabela):");
  let precoPicole = picoles[picoleEscolhido];

  console.log("O preço do picolé de " + picoleEscolhido + " é R$" + precoPicole);
}

Picole();

//atividade 8
//EX8
function adivinhe(){
  numero = (Math.random() * 100) + 1;
  numero = Math.floor(numero);
  let escolha = NaN;

  while (escolha !== numero){
      escolha = prompt("Que número acha que foi sorteado? Digite um número: ")

      if(escolha == numero){
          console.log("Vc acertou o número, parabens: ", numero);
          break;
      } else{
          let desistir = prompt("Vc errou o nº Deseja desistir?")

          if(desistir == "sim"){
           console.log("ok, o nº era:", numero);
           break;
          }
      }

      
  }
}

adivinhe();

//atividade 9
function contarVogais() {
    let palavra = prompt("Qual frase deseja saber a quantidade de vogais?");
    letras = palavra.split('');
    let numVoga = 0;

    for (i = 0; i <= palavra.length; i++) {
        if ((letras[i] == 'a') || (letras[i] == 'e') || (letras[i] == 'i') || (letras[i] == 'o') || (letras[i] == 'u') || (letras[i] == 'A') || (letras[i] == 'E') || (letras[i] == 'I') || (letras[i] == 'O') || (letras[i] == 'U')) {
            numVoga++;
        }
    }
    console.log("O número de vogais da frase é: " + numVoga);
}

contarVogais();

//atividade 10
let senha = prompt('Qual a senha?');

function validarSenha(senha){

    console.log(senha);

    if(!senha || senha.length < 8 || /[A-Z]/.test(senha) === false || /[a-z]/.test(senha) === false || /[0-9]/.test(senha) === false){
        alert('Por favor, A senha deve conter no mínimo 8 caracteres, com pelo menos uma letra maiúscula, uma minúscula e um número');
        return false;
    }else{
        alert("Tua senha é válida bro, essa aqui ó: " + senha);
    }
}

validarSenha(senha);

//atividade 11
let numero2 = prompt("Qual o número?"");
let b;


function tabuada(){
    for (let i = 1; i <= 10; i++) {
        b = numero2 * i;
        console.log(numero2 + " * " + i + " = " + b);
    }
}

tabuada(b);

//atividade 12
const carrinho = [];

function cadastrarProduto() {
    let contador = 1;
    
    while (carrinho.length < 5) {
        const produto = {
            nome: prompt(`Digite o nome do ${contador}º produto:`),
            preco: parseFloat(prompt(`Digite o preço do ${contador}º produto:`))
        };
        
        carrinho.push(produto);
        contador++;
    }
}

function exibirCarrinho() {
    let listaProdutos = "Itens do Carrinho:\n\n";
    let total = 0;
    
    carrinho.forEach((produto, index) => {
        listaProdutos += `${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}\n`;
        total += produto.preco;
    });
    
    listaProdutos += `\nTotal a Pagar: R$ ${total.toFixed(2)}`;
    alert(listaProdutos);
}

cadastrarProduto();
exibirCarrinho();
*/
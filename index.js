//função
function menu() {
  const opcao = Number(
    prompt(`
    ===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
    1. Cadastrar doador
    2. Listar doadores
    3. Buscar doador por tipo sanguíneo
    4. Buscar doador por data da última doação
    5. Sair
    Escolha uma opção:`)
  );

  switch (opcao) {
    case 1:
      cadastrarDoador();
      break;
    case 2:
      listarDoadores();
      break;
    case 3:
      buscartiposanguineo();
      menu()
      break;
    case 4:
      buscarPorData();
      menu()
      break;
    case 5:
      break;
    default:
      alert("Opção inválida. Tente novamente.");
      menu();
  }
}

//array para armazenar
const arrayDoadores = [];

//cadastrar doador
const cadastrarDoador = () => {
  const nome = prompt("Dgite o nome do doador").toUpperCase();
  if (!nome || !nome[0]){ 
     alert('Nome inválido');
    menu()
  }
  const idade = Number(prompt("Qual a sua idade?"));
  const peso = Number(prompt("Qual o seu peso??"));
  const tipoSanguineo = prompt("Qual o tipo Sanguíneo deste doador?").toUpperCase();
  const ultimaDoacao = prompt("Qual a última Doação?? Caso não tenha doado, coloque 00/00/00!").toUpperCase();

  const doador = {
    nome: nome,
    idade: idade,
    peso: peso,
    tipoSanguineo: tipoSanguineo,
    ultimaDoacao: ultimaDoacao,
  };

  console.log(doador);
  arrayDoadores.push(doador);
  alert("doador cadastrado com sucesso!\n")
  menu();
};
//listar doadores

const listarDoadores = () => {
  let lista = `
--------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------

`;

  for (doador of arrayDoadores) {
    lista += `${doador.nome.padEnd(20)}   | ${doador.idade}  | ${doador.peso} Kg  | ${doador.tipoSanguineo.padEnd(5)}  | ${doador.ultimaDoacao} \n`;
  }

  lista += `-------------------------------------------------------------`
  prompt(lista);
  menu();
}

 //buscar
const buscartiposanguineo = () =>{
  let buscar = prompt(`========== BUSCA POR TIPO SANGUÍNEO ==========

  
=>  DIGITE O TIPO DESEJADO: `)
if (!buscar || !buscar[0]){ 
  alert('Tipo sanguíneo invalido!');
  menu()
}
  const listagem = []
  let lista = `
  --------------------
  LISTAGEM DE DOADORES COMPATÍVEIS:
  --------------------
  NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
  -----------------------------------------------------------------
  
  `
   for(let doador of arrayDoadores){
       if(doador.tipoSanguineo.toUpperCase() === buscar.toUpperCase()){
         listagem.push(doador)
         }
       }
 
       for(let novoDoador of listagem){
         lista += `
    ${novoDoador.nome.padEnd(20)}|  ${novoDoador.idade}|  ${novoDoador.peso} Kg|  ${novoDoador.tipoSanguineo.padEnd(6)}| ${novoDoador.ultimaDoacao}       
   
     ` }
 
   lista += `
   -----------------------------------------------------------------`
   prompt(lista) 
  
   }
 
 
 //ultima doação
 function buscarPorData(){
   let buscarData = prompt(`========== BUSCA POR TIPO SANGUÍNEO ==========
   
   
   =>  DIGITE A DATA DA ULTIMA DOAÇÃO: 
   (Caso nunca tenha doado, coloque 00/00/00)`)
   if (!buscarData || !buscarData[0]){ 
    alert('Data inválida');
   menu()
   }
   const arraaaay = []
   let listaData = `
   --------------------
   DOAÇÕES REALIZADAS EM ${buscarData} E ANTERIORES:
   --------------------
   NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
   -----------------------------------------------------------------
   
   `
 
   const buscaSplit = buscarData.split('/')
 
   for(let doador of arrayDoadores){
     const splitDoador = doador.ultimaDoacao.split('/')
    
     if(Number(splitDoador[2]) <= Number(buscaSplit[2])){
       arraaaay.push(doador)
       }
     }
 
   for(let doador69 of arraaaay){
     listaData += `${doador69.nome.padEnd(20)}|  ${doador69.idade}|  ${doador69.peso} Kg|  ${doador69.tipoSanguineo.padEnd(30)}|  ${doador69.ultimaDoacao.padEnd(10)}       
    
    ` }
      
 
   listaData += `
   -----------------------------------------------------------------`
      
   prompt(listaData) 
   
 
 }
 
 //sair
 menu()
 alert('Vejo você em breve!');

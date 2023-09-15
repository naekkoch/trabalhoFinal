const arrayDoadores = [];

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
      buscarTipoSangue();
      break;
    case 4:
      buscarPorData();
      break;
    case 5:
      break;
    default:
      alert("Opção inválida. Tente novamente.");
      menu();
  }
}

//
const cadastrarDoador = () => {
  const nome = prompt("Nome").toUpperCase();
  let idade = Number(prompt("Idade"));
  if (isNaN(idade)) {
    idade = Number(prompt("COLOQUE UM NÚMERO SEU INFELIZ"));
  }
  const peso = Number(prompt("Peso"));
  const tipoSanguineo = prompt("Tipo Sanguíneo").toUpperCase();
  const ultimaDoacao = prompt("Última Doação");

  const doador = {
    nome: nome,
    idade: idade,
    peso: peso,
    tipoSanguineo: tipoSanguineo,
    ultimaDoacao: ultimaDoacao,
  };

  console.log(doador);
  arrayDoadores.push(doador);
  menu();
};
//

const listarDoadores = () => {
  let lista = `
  --------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------

`;

  for (doador of arrayDoadores) {
    lista += `${doador.nome.padEnd(20)}   | ${doador.idade.padEnd(5)}  | ${doador.peso.padEnd(5)}  | ${doador.tipoSanguineo.padEnd(5)}  | ${doador.ultimaDoacao.padEnd(24)} \n`;
  }

  lista += `-------------------------------------------------------------`
  prompt(lista);
  menu();
};
 
const buscarTipoSangue = () => {

const buscar = prompt("Buscar tipo sanguineo:")
  const listagem = []

  for(let doador of arrayDoadores){
    if(doador.tipoSanguineo.toUpperCase() === buscar.toUpperCase()){

    
    listagem.push(doador)
    }
    let lista = `
  --------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------

`;

  for (doador of arrayDoadores) {
    lista += `${doador.nome.padEnd(20)}   | ${doador.idade.padEnd(5)}  | ${doador.peso.padE(5)}  | ${doador.tipoSanguineo.padEnd(5)}  | ${doador.ultimaDoacao.padEnd(24)} \n`;
  }

  lista += `-------------------------------------------------------------`
  prompt(lista);
  menu();
  }
}

menu();

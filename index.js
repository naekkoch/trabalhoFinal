const arrayDoadores = []

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
    const nome = prompt("Nome").toUpperCase()
    const idade = Number(prompt("Idade"))
    
    if (isNaN(idade)) {
      const idade = Number(prompt("COLOQUE UM NÚMERO SEU INFELIZ"))
    }
    
    const peso = Number(prompt("Peso"))
    const tipoSanguineo = prompt("Tipo Sanguíneo").toUpperCase()
    const ultimaDoacao = Number(prompt("Última Doação"))

    const doador = {
        nome: nome,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        ultimaDoacao: ultimaDoacao,
    }

    console.log(doador)
    arrayDoadores.push(doador)
    menu()
}
//

menu()
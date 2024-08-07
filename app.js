const prompt = require('prompt-sync')();
const listarResidencias = require('./listar');
const adicionarResidencias = require('./adicionar');
const atualizarResidencias = require('./atualizar');
const removerResidencia = require('./remover');
let residencias = require('./residencias');
const listarContatos = require('./listar');

exibirMenu();
function exibirMenu() {
    console.log(`  Menu de Residencias  
            1. Listar Residencias
            2. adicionar Residencia
            3. Atualizar Residencia
            4. Remover Residencia
            5. Sair do programa`);

let opcao = prompt('Oque deseja fazer?: ');
let index;

switch (opcao) {
    case '1':
        listarResidencias()
        exibirMenu()
        break;
    case '2':
        let rua = prompt('Qual o nome da rua?: ')
        
        let moradores = []
        let morador
        while ((morador = prompt('Moradores (ou deixe em branco para sair): '))) {
            moradores.push(morador);
        }
        
        let bairro = prompt('Qual o nome do bairro?: ')
        
        adicionarResidencias({ rua, bairro, moradores })
        
        console.log('adicionado')
        exibirMenu()
        break;
    case '3':
        listarResidencias()

        let id = parseInt(prompt('Qual usuario deseja atualizar?: '))
        let novaRua = prompt('Qual o novo nome da rua: ')
        
        let novosMoradores = []
        let novoMorador
        
        while((novoMorador = prompt('Qual o novo/s morador/es?: '))){
            novosMoradores.push(novoMorador)
        }
        let novoBairro = prompt('Qual o novo nome do bairro?: ')
        
        atualizarResidencias(id, {rua: novaRua, bairro: novoBairro, moradores: novosMoradores})
        
        console.log('Usuario atualizado!')
        exibirMenu()
        break;
    case '4':
        listarResidencias()

        let id2 = parseInt(prompt('Qual residencia deseja remover?: '))

        removerResidencia(id2)
        console.log('Removido')

        exibirMenu()
        break;
    case '5':
        break;
    default:
        console.log('Numero Invalido')
        exibirMenu()
        break;
    }
}

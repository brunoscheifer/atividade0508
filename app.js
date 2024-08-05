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
        
        let rua = prompt('Qual rua deseja adicionar?: ');
        let bairro = prompt('Qual bairro está a residencia?: ');
        let numero = prompt('Qual o numero da residencia?: ');
        let moradores = prompt('Quais os moradores da casa?: ');

        adicionarResidencias({rua, bairro, numero, moradores})
        console.log('Residencia adicionada!')
        
        exibirMenu()
        break;
    case '3':
        listarContatos()
        index = parseInt(prompt('Qual residencia deseja atualizar?: ')) - 1

        let novaRua = prompt('Nome da rua?: ')
        let novoBairro = prompt('Qual o nome do bairro?: ')
        let novoNumero = prompt('Qual o novo numero?:')
        let novosMoradores = prompt('Qual os moradores novos?: ')

        atualizarResidencias(index, {rua: novaRua, bairro: novoBairro, numero: novoNumero, moradores: novosMoradores})
        console.log('Residencia atualizada!')

        exibirMenu()
        break;
    case '4':
        
        index = parseInt(prompt('Qual residencia deseja remover?: ')) - 1

        removerResidencia(index);
        console.log('Residencia removida!')

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

import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'

const handleNovoItem = (event) => {
    event.preventDefault()
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    const calendario  = moment(document.querySelector('[data-form-date]').value)
    const dataFormatada =  calendario.format('DD/MM/YYYY')

    const dados = {
        valor,
        dataFormatada
    }

    lista.appendChild(criarTarefa(dados));
    input.value = " "
}

const criarTarefa = ({valor, dataFormatada}) => {
    
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')

    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
   
    return tarefa;
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)
import { CarregaTarefa } from './carregaTarefa.js';
import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'


export const HandleNovoItem = (event) => {
    event.preventDefault()
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    const calendario = moment(document.querySelector('[data-form-date]').value);
    const dataFormatada = calendario.format('DD/MM/YYYY');

    const dados = {
        valor,
        dataFormatada
    };

    const tarefasAtualizadas = [...tarefas, dados];

    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));

    input.value = " ";

    CarregaTarefa();
}

export const Tarefa = ({ valor, dataFormatada }) => {

    const tarefa = document.createElement('li');
    tarefa.classList.add('task')

    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa;
}
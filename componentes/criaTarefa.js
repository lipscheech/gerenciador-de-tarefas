import { CarregaTarefa } from './carregaTarefa.js';
import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'


export const HandleNovoItem = (event) => {
    event.preventDefault()
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    const calendario = moment(document.querySelector('[data-form-date]').value);
    const horario  = calendario.format('HH:mm')
    const dataFormatada = calendario.format('DD/MM/YYYY');
    const concluida = false;

    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    };

    const tarefasAtualizadas = [...tarefas, dados];

    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));

    input.value = " ";

    CarregaTarefa();
}

export const Tarefa = ({ valor, horario, concluida }, id) => {

    const tarefa = document.createElement('li');

    const conteudo = `<p class="content">${horario} * ${valor}</p>`
    if(concluida) {
        tarefa.classList.add('task');
        tarefa.classList.add('done');
    } else {
        tarefa.classList.add('task');
        
    }

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui(CarregaTarefa, id))
    tarefa.appendChild(BotaoDeleta(CarregaTarefa, id))

    return tarefa;
}
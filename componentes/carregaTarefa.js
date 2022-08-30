import { ordenaDatas, removeDatasRepetidas } from "../service/data.js";
import { criarData } from "./criaData.js";

export const CarregaTarefa = () => {
    const lista = document.querySelector('[data-list]');
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];

    lista.innerHTML = " ";

    const datasunicas = removeDatasRepetidas(tarefasCadastradas);
    ordenaDatas(datasunicas);

    datasunicas.forEach((tarefa) => {
        lista.appendChild(criarData(tarefa));
    })
}
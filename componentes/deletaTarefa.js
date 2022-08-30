const BotaoDeleta = (atualiza, id) => { 
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', () => deletarTarefa(atualiza, id))

    return botaoDeleta
}

const deletarTarefa = (atualiza, id) => { 
    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'));
    tarefaCadastradas.splice(id, 1)
    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastradas));
    atualiza();

}

export default BotaoDeleta
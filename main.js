import { HandleNovoItem } from "./componentes/criaTarefa.js"
import { CarregaTarefa } from "./componentes/carregaTarefa.js";

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', HandleNovoItem);

CarregaTarefa();
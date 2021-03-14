const botao = document.querySelector('#botao');

botao.addEventListener('click', function(event){
    event.preventDefault();

    const campoDaTarefa = document.querySelector('#input-novatarefa');
    const span = document.querySelector('span');
    if(campoDaTarefa.value.length == 0){
        span.innerHTML = 'Please, type your task!';
    }else{
        span.innerHTML = '';
        const ul = document.querySelector('ul');
        const tarefaNova = criaItem();
        ul.appendChild(tarefaNova);
    }

    const form = document.querySelector('form');
    form.focus();
    form.reset();
});

function obtemTarefaDoCampo(){
    const campoDaTarefa = document.querySelector('#input-novatarefa');
    tarefa = campoDaTarefa.value;
    return tarefa;
}

function criaItem(){
    const li = document.createElement('li');
    li.textContent = obtemTarefaDoCampo();
    return li;
}

//colocar texto do input (com filtro e select) no container com as 'tarefas'
const formulario = document.getElementById ('insiraItem');
const inputItem = document.getElementById('inputItem');
const toDo = document.getElementById('toDo');// ul onde vou deixar todas minhas tarefas
const btnAdd = document.getElementById('btnAdd')
const btnNext = document.getElementById('btnNext')

// -no botão add inserir um event listener para o click

let divErro = document.querySelector('.divErro');
let erro = document.createElement('p');

btnAdd.addEventListener("click", function(){
    if(inputItem.value.trim() === ''){
        
    }
})

// construir um botão proxima etapa que envia para uma section que contém a segunda etapa com as ex

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    let item = inputItem.value;
    let dragging;  

    item = item.trim();

    if (item === ''){      

        erro.textContent = 'insira um item!';
        erro.classList.add('erro');
        divErro.appendChild(erro);
        
    }else{
        erro.textContent='';
        // erro.remove('erro')
        erro.remove('erro')
        erro.classList.remove('erro');
        
        let divFilha = document.createElement('div');
        toDo.appendChild(divFilha)    
    
        let listaMercado = document.createElement('p')
        divFilha.appendChild(listaMercado);
        divFilha.classList.add("item");

        listaMercado.addEventListener('dblclick', function(){
            listaMercado.classList.remove('')            
            listaMercado.setAttribute('contentEditable', true)

        })

        if (toDo.childElementCount === 0){
            btnNext.classList.add('btnNext_hide')

            console.log('feijoada');
            
        } else {
            console.log(btnNext.classList);
            btnNext.classList.remove('btnNext_hide')
            btnNext.classList.add('btn-dark')
            
            

        }

    
        let botaoX = document.createElement('button')
        divFilha.appendChild(botaoX);        
        botaoX.setAttribute('class', 'botaoX btn-outline-secondary')
        botaoX.textContent = 'X'
    
        toDo.setAttribute('draggable','true');
        divFilha.setAttribute('draggable','true');

        divFilha.classList.add("itemLista");
        
        listaMercado.textContent = item;    
        listaMercado.classList.add('textoItem')


        // listaMercado.addEventListener('click', function(){

        //     if(listaMercado.classList.contains('checkItem')){
        //         listaMercado.classList.remove('checkItem');
        //     }else{
        //     listaMercado.classList.add('checkItem');
        //     }
        // })
        
        botaoX.addEventListener('click', function(){
            divFilha.remove()         
        })



        // toDo.addEventListener('dragstart', function(evento) {
        //     dragging = evento.target.closest('.itemLista');
        //     console.log(divFilha)
        // })
        
        // toDo.addEventListener('dragover', function(evento) {
        //     evento.preventDefault();
        //     const node = evento.target.closest('.itemLista')
        //     this.insertBefore(dragging, node)
        //     console.log(divFilha)
        // })



        
        // toDo.addEventListener('dragend', function(evento){
            
        //     dragging = null
        // })   

        formulario.reset();
    }
})
const input=document.querySelector('.input')
const toDoBox = document.querySelector('.toDoBox')


input.addEventListener('keyup',function(e){

    if(e.key=='Enter'){
        addToDo(this.value)
        this.value=''
    }
})


function addToDo(list){
    const li=document.createElement('li')
    li.innerHTML=`${list}<i class="fa-solid fa-check done"></i><i class="fa-solid fa-xmark remove"></i>`
    li.classList.add('list')
    toDoBox.appendChild(li) 

    const remove=li.querySelector('.remove')
    const done=li.querySelector('.done')

    remove.addEventListener('click',()=>{
        li.remove()
    })

    done.addEventListener('click',()=>{
        li.style.textDecoration='line-through'
    })
}


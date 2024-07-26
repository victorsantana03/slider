let btnNext = document.querySelector(".next")
let btnBack = document.querySelector(".back")

let container = document.querySelector("main")
let list = document.querySelector("main .list")
let thumb = document.querySelector("main .thumb")

btnNext.onclick = () => moveItemsOnClick ("next")
btnBack.onclick = () => moveItemsOnClick ("back")

function moveItemsOnClick(type){
    let listItems = document.querySelectorAll(".list .list-item")
    let thumbItems = document.querySelectorAll(".thumb .thumb-item")

    if(type === "next"){
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
        container.classList.add('next')
    } else{
        list.prepend(listItems[3])
        thumb.prepend(thumbItems[3])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 1000);
    
}
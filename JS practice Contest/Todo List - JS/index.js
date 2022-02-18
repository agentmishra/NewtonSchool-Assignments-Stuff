const addB = document.getElementsByClassName('todo-button')[0];
const listB = document.getElementsByClassName('todo-list')[0];

function addElement(){
    const textB = document.getElementsByClassName('todo-input')[0];
    const inputText = textB.value;
    console.log(inputText);
    if(inputText){
        createItem(inputText);
    }
}

function createItem(value){
    const newD = document.createElement('div');
    const item = document.createElement('li');
    item.setAttribute('class','todo-item');
    item.innerText = value;
    // const p = document.createElement('p');
    // p.innerText = value;
    const complete = document.createElement('button');
    complete.innerText = "completed";
    complete.setAttribute('class','complete-btn');
    const trash = document.createElement('button');
    trash.innerText = "delete";
    trash.setAttribute('class','trash-btn');
    // item.append(...[p,complete,trash]);
    newD.append(...[item, complete, trash]);
    listB.appendChild(newD);
}

addB.addEventListener('click',function(event){
    event.preventDefault();
    addElement();

});

document.addEventListener('click',function(event){
    if(event.target.className === "trash-btn"){
        // console.log(event.target);
        const removeItem = event.target.parentNode ;
        // console.log(removeItem);
        removeItem.remove();
    }
    else if(event.target.className === "complete-btn"){
        const removeItem = event.target.parentNode.childNodes[0] ;
        if(removeItem.classList.contains('strikeh')){
            removeItem.classList.remove('strikeh');
        }
        else
        {
            removeItem.classList.add('strikeh');
        }


    }
})

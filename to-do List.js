const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
    constructor(itemName){
        //Creating the item div
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type= 'text';

        let itemBox=document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = 'EDIT';
        editButton.classList.add('editButton');

        let removeButton=document.createElement('button');
        removeButton.innerHTML = 'REMOVE';
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click',() => this.edit(input));
        removeButton.addEventListener('click',()=>this.remove(itemBox));
    } 
    edit(input){
        input.disabled = !input.disabled;
        // input.focus=autofocus();
        // input.document.autofocus;        
    }

    remove(item){        
        let con=confirm("Is this task is completed");
        if(con){
            container.removeChild(item);            
        }
    }
    
}

// new item("Sport");
let values = [];
function check(){    
    val = (input.value).charAt(0).toUpperCase() + input.value.slice(1);
    if(input.value != "" ){
        if(values.includes(val)){
            alert("This task already exist...");
            return;
        }
        new item(val);        
        values.push(val);
        // need to check for duplicate entry
        // duplicatedEntry(input.value);        
        input.value = "";              
    }
}

function duplicatedEntry(str){

}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e)=> {  
    if(e.which ==13){
        check(); 
        
    }
})


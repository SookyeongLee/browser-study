const addBtn = document.querySelector('.shopping__btn');
const input = document.querySelector('.shopping__input');
const items = document.querySelector('.items');
const trashBox = document.querySelector('.trashBox');
const trash = document.querySelector('.trash');

addBtn.addEventListener('click', updateItem());
// input.addEventListener('keydown', () => {
//     if (keyCode === 13){
//         updateItem();
//     }       
// });

function updateItem() {
    
    input.addEventListener('change', (e) => {
        //Add item               
        const item = document.createElement('li');
        item.setAttribute('class', 'item');
        item.textContent = e.target.value;
        items.appendChild(item);

        //Add trash icon        
        const trash = document.createElement('li');
        trash.setAttribute('class', 'trash');
        const icon = document.createElement('i');
        icon.setAttribute('class', 'fas fa-trash-alt');
        trash.appendChild(icon);
        trashBox.appendChild(trash);
    });
}

trashBox.addEventListener('click', (e) => {
    deleteTrash = e.target.parentNode;
    console.log(deleteTrash); //li
    console.log(e.target); //i
    trashBox.removeChild(deleteTrash);   
});
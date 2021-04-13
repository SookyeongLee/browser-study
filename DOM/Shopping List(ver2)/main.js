const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const button = document.querySelector('.footer__btn');

input.focus();

button.addEventListener('click', ()=>{
    updateItem();
});

input.addEventListener('keyup',  (event)=>{
    if(event.key === 'Enter'){
        updateItem();
    }
});

items.addEventListener('click', (event) =>{
    const id = event.target.dataset.id;
    if(id){
        const item = document.querySelector(`.item[data-id="${id}"]`);         
        item.remove();
    }
});

function updateItem(){
    
    //1. input박스에 적은 text 받아오기
    const text = input.value;

    if(text === ''){
        input.focus();
        return;
    }

    //2. 새로운 item을 생성
    const item = makeItem(text);

   //3. items에 item list를 추가
    items.appendChild(item);

    //4. 추가된 item으로 스크롤링
    item.scrollIntoView();

    //5. input을 초기화하고 focus 다시 주기   
    input.value = '';
    input.focus();
}

let id = 0;
function makeItem(text){
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.setAttribute('data-id', id);
    li.innerHTML = `
        <div class="item__container">
            <span class="item__name">${text}</span>
            <button class="item__trash">
                <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
        </div>
        <div class="item__divider"></div>
    `;

    id++;
    return li;
}



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

function updateItem(){
    
    //1. input박스에 적은 text 받아오기
    const text = input.value;

    if(text === ''){
        input.focus();
        return;
    }

    //2. 새로운 item을 생성
    const li = document.createElement('li');
    li.setAttribute('class', 'item');

    const item = document.createElement('div');
    item.setAttribute('class', 'item__container');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.textContent = text;

    const trash = document.createElement('button');
    trash.setAttribute('class', 'item__trash');
    trash.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trash.addEventListener('click', () =>{
        items.removeChild(li);
    });

    const divider = document.createElement('div');
    divider.setAttribute('class', 'item__divider');   

   //3. items에 item list를 추가
    item.appendChild(name);
    item.appendChild(trash);
    li.appendChild(item);
    li.appendChild(divider);
    items.appendChild(li)

    //4. 추가된 item으로 스크롤링
    li.scrollIntoView();

    //5. input을 초기화하고 focus 다시 주기   
    input.value = '';
    input.focus();
}


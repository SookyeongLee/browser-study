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
    if(event.target.tagName == 'I'){
        items.removeChild(event.target.parentNode.parentNode.parentNode);
        //event.target.parentNode.parentNode.parentNode.remove();
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

function makeItem(text){
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.innerHTML = `
        <li class="item">
            <div class="item__container">
                <span class="item__name">${text}</span>
                <button class="item__trash">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
            <div class="item__divider"></div>
        </li>
    `;

    // const item = document.createElement('div');
    // item.setAttribute('class', 'item__container');

    // const name = document.createElement('span');
    // name.setAttribute('class', 'item__name');
    // name.textContent = text;

    // const trash = document.createElement('button');
    // trash.setAttribute('class', 'item__trash');
    // trash.innerHTML = '<i class="fas fa-trash-alt"></i>';
    // 이벤트 위임을 이용해 개선
    // trash.addEventListener('click', () =>{
    //     items.removeChild(li);
    // });

    // const divider = document.createElement('div');
    // divider.setAttribute('class', 'item__divider');

    // item.appendChild(name);
    // item.appendChild(trash);
    // li.appendChild(item);
    // li.appendChild(divider);    
    return li;
}
const section = document.querySelector('.section');
const headerBtn = document.querySelector('.header__button');
const carrot = document.querySelector('.carrot');
let number = document.querySelector('.header__remainder');


headerBtn.addEventListener('click', () => {
    headerBtn.innerHTML = '<i class="fas fa-square"></i>';

    for(let i = 0; i<7; i++){
        const bugs = new Array();
        let bug = bugs[i];
        bug = document.createElement ( 'img');
        bug.setAttribute ( "class", "bug");
        bug.setAttribute ( "src", "img/bug.png");
        section.appendChild (bug);
        let xy = getRandomPosition (bug);
        bug.style.top = xy [0] + 'px';
        bug.style.left = xy [1] + 'px';
    }

    for(let i = 0; i<10; i++){
        const carrots = new Array();
        let carrot = carrots[i];
        carrot = document.createElement ( 'img');
        carrot.setAttribute ( "class", "carrot");
        carrot.setAttribute ( "src", "img/carrot.png");
        section.appendChild (carrot);
        let xy = getRandomPosition (carrot);
        carrot.style.top = xy [0] + 'px';
        carrot.style.left = xy [1] + 'px';  
        
        // 현재 화면에 표시된 값
        number = 10;
        number.textContent = `${number}`;

        carrot.addEventListener('click', () => {              
         // 빼기
        number = parseInt(number) - 1;
        console.log(`${number}`);

        // 결과 출력
        number.innerHTML = `${parseInt(number)}`;
        });
    }

});

function getRandomPosition (element) {
	let x = section.offsetHeight-element.clientHeight;
	let y = section.offsetWidth-element.clientWidth;
	let randomX = Math.floor (Math.random () * x);
	let randomY = Math.floor (Math.random () * y);
	return [randomX, randomY];
}



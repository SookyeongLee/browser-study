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
        document.body.appendChild (bug);
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
        document.body.appendChild (carrot);
        let xy = getRandomPosition (carrot);
        carrot.style.top = xy [0] + 'px';
        carrot.style.left = xy [1] + 'px';


        number.innerHTML = '10';
        carrot.addEventListener('click', () => {
            // 결과를 표시할 element
            const remainder = document.querySelector('.header__remainder');
            
            
            
            // 빼기
            number = parseInt(number) - 1;
            
        
            // 결과 출력
            remainder.innerText = number;
            });
    }

    // 현재 화면에 표시된 값
    number.innerHTML = '10';
    
});

function getRandomPosition (element) {
	let x = document.body.offsetHeight-element.clientHeight;
	let y = document.body.offsetWidth-element.clientWidth;
	let randomX = Math.floor (Math.random () * x);
	let randomY = Math.floor (Math.random () * y);
	return [randomX, randomY];
}
// window.onload = function () {
// 	let bug = document.createElement ( 'img');
// 	bug.setAttribute ( "style", "position : absolute;");
// 	bug.setAttribute ( "src", "img/bug.png");
// 	document.body.appendChild (bug);
// 	let xy = getRandomPosition (bug);
// 	bug.style.top = xy [0] + 'px';
// 	bug.style.left = xy [1] + 'px';
// }



// function count()  {
//     // 결과를 표시할 element
//     const remainder = document.querySelector('.header__remainder');
    
    
    
//     // 빼기
//     if(type === 'minus') {
//         number = parseInt(number) - 1;
//     }

//     // 결과 출력
//     remainder.innerText = number;
// }
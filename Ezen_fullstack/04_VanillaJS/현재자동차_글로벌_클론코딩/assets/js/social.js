const pop1 = document.querySelector('#popup1');
const pop2 = document.querySelector('#popup2');
const pop3 = document.querySelector('#popup3');
const pop4 = document.querySelector('#popup4');
const pop5 = document.querySelector('#popup5');
const pop6 = document.querySelector('#popup6');

// 소셜란 팝업 이벤트
document.querySelector('#s_img1').addEventListener('click', (e) => {
    e.preventDefault();
    pop1.classList.remove('none4');
});
pop1.addEventListener('click', (e) => {
    e.preventDefault();
    pop1.classList.add('none4');
});

document.querySelector('#s_img2').addEventListener('click', (e) => {
    e.preventDefault();
    pop2.classList.remove('none4');
});
pop2.addEventListener('click', (e) => {
    e.preventDefault();
    pop2.classList.add('none4');
});

document.querySelector('#s_img3').addEventListener('click', (e) => {
    e.preventDefault();
    pop3.classList.remove('none4');
});
pop3.addEventListener('click', (e) => {
    e.preventDefault();
    pop3.classList.add('none4');
});

document.querySelector('#s_img4').addEventListener('click', (e) => {
    e.preventDefault();
    pop4.classList.remove('none4');
});
pop4.addEventListener('click', (e) => {
    e.preventDefault();
    pop4.classList.add('none4');
});

document.querySelector('#s_img5').addEventListener('click', (e) => {
    e.preventDefault();
    pop5.classList.remove('none4');
});
pop5.addEventListener('click', (e) => {
    e.preventDefault();
    pop5.classList.add('none4');
});

document.querySelector('#s_img6').addEventListener('click', (e) => {
    e.preventDefault();
    pop6.classList.remove('none4');
});
pop6.addEventListener('click', (e) => {
    e.preventDefault();
    pop6.classList.add('none4');
});
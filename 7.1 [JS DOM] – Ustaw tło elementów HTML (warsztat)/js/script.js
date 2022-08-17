const setBackground = () => {
let p1=document.querySelector('.first');
let p2=document.querySelector('.last');
// p1.style.backgroundColor= 'red';
// p2.style.backgroundColor= 'yellow';
p1.classList.add('bg-red');
p2.classList.add('bg-yellow');
// p1.classList.toggle('bg-red');
// p2.classList.toggle('bg-yellow');
}
let buttonSet=document.querySelector('#setBg'); //getElementById
buttonSet.addEventListener('click', setBackground)

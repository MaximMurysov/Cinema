const button = document.getElementById('JS');
button.addEventListener('click', () =>{
    button.style.background = 'red';
    setTimeout(() => {
        button.style.background = ''
    }, 200);
})

const text = "Добро пожаловать на мой сайт!";
let i = 0;
const typewriter = setInterval(() => {
  document.querySelector('.typewriter').textContent += text[i];
  i++;
  if (i >= text.length) clearInterval(typewriter);
}, 100);
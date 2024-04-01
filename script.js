const container = document.querySelector('.container');
const toggle = document.querySelector('.toggle');
const toggleTwo = document.querySelector('.toggle-2');

toggle.addEventListener('click',()=>{
    container.classList.add('change');
})

toggleTwo.addEventListener('click',()=>{
    container.classList.remove('change');
})
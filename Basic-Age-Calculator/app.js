//toggling the calculator
const toggleBtn = document.querySelector('#toggle-calculator');
const calculatorWrapper = document.querySelector('.calculator-wrapper')
toggleBtn.addEventListener('click', () => {
    calculatorWrapper.classList.toggle('hidden');
    //changing the text of the button
    if(calculatorWrapper.classList.contains('hidden')){
        toggleBtn.textContent = 'Calculate Age'
    } else {
        toggleBtn.textContent = 'Close Calculator';
    }
})
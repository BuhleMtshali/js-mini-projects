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
});

//getting the date
const userDOB = document.querySelector('#user-dob');
const currentDate = document.querySelector('#current-dob');
const submitForm = document.querySelector('#submit-form');
const resetForm = document.querySelector('#reset-form');

submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const dateString = userDOB.value;
    const date = new Date(dateString);
    const year = date.getFullYear();
    console.log(year)
})
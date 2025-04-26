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
const reset = document.querySelector('#submit-btn');
const userAge = document.querySelector('#age');
submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const currentDay = new Date(currentDate.value);
    const userBirthDay = new Date(userDOB.value);
    let age = currentDay.getFullYear() - userBirthDay.getFullYear();
    const monthDiff = currentDay.getMonth() - currentDay.getMonth();
    if(monthDiff < 0 || (monthDiff === 0 && currentDay.getDate() < userBirthDay.getDate())){
        age --;
    }
    console.log(age)
    userAge.textContent = age;
    if(age){
        reset.textContent = 'Reset Age'
    }
    
})
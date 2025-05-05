let contactBook = [];
let name = document.querySelector("#name").value;
let lastName = document.querySelector("#lastName").value;
let number = document.querySelector("#number").value;

document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();
    let contact = {
        userName: name,
        userLastName: lastName,
        userNumber: number
    }
})



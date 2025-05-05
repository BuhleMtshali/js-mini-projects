let contactBook = [];

document.querySelector("#form").addEventListener("submit", addContact)


function addContact(e){
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let lastName = document.querySelector("#lastName").value;
    let number = document.querySelector("#number").value;

    let contact = {
        contactName: name,
        contactLastName: lastName,
        contactNumber: number
    }

    contactBook.push(contact);
    console.log(contactBook);

    document.querySelector("#form").reset();
}


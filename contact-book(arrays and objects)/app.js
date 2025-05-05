let contactBook = [];
let html = ''
let wrapper = document.querySelector('.contacts-wrapper');
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
    contactBook.forEach((item) => {
        html += `<div class="contact">
                 <p>${item.contactName}</p>
                <p>${item.contactLastName}</p>
                <p>${item.contactNumber}</p>
                </div>
          `
          wrapper.innerHTML = html;
    })
    document.querySelector("#form").reset();
}


let contactBook = [];
let wrapper = document.querySelector('.contacts-wrapper');

document.querySelector("#form").addEventListener("submit", addContact);

function addContact(e){
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let lastName = document.querySelector("#lastName").value;
    let number = document.querySelector("#number").value;

    let contact = {
        contactName: name,
        contactLastName: lastName,
        contactNumber: number
    };

    contactBook.push(contact);
    renderContacts(); // render fresh list
    document.querySelector("#form").reset();
}

function renderContacts() {
    let html = '';
    contactBook.forEach((item, index) => {
        html += `
            <div class="contact">
                <p>${item.contactName}</p>
                <p>${item.contactLastName}</p>
                <p>${item.contactNumber}</p>
                <span class="material-icons delete-btn" data-index="${index}">delete</span>
            </div>
        `;
    });
    wrapper.innerHTML = html;

    // re-attach delete event listeners
    document.querySelectorAll('.delete-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const index = btn.getAttribute('data-index');
            contactBook.splice(index, 1);
            renderContacts(); // rerender after delete
        });
    });
}

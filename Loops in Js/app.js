const listWrapper = document.querySelector('.list-wrapper')
const data = [
    {
        id: 1,
        name: "Zach",
        age: 23,
        profession: "Doctor"
    },
    {
        id: 2,
        name: "Mandy",
        age: 21,
        profession: "Nun"
    },
    {
        id: 3,
        name: "Lucy",
        age: 29,
        profession: "Nurse"
    },
    {
        id: 4,
        name: "Linda",
        age: 24,
        profession: "Influencer"
    },
    {
        id: 5,
        name: "Ted",
        age: 31,
        profession: "Engineer"
    },
]

// for(let i = 0; i <= data.length; i++){
//     renderData(i)
// }

// function renderData(i){
//     console.log(i)
// }
let html = '';
data.forEach((item) => {
    console.log(item.age)
   
    html += `
            <div class="item">
            <p>${item.name}</p>
            <p>${item.age}</p>
            <p>${item.profession}</p>
            </div>
            `;

})

listWrapper.innerHTML = html;
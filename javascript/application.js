const students = ['Draco', 'Hermione', 'Neville', 'Ginny']

let listContent = ''

students.forEach((student) => {
    const listItem = `<li>${student}</li>`
    listContent += listItem
  // <li>Draco</li>
  // <li>Hermione</li>
})

console.log(listContent)

const unorderedList = `<ul id="hogwarts">${listContent}</ul>`
console.log(unorderedList)

// <ul><li></li><li></li><li></li></ul>

const container = document.querySelector('.container')
console.log(container)
container.insertAdjacentHTML('beforeend', unorderedList)

const listItems = document.querySelectorAll('#hogwarts li')
console.log(listItems)

listItems.forEach((item) => {
  console.log(item)
  item.innerText += '🧙'
})

const ul = document.querySelector('ul#hogwarts')
ul.style.listStyleType = "upper-roman";

const messi = document.querySelector('#messi')
console.log(messi.dataset) // Return an object with all HTML attributes prefixed by DATA. EX: data-team, data-world-best
console.log(messi.dataset.team)
console.log(messi.dataset.worldBest)


const members = document.querySelectorAll('.abba')
console.log(members)
members.forEach((member) => {
  member.innerText += ` (${member.dataset.instrument})`
})


// MANTRA FOR TODAY!!!
// element.addEventListener(eventType, (event) => {
//   // Do something (callback)
// });

// // CODE BELOW IS COMMENTED OUT
// // BECAUSE WE ARE DOING IT AGAIN
// // WHEN ITERATING BELOW!!!
// const img = document.getElementById('romain')
// console.log(img)
// img.addEventListener('click', (event) => {
//   console.log(event);
//   console.log(event.currentTarget); // returns the element whom FIRED the event
//   event.currentTarget.classList.toggle('img-circle')
// });

// 1. select the RIGHT element(s)
const images = document.querySelectorAll('img')
// 2. bind the event listener to all element
images.forEach((image) => {
  image.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('img-circle')
  })
})
// 3. inside the event listener we manipulate


const link = document.querySelector('#link')
link.addEventListener('click', (event) => {
  event.preventDefault()
  console.log(event)
})

// 1. Select the right Elements
// button, checkboxes
const btn = document.querySelector('.btn-light')
const checkboxes = document.querySelectorAll('.form-check-input')

// 2. Bind the event listener
btn.addEventListener('click', (event) => {
  console.log(event)
  // 3. iterate over the checkboxes
  checkboxes.forEach((checkbox) => {
    console.log(checkbox.checked)
    // if (checkbox.checked) {
    //   checkbox.checked = false
    // } else {
    //   checkbox.checked = true
    // }
    checkbox.checked = !checkbox.checked
  })
})

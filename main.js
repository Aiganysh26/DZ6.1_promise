const block = document.querySelector('.block')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
const btns = document.querySelector('.btns')
let count = 1

btns.onclick = (event) => {
  if(event.target.tagName === 'BUTTON'){
    event.target.onclick = (event) => {
      if(event.target.classList.contains('next-btn')){
        count ++
      } else if (event.target.classList.contains('prev-btn')){
        count--
      }
      fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
          block.innerHTML = `
            <h2>${data.title}</h2>
            <span>${data.id}</span>
            <h3>${data.completed}</h3>
          `
        })

    }
  }
}
let container = document.querySelector('.container')
let canvas = document.querySelector('.canvas')
container.addEventListener('mousemove', (e) => {
   let x = e.clientX - container.getBoundingClientRect().left
   let y = e.clientY - container.getBoundingClientRect().top
   canvas.style.transform = `translate(-${x}px, -${y * 1.5}px)`
})

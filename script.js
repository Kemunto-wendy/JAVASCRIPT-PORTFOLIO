document.addEventListener('DOMContentLoaded', () => {
    console.log('After DOM Loaded')
})
console.log('Before DOM Loads')
console.log(document.querySelector('div'))
console.log(document.querySelector('h3'))

const h1 = document.querySelector("h1");
console.log(h1.textContent);
console.log(document.querySelector('h1'))
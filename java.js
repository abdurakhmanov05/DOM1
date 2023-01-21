let h1 = document.querySelector('h1')
let click = document.querySelector('.click')
let click2 = document.querySelector('.click2')
let click3 = document.querySelector('.click3')
let random = document.querySelector('.random')

click3.onclick = () => {
    if(h1.innerHTML < 1000) {
        h1.textContent++
    }
}

click.onclick = () => {
    if(h1.innerHTML >= -999) {
        h1.textContent--
    }
}

click2.onclick = () => {
    h1.innerHTML = 0
}

random.onclick = () => {
    let rd = Math.round(Math.random() * 1000) 
    h1.innerHTML = rd
    console.log(rd);
}

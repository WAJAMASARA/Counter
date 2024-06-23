let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");


let count = 0;

function increment() {
    count++;
    countEl.innerText = count;
}

function save() {
    let final = count;
    saveEl.innerText += " " + final + " - ";
}

function reset() {
    countEl.innerText = 0;
    count = 0;
}
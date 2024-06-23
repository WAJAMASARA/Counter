let countEl = document.getElementById("count-el");


let count = 0;

function increment() {
    count++;
    countEl.innerText = count;
}

function save() {
    let final = count;
}

function reset() {
    countEl.innerText = 0;
    count = 0;
}
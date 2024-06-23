
//get count-el element by id in the h2 header
let countEl = document.getElementById("count-el");

//get save-el element by id in the h3 header
let saveEl = document.getElementById("save-el");


let count = 0;

//increment the count
function increment() {
    count++;
    countEl.innerText = count;
}

//save the people increment in the entries
function save() {
    let final = count;
    saveEl.innerText += " " + final + " -";
}

//remove the all the data
function remove() {
  countEl.innerText = 0;
  count = 0;
  saveEl.innerText = "Previous entries: ";
}
// reset the people increment
function reset() {
    countEl.innerText = 0;
    count = 0;
}
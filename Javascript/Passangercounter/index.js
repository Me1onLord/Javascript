let count =0;
let saveEl = document.getElementById("save-el");


function increment() {
    count += 1;
    document.getElementById("count-el").textContent = count;
}

function save() {
    let savedvalue = count + " - ";
    saveEl.textContent += savedvalue;sd
}


function reset() {
    count = 0;
    document.getElementById("count-el").textContent = count;
    saveEl.textContent = "Previous Entries: "
}
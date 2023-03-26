let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log("KWHBFBE")

function increment() {
    count += 1
    if (count > 10){
        count = 10
    }    
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr

    if (count < 10) {
        countEl.textContent = "Incorrect. Try again!"
    }
    else{
        countEl.textContent = "Correct! "
    }
    count = 0
}

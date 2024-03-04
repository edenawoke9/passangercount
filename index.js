 


function increment(){
    console.log("Here increment")    
    const numberOfPassangersLabel = document.getElementById('count')
    const numberOfPassanges = Number(numberOfPassangersLabel.innerHTML)

    numberOfPassangersLabel.innerHTML = numberOfPassanges + 1
}

function save() {
    let saveEl= document.getElementById("save-el")
    const numberOfPassangersLabel = document.getElementById('count')
    const numberOfPassanges = Number(numberOfPassangersLabel.innerHTML)
    let countersave = numberOfPassanges + "-";
    
    saveEl.textContent += countersave;
    numberOfPassangersLabel.innerHTML = 0; // Reset count
    numberOfPassanges = numberOfPassangersLabel; // Update displayed count
}
console.log("hi")

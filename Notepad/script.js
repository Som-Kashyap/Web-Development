
const addbtn = document.querySelector("#add");
const input = document.querySelector("#textInput");
const container = document.querySelector("#container");
const delbtn = document.querySelector("#remove");

window.addEventListener("DOMContentLoaded" , () => {

    const saveText = JSON.parse(localStorage.getItem("textItems"))||[];
    saveText.forEach(text => AddDiv(text));

});

addbtn.addEventListener("click" , () => {

    const text = input.value.trim();

    if(!text) {
        alert("Can't save null! Enter something");
        return;
    }

    AddDiv(text);
    Save(text);
    input = ""; 

});

delbtn.addEventListener("click" , () => {

    if( confirm("Are you sure you want to delete all the text?")) {
        container.innerHTML="";
        localStorage.removeItem("textItems");
        text = "";
    }

});

function AddDiv (text) {

    const newText = document.createElement("div");
    newText.textContent = (text);
    container.appendChild(newText);
    
}

function Save (text) {

    const saveText = JSON.parse(localStorage.getItem("textItems")) || [];
    saveText.push(text);
    localStorage.setItem("textItems" , JSON.stringify(saveText));

}
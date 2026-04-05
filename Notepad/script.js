
const addbtn = document.querySelector("#add");
const input = document.querySelector("#textInput");
const container = document.querySelector("#container");
const delbtn = document.querySelector("#remove");
const themebtn = document.querySelector("#theme");
const notepad = document.querySelector("#notepad");

const bgcolorsArray = ['#A1D2CE' , '#62A8AC'];
const notepadColorsArray = ['#50858B','#78CAD2'];
const notepadTextColorArray = ['#152926' , '#37626D'];

themebtn.addEventListener("click" , () => {

    const randomBg =bgcolorsArray[Math.floor(Math.random() * bgcolorsArray.length )];
    const randomNp = notepadColorsArray[Math.floor(Math.random() * notepadColorsArray.length)];
    const randomtxt = notepadTextColorArray[Math.floor(Math.random() * notepadTextColorArray.length )];

     document.body.style.backgroundColor = randomBg;
    document.getElementById("notepad").style.backgroundColor = randomNp;
    document.getElementById("notepad").style.color = randomtxt;

});

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
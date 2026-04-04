const input = document.querySelector("#taskInput");
const addbtn = document.querySelector("#add");

addbtn.addEventListener("click" , () => {

    const value = input.value.trim();

    if ( value === "" ) return;

    const li = document.createElement("li");
    li.textContent=(value);

})
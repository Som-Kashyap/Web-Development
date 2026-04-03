let count = 0;

const display = document.querySelector("#count");

const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");
const reset = document.querySelector("#reset");

inc.addEventListener("click" ,  () => {

    count++;
    display.textContent = count;

});

dec.addEventListener ("click" , () => {
    count--;
    display.textContent = count;

});

reset.addEventListener("click" , () => {
    count = 0;
    display.textContent = count;
});
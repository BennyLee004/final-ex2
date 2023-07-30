
let body = document.querySelector("body");
let input = document.getElementById("colorPicker");
let colorCode = document.getElementById("colorCode");
console.log(input.value)
setColor();
input.addEventListener("input", setColor);

function setColor() {
	body.style.backgroundColor = input.value;
	colorCode.innerHTML = input.value;

}

function myFunction() {
    input.type = 'text'
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value);
    input.type = 'color'
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + input.value;
}


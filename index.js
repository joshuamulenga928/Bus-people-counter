let saveEl = document.getElementById("save-el");
let count = 0;
let rest = 0;

function increment() {
  count += 1;
  document.getElementById("count-el").textContent = count;
}
function save() {
  let countstr = count + " - ";
  saveEl.textContent += countstr;
  document.getElementById("count-el").innerHTML = rest;
  count = 0;
}

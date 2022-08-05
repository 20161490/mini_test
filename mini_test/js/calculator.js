var expression = "";
function add(character) {
  expression = expression + character;
  document.getElementById("result-input").value = expression;
}

function compute() {
  document.getElementById("result-input").value = eval(expression);
}

function clearDisplay() {
  expression = "";
  document.getElementById("result-input").value = "0";
}
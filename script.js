let displayValue = '';

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

function appendDigit(digit) {
  displayValue += digit;
  updateDisplay();
}

function appendOperator(operator) { // Funcion para introducir el operador de suma
  displayValue += operator;
  updateDisplay();
}

function clearDisplay() { // Funcion para resetear la calculadora
  displayValue = '';
  updateDisplay();
}

function deleteDigit() { // Funcion para borrar un digito introducido en la calculadora
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function calculate() {
  let result;
  try {
    result = eval(displayValue);
  } catch (error) {
    result = 'Error';
  }
  displayValue = result;
  updateDisplay();
}

updateDisplay();

let input = document.querySelector(".user_number");
let resultado = document.querySelector(".resultado");

function add() {
  let inputValue = Number(input.value);

  if (inputValue >= 2) {
    let sum = 0;
    while (inputValue >= 1) {
      sum += inputValue;
      inputValue--;
    }
    resultado.value = sum;
    setTimeout(() => {
      resultado.value = "";
    }, 2000);
  }
}

function clearResult() {
  if (input.value === "") {
    resultado.innerHTML = "";
  }
}

input.addEventListener("input", add);

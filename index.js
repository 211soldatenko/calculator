const button = document.getElementById("button");

function containsNumbers(str) {
  return str.match(/^[0-9]+$/) != null;
}

button.addEventListener("click", () => {
  let priceInput = document.getElementById("price");
  let amountInput = document.getElementById("amount");
  if (+priceInput.value && +amountInput.value) {
    let price = parseInt(priceInput.value) * parseInt(amountInput.value);
    alert(price);
  } else {
    alert("Check your values");
  }
});

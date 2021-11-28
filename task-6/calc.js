'use strict'
function updatePrice() {
  let s = document.getElementsByName("prodType");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }
  
  const reg = /[^0-9]|\b0[0-9]+/;
  let flag = true;
  let prodAmount = document.getElementsByName("prodAmount");
  if(reg.test(prodAmount[0].value) === true){
    alert("Вводите только пололожительные числа!");
    flag = false;
  }
  price*=prodAmount[0].value;

  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = (select.value == "2" ? "block" : "none");
  
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    if (radio.checked) {
      let optionPrice = prices.prodOptions[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;
      }
    }
  });

  let checkDiv = document.getElementById("checkboxes");
  checkDiv.style.display = (select.value == "3" ? "block" : "none");

  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) {
        price += propPrice;
      }
    }
  });

  if(flag){
    let prodPrice = document.getElementById("prodPrice");
    prodPrice.innerHTML = price + " рублей";
  }
}

function getPrices() {
    return {
        prodTypes: [150, 200, 250],
        prodOptions: {
            option1: 50,
            option2: 70,
            option3: 100,
        },
        prodProperties: {
            prop1: 300,
            prop2: 5000,
        }
    };
 }

function Back() {
  document.getElementsByName("prodAmount")[0].value = "";
  let select = document.getElementsByName("prodType");
  select[0].value = "";
  let radios = document.getElementById("radios");
  radios.style.display = ("none");
  let checkbox = document.getElementById("checkboxes");
  checkbox.style.display = ("none");
  let result = document.getElementById("prodPrice");
  result.innerHTML = "0 ";
  return false;
}

window.addEventListener('DOMContentLoaded', function (event) {
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = "none";

  let pA = document.getElementsByName("prodAmount");
  let prodAmount = pA[0];
  prodAmount.addEventListener("change", function(event) {
    updatePrice;  
  });

  let s = document.getElementsByName("prodType");
  let select = s[0];
  select.addEventListener("change", function(event) {
    let target = event.target;
    console.log(target.value);
    updatePrice();
  });
   
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      console.log(r.value);
      updatePrice();
    });
  });

  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
      let c = event.target;
      console.log(c.name);
      console.log(c.value);
      updatePrice();
    });
  });

  let Button = document.getElementById("back");
  Button.addEventListener("click", function(event) {
    Back();
  });

  updatePrice();
});




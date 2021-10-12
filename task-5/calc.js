
  function click1() {
  let f1 = document.getElementsByName("price");
  let f2 = document.getElementsByName("number");
  if ((/^(0|[1-9]\d*)$/.test(f1[0].value)) && (/^(0|[1-9]\d*)$/.test(f2[0].value))) {
  let r = document.getElementById("result");
  r.innerHTML = f1[0].value * f2[0].value;
  return false;
  }
  else {
	  alert("Некорректный тип данных");
	  return false;
	}
  }

/*window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("button1");
  b.addEventListener("click", click1);
});*/

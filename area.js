//variable for the area
var height = document.getElementById("input_height");
var base = document.getElementById("input_base");
var validTriangleContainer =
  document.getElementsByClassName("triangle-container");
var btnCalculateHypotenuse = document.getElementById(
  "btn_calculate_hypotensue"
);

btnCalculateHypotenuse.addEventListener("click", function () {
  if (height.value === "" || base.value === "") {
    alert("Please Enter the value of the Base/Height Side");
  } else {
    if (document.getElementById("result")) {
      document.getElementById("result").remove();
    }
    var area = 0.5 * (parseInt(height.value) * parseInt(base.value));
    console.log(area)
    var result = document.createElement("h2");
    result.innerText = `The value of the Area = ${area}`;
    result.setAttribute("id", "result");
    validTriangleContainer[0].appendChild(result);
  }
});

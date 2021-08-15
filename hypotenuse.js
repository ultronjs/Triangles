//variable for the hypotensues
var firstSide = document.getElementById("input_first_side");
var secondSide = document.getElementById("input_second_angle");
var validTriangleContainer =document.getElementsByClassName("triangle-container");
var btnCalculateHypotenuse = document.getElementById("btn_calculate_hypotensue");

btnCalculateHypotenuse.addEventListener("click", function () {
  if (firstSide.value === "" || secondSide.value === "") {
    alert("Please Enter the value of the First/Second Side");
  } else {
    if (document.getElementById("result")) {
      document.getElementById("result").remove();
    }
    var hypotensues = Math.pow(
      Math.pow(parseInt(firstSide.value), 2) +
        Math.pow(parseInt(secondSide.value), 2),
      0.5
    );          ;
      var result = document.createElement("h2");
      result.innerText = `The value of the Hypotenuse = ${hypotensues}`;
      result.setAttribute("id", "result");
      validTriangleContainer[0].appendChild(result);
  }
});

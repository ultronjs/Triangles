//variable for the type of traingle
var firstAngle = document.getElementById("input_first_angle");
var secondAngle = document.getElementById("input_second_angle");
var thirdAngle = document.getElementById("input_third_angle");
var btnCheckValidTriangle = document.getElementById("btn_valid_triangle");
var validTriangleContainer =
  document.getElementsByClassName("triangle-container");

btnCheckValidTriangle.addEventListener("click", function () {
  if (firstAngle.value === "") {
    alert("Please Enter the value of the First Angle");
  } else if (secondAngle.value === "") {
    alert("Please Enter the value of the Second Angle");
  } else if (thirdAngle.value === "") {
    alert("Please Enter the value of the Third Angle");
  } else {
    if (document.getElementById("heading")) {
      document.getElementById("heading").remove();
    } 
    if (
      parseInt(firstAngle.value) === 90 ||
      parseInt(secondAngle.value) === 90 ||
      parseInt(thirdAngle.value) === 90
    ) {
      var result = document.createElement("h1");
      result.innerText = "The Triangle is Right Angle Triangle";
      result.setAttribute("id", "heading");
      console.log("Right Angle Triangle");
    } else if (
      parseInt(firstAngle.value) > 90 ||
      parseInt(secondAngle.value) > 90 ||
      parseInt(thirdAngle.value) > 90
    ) {
      var result = document.createElement("h1");
      result.innerText = "The Triangle is Obtuse Angle Triangle";
      result.setAttribute("id", "heading");
      console.log("Obtuse Angle Triangle");
    } else {
      var result = document.createElement("h1");
      result.innerText = "The Triangle is Acute Angle Triangle";
      result.setAttribute("id", "heading");
      console.log("Acute Angle Triangle");
    }
    validTriangleContainer[0].appendChild(result);
  }
});

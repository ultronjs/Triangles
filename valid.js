//variable for the valid triangle or not
var firstAngle = document.getElementById("input_first_angle");
var secondAngle = document.getElementById("input_second_angle");
var thirdAngle = document.getElementById("input_third_angle");
var btnCheckValidTriangle = document.getElementById("btn_valid_triangle");
var validTriangleContainer = document.getElementsByClassName("triangle-container");

btnCheckValidTriangle.addEventListener("click",function(){
    if(firstAngle.value === ""){
        alert("Please Enter the value of the First Angle")
    }
    else if (secondAngle.value === "") {
      alert("Please Enter the value of the Second Angle");
    }
    else if (thirdAngle.value === "") {
      alert("Please Enter the value of the Third Angle");
    }else {
    if(document.getElementById("heading_red")){
        document.getElementById("heading_red").remove();
        
    
    }else if (document.getElementById("heading_green")) {
        document.getElementById("heading_green").remove();
    }    
    let sum = parseInt(firstAngle.value) + parseInt(secondAngle.value) + parseInt(thirdAngle.value);
    console.log(sum)
    if(sum===180){
        console.log("the Triangle is valid")
        var result = document.createElement("h1");
        result.innerText = "The Triangle is Valid!!!";
        result.setAttribute("id", "heading_green");
    }
    else{
        console.log("the triangle is not valid")
        var result = document.createElement("h1");
        result.innerText = "Oops,The Triangle is not Valid";
        result.setAttribute("id", "heading_red");
    }
    validTriangleContainer[0].appendChild(result)
    }
})


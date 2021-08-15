//variable for the third angle
var firstAngle = document.getElementById("input_first_angle");
var secondAngle = document.getElementById("input_second_angle");
var validTriangleContainer = document.getElementsByClassName("triangle-container");
var btnCalculateThirdAngle = document.getElementById("btn_third_triangle");

btnCalculateThirdAngle.addEventListener("click", function () {
    if(firstAngle.value ==="" || secondAngle.value ===""){
        alert("Please Enter the value of the First/Second angle")
    }
    else{
        if(document.getElementById("result")){
            document.getElementById("result").remove();
        }
        var sumOfTwoAngles = (parseInt(firstAngle.value) + parseInt(secondAngle.value));
        if(sumOfTwoAngles >=180){
            alert("The Triangle is not Valid")
        }else{
            var thirdAngle = 180 - sumOfTwoAngles;
            var result = document.createElement("h2");
            result.innerText = `The value of the Third Angle = ${thirdAngle}`
            result.setAttribute("id","result")
            validTriangleContainer[0].appendChild(result)
        }
    }   
});

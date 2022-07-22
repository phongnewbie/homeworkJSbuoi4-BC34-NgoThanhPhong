// bài 1
function timsoLN(a,b,c){
    var max = a ;
    if(b > max){
        max = b
    }else if(c> max){
        max = c;
    }
    return max;
}
document.getElementById("btnClick-check").onclick = function (){
    var numberOne = document.getElementById("numberOne").value*1;
    var numberTwo = document.getElementById("numberTwo").value*1;
    var numberThree = document.getElementById("numberThree").value*1;
    var findingTheBiggestNumber = timsoLN(numberOne,numberTwo,numberThree);
    document.getElementById("resultCompare").innerHTML = findingTheBiggestNumber;
    document.getElementById("resultCompare").className = 'text-center bg-success text-warning mt-3'
}
//bài 2
function helloToFamilyMember(){
    var greeting = prompt("Cho hỏi ai đang dùng máy tính ạ ?? ");
    alert(`XIN CHÀO : ${greeting}`);
    
}
helloToFamilyMember();
// bài 3

document.getElementById("btnChecking-OddEven").onclick = function(){
    var number1 = document.getElementById("number1").value*1;
    var number2 = document.getElementById("number2").value*1;
    var number3 = document.getElementById("number3").value*1;
    var resultNumber = "";
    var resultNumber2 = "";
    if(number1%2==0){
        resultNumber += number1 
    }else{
        resultNumber2 += number1
    }if(number2%2 == 0){
        resultNumber += number2
    }else{
        resultNumber2 += number2;
    }if(number3 %2==0){
        resultNumber += number3;
    }else{
        resultNumber2 += number3;
    }
    document.getElementById("oddevenNumber").innerHTML = `Nhung so chẵn là : ${resultNumber} </br> Những số lẻ là : ${resultNumber2}` ;
    document.getElementById("oddevenNumber").className = 'bg-success ms-2'
}
// bài 4
function checkingTypeOfTriangle(){
    edgeOne = document.getElementById("number1-edge").value*1;
    edgeTwo = document.getElementById("number2-edge").value*1;
    edgeThree = document.getElementById("number3-edge").value*1;
    typeTriangle = "";
    if(edgeOne == edgeTwo && edgeTwo != edgeThree){
        typeTriangle += `Đây là tam giác cân`
    }else if(edgeOne == edgeTwo && edgeTwo == edgeThree){
        typeTriangle += `Đây là tam giác đều`
    }else if (edgeOne != edgeTwo && edgeOne != edgeThree){
        typeTriangle += `Đây là tam giác vuông`
    }
    document.getElementById("edgeChecking").innerHTML = `${typeTriangle}`;
    document.getElementById("edgeChecking").className = 'text-info';
}








 


















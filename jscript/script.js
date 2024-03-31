//alert name
function alertName(){
alert("Abdul Khaliq")
document.getElementById("inputBox").innerHTML="<b> CEO of M.A.K Developer</b>";
document.getElementById("outputBox").innerHTML=" <b>  'ABDUL KHALIQ'</b>";
}
//alert number
function alertNumber(){
alert("+92 304 666 7911")
document.getElementById("inputBox").innerHTML="<b> Contact Us</b>";
document.getElementById("outputBox").innerHTML="<b>Number:</b>+92 304 666 7911 <br> <b>Email:</b>  abdulkhaliq00918@gmail.com";
}
//variable name
function showVariableName(){
document.getElementById("inputBox").innerHTML="<b> What is varName</b>";
document.getElementById("outputBox").innerHTML=" <b>  'Rules to use varName'</b> <br> <ul class='text-start'><li>A variable name can't contain spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, userAlert and myVar are legal.</li><li>Capital letters are fine, but be careful. Variavle names are case sensitive. A rose is not a Rose. If you assign the string 'Floribandas' to the variable rose, and then ask JavaScript for the value assigned to Rose, you'll come up empty.</li></ul>";
}
//camel case
function showCamelcaseExample(){
document.getElementById("inputBox").innerHTML="<b>Example of camelCase</b>";
document.getElementById("outputBox").innerHTML=" <ul class='text-start'><li>myNameIsAbdulKhaliq</li><li>iAmLearningJavaScript</li></ul>";
}
let num1= 9;
let num2= 2;
//sum
function sumNumbers(){
document.getElementById("inputBox").innerHTML=" num1 ="+num1+"<br/> num2 ="+num2+"<br> Output = " +num1+" + "+num2;
document.getElementById("outputBox").innerHTML= num1 + num2;
}
// subtract
function subtractNumbers(){
document.getElementById("inputBox").innerHTML=" num1 ="+num1+"<br/> num2 ="+num2+"<br> Output = " +num1+" - "+num2;
document.getElementById("outputBox").innerHTML=num1-num2;
}
// multiply
function multiplyNumbers(){
document.getElementById("inputBox").innerHTML=" num1 ="+num1+"<br/> num2 ="+num2+"<br> Output = " +num1+" x "+num2;
document.getElementById("outputBox").innerHTML=num1*num2;
}
// divide
function divideNumbers(){
document.getElementById("inputBox").innerHTML=" num1 ="+num1+"<br/> num2 ="+num2+"<br> Output = " +num1+" / "+num2;
document.getElementById("outputBox").innerHTML=num1/num2;
}
// calculate number
function calculateSomeNumbers(){
    let equation=50/5+88*11-(12+48) ;
document.getElementById("inputBox").innerHTML="<b> Equation= </b>50/5+88*11-(12+48) ";
document.getElementById("outputBox").innerHTML=equation;
}
//clear statement
function  clearStatement() {
document.getElementById("inputBox").innerHTML= "";
}
//clear output
function  clearOutput() {
document.getElementById("outputBox").innerHTML= "";
}
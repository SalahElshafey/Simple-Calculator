let name=prompt("Please enter your name")
let num1=prompt("Please enter the 1st num")
let num2=prompt("Please enter the 2nd num")
let num3=prompt("Please enter the 3rd num")
let sum=0

document.getElementById("head").innerText ="Hello " + name + "! How are you today? :)"
document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2
document.getElementById("num3").textContent = num3
let c= document.getElementById("sum");
function add(){
    
    sum=num1+num2+num3;
   c.innerText+= sum+"/ "
    sum=0
}

function Subtract(){
     sum=num1-num2-num3;
     c.innerText+= sum+"/ "
       sum=0
}
function divide(){
     sum=(num1/num2)/num3;
        c.innerText+= sum+"/ "
        sum=0
    
}
function multiply(){
     sum=num1*num2*num3;
        c.innerText+= sum+"/ "
        sum=0
    
}


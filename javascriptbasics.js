// var a=10;
// var b=20;
// document.write("The sum of a and b is: " + (a+b));

// var x="avani";
// var y="parashar";
// document.write("<br>my name is : " + (x+ " " + y));

// document.write("<br>The type of a is: " + typeof a);
// document.write("<br>The type of x is: " + typeof x);

// if(a>b){
//     alert("a is greater than b");
// }
// else{
//     alert("b is greater than a");
// }

// if(a<b){
//     confirm("Do you want to continue?");
// }
// else{
//     confirm("Do you want to exit?");
// }

// var m=100;
// var n=100;
// if(m==n){
//     document.write=prompt("write a message");
// }
// else{
//     document.write=prompt("write a different message");
// }

// function userDetails(){
//     let a =prompt("enter your name: " );
//     let b =prompt("enter your age: " );
//     document.write("<br>My name is: " + a);
//     document.write("<br>My age is: " + b);  
// }
// userDetails();

// function multiply(a,b){
//     return a*b;

// }
// let result = multiply(5,6);
// document.write("<br>The multiplication of 5 and 6 is: " + result);

function multiply(a,b){
    return a*b;
}
let a =Number(prompt("enter first number: "));
let b =Number(prompt("enter second number: "));
let result = multiply(a,b);
// console.log("The multiplication of " + a + " and " + b + " is: " + result);
document.write("<br>The multiplication of " + a + " and " + b + " is: " + result);

//or alternative way to write the above code is:
// function multiply(a,b){
//     return a*b;
// }
// let num1=prompt("enter first number: ");
// let num2=prompt("enter second number: ");
// num1=Number(num1);
// num2=Number(num2);
// let result1 = multiply(num1,num2);
// document.write("<br>The multiplication of " + num1 + " and " + num2 + " is: " + result1);


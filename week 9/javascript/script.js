//console.log("Hello World I am learning Javascript");

/*let a= 5;
let b= 10;
let sum= a + b;
console.log("The sum of two different numbers is: " , +sum);*/


/*var a= 3;
var b= 6;
var product= a * b;
console.log("The product of two different numbers is: " , +product);*/

/*const PI= 3.14;
let radius = window.prompt("Enter radius of a circle: ");
console.log(radius);
let circumference = 2 * PI * radius;
console.log("The circuference of a circle: " +circumference);*/



/*const PI= 3.14;
let radius= window.prompt("Enter radius of a circle: ");
console.log(radius)
let area = PI * radius*radius;
console.log("The area of a circle:m " +area);*/

/*function bark(){
    let name;
    let age;
    age= window.prompt("Enter age of a dog: ");
    console.log(age);
    if(age>=11){
        console.log("The dog is very old");
    }else{
        console.log("The dog is very young");
    }  
}

bark();*/
document.getElementById("mybtn").onclick= function(){
    let age = document.getElementById("myNumber").value;
    console.log(age);
    document.getElementById("paragraph").append(age);
    alert(age);
}







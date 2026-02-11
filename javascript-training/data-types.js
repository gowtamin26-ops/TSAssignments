//1.primitive data types - immutable
//2.non primitive data types - mutable

//Example of immutable
let a =10;
a+10;
console.log(a);  // a is primitive data type,it is immutable


//Example of mutable
let obj ={
    "name" : "Natalia",
    "id" : 2233

}
 obj.age = 29;
 console.log(obj);

 //String - datatype "",'',`
 let empName = "Gowtami";
 let location ="Machilipatnam";
 console.log(empName);
 console.log(location);

 let greeting ='Hello Gowtami ,"welcome to Orange".'
 let newGreeting = "Welcome to your best job,'Gowtami'";
 console.log(greeting);
 console.log(newGreeting);

 //backtick `

 let customGreeting = `Hello ${empName} welcome to ${location} .`;
 console.log(customGreeting);

 //boolean 
 let isActive = true;
 console.log(isActive); //true

 //undefined 
 let age;
 console.log(age);

//null 
let sal = 1000000;
sal = null;
console.log(sal);

//******non primitive datatypes in JS ********

let person = {
    studentName : "Rajeev",
    age : 35,
    salary : 45000 ,
    empid : 12345,
    visaStatus : "approved",
    address : {
        homeCity : "Machilipatnam",
        workCity : "Chennai",
        onsiteLocation : "London",
        country : "India"
    }
}
console.log(person.visaStatus);
console.log(person["empid"]);
console.log(person.address["onsiteLocation"]);

//arrays - represents list of values
let fruits = ["apples","bananas","kiwis","oranges"];
let ids = [101,102,103,104,105];
let studentAndIds =["Anitha",11,"Bindu",12,"Chandu",13,"Nandu",14,"Sindu",15];
console.log(studentAndIds[0]);
console.log(fruits);
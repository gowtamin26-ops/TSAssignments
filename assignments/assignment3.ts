/* Assignment -3 (Arrays/Datatypes/Operators)

1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students

Expected Output:
Updated Marks:
Suresh: 85
Mahesh: 90
Naresh: 92
Average Marks: 89.0     */

let studNames : string[] = ["Suresh","Mahesh","Naresh"];
let studMarks : number[] = [75, 80, 82];
let newMarks : number [] = [];

for (let i: number =0;i<studMarks.length;i++){
    let finalMarks = studMarks[i];
    finalMarks+=10;
newMarks[i] = finalMarks; 
}

for (let i: number =0;i<studNames.length;i++){
    console.log(`${studNames[i]} :${newMarks[i]}`);
}

let total : number =0;
for (let i=0;i<newMarks.length;i++){
    total  +=newMarks[i];
}

let avgMarks : number = total/newMarks.length;
console.log(avgMarks);

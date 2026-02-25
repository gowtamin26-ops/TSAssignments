/*
Assignment -4 (Conditional Statements & Loops)

Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions */


let bankTransactions : number [] = [50000,-2000,3000,-15000,-200,-300,4000,-3000];
let ctcount : number =0;
let dtcount : number =0;

let ctamount : number =0;
let dtamount : number =0;

let supCount : number =0;

for (let i : number =0; i<bankTransactions.length;i++){
    
        let amount = bankTransactions[i];

        if (amount>0){
        ctcount ++; 
        ctamount +=amount;

        if(amount>10000){
            supCount++
            console.log(`Suspicious credit Transaction amount :  ${amount}` );

        }
        }else if(amount <0) {
            dtcount++;
            dtamount+=amount;

            if(amount<-10000){
            console.log(`Suspicious debit Transaction amount : ${amount}` );
            supCount++;
            }
            
        }
 }


let balance : number = ctamount+dtamount;
let totalcount : number =ctcount+dtcount;
console.log(`total number of credit transactions completed : ${ctcount}`);
console.log(`total number of debit transactions completed : ${dtcount}`);
console.log(`total amount credited in account : ${ctamount}`);
console.log(`total amount debited in account : ${dtamount}`);
console.log(`remaining at the end in Bank Account :   ${balance}`);
console.log(`total suspicious transactions :  + ${supCount}`);


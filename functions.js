// //we are making a calculator
// input1=Number(prompt("enter the first number:"));
// input2=Number(prompt("Enter the second number:"));

// function add(input1,input2){
//     console.log(`the sum ${input1} and ${input2} is ${input1+input2}`);
// }
// function subtract(input1,input2){
//     console.log(`the subtraction ${input1} and ${input2} is ${input1-input2}`);
// }
// function multiply(input1,input2){
//     console.log(`the multiplication ${input1} and ${input2} is ${input1*input2}`);
// }
// let division=(input1,input2)=>{
//     console.log(`the division ${input1} and ${input2} is ${input1*input2}`);
// }
// let remainder=(input1,input2)=>{
//     console.log(`the remainder of ${input1} when divided by ${input2} is ${input1%input2}`);
// }

// console.log("lets do the calculations");
// operator=[["1 for add"],["2 for subtraction"],["3 for multiplication"],["4 for division"],["5 for remainder"]];
// choosenOperator=Number(prompt(`choose ${operator}`));


// if (choosenOperator===1){
//     add(input1,input2)
// }else if(choosenOperator===2){
//     subtract(input1,input2)
// }else if(choosenOperator===3){
//     multiply(input1,input2)
// }else if(choosenOperator===4){
//     division(input1,input2)
// }else if(choosenOperator===5){
//     remainder(input1,input2)
// }else{
//     console.log("enter the correct the number!! ");
// }
// const addTwonumbers=(num1,num2)=>{
//     sum=num1+num2
//     return sum
// }
// const result=addTwonumbers(100,200)

// for(i=0;i<=result;i++){
//     console.log("hello",sum+i);
// }

// function a (message){
//     console.dir(message);
//     message()
//     // console.log(typeof message);

// };

// a(function (){
//     console.log("heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
// })


timer1=setInterval(function (){
    console.log("HELLO WORLD");
},2000)
clearInterval(timer1)
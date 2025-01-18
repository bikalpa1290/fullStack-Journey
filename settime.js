"use strict"
// let Bikalpa="Bikalpa Adhikari";
// let Alpha="Alpha";
// debugger;
// const timer1=setTimeout(`console.log(Bikalpa)`,1000);
// const timer2=setTimeout(`console.log("Bikalpa-1")`,0);
// const timer3=setTimeout(time,4000,{name:"biks"},1,2,3);

// clearTimeout(timer3);
// const timer1=setTimeout(`console.log(Bikalpa)`,1000);
// const timer2=setInterval(`console.log("Bikalpa-1")`,5000);
// const timer3=setInterval(time,4000,{name:"biks"},1,2,3);


// function time(){
//     console.log("Hello world");
//     return 5
// }
// // console.log("abcdefgh");
// // clearInterval(timer2);

// setInterval(function() {//anonymous function 
//     console.log("hello");
// },4000)
// debugger
// console.log("Hi-1");
// function hello(){
//     console.log("hello world");
// }
// for (let i=0;i<=5;i++){
//     console.log(i);
// }
// console.log("Hi-2");
// // debugger
// setTimeout(hello,3000) //higherorder function //hello is a call back fn



//higher order functions.

// function add(){
//     let a=1;
//     let b=2;
//     return a+b;
// }
// add();
// console.dir(add);
// debugger


// function outer() {
//     const a=1;
//     function midInner(){
//         const b=2;
//         function innerMost(){
//             console.log(a+b);
//         }
//         return innerMost;
//     }
//     return midInner;
// }


// const add1=outer();
// console.dir(add1);
// const add2=add1()
// console.dir(add2);
// const add3=add2();

const maths={
    E:22/7,
    add:function add(a,b){
        return a+b
    },
    // subtract:function sub(a,b){
    //     return a-b
    // },
    square:function square(a){
        return (a*a)
    },
    subtract(a,b){
        return a-b
    },
    cube(a){
        return a*a*a;
    }



}
apple()

function apple(){
    console.log("hello world");
}

const square=(num)=>
    (num*num)           //implicit return

let Number=square(5)


setTimeout(()=>console.log("wow"),2000)
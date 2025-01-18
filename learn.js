// "use strict";
// const createHelloWorld=function(){
//     return function(){
//         return "Hello World";
//     };
// };


// // introduceme()
// // debugger
// // a();
// // const aaa="Bikalpa"


// /* function expression
// function expression is not hoisted
// function decleratin is hoised*/ 
// // function extression
// const aa=function(){
//     console.log("hello");
// }
// aa()
// //function decleration
// function a(){
//     console.log("hello");
// }
// debugger
// var bik="bikalpa"
// const userName="bikalpa";
// const userage=19;
// function add(){
//     const x=5;
//     const y=10;
//     console.log(x+y);
// }
// add();
// console.log("programme ended");
// // console.log(x+y);
// // console.log(bik);

// n=1;
// let counter=function(){
//     ++n
//     return n
// }
debugger
function add(){
    const a=10;
    const b=20;
    console.log(a+b);
    function child(){
        const childName="rocky"
        console.log(childName);
        console.log(b)
        function grandchild(){
            const grandchildName="shocky"
            console.log(grandchildName);
            console.log(childName);

        }
        grandchild()
    }
    child()
    // grandchild()
}
add()
// child()
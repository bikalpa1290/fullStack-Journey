//map method
"use strict"
// const animal=["Cat","dog","puupy","tiger","lion","lION"];

// const captialAnimal=animal.map((x,index,array)=>{
//     console.log(x,index);
//     return x.toUpperCase();
// })
// console.log(captialAnimal);


// //filter
// const filterAnimals=animal.filter((x,index,array)=>{
//     console.log(x,index);
//     return x.toUpperCase().includes("I")==false
// })
// console.log(filterAnimals);

// const student=[
//     {
//         name:"bikalpa",
//         Age:20
//     }
//     ,
//     {
//         name:"anjal",
//         Age:22
//     }
//     ,
//     {
//         name:"puskar",
//         Age:18
//     }
// ]
// //chaining of array method
// const above18Name=student.filter((x)=>{
//     console.log(x);
//     return x.Age>18;
// }).map((names)=>{
//     return names.name;
// }).filter((x)=>{
//     return x.toUpperCase().includes("A");
// })
// console.log(above18Name);

//REDUCE

const number=[2,4,8,10,12,18,20,21];
let lastmachingElement;
let index;
// debugger
// const sum=number.reduce((accumulator,current,index)=>{ 
//     console.log(accumulator,current);
//     return accumulator+current
// },0)
// const i=1
// debugger
const sum=number.some((num,i)=>{
    if (num%2!=0){
        index=i+1;
        lastmachingElement=num;
        return true
    }
    return num%2!=0; 
})
console.log(sum);
console.log(`You have an odd number on your list which is ${lastmachingElement},which is at ${index}th position`);
const fruits=["apple","ball","cat"];
// for( let fruit of fruits){
//     console.log(fruit);
//     for(let frui of fruit){
//         console.log(frui);
//     }
// }

// const user="bikalpa adhikari";

// for (let use of user ){
//     console.log(use);
// }

// const person={
//     name:"bikalpa",
//     surname:"adhikari",
//     profession:"coder",
//     key:"bikal"
// }
// // for (let key in person){
// //     // let per=person;
// //     console.log(person[key]);
// // };

// const personKeys=Object.values(person);

// for (let key of personKeys){
//     console.log(key);
// }
// const perEntries=Object.entries(person);
// // console.log(perEntries);
// for (let entries of perEntries){
//     console.log(entries);
// }


function fruit(el){
    console.log(el);
}
// fruits.forEach((x)=>{
//     console.log(x);
// })
// fruits.forEach(fruit);
const y=fruits.forEach((x)=>{
    console.log(x.toUpperCase());
    // return x.toUpperCase();
})
// console.log(y);
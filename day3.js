// // const logResult="hello"||console.log("hello")
// // const logResult2="hello"&&console.log("hello")
// // //operator runs and print result  console.log("hello")=unidentified

// // numbers=[1,2,3,4,5,6,7,8]

// // let userName=parseInt(prompt("tell me your age"));
// // debugger
// // if (userName>25 && userName<45){
// //     console.log("you are a working professional");
// // }else{
// //     console.log("you should enjoy your life for now!!");
// // }

// const age = +prompt("age")

// // if (dayNumber === 0) {
// //   console.log('It is Sunday Today')
// // } else if (dayNumber === 1) {
// //   console.log('It is Monday Today')
// // } else if (dayNumber === 2) {
// //   console.log('It is Tuesday Today')
// // } else if (dayNumber === 3) {
// //   console.log('It is Wednesday Today')
// // } else if (dayNumber === 4) {
// //   console.log('It is Thursday Today')
// // } else if (dayNumber === 5) {
// //   console.log('It is Friday Today')
// // } else if (dayNumber === 6) {
// //   console.log('It is Saturday Today')
// // } else {
// //   console.log('Please Enter a Valid Day Number')
// // }
// debugger
// switch (age){
//     case 0:
//         console.log("he is a child");
//         break
//     case 5:
//         console.log("he is going away from his childhood");
//         break
//     case 18:
//         console.log("he is into teenage now")
//         break
//     case 24:
//         console.log("he is a working professional")
//         break
//     case 48:
//         console.log("he must retire now")
//         break        
        

// }

// const grade = "A";

// switch (grade){

//     case "a" && "A":
//         console.log("you received 100%");
//         break
    
//     case "b" && "B":
//         console.log("you received 50%");
//         break
//     case "f" && "F":
//         console.log("you failed");
//         break
//     default:
//         console.log("type properly");


// }


//ternary operator
// debugger

// const number=5==2?c("Bikalpa"): ("no Bikalpa");
// console.log("number");


// gender="M";
// console.log(`${gender.toLowerCase()==="m"? "He": "she"} is the greatest programmer of all time!!!!`);

// const hello=0? "Bikalpa": "" ? "12" : "34" ? "hey" : "bikalpa";


// const userName="Bikalpa";
// const secondname="Bikalpa"
// const age=19;
// const userGraduate=true;
// const lastName="Adhikari";


//non primitive data type

// const myName="bikalpa"
// const user1 ={
//     bikalpa:"MR BIKALPA",
//     lName:"Adhikari"
// }
// const user2 ={
//     fName:"yasaswi",
//     mName:"sharma",
//     "l-Name":"waiba"
// }

// let person1=""
// let person2=""
// console.log(user2.fName,user1.lName);
// console.log(user2["fName"],user1["l-Name"]);
// console.log(user1[myName]); //we can also call directly


// const myName="bikalpa"
// const user1 ={
//     fName:"MR BIKALPA",
//     lName:"Adhikari",
//     place:{
//         city:"damak",
//         zipCode:57513,
//         state:"koshi",
//         ispeaceful:{
//             night:"yes",
//             day:"cant say"
//         }
//     }
// }

// console.log(user1)
// user1.age=26; //we can also update it like this
// user1["is-good"]=true
// console.log(user1)


const myName="bikalpa"
const user1 ={
    fName:"MR BIKALPA",
    lName:"Adhikari",
    place:{
        city:"damak",
        zipCode:57513,
        state:"koshi",
        ispeaceful:{
            night:"yes",
            day:"cant say"
        }
    }
}

Object.freeze(user1)

// delete user1.ispeaceful   to delet  the particular object we use delet
// user1.earning="50LPA"


// user1={}
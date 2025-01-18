// // const fruits=["Apple","Mango","Banana"]
// // const newfruits=["banana","beans"]
// // const numbers=[-1,0,1000000000000,2,3,4,true,undefined,null]
// // fruits[0]=""
// // fruits.pop()


// // const newArray=[]

// //array methods

// // let newfruits =fruits.shift()
// // fruits.unshift("pears") 

// // y=newfruits.concat(fruits,numbers)


// //multidimension array

// // let array=[["bikalpa","apple"],["samikshya","mango"],["salina","grapes"]]


// // let tiktac=[
// //     [1,"x"],[2,null],[3,null],
// //     [4,null],[5,null],[6,"o"],
// //     [7,"0"],[8,null],[9,"x"]
// // ];

// // const username1= "bikalpa";
// // let username2=username1 //same address is given to two variable

// // username2=username2+ "Adhikari"//address will change because we use equal to


// let fruits=["mango","orange","Apple"];
// let newFruit=fruits;//both will have same address
// newFruit.push("dates","grapes");//here we are updating property not variable 


// const man={
//     name:"bikalpa",
//     Age:"20",
//     quality:"ambitious,brave,charming,well spoken, well decorated,fit and sound",
//     pata:{
//         city:"dharan",
//         pincode:123
//     },
// }
// // const oldMan=man;
// const newman={...man}//spread operator ..it is new and easy method to use
// // Object.assign(newman,man)//it is a old way 

// newman.name="Bikalpa"
// // const newMan=man;

// // newMan.name="Bikalpa"  //int both case the value of newman and man also fruits and newfruits change

// let heroes=["ironman","superman","krish","shiva","batman"];

// let bollywoodHeroes=[...heroes];   //we can do it with assign operator but sperad operator is more east and conveneint way to do it
// // let bollywoodHeroes=[];
// // Object.assign(bollywoodHeroes,heroes);
// bollywoodHeroes[heroes.length-1]="hanuman";
// bollywoodHeroes.splice(0,2);


// const numbers=[1,2,3,4,[5,6,7]]

// const newNumber=[...numbers]


// const student={
//     name:"Bikalpa",
//     surName:"Adhikari",
//     rank:"topper",
//     aKa:"chik magnet",
//     place:"damak",
//     moreInfo:{
//         quality:["great leader","self made programmer","smooth talker","fit and sound"],
//         finalVerdict:"He is the top quality man every brother father wife girlfriend wants"
//     }

// }
// const student1=JSON.parse(JSON.stringify(student));

//compound operator
// debugger

let num=5;
// num+=7;
// let newNum=num++


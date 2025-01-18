//default paramenet
// debugger
function rollADice(numberOfSides){
    if (numberOfSides===undefined){
        numberOfSides=10;
    }
    const diceNum=Math.floor((Math.random()*numberOfSides))
    // console.log(diceNum);
    return diceNum
}

//to replace this if statement new js keyworld argument is introduced

//default paramenet
function rollADice(numberOfSides=6){
    const diceNum=Math.floor((Math.random()*numberOfSides))
    // console.log(diceNum);
    return diceNum
}
// rollADice()
//spread parameter

const name1=[6,7,8,9];
const name2=[1,2,3,4,5];

const jointedNum=name2.concat(name1)
// console.log(jointedNum);

const spreadArray=[...name1,...name2];
// console.log(spreadArray);

const user1={
    name:"Bikalpa",
    surName:"Adhikari"
}
const updatedUse={...user1,Age:27}
// console.log(...user1);

// debugger
function subtract(){
    let minus=arguments[0];
    for (let i=1;i<arguments.length;i++){
        minus=minus-arguments[i];

    }
    return minus
}
y=subtract(...spreadArray);


//  function add(a,b,c,...rest){
//     console.log(a,b,c);
//     console.log(rest);
//     let sum=0;
//     for(i=0;i<rest.length;i++){
//         sum=sum+rest[i]
// }
//     return sum
// }
// let restult=add(1,2,3,4);
// console.log(restult);
// add(1,2,3)

// {1,2,4,}
// debugger
function add(...rest){
    const numbers=rest;
    return numbers.reduce((x,y)=>{
        return x+y;
    },0)
}
let addedValue=add(1,2,3);
// console.log(addedValue);


//destructuring

const colors=["red","blue","pink","yellow","sky"];

const [a,b,c,d,e,f]=colors;
let [,,color3]=colors; // to destructure directly
let {3:color4}=colors; //since array is also an object


const person={
    name:"BIkalpa",
    surName:"Adhikari",
    Address:{
        city:"damak",
        name:"aakatatol"
    }
}

const {name:username , Address:{city:cityName}}=person; //multilevel destructuring


function intro({name,Address:{city}}){  //destructure in functions
    console.log("hello",name,city);
}

intro(person)

function color({3:a}){
    console.log(`Your desired color is:${a}`);
}

color(colors)
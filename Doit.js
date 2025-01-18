// debugger
// let totalValue=0;
// function add(){
//     // let initialArgue=0;
//     for (argument of arguments){
//         totalValue=argument+totalValue;
//     }
//     console.log(totalValue);
// }

// add(1,2,3,4,10,10)

//  function add(){
//     let sum=0;
//     for(i=0;i<arguments.length;i++){
//         sum=sum+arguments[i]
// }
//     console.log(sum);
// }

// add(1,2,3)


function toarray(){
    newarray=Array.from(arguments);
    console.log(newarray);
    const summed=newarray.reduce((accumulator,current)=>{
        return accumulator+current;
    })
    console.log(`the sum of your number is ${summed}`);
}
toarray(1,2,3,4)
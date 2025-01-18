// const randomNumber=Math.random()*30;
const newRandomNum=Math.round(Math.random()*100);

let guessedNumber=parseInt(prompt("guess the number"));
// console.log(newRandomNum);

if (guessedNumber===newRandomNum){
    console.log(`you guessed it correct\n the number is ${newRandomNum}`)

}else (console.log(`you guessed it all wrong the number is ${newRandomNum}`));

getRandomInt=(max,min)=>{
    let maxRound= Math.round(max);
    let minRound=Math.round(min);
    return Math.ceil(Math.random()*(minRound-maxRound)+(minRound))
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
y=getRandomArbitrary(5,20);
console.log(y)


calculateArea=(length,breadth)=>{
    return length*breadth
}
length=parseInt(prompt("length"));
breadth=parseInt(prompt("breadth"));
Area=calculateArea(length,breadth);
if (isNaN(length) || isNaN(breadth)){
    console.log("invalid input");
}
else if (length==breadth && length>0 && breadth>0){
    console.log(`the area of the given square is ${Area}`);
}else if(length!=breadth && length>0 && breadth>0){
    console.log(`the area of the rectangle is ${Area}`);
}else{
    if (length<0){
        console.log(`length is negative which is${length}`);
    }else{
        console.log(`breadth is negative which is ${breadth}`);
    }
}
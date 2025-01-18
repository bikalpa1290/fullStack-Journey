//permutations
const digits=prompt("Write the digit you want to calculate the permuatation and combinatioon of?")
const x=digits.length;

function numFact(x){
    let result=1 //n!
    for (let i=1;i<=x;i++){
        result=result*i;
    }
    return result;
}
// console.log(x);
const factX=numFact(x); //store the factorial x
const y=Number(prompt("In how many ways you want me to arrange??"));// number of ways you want to arrange the number
function denFact(y){
    let result=1;    //r-1 !
    let i=1
    while(i<=(x-y)){
        result=result*i
        i++
    }
    return result;
}
const factY1=denFact(y) //stores the functions factorial of y;  //n-r

//combination
function denFact1(y){  //r!
    let result=1;
    for (i=1;i<=y;i++){
        result=result*i;
    }
    
    return result;
}
const factY2=denFact1(y)  //r

function permutations(){
    console.log(`the permutation of your desired letters (${digits}) is ${factX/factY1} which means your letters (${digits}) can be arranged in ${factX/factY1} ways if you doesnt take order as consideration (AB != BA)`);
}

function combination(){
    const newFact=factY1*factY2
    console.log(`the combination of your desired letters (${digits}) is ${factX/newFact} which means your letters (${digits}) can be arranged in ${factX/newFact} ways if you take order as consideration(AB=AB)`);
}
permutations()
combination()
const addCard=document.querySelector(".add-card");
const container=document.querySelector(".container");
const form=document.querySelector("form")

let count=1;
addCard.addEventListener("click",()=>{
    const newCard=document.createElement("div");
    newCard.classList.add("card")
    newCard.innerText=count;
    count++
    container.appendChild(newCard)
    
})
container.addEventListener("click",(e)=>{
    if (e.target !==container){
        e.target.remove();
    }
})


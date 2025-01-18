document.querySelector("button").addEventListener("click",()=>{
    console.log("hello i am a button")
},false)
document.querySelector("#grandparent").addEventListener("click",(a)=>{
    console.log("hello i am grand parent")
    a.stopImmediatePropagation();
    
},true)
document.querySelector("#parent").addEventListener("click",()=>{
    console.log("hello i am parent")
},true)
document.querySelector("#child").addEventListener("click",(event)=>{
    console.log("hello i am child")

},false)//capture
document.querySelector("#grandparent").addEventListener("click",(a)=>{
    console.log("hello i am grand parent")
    // a.stopPropagation();
    
},true)


// document.querySelector("a").addEventListener("click",(event)=>{
//     console.log("clicked");
//     event.preventDefault();
// })

// function handleClick(){
//     alert("clicked")
// }

const btn=document.querySelector("button");
// btn.onclick=()=>{
//     alert(this.id)
// }
// btn.onclick=()=>{
// //     alert("you clicked")
// // }


// btn.addEventListener("click",()=>{
//     alert("button clicked")
// })
// btn.addEventListener("click",()=>{
//     alert("button wasnt clicked")
// })
let handleClick=function(){
    alert("hello")
}
btn.addEventListener("click",handleClick);
btn.addEventListener("click",handleClick)

// btn.removeEventListener("click",handleClick)
window.addEventListener('load', () => {
    console.log("Page and all resources are fully loaded!");
  });



  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed.");
  });




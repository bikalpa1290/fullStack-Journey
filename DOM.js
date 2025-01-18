
console.log("hello")
// setTimeout(()=>{
//     window.location.reload()
// },3000)

// location.href="https://www.youtube.com/watch?v=hyIBB48aAws&t=157s/"  

// window.open()

function openWin(){
    myWindow=window.open("","height=200","width=500")
}
function moveWin(){
    myWindow.moveTo(500,100)
}

function sayhi(){
    document.body.children[0].src="https://i.ytimg.com/vi/sHG3Sf6XN9g/mqdefault.jpg"
}

function changeImage(){
    const allImag3=document.querySelectorAll(".image");
    allImag3.forEach((image)=>{
        image.src="https://i.ytimg.com/vi/sHG3Sf6XN9g/mqdefault.jpg";
    })
}

function forimage(){
    const allImage=document.querySelectorAll(".image");
    for (i=0;i<allImage.length;i++){
        allImage[i].src="https://i.ytimg.com/vi/sHG3Sf6XN9g/mqdefault.jpg";

    }
}

const paragraph=document.querySelector("p");

const allList=document.querySelectorAll("li");
for (list of allList){
    list.setAttribute("Class","style");
    
}
// const parent=document.querySelector(".bikalpa").parentElement



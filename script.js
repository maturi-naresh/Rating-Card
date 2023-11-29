var cont1=document.querySelector(".container-1")
var cont2=document.querySelector(".container-2")
var head=document.querySelector("h3")
var btns=document.querySelector(".btn")
var rating=""

function submit(){
    if(rating != 0){
        cont1.classList.add("hide")
        cont2.classList.remove("hide")
    }
    
    head.innerHTML=`You selected ${rating} out of 5`
}
function back(){
    
    cont2.classList.add("hide")
    cont1.classList.remove("hide")
}

function taken(e){
    console.log(e.innerHTML)
    rating=e.innerHTML

    btns.forEach((val)=>{
        val.classList.remove("btnColor")
    })
    e.classList.add("btnColor")
}
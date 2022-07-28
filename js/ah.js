let landdingPage = document.querySelector(".landing-page");

let arrayImges= ["01.jpg","02.jpg","03.jpg","04.jpg",];


//turn off and on random img
let randomimg = true;
let ex

//local storage random background img

let randomLocal = localStorage.getItem("background-option");

if(randomLocal!==null){
    //test : do not forget that the type of true is string
    console.log(randomLocal);

    if(randomLocal==="true"){
         randomimg = true;

    }
    else{
        randomimg = false;
    }

    document.querySelectorAll(".random-background span").forEach((element)=>{
        element.classList.remove("active")
    })

    if(randomLocal==="true"){

        document.querySelector(".random-background .yes").classList.add("active")
        
    }
    else{
        document.querySelector(".random-background .no").classList.add("active")

    }



}










//local storage color
let mainColor = localStorage.getItem("main-color");
console.log(mainColor)
if(mainColor!==null){
    document.documentElement.style.setProperty('--main--color',mainColor);
    document.querySelectorAll(".list-item li ").forEach(ele=>{
        ele.classList.remove("active");
        if(ele.dataset.color===mainColor){
            ele.classList.add("active")
}

})
}








let toggle = document.querySelector(".setting-box .toggle-setting") 
toggle.onclick = function(){
    console.log("hi majd")
    document.querySelector(".setting-box").classList.toggle("open")
    document.querySelector(".fa-gear").classList.toggle("fa-spin")
}
let colors=document.querySelectorAll(".list-item .item")
colors.forEach((ele)=>{
    
        ele.addEventListener("click", (e) => {
            console.log(e.target.dataset.color)
            document.documentElement.style.setProperty('--main--color',e.target.dataset.color);
            //local storage
            localStorage.setItem("main-color",e.target.dataset.color);
            handleActive(e);


        })
     } )
    

    
    let randomBackGround = document.querySelectorAll(".random-background span");
    randomBackGround.forEach((span)=>{
        span.addEventListener("click",(e)=>{
           handleActive(e);
        if(e.target.dataset.background==="yes"){
            
            randomimg===true;
            
            random()

            localStorage.setItem("background-option",true)
            


        }
        else{
            randomimg===false;
            clearInterval(ex)

            localStorage.setItem("background-option",false)

        }
        })
       
        })
//random img off and on option
function random(){
    if(randomimg===true){
        ex=setInterval (()=>{
            let  randomNum = Math.floor(Math.random() * arrayImges.length);
            landdingPage.style.backgroundImage= 'url("images/'+ arrayImges[randomNum] +'")';
            
            },1000) 
    }
}
random();

//handle ACTIVE
function handleActive(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach((element)=>{
        element.classList.remove("active")
    
    })
    ev.target.classList.add("active");
    }
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
       


//skills scroll
let a1 = document.querySelector(".skills");
window.onscroll=function(){
    let a2 = a1.offsetTop
    console.log(a2)
    let a3 =a1.offsetHeight
    console.log(a3)
    let a4 = this.innerHeight
    console.log(a4)
   
    let a5 = this.pageYOffset;
    console.log(a5)
    if(a5>a2+a3-a4){
        let a6 = document.querySelectorAll(".skills-box .skill-rate span")
        a6.forEach((skill)=>{
            skill.style.width=skill.dataset.rate
        })
    }
}


//gallary
let gallary = document.querySelectorAll(".gallary img ");
gallary.forEach(img=>{
    img.addEventListener("click",(e)=>{
        let overlay = document.createElement("div")
        overlay.className="overlay-pop"
        document.body.appendChild(overlay)
        let imgBox = document.createElement("div")
        imgBox.className="img-box2"
        
        //creat heading for the img depending on the alt
        
        let headingimg=document.createElement("h1");

        let headingimgtext=document.createTextNode(img.alt);

        headingimg.appendChild(headingimgtext)

        imgBox.appendChild(headingimg)
        //end heading..


        let image =document.createElement("img")
        image.src=img.src
        imgBox.appendChild(image)
        
        document.body.appendChild(imgBox)

        //creat close botton

        let closebutton=document.createElement("span")
        
        let closebuttontext=document.createTextNode("x")

        closebutton.className="close-button"

        closebutton.appendChild(closebuttontext);

        imgBox.appendChild(closebutton);




    })

})
// THE CLODE OF BOX IMAGE
document.addEventListener("click",(e)=>{

    if(e.target.className==="close-button"){

        //here there are two ways to "remove" THE FIRST ONE IS:

    e.target.parentNode.remove();
    //NOTE:e.targetتعني الهدف المستهدف وهون عنا مرة كان close-button ثم parentNode 

    //THE SECOND WAY ...AND HERE WE REMOVE THE OVERLAY:

    document.querySelector(".overlay-pop").remove();
    //and by this way we remove the box image and the overlay.

    }
    
})

//start bullet
let bullet = document.querySelectorAll(".nav-bullet .bullet");
let links = document.querySelectorAll(".links a");

console.log(bullet);

function scrollToAnyWhere(element){
element.forEach(ele => {
    ele.addEventListener("click",(e)=>{
        //هذه التعليمة تعني منع الحالة الطبيعية حيث ان تعليمة لينك في هتمل تقوم بالذهاب الى صفحة جديدة وليس سكرول ضمن الصفحة
        e.preventDefault();

        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        })
    })

})
}

scrollToAnyWhere(bullet);
scrollToAnyWhere(links);



//end bullet 

//handle ACTIVE
function handleActive(ev){
ev.target.parentElement.querySelectorAll(".active").forEach((element)=>{
    element.classList.remove("active")

})
ev.target.classList.add("active");
}

//strat bullet option show or hide
let bulletItems = document.querySelectorAll(".bullet-options span");

let bulletBox = document.querySelector(".nav-bullet");

bulletItems.forEach((bullet)=>{
bullet.addEventListener("click",(e)=>{
    if(bullet.dataset.section === "block"){
        bulletBox.style.display = "block"
        
    }
    else{
       
        bulletBox.style.display = "none"
        

    }
    handleActive(e);
})


} )


document.querySelector(".reset").onclick = function(){

    localStorage.clear();
    window.location.reload();
}



//toggle buttom

let toggleBtn = document.querySelector(".toggle");
let linksToggle = document.querySelector(".links");

toggleBtn.onclick = function(e){

    e.stopPropagation();

    this.classList.toggle("active");
    linksToggle.classList.toggle("open");


}
// remove toggle things by click anywhere
document.addEventListener("click",(e)=>{

    

    if(e.target !== toggleBtn && e.target !== linksToggle){
        if(linksToggle.classList.contains("open")){

            
        toggleBtn.classList.toggle("active");
        linksToggle.classList.toggle("open");
        }
    }

})

linksToggle.onclick = function(e){

    e.stopPropagation();
}



let selected=document.getElementById("selection")
let rate=document.getElementById("rating")
let star=document.getElementById("star")
star.disabled=true
let thank=document.getElementById("thanks")
let head=document.getElementById("heading")
let save=document.getElementById("submit")
let display=document.getElementById("message")
save.disabled=true

let select
function one(){
    save.disabled=false
    select="1"
    return select

}
function two(){
    save.disabled=false
    select="2"
    return select
 }
function three(){
    save.disabled=false
        select="3"
        return select
}
function four(){
    save.disabled=false
    select="4"
    return select
}
function five(){
    save.disabled=false
    select="5"
    return select
}

save.addEventListener("click",function(){
head.textContent="Thank you!"
display.textContent="We appreciate you taking the time to give a rating. If you ever need more support , don't hesitate to get in touch!"
rate.textContent=""
head.style.textAlign='center'
save.style.display='none';
star.style.display='none'
thank.style.display='block'
selected.style.display='block'
selected.textContent="You selected"+" "+select+" "+"out of 5"

})
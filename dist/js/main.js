
// main header 

const mainHeader = document.getElementById('main-header')
const navbarItem = document.querySelectorAll('.navbar-items')

navbarItem.forEach((e)=>{ 
    e.addEventListener("click",()=>{
        if(e.classList.contains('active')){
            e.classList.toggle('active')
        }
        else{
            navbarItem.forEach((f)=>{
                f.classList.remove('active')
            })
            e.classList.add('active')
        }
    })
})

const hambtn = document.querySelector('.hamburger')


hambtn.addEventListener("click",()=>{
    mainHeader.classList.toggle('active')
    document.body.classList.toggle('active');
  
})

// scroll or sticky header 

window.addEventListener('scroll',function(){
    mainHeader.classList.toggle("sticky",window.scrollY > 0);
})

// Hero 
let startValue = 1000000
let endValue = 1278620

let numCount = document.querySelector('.num-count')

let counter = setInterval(function(){
    startValue += 1565;
    numCount.innerHTML = `${startValue.toLocaleString()}`
    if(startValue > endValue){
        console.log("lol"); 
        clearInterval(counter)
    }
},100)
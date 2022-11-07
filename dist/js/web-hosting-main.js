
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


// faq

let faq = document.querySelectorAll('.row')

faq.forEach((e)=>{
    e.addEventListener("click",()=>{
        e.classList.toggle('active')
        console.log("lol");
    })
})
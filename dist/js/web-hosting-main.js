
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
    })
})

// plan 

const footerBtn = document.querySelectorAll('.plan-footer')

const bodyPart = document.querySelectorAll(".plan-body")

footerBtn.forEach((e)=>{
    e.addEventListener("click",()=>{
        bodyPart.forEach(f=>{
            if(f.classList.contains('active')){
                f.classList.remove('active')
                footerBtn.forEach(s=>{
                    s.classList.remove('active')
                })
            }else{
                f.classList.add('active')
                footerBtn.forEach(r=>{
                    r.classList.add('active')
                })
            }
        })
    })
})


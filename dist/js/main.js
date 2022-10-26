
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


// all features list 

async function allList () {
    fetch("./dist/js/data/features.json").then((resp)=>{
        return resp.json()
    }).then((data)=>{

        const list3   = document.querySelector('.list-3')
        const list4   = document.querySelector('.list-4')
        const list5   = document.querySelector('.list-5')

        const htmlLists = (start,end,listName)=>{
            for(let i = start;i<end;i++){
                if(data[i].tooltip != undefined){
                    listName.innerHTML += 
                    `
                    <li>
                        <div class="text">
                            <img src="dist/assets/icons/correct.svg" alt="correct" class="correct-img">
                            <p>
                                <b>${data[i].b}</b>
                                ${data[i].l}
                            </p>
                        </div>
                        <span class="tooltip"
                            data-tooltip="${data[i].tooltip}">
                            <img src="dist/assets/icons/question.svg" alt="question">
                        </span>
                    </li>
                    `
                }else{
                    listName.innerHTML += 
                    `
                    <li>
                        <div class="text">
                            <img src="dist/assets/icons/correct.svg" alt="correct" class="correct-img">
                            <p>
                                <b>${data[i].b}</b>
                                ${data[i].l}
                            </p>
                        </div>
                    </li>
                    `
                }
            }
        }

        htmlLists(0,18,list3)
        htmlLists(18,36,list4)
        htmlLists(36,54,list5)

    })
}

allList()

const btnAllList = document.querySelector('.service-list-footer')

const allListMenu = document.querySelector('.all-list')



btnAllList.addEventListener("click",()=>{
    btnAllList.classList.toggle('btn-alllist')
    allListMenu.classList.toggle('active')
})
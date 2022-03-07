const menuToggle = document.querySelector('.toggleMenu')
const navigation = document.querySelector('.navigation')
const list = document.querySelectorAll('.list')

let i=0




menuToggle.onclick=()=>{
    navigation.classList.toggle('open')
}

function activeLink(){
    list.forEach(item => {
        item.classList.remove('active')
        
    });

    this.classList.add('active')
    
}

function scroll (){
    let altura = window.screen.height
    
    window.scrollTo(0,(altura*this.i)-110)
    
    console.log(altura, altura*this.i)
}



list.forEach(item=>{
    item.addEventListener('click',activeLink)
    item.addEventListener('click',scroll)
    
    item.i=i
    i++
    
})




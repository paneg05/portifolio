const menuToggle = document.querySelector('.toggleMenu')
const navigation = document.querySelector('.navigation')
const list = document.querySelectorAll('.list')

menuToggle.onclick=()=>{
    navigation.classList.toggle('open')
}

function activeLink(){
    list.forEach(item => {
        item.classList.remove('active')
    });
    this.classList.add('active')
}


list.forEach(item=>{
    item.addEventListener('click',activeLink)
})
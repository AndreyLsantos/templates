const navbar = document.querySelector('.nonavbar');

function touggle(){
    if(navbar.classList.contains('navbarMobile') == true){
        navbar.classList.remove('navbarMobile')
    }else{
        navbar.classList.add('navbarMobile')
    }
}
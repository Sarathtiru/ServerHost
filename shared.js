var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');

for(i=0;i<selectPlanButtons.length;i++){
    selectPlanButtons[i].addEventListener('click', function(){
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open';
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

backdrop.addEventListener('click', function(){
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
   
});

if (modalNoButton){
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal(){
    //backdrop.style.display = 'none';
    //modal.style.display = 'none';
    if(modal){
        modal.classList.remove('open');
    }
  
    backdrop.classList.remove('open');
}

/************* Toggle side navigation button *************/
toggleButton.addEventListener('click',function(){
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    // console.log('clicked');
    mobileNav.classList.add('open');
    backdrop.classList.add('open');

});

ctaButton.addEventListener('animationstart', function(event){
    
});

ctaButton.addEventListener('animationend', function(event){
    
});

ctaButton.addEventListener('animationiteration', function(event){

})


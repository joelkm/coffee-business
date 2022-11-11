//NAVIGATE ON CLICK
document.querySelectorAll('nav li').forEach((listitem)=>{
    listitem.addEventListener('click', ()=>{
        var topPosition=document.getElementById(listitem.dataset.page).offsetTop-120;
        window.scrollTo({
            top: topPosition,
            left: 0,
            behavior: 'smooth'
        })
    });
})

document.addEventListener( 'DOMContentLoaded', function() {
    const splide = new Splide( '.splide', {
        type    : 'loop',
        autoplay: true,
    } );
    splide.mount();
});
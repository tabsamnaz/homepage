let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelector("#header .collapse");

toggle .addEventListener('click', function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));

})


// sticky Navigation
window.onscroll = function(){ myFunction()};

// get the current value
let navbar = document.getElementById("header");

// get the nav bar position
let sticky = navbar.offsetTop;

// sticky function
function myFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add(sticky);
    }else{
        navbar.classList.remove("sticky");
    }
}
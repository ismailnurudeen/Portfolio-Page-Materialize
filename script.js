var modal=document.getElementById("myModal");
var modalBtn=document.getElementById("modulaBtn");
var closeBtn=document.querySelector(".closeBtn");
var whatsappBtn=document.querySelector(".social-icons .fa-whatsapp");

modalBtn.addEventListener("click",showModal);
closeBtn.addEventListener("click",closeModal);
window.addEventListener("click",outSideClick);

function showModal(){
  modal.style.display="Block";
}

function closeModal(){
   modal.style.display="none";
}

function outSideClick(e){
  if(e.target===modal){
     modal.style.display="none";
    }
}

var navBtn=document.querySelector(".button-collapse");
var p1=navBtn.querySelector(".p1");
var p2=navBtn.querySelector(".p2");
var p3=navBtn.querySelector(".p3");

navBtn.addEventListener("mouseover",navRoll);
navBtn.addEventListener("mouseleave",over);


function navRoll(){
  navBtn.style.animation="1s roller";
  p1.style.animation="1s roller";
  p2.style.animation="1s shake";
  p3.style.animation="1s roller";
  }
  
  function over(){
  navBtn.style.animation="";
  p1.style.animation="";
  p2.style.animation="";
  p3.style.animation="";
}

$(document).ready(function() {
    //Check to see if the window is top if not then display button
    $(window).scroll(function() 
    { if ($(this).scrollTop() > 100){
        $(".b2top").fadeIn(); } 
    else {
        $(".b2top").fadeOut(); 
    } }); 
    
    //Click event to scroll to top
    
    $(".b2top").click(function() { 
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
    });
 }); 

$(function() {
      $(".button-collapse").sideNav();
      $(".slider").slider();
  });



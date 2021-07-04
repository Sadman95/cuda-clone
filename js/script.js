// click toggle arrow==> go to top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




// displaying toggle arrow==> more than 200px of scrolling 
$(window).scroll(function(){
  var scrolling=$(this).scrollTop();
  var top = document.getElementById('arrow')
 
  if(scrolling>200){
      top.style.display = 'block';

  }
  else{
    top.style.display = 'none';
  }
 
})





// adding class to fix the position of navbar
$(window).scroll(function(){
  var scrolling=$(this).scrollTop();
 
  if(scrolling>20){
      $(".navbar").addClass('navnew');

  }
  else{
    $(".navbar").removeClass('navnew');
  }
 
})




// dragable sliding applied to service section
var swiper = new Swiper('.swiper-container');



// sliding plugin to team section
$(document).ready(function(){
   $('.teamcol').slick({ 
    slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 3000,
     prevArrow: '<i class="fas fa-chevron-left leftarrow"></i>',
     nextArrow: '<i class="fas fa-chevron-right rightarrow"></i>',
   });
});



// skills percentage loader plugin
$(function(){
  $('.percent_one').percentageLoader({
    strokeWidth: 10,
    bgColor: '#DFE8ED',
    ringColor: '#30BAE7',
    textColor: '#3C4761',
    valElement: 'h1',
    fontSize: '42px',
    fontWeight: 'normal'
  })
  $('.percent_two').percentageLoader({
    strokeWidth: 10,
    bgColor: '#DFE8ED',
    ringColor: '#D74680',
    textColor: '#3C4761',
    valElement: 'h1',
    fontSize: '42px',
    fontWeight: 'normal'
  })
  $('.percent_three').percentageLoader({
    strokeWidth: 10,
    bgColor: '#DFE8ED',
    ringColor: '#15C7A8',
    textColor: '#3C4761',
    valElement: 'h1',
    fontSize: '42px',
    fontWeight: 'normal'
  })
  $('.percent_four').percentageLoader({
    strokeWidth: 10,
    bgColor: '#DFE8ED',
    ringColor: '#EB7D4B',
    textColor: '#3C4761',
    valElement: 'h1',
    fontSize: '42px',
    fontWeight: 'normal'
  })
});



// mixit up plugin at portfolio section
var containerEl = document.querySelector('.mix_images');
var mixer = mixitup(containerEl);



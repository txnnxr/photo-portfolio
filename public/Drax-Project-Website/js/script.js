var $barNav = $(".bar-nav");
var $navItem = $(".nav-item");
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      if(hash == "#head"){
        $('html, body').animate({
          scrollTop: 0
        }, 800, function(){
          window.location.hash = hash;
        });
      }else {
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    }
  });
  $(window).resize(function(){
    if($(window).width() > 768){
      $(".nav-item").show();
    }
  })
  $barNav.click(function(){
    $navItem.toggle();
    if($navItem.is(":visible")){
      $("nav").css({
        "background-color" : "white"
      });
      $navItem.css({
        "border-bottom" : "1px solid gray"
      });
    }else{
      $("nav").css({
        "background" : "none"
      });
      $navItem.css({
        "border" : "none"
      });
    }
  });
});

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });
  $('.back-bird').css({
    'transform' : 'translate(0px, '+ wScroll /4 +'%)'
  })
  $('.fore-bird').css({
    'transform' : 'translate(0px, -'+ wScroll /20 +'%)'
  });
  var $el = $('.bird-box');
  var bottom = $el.position().top + $el.outerHeight(true);
  if(wScroll >= bottom){
    $barNav.css({
      'color': 'black'
    });
  }else{
    $barNav.css({
      'color': 'white'
    });
  }

//clothes-pics container for whatever you want to land
  if (wScroll > $('.albums').offset().top - ($(window).height() * 0.2)) {
    $('.albums figure').each(function(i) {
      setTimeout(function() {
        $('.albums figure').eq(i).addClass('is-showing');
      }, 500 * (i+1));
    });
  }
  if (wScroll > $('.tour').offset().top - ($(window).height() * 0.2)) {
    $('.stop-info').each(function(i) {
      setTimeout(function() {
        $('.stop-info').eq(i).addClass('is-showing');
      }, 500 * (i+1));
    });
  }
});

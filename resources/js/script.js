function pauseAudio() {
  var sounds = document.getElementsByTagName('audio');
  for(i=0; i<sounds.length; i++) sounds[i].pause();
};


$(".box-overlay.audioitem").click(function() {
  console.log("clicked object");
  $(this).next().css("display", "flex");

  $(".close-button").click(function() {
      console.log("clicked close button");
    $(".pop-up").css("display", "none");
    pauseAudio();
  });

});

$(".box-overlay.videoitem").click(function() {
  console.log("clicked object");
  $(this).next().css("display", "flex");

  var iframe = $(this).next().find("iframe");
  var player = new Vimeo.Player(iframe);
  player.play();

  $(".close-button").click(function() {
      console.log("close-button");
    $(".pop-up").css("display", "none");
    player.pause();
  });



});


$( "#menu" ).click(function() {
    console.log("clicked object");
    $(".nav-wrapper").toggleClass("show");
    $(".site-title").toggleClass("hide");

    $(this).toggleClass("open");
});


jQuery(function($){

    $('.content').bind('scroll', function(){

        if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight){
          $( ".scroll-instruct" ).css( "display", "none" ).fadeOut();
      }else {
           $( ".scroll-instruct" ).css( "display", "flex" ).fadeIn();
      }
    })
  }
);

function isOverflown(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

var els = document.getElementsByClassName('content');
for (var i = 0; i < els.length; i++) {
  var el = els[i];
  var overflown = isOverflown(el);

  if (overflown == false) {
      $(".scroll-instruct").css("display","none");
  } else {
      $(".scroll-instruct").css("display","flex");
  }
}





$( ".transcript-click" ).click(function() {
    $(this).next().slideToggle();
    $(this).find("p").toggle();
});


$( ".nav" ).scroll(function() {
    var navpos = $( ".nav" ).scrollTop();

    if(navpos <= 50){
        console.log(navpos);
       $(".nav").addClass("nav-wrapper-start");
       $(".nav").removeClass("nav-wrapper-end");
       // $(".scroll-down").css("display", "flex")
       ;}

   if(navpos >= 50){
       console.log(navpos);
      $(".nav").removeClass("nav-wrapper-start");
      $(".nav").addClass("nav-wrapper-end");
      // $(".scroll-down").css("display", "none")
      }
});


$( ".nav" ).hover(function() {
    $(".nav").addClass("nav-wrapper-start");
    $(".nav").addClass("nav-wrapper-end");
}, function() {
    $(".nav").removeClass("nav-wrapper-end");
    $(".nav").removeClass("nav-wrapper-start");}
);


$( ".nav" ).hover(function() {
    $(".scroll-down").css("display", "flex");
}, function() {
    $(".scroll-down").css("display", "none");
    ;}
);


$("body").mousemove(function(event) {
  var eye = $(".eye");
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;
  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});

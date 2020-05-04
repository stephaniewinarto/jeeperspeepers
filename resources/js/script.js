
function pauseAudio() {
  var sounds = document.getElementsByTagName('audio');
  for(i=0; i<sounds.length; i++) sounds[i].pause();
};


$( ".box-overlay" ).click(function() {
    console.log("clicked object");
  $(this).parent().find(".pop-up").css("display", "flex");
});

$( ".intro-box" ).click(function() {
    console.log("clicked object");
  $(this).parent().find(".intro-pop-up").css("display", "flex");
});


$( ".close-button" ).click(function() {
    console.log("clicked close button");
  $(".pop-up" ).css("display", "none");
  pauseAudio();
  $('iframe').attr('src', $('iframe').attr('src'));

});

$( ".menu-button" ).click(function() {
    console.log("clicked object");
    $(".nav-wrapper").css("display", "block");
    $(this).css("display", "none");
    $(".site-title").css("display", "none");
    $(".exit-button").css("display", "block");
});

$( ".exit-button").click(function() {
    console.log("clicked object");
    $(".nav-wrapper").css("display", "none");
    $(this).css("display", "none");
    $(".site-title").css("display", "block");
    $(".menu-button").css("display", "block");
});



$( ".content" ).scroll(function() {
    var scrollpos = $( ".content" ).scrollTop();
    // console.log(scrollpos);

    if (scrollpos > 150) {
         $( ".scroll-instruct" ).css( "display", "none" ).fadeOut();
    } else {
        $( ".scroll-instruct" ).css( "display", "flex").fadeIn();
    }

});

$( ".transcript-click" ).click(function() {
    $(this).next().slideToggle();
    $(this).find("p").toggle();
});


jQuery(function($){
    $('.nav').bind('scroll', function(){
        if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight){
          $(".nav-wrapper").addClass("nav-wrapper-end")
          $(".nav-wrapper").removeClass("nav-wrapper-start");}
      });
});

$( ".nav" ).scroll(function() {
    var navpos = $( ".nav" ).scrollTop();

    if(navpos <= 10){
        console.log(navpos);
       $(".nav-wrapper").addClass("nav-wrapper-start");
       $(".nav-wrapper").removeClass("nav-wrapper-end");}

});

$( ".nav" ).hover(function() {
    $(".nav-wrapper").addClass("nav-wrapper-end");
    $(".nav-wrapper").addClass("nav-wrapper-start");
}, function() {
    $(".nav-wrapper").removeClass("nav-wrapper-end");
    $(".nav-wrapper").removeClass("nav-wrapper-start");
});

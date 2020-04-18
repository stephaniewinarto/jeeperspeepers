// $( ".pop-up").hide();


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
  // $('iframe').attr('src', $('iframe').attr('src'));
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
    var scrollpos = $( ".content" ).scrollLeft();
    console.log(scrollpos);

    if (scrollpos > 240) {
         $( ".scroll-instruct" ).css( "display", "none" ).fadeOut();
    } else {
        $( ".scroll-instruct" ).css( "display", "flex").fadeIn();
    }

});


//
// $(function() {
//    $("body").mousewheel(function(event, delta) {
//       this.scrollLeft -= (delta * 30);
//       event.preventDefault();
//    });
// });
//
// $('a').click(function() {
//    // alert('stoped');
//    vimeoWrap = $('.pop-up-video');
//    vimeoWrap.html( vimeoWrap.html() );
// });


//
// if (window.outerWidth > 768) {
//   $(".draggable").draggable();
//   console.log("not mobiel");
//
//   $('.draggable').each(function(){
//        $(this).css({"left": Math.random() * (window.outerWidth-400) , "top": Math.random() * (window.outerHeight-400)})
//   });
// }
//
// if (window.outerWidth < 768) {
//     console.log("mobile");
//
//   $("body").click(function() {
//     $(".sidenav").css("visibility", "visible");
//   });
// }
//
//
// $( function() {
//   $( ".draggable_origin" ).draggable();
// } );
//
// $( ".draggable" ).click( function() {
//   $(this).css('z-index', '999');
//   $( ".draggable" ).not(this).css('z-index', '0');
// }
//
// );
//
//   var player_1a = document.getElementById("item_1a_audio");
//   var player_1b = document.getElementById("item_1b_audio");
//   var player_1c = document.getElementById("item_1c_audio");
//   var player_1d = document.getElementById("item_1d_audio");
//
//
//   $("#item_1a").mouseenter(function() {
//      console.log("playing");
//     player_1a.play();
//   }).mouseleave(function() {
//     player_1a.pause();
//   });
//
//   $("#item_1b").mouseenter(function() {
//      console.log("playing");
//     player_1b.play();
//   }).mouseleave(function() {
//     player_1b.pause();
//   });
//
//   $("#item_1c").mouseenter(function() {
//     player_1c.play();
//   }).mouseleave(function() {
//     player_1c.pause();
//   });
//
//   $("#item_1d").mouseenter(function() {
//     player_1d.play();
//   }).mouseleave(function() {
//     player_1d.pause();
//   });

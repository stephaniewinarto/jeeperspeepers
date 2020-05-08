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
      console.log("clicked close button");
    $(".pop-up").css("display", "none");
    player.pause();
  });

});

// $(".close-button").click(function() {
//     console.log("clicked close button");
//   $(".pop-up").css("display", "none");
//   pauseAudio();
// });




// $( ".box" ).has("iframe").click(function() {
//
//     console.log( "has video")
//     $(this).find(".pop-up").css("visibility", "visible");
//         //
//     var iframe = $(this).find("iframe");
//     var player = new Vimeo.Player(iframe);
//     player.play();
//     //
//     // $(".close-button").click(function() {
//     //     console.log( "close");
//     //     $(this).parents(".pop-up").css("visibility", "hidden");
//     // });
//     //
//     //     var currentPopup = $(this).find(".pop-up");
//     //     currentPopup.css("visibility", "visible")
//     //
//     //     currentPopup.find(".close-button").click(function() {
//     //           console.log("clicked close button");
//     //           currentPopup.css("visibility", "hidden");
//     //           player.pause();
//     //     });
//
// });

// $( ".box" ).click(function() {
//     // console.log( "has audio")
//     $(this).parent().find(".pop-up").css("display", "flex");
//
//     // $(this).find(".close-button").click(function() {
//     //     console.log("clicked close button");
//     //   $('.pop-up').css("display","none");
//     //     pauseAudio();
//     // });
//
// });



// $( ".box" ).has("audio").click(function() {
//
//     var currentPopup = $(this).find(".pop-up");
//         currentPopup.css("visibility", "visible")
//
//         currentPopup.find(".close-button").click(function() {
//               console.log("clicked close button");
//               currentPopup.css("visibility", "hidden");
//               pauseAudio()
//         });
//
// });
//
// $( ".box" ).click(function() {
//     console.log("clicked object");
//
//     var currentPopup = $(this).find(".pop-up");
//     currentPopup.css("visibility", "visible")
//
//     var iframe = $(this).parent().find("iframe");
//     var player = new Vimeo.Player(iframe);
//     player.play();
//
//
//     currentPopup.has("iframe").find(".close-button").click(function() {
//           console.log("clicked close button");
//           currentPopup.css("visibility", "hidden");
//           player.pause();
//     });
//
//     currentPopup.has("audio").find(".close-button").click(function() {
//             console.log("clicked close button");
//           currentPopup.css("visibility", "hidden");
//             pauseAudio()
//     });
//
//
// });

// //
// $( ".close-button" ).click(function() {
//     console.log("clicked close button");
//   $(".pop-up").css("visibility", "hidden");
//     pauseAudio();
// });
//


$( ".intro-box" ).click(function() {
    console.log("clicked object");
  $(this).parent().find(".intro-pop-up").css("display", "flex");
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


$( ".nav" ).scroll(function() {
    var navpos = $( ".nav" ).scrollTop();

    if(navpos <= 50){
        console.log(navpos);
       $(".nav-wrapper").addClass("nav-wrapper-start");
       $(".nav-wrapper").removeClass("nav-wrapper-end");
       $(".scroll-down").css("display", "block");}

   if(navpos >= 50){
       console.log(navpos);
      $(".nav-wrapper").removeClass("nav-wrapper-start");
      $(".nav-wrapper").addClass("nav-wrapper-end");
      $(".scroll-down").css("display", "none");}
});

$( ".nav" ).hover(function() {
    $(".nav-wrapper").addClass("nav-wrapper-start");
    $(".nav-wrapper").addClass("nav-wrapper-end");
}, function() {
    $(".nav-wrapper").removeClass("nav-wrapper-end");
    $(".nav-wrapper").removeClass("nav-wrapper-start");
});

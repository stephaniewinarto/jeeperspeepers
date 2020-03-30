
// var screen = $(window)

if (window.outerWidth > 768) {
  $(".draggable").draggable();
  console.log("not mobile");

  $('.draggable').each(function(){
       $(this).css({"left": Math.random() * (window.outerWidth-400) , "top": Math.random() * (window.outerHeight-400)})
  });
}

if (window.outerWidth < 768) {
    console.log("mobile");

  $("body").click(function() {
    $(".sidenav").css("visibility", "visible");
  });
}


$( function() {
  $( ".draggable_origin" ).draggable();
} );

$( ".draggable" ).click( function() {
  $(this).css('z-index', '999');
  $( ".draggable" ).not(this).css('z-index', '0');

}

);


  var player_1b = document.getElementById("item_1b_audio");
  var player_1c = document.getElementById("item_1c_audio");
  var player_1d = document.getElementById("item_1d_audio");

  $(".item_1b")
  .mouseenter(function() {
     console.log("playing");
    player_1b.play();
  })
  .mouseleave(function() {
    player_1b.pause();
  });

  $(".item_1c")
  .mouseenter(function() {
    player_1c.play();
  })
  .mouseleave(function() {
    player_1c.pause();
  });

  $(".item_1d")
  .mouseenter(function() {
    player_1d.play();
  })
  .mouseleave(function() {
    player_1d.pause();
  });

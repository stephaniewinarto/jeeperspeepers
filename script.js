$( function() {
    $( ".draggable" ).draggable();
  } );


  var player_1b = document.getElementById("1b_audio");
  var player_1c = document.getElementById("1c_audio");
  var player_1d = document.getElementById("1d_audio");

  $(".img_1b")
  .mouseenter(function() {
    player_1b.play();
  })
  .mouseleave(function() {
    player_1b.pause();
  });

  $(".img_1c")
  .mouseenter(function() {
    player_1c.play();
  })
  .mouseleave(function() {
    player_1c.pause();
  });

  $(".img_1d")
  .mouseenter(function() {
    player_1d.play();
  })
  .mouseleave(function() {
    player_1d.pause();
  });

console.log("ss")

$(document).ready(function() {
    $('.framework-col').hover(function() {
      $(this).find('i').addClass('flipped');
    }, function() {
      $(this).find('i').removeClass('flipped');
    });
  });
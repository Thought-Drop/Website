$(function(){
    $('#tlemail').data('holder',$('#tlemail').attr('placeholder'));

    $('#tlemail').focusin(function(){
        $(this).attr('placeholder','');
    });
    $('#tlemail').focusout(function(){
        $(this).attr('placeholder',$(this).data('holder'));
    });
});

$(document).ready(function() {
  setupRotator();
});

function setupRotator() {
  if($('blockquote').length > 1) {
    $('#quote1').addClass('current').fadeIn(1000);
    setInterval(rotateQuote(), 5000);
  }
}

function rotateQuote() {
  var current = $('blockquote.current');
  if(current.next().length === 0) {
     current.removeClass('current').fadeOut(1000);
     $('blockquote:first').addClass('current').fadeIn(1000);
     console.log("IF");
  } else {
     current.removeClass('current').fadeOut(1000);
     current.next().addClass('current').fadeIn(1000);
     console.log("ELSE");
  }
}
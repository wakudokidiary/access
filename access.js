$(function() {

$('#map').click(function(){
 $('#inageya').show();
});

$('#inageya').click(function(){
  $('#inage').fadeIn();
 });

 $('#jun').click(function(){
  $('#glass').slideDown();
 });

   // ここからメニュー
   $('#bar').click(function(){
    $('#menu').slideDown();
  });

  $('#bar').click(function(){
    $(this).fadeOut();
  });

  $('#batsu').click(function(){
    $('#menu').slideUp();
  });



  $('#batsu').click(function(){
    $('#bar').fadeIn();
  });

// ここまでメニュー

$('h1').hide().fadeIn('slow');


});

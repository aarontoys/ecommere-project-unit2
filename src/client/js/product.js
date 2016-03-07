$(document).ready(function(){
  $('#all').on('click', function(){
  $('.white, .red').show();
  })
  $('#red').on('click', function(){
    console.log('test')
      $('.white').hide();
      $('.red').show();
  })
$('#white').on('click', function(){
    console.log('test')
      $('.red').hide();
      $('.white').show();
  })

$('#sparkle').on('click', function(){
    console.log('test')
      $('.white, .red').hide();
      $('.sparkling').show();
  })
});
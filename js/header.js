$(window).on('scroll',function(){
  if($(window).scrollTop()){
      $('nav').removeClass('container');
      $('nav').addClass('black');
  }
  else{
    $('nav').addClass('container');
    $('nav').removeClass('black');
  }
})

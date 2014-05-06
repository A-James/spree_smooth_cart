  //temp cart ----------------

var cartInjected = false;

$(document).on('page:load ready', function () {

$('.cart-info').on('click', function(){
  if (cartInjected === false) {
    console.log('foo');
    $('body').append("<div id=\"cartbody\"><iframe src=\"/cart\" seamless></iframe></div>");
    cartInjected = true;
  }
  $('body').toggleClass('cart-open');
  return false;
});

$('#pagebody').on('click', function(){
  $('body').removeClass('cart-open');
});

});
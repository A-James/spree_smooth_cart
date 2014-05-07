  //temp cart ----------------

var cartInjected = false;

function openCart(){
  if (cartInjected === false) {
    $('body').append("<div id=\"cartbody\"><iframe src=\"/cart\" seamless></iframe></div>");
    cartInjected = true;
  }
  // set time out to allow time for CSS transition before state
  setTimeout(function(){
    $('body').toggleClass('cart-open');
  },10);
}

function closeCart(){
  $('body').removeClass('cart-open');
}

$(document).on('page:load ready', function () {

  $('.cart-info').on('click', function(){
    openCart();
    return false;
  });

  $('#pagebody').on('click', function(){
    closeCart();
  });

});
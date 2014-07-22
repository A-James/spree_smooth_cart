  //temp cart ----------------

var cartInjected = false;

function openCart(){
  if (cartInjected === false) {
    $('body').append("<div id=\"cartbody\"><iframe name=\"cart_target\" src=\"/cart\" seamless></iframe></div>");
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

  if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

    $('.cart-info').on('click', function(){
      openCart();
      return false;
    });

    $('.add-to-cart-button').on('click', function(){
      openCart();
    });

    $('#buy-button').attr('target','cart_target');

    $('#pagebody').on('click', function(){
      closeCart();
    });

    $('#update-cart').attr('target','_parent');

  }

});

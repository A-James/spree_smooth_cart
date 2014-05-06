//= require store/spree_frontend


//temp cart ----------------

$('.cart-info').on('click', function(){
  $('body').toggleClass('cart-open');
  return false;
});
$('#pagebody').on('click', function(){
  $('body').removeClass('cart-open');
});
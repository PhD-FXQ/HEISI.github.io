$(document).ready(function(){
  jQuery(".menu-btn").click(function(){jQuery(this).siblings(".menu").fadeToggle();});
  AOS.init({
    duration: 1000,
  })
//$(".copy-add-btn").click(function(){
//  var copyText = $("input.text-to-copy");
//  copyText.select();
//  document.execCommand("copy");
//}); 
//jQuery('.logo-slider').slick({
//  infinite: true,
//  slidesToShow: 1,
//  arrows: false,
//  variableWidth: true, 
//  autoplay: true,
//  autoplaySpeed: 0,
//  speed: 5000,
//  pauseOnHover: false,
//  cssEase: 'linear'
//  });
    setTimeout(function () {
      jQuery('.home-sticker-gallery').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        variableWidth: true, 
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear'
        });
      }, 500);
// Accordian
  // Question handler
//$('.faq-q').on("click", function() {
//    $(this).next().slideToggle("500");
//    $(this).toggleClass('active');
//});

//$('#addressDropdown').on('change', function () {
//  var selectedValue = $(this).val();
//  $('#selectedValue').val(selectedValue);
//  $('#selectedValue').click();
//});
//$('#selectedValue').on('click', function () {
//  var textFieldValue = $(this).val();
//  var tempInput = $('<input>');
//  $('body').append(tempInput);
//  tempInput.val(textFieldValue).select();
//  document.execCommand('copy');
//  tempInput.remove();
//  alert('Address Copied: ' + textFieldValue);
//});

});
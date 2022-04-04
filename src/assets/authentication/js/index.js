$('.dropdown-menu').click(function (event) {
  event.stopPropagation();
});

$('.go-to-notification').click(function (event) {
  event.stopPropagation();
  $('.notification-activity').hide();
  $('.notification-settings').show();
});

$('.back-to-activity').click(function (event) {
  event.stopPropagation();
  $('.notification-settings').hide();
  $('.notification-activity').show();
});

$('.go-to-wishlist-content').click(function (event) {
  event.stopPropagation();
  $('.user-info-content').hide();
  $('.wishlist-content').show();
});

$('.back-to-wishlist').click(function (event) {
  event.stopPropagation();
  $('.wishlist-content').hide();
  $('.user-info-content').show();
});

$('.go-to-organization-content').click(function (event) {
  event.stopPropagation();
  $('.user-info-content').hide();
  $('.organization-content').show();
});


$('.back-to-organization').click(function (event) {
  event.stopPropagation();
  $('.organization-content').hide();
  $('.user-info-content').show();
});


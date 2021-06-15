const url = window.location.href;
$('.header .navbar-nav .nav-link').each((el) => {
  $(el).removeClass('active');
  if (el.href === url) {
    $(el).addClass('active');
  }
});

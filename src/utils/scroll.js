$('.scroll-item a').click(function(e) {
  e.preventDefault();
  const target = $(this).attr('href');
  window.scrollTo(0,$(target).offset().top-60);
});

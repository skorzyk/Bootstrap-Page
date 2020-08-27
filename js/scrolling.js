function scroll(e) {
  var href = $(this).attr('href');
  if (
    href === '#second__section' ||
    href === '#download' ||
    href === '#first__section' ||
    href === '#home'
  ) {
    e.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $(href).offset().top,
      },
      100
    );

    location.hash = href;
  }
}

$('a[href^="#"]').click(scroll);

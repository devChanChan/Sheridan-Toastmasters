var typed = new Typed(".typed", {
  // Waits 1000ms after typing "First"
  strings: ["speaker", "leader", "facilitator", "storyteller"],
  typeSpeed: 75,
  backSpeed: 30,
  loop: true
});

$(document).on('ready', function() {
  $(".slideShow").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true,
    dots: true,
  });

  $('button.slick-prev').text('');
  $('button.slick-next').text('');

  $('.slick-dots button').text('');

});

// Slider
$(".carousel").carousel({
  interval: 6000,
  pause: "hover"
});

// Lightbox
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// Get the current year for the copyright
$("#year").text(new Date().getFullYear());

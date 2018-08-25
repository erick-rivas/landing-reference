$(document).ready(function () {

  $('.section-step').waypoint({
    handler: function (direction) {
      if($(this.element).hasClass("visited")) return;
      $(this.element).find('.image').css("visibility", "visible");
      $(this.element).find('.image').addClass("animated zoomIn");
      $(this.element).find('.image').addClass("visited");
    },
    offset: $(window).width() > 480 ? "500px" : "240px"
  });

});
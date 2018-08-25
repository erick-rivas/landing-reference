/**** Form sending ****/

$(document).ready(function() {

  $("#send-form").click(function() {
    var button = this;
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (valEmail(email)) {
      sendEvent("form", "send-contact", email + "<" + name + ">");
      sendConversion();
      $(button).animate({
        opacity: 0
      });
      $(button).prop("onclick", null).off("click");

      $.post($(location).attr('pathname'), {
          name: name,
          email: email,
          message: message
        },
        function(data, status) {
          $(button).css("background", "#82C800");
          $(button).css("border-color", "#82C800");
          $(button).text(FORM_SENT);
          $(button).animate({
            opacity: 1
          });
        });

    } else alert(INVALID_EMAIL);
  });
});

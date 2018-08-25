
/** Ids **/

var _lang = document.documentElement.lang;
var _userId = Math.floor((Math.random() * 1000000) + 1) + "v2910";
var _pageId = _pageName + (_lang != "EN" ? "-" + _lang.toLowerCase() : "");


/**** Analytics ****/

var version = "https://www.google-analytics.com/analytics_debug.js";
! function (a, b, c, d, e, f, g)
{
  a["GoogleAnalyticsObject"] = e;
  a[e] = a[e] || function ()
  {
    (a[e].q = a[e].q || []).push(arguments);
  }, a[e].l = 1 * new Date();
  f = b.createElement(c), g = b.getElementsByTagName(c)[0];
  f.async = 1;
  f.src = d;
  g.parentNode.insertBefore(f, g);
}(window, document, "script", version, "ga");

function sendEvent(category, action, label)
{
  ga("send", "event", category, action,
    _pageId + (label != "" ? "?" : "") + compressIds(label));
}

function sendTiming(category, variable, time)
{
  ga("send", "timing", category,
    _pageId + (variable != "" ? "?" : "") + compressIds(variable), time);
}

function compressIds(val)
{
  var res = val;
  res = res.replace("section", "s");
  res = res.replace("slide", "ld");
  return res;
}

ga("create", "UA-108861138-1", "auto");
if (location.hostname == 'localhost' || version.includes("debug"))
  ga('set', 'sendHitTask', null);
ga('set', 'dimension1', _userId);
ga("send", "pageview");


/** Adwords **/

window.dataLayer = window.dataLayer || [];

function gtag()
{
  if (!(location.hostname == 'localhost' || version.includes("debug")))
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'AW-829814233');

function sendConversion()
{
  gtag('event', 'conversion', {
    'send_to': 'AW-829814233/usKcCP-bpHgQ2evXiwM'
  });
}


/** Tracking **/

var _tempId = "";
var _tempTime = 0;

$(document).ready(function ()
{

  /** Enter events **/

  setTimeout(function ()
  {
    sendEvent("nav", "enter", "");
  }, 2000);

  /** Timing sections **/

  $('.section').waypoint({

    handler: function (direction)
    {
      var id = this.element.id;
      if (!id.startsWith("section") && !id.startsWith("apply")) return;
      if (direction == "down" && !$("#" + id).hasClass("visited")) {
        $("#" + id).addClass("visited");
        if (_tempId != "") {
          var t = new Date().getTime() - _tempTime;
          sendTiming("nav", _tempId, t);
        }
        sendEvent("nav", "scroll", id);
        _tempTime = new Date().getTime();
        _tempId = id;
      }
    },
    offset: '-20px'
  });

  /** Menu events **/

  $("#menu").click(function ()
  {
    sendEvent("nav", "click", "menu");
  });

  $("#nav-menu a").click(function ()
  {
    var id = $(this).attr("id");
    sendEvent("nav", "click", "menu-" + id.substring(9, id.length));
  });

  $(window).on("unload", function (e)
  {
    if (_tempId != "") {
      var t = new Date().getTime() - _tempTime;
      sendTiming("nav", _tempId, t);
      sendEvent("nav", "out", _tempId);
    }
  });

  /** Send form **/

  $(".send-form").click(function ()
  {
    var button = this;
    var email = $(button).prev().val();
    if (valEmail(email)) {
      sendEvent("form", "send", email);
      sendConversion();
      $.ajax({
        type: "POST",
        url: "http://localhost:4000/v1/accounts",
        data: {
          email: email,
          password: "1234",
          plan: "FREE"
        },
        success: function ()
        {
          showDone(form_notice);
        }
      });
    } else showError(invalid_email);
  });
});

function showError(text)
{
  showSnackbar(text, "error", 3000);
}

function showDone(text)
{
  showSnackbar(text, "done", 3500);
}

function showSnackbar(text, className, duration)
{
  var x = document.getElementById("snackbar");
  x.className = "show " + className;
  x.innerHTML = text;
  setTimeout(function () { x.className = x.className.replace("show", ""); }, duration);
}

function valEmail(a)
{
  var b = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return b.test(a);
}

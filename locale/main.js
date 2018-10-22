var commons = require('./commons.js');

function getData(lang)
{
  if (lang == "es")
    return {
      s0_title: "",
      s0_sub: "",
      s0_call1: "Escribe tu correo",
      s0_call2: "Empieza gratis",
      s1_title: "",
      s1_sub: "",
      s11_title: "",
      s11_img: "#",
      s12_title: "",
      s12_img: "#",
      s13_title: "",
      s13_img: "#",
      s2a_title: "Cómo funciona.",
      s21_title: "",
      s21_sub: "",
      s21_img: "#",
      s22_title: "",
      s22_sub: "",
      s22_img: "#",
      s23_title: "",
      s23_sub: "",
      s23_img: "#",
      s24_title: "",
      s24_sub: "",
      s24_img: "#",
      s3_title: "",
      s3_sub: "",
      s3_img: "#",
      s4_title: "Empieza en 5 minutos.",
      s41_title: "",
      s41_sub: "",
      s41_img: "#",
      s42_title: "",
      s42_sub: "",
      s42_img: "#",
      s43_title: "",
      s43_sub: "",
      s43_img: "#"
    };
  else return {
    s0_title: "",
    s0_sub: "",
    s0_call1: "Enter your email",
    s0_call2: "Get started for free",
    s1_title: "",
    s1_sub: "",
    s11_title: "",
    s11_img: "#",
    s12_title: "",
    s12_img: "#",
    s13_title: "",
    s13_img: "#",
    s2a_title: "How it works.",
    s21_title: "",
    s21_sub: "",
    s21_img: "#",
    s22_title: "",
    s22_sub: "",
    s22_img: "#",
    s23_title: "",
    s23_sub: "",
    s23_img: "#",
    s24_title: "",
    s24_sub: "",
    s24_img: "#",
    s3_title: "",
    s3_sub: "",
    s3_img: "#",
    s4_title: "Get started in 5 minutes.",
    s41_title: "",
    s41_sub: "",
    s41_img: "#",
    s42_title: "",
    s42_sub: "",
    s42_img: "#",
    s43_title: "",
    s43_sub: "",
    s43_img: "#"
  };
}

module.exports = function (req, res)
{
  var base = commons(req, res);
  return Object.assign(getData(base.lang), base);
}
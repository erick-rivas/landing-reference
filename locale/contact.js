var commons = require('./commons.js');

function getData(lang) {
  if (lang == "es")
    return {
      s0_title: "Contacto",
      s0_input1: "Nombre",
      s0_input2: "Correo",
      s0_input3: "Mensaje",
      s0_call: "Enviar"
    };
  else return {
    s0_title: "Contact",
    s0_input1: "Name",
    s0_input2: "Email",
    s0_input3: "Message",
    s0_call: "Send"
  };
}

module.exports = function (req, res) {
  var base = commons(req, res);
  return Object.assign(getData(base.lang), base);
}
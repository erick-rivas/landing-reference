module.exports = function (req, res)
{

  //Lang
  let lang = "en";
  if (req.params.lang) lang = req.params.lang;
  else lang = req.headers["accept-language"].substring(0, 2);

  //Url
  let url = "#";
  if (lang == "es")
    return {
      url: url,
      lang: "es",
      author: "",
      header_title: "",
      header_description: "",
      support: "Soporte",
      contact: "Contacto",
      apply_notice: "Empieza gratis",
      email: "Escribe tu correo",
      send: "Enviar",
      made_mexico: "Hecho con ♥ en Santa Fe",
      download: "Descargar",
      terms: "Términos",
      privacy: "Privacidad",
      maintenance: "Estamos en mantenimiento<br/>",
      back_soon: "Regresaremos pronto",
      invalid_email: "Correo inválido",
      form_sent: "Enviado",
      form_notice: "Perfecto, revisa tu correo"
    };
  else
    return {
      url: url,
      lang: "en",
      header_title: "",
      header_description: "",
      support: "Support",
      contact: "Contact us",
      apply_notice: "Get started for free",
      email: "Enter your email",
      send: "Send",
      made_mexico: "Made with ♥ in Santa Fe",
      download: "Download",
      terms: "Terms",
      privacy: "Privacy",
      maintenance: "We are under maintenance<br/>",
      back_soon: "We'll back soon",
      invalid_email: "Invalid email",
      form_sent: "Sent",
      form_notice: "Perfect, check your email"
    };
}
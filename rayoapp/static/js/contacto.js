const userNameField = document.querySelector("[name=nombre]");
const userLastnameField = document.querySelector("[name=apellido]");
const userEmailField = document.querySelector("[name=email]");
const userMobilField = document.querySelector("[name=celular]");
const userMessageField = document.querySelector("[name=message]");

const ValidarCampoField = (e) => { //SE CREA FUNCION PARA VALIDAR QUE SE ESCRIBAN LOS CAMPOS Y NO ESTE VACIO, LUEGO SE USA PARA VALIDAD CADA CAMPO DEL FORMULARIO
  const field = e.target; // Captura el campo
  const fieldValue = e.target.value;
  if (fieldValue.trim().length <= 0) { //Trim elimina los espacios al inicio y al final
    field.classList.add("invalid");
    field.nextElementSibling.classList.add("error"); // Del campo field captura el siguiente elemento hermano (span) y agrega la clase "Error"  
    field.nextElementSibling.innerText = `El campo ${field.name} es requerido`; // Y a ese elemento insertale "El campo ${nombre de cada imput}" es reequerido 
  } else {
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerText = "";
  }
}

const validateEmailFormat = e => { //FUNCION QUE VALIDA QUE TENGA MAS DE 5 CARACTERES Y QUE CORRESPONDA AL FORMATO DE EMAIL
  const field = e.target;
  const fieldValue = e.target.value;
  const regex = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
  if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
    field.classList.add("invalid");
    field.nextElementSibling.classList.add("error"); // Del campo field captura el siguiente elemento hermano (span) y agrega la clase "Error"  
    field.nextElementSibling.innerText = "Ingrese un email valido"; // Y a ese elemento insertale "El campo ${nombre de cada imput}" es reequerido 
  } else {
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerText = "";
  }
}

const validateNomFormat = e => { //FUNCION QUE VALIDA QUE TENGA MAS DE 41 CARACTERES Y QUE CORRESPONDA AL FORMATO DE NOMBRE
  const field = e.target;
  const fieldValue = e.target.value;
  const regex = new RegExp(/^[a-zA-ZÀ-ÿ\s]{1,40}$/);
  if (fieldValue.trim().length <= 41 && !regex.test(fieldValue)) {
    field.classList.add("invalid");
    field.nextElementSibling.classList.add("error"); // Del campo field captura el siguiente elemento hermano (span) y agrega la clase "Error"  
    field.nextElementSibling.innerText = "Ingrese un nombre valido"; // Y a ese elemento insertale "El campo ${nombre de cada imput}" es reequerido 
  } else {
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerText = "";
  }
}

const validateApeFormat = e => { //FUNCION QUE VALIDA QUE TENGA MAS DE 36 CARACTERES Y QUE CORRESPONDA AL FORMATO DE APELLIDO
  const field = e.target;
  const fieldValue = e.target.value;
  const regex = new RegExp(/^[a-zA-ZÀ-ÿ\s]{1,40}$/);
  if (fieldValue.trim().length <= 36 && !regex.test(fieldValue)) {
    field.classList.add("invalid");
    field.nextElementSibling.classList.add("error"); // Del campo field captura el siguiente elemento hermano (span) y agrega la clase "Error"  
    field.nextElementSibling.innerText = "Ingrese un apellido valido"; // Y a ese elemento insertale "El campo ${nombre de cada imput}" es reequerido 
  } else {
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerText = "";
  }
}

const validateMobilFormat = e => { //FUNCION QUE VALIDA QUE TENGA ENTRE 7 Y 12 DIGITOS Y QUE CORRESPONDA AL FORMATO DE TELEFONO
  const field = e.target;
  const fieldValue = e.target.value;
  const regex = new RegExp(/^\d{7,12}$/);
  if (!regex.test(fieldValue)) {
    field.classList.add("invalid");
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = "Ingrese un número valido";
  } else {
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerText = "";
  }
}

const validateMessageFormat = e => {
  const field = e.target;
  const fieldValue = e.target.value;
  const regex = /^[a-zA-Z0-9,.áéíóúÁÉÍÓÚüÜñÑ\s]{1,1000}$/;

  if (!regex.test(fieldValue)) {
    field.classList.add("invalid");
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = "Solo se permiten letras, números, comas, puntos, espacios y acentos";
  } else {
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerText = "";
  }
}

//SE VALIDA QUE SE ESCRIBA EL NOMBRE
userNameField.addEventListener("blur", ValidarCampoField);

//SE VALIDA QUE SE ESCRIBA EL APELLIDO
userLastnameField.addEventListener("blur", ValidarCampoField);

//SE VALIDA QUE SE ESCRIBA EL EMAIL
userEmailField.addEventListener("blur", ValidarCampoField);

//SE VALIDA QUE SE ESCRIBA EL TELEFONO
userMobilField.addEventListener("blur", ValidarCampoField);

//SE VALIDA QUE SE ESCRIBA EL MENSAJE
userMessageField.addEventListener("blur", ValidarCampoField);


userNameField.addEventListener("input", validateNomFormat) //OCUPA LA FUNCIÓN PARA VALIDAR EL NOMBRE
userLastnameField.addEventListener("input", validateApeFormat) //OCUPA LA FUNCIÓN PARA VALIDAR EL APELLIDO
userEmailField.addEventListener("input", validateEmailFormat) //OCUPA LA FUNCIÓN PARA VALIDAR EL EMAIL
userMobilField.addEventListener("input", validateMobilFormat) //OCUPA LA FUNCIÓN PARA VALIDAR EL CELULAR
userMessageField.addEventListener("input", validateMessageFormat) //OCUPA LA FUNCIÓN PARA VALIDAR EL MENSAJE
const EmailField = document.querySelector("[name=email]");



// const MobilField = document.querySelector("[name=password]");

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

//SE VALIDA QUE SE ESCRIBA EL EMAIL
EmailField.addEventListener("blur", ValidarCampoField);

EmailField.addEventListener("input", validateEmailFormat) //OCUPA LA FUNCIÓN PARA VALIDAR EL EMAIL


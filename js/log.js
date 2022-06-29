const error_correo = document.getElementById("error-correo");
const error_contra = document.getElementById("error-contra");


let correo = document.querySelector("input[type='text']");
let clave = document.querySelector("input[type='password']");

let correos = ["renato@gmail.com", "darwin@gmail.com", "alejandro@gmail.com", "andree@gmail.com"];
let claves = ["abc123", "111abc111", "contr4s3na", "andr3seña"];

function ingresar(e) {
    window.event.preventDefault();
    let valCorreo = e.txtcorreo.value;
    let valContra = e.txtcontra.value;

    console.log(valContra);

    let index = -1;

    correos.forEach((e, i) => {
        if (e === valCorreo) {
            index = i;
            error_correo.style.display = "none";
        }
    });

    console.log(index);

    if(index == -1) {
        error_correo.style.display = "block";
    }

    if(valContra === claves[index]) {
        window.location.href = "./perfiless.html";
    }
    else {
        error_contra.style.display = "block";
    }
}

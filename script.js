/**La letra "e" es convertida para "enter"`
    La letra "i" es convertida para "imes"`
    La letra "a" es convertida para "ai"`
    La letra "o" es convertida para "ober"`
    La letra "u" es convertida para "ufat"` */

const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const mensajeAlerta = document.getElementById("alerta_mensaje");

const texto_mensajeNoEncontrado = document.getElementById("txt_mensaje_noEncontrado");
const texto_ingresaMensaje = document.getElementById("txt_ingresa_mensaje");
//Botones de acción
//Boton encriptar mensaje
var button_encriptar = document.getElementById("btn_encriptar");
//Boton desencriptar mensaje
const button_desencriptar = document.getElementById("btn_desencriptar");
//Boton copiar mensaje
const button_copiar = document.getElementById("btn_copiar");

inputTexto.focus();
//ocultar el boton copiar hasta que demos click al boton encriptar
button_copiar.style.visibility = 'hidden';


function validar_mensaje(event) {
    const sim_alerta_i = String.fromCharCode(33).toString();
    const sim_alerta_f = String.fromCharCode(161).toString();
    

    var charCode = event.charCode;

    if (charCode != 0) {
        if (charCode < 32 || charCode > 32 && charCode < 97 || charCode > 122) {
            event.preventDefault();
            mensajeAlerta.textContent = sim_alerta_i + "Por favor usa sólo"
                + " letras minúsculas, sin acentos ni caracteres especiales" + sim_alerta_f;
        } else {
            mensajeAlerta.textContent = "Sólo letras minúsculas y sin acentos.";
        }
    }
}


function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);    
    if(textoEncriptado == ""){
        alert("No hay mensaje que encriptar");
    }else{
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = 'none';
        inputTexto.value = "";
        texto_mensajeNoEncontrado.style.color = "Whitesmoke";
        texto_ingresaMensaje.style.color = "Whitesmoke";        
        button_copiar.style.visibility = 'visible';
    }
   
    
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],
    ["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll
            (matrizCodigo[i][0], matrizCodigo[i][1])
            }
        }

        return stringEncriptada;  
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    inputTexto.value = "";

}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],
    ["o", "ober"], ["u", "ufat"]];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
                stringDesencriptada = stringDesencriptada.replaceAll
                    (matrizCodigo[i][1], matrizCodigo[i][0])
            }
    }

    return stringDesencriptada;    
}

function btnCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value).then((text)=>{
        console.log('clipboard contents', text);
    });

    mensaje.value = "";   
    button_desencriptar.disabled = false;
    inputTexto.focus();
        
    navigator.clipboard.readText()
    .then((text)=>{
        inputTexto.value = text;
    });   
}


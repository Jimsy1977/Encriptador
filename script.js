const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//* La letra "e" es convertida para "enter"
//* La letra "i" es convertida para "imes"
//* La letra "a" es convertida para "ai"
//* La letra "o" es convertida para "ober"
//* La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado 
    textArea.value = "";
    mensaje.style.backgroundImage = "none" 
}

function encriptar(stringEncriptada){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < codigo.length; i++){
        if(stringEncriptada.includes(codigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(codigo[i][0], codigo[i][1]) 
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado 
    textArea.value = "";    
}

function desencriptar(stringDesencriptada){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < codigo.length; i++){
        if(stringDesencriptada.includes(codigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(codigo[i][1], codigo[i][0]) 
        }
    }
    return stringDesencriptada
}

function copiarTexto() {
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = ""
  }



const btnCifrar = document.getElementById('boton-cifrar');
const btnDescifrar = document.getElementById('boton-descifrar');
const btnCopy = document.getElementById('btn-copy');

  btnCifrar.addEventListener('click',()=>{
    const stringMessage = document.getElementById('texto-ingresado').value;
    const offsetFinal = parseInt(document.getElementById('num-offset').value);
    const resultadoCipher = cipher.encode(offsetFinal,stringMessage);
    document.getElementById('texto-cifrado').innerHTML = resultadoCipher;
  });

  btnDescifrar.addEventListener('click',()=>{
    const stringMessage2 = document.getElementById('texto-ingresado').value;
    const offsetFinal2 = parseInt(document.getElementById('num-offset').value);
    const resultadoDecipher = cipher.decode(offsetFinal2,stringMessage2);
    document.getElementById('texto-cifrado').innerHTML = resultadoDecipher;
  });

  btnCopy.addEventListener('click', () => {
     let aux = document.getElementById('texto-cifrado');
     aux.select();
     // Copia el texto seleccionado
     document.execCommand("copy");
  });


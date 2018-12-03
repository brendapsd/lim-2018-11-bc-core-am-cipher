
const btnCifrar = document.getElementById('botonCifrar');
const btnDescifrar = document.getElementById('botonDescifrar');
let btnCopy = document.getElementById('btn-copy');

  btnCifrar.addEventListener('click',()=>{
    const stringMessage = document.getElementById('textoIngresado').value;
    const offsetFinal = parseInt(document.getElementById('NumOffset').value);
    const resultadoCipher = cipher.encode(offsetFinal,stringMessage);
    document.getElementById("cifrado").innerHTML = resultadoCipher;
  });

  btnDescifrar.addEventListener('click',()=>{
    const stringMessage2 = document.getElementById('textoIngresado').value;
    const offsetFinal2 = parseInt(document.getElementById('NumOffset').value);
    const resultadoDecipher = cipher.decode(offsetFinal2,stringMessage2);
    document.getElementById("cifrado").innerHTML = resultadoDecipher;
  });

  btnCopy.addEventListener('click', () => {
     let aux = document.getElementById('cifrado');
     aux.select();
     // Copia el texto seleccionado
     document.execCommand("copy");
  });

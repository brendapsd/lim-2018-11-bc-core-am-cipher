
const btnCifrar = document.getElementById('botonCifrar');
const btnDescifrar = document.getElementById('botonDescifrar');

  btnCifrar.addEventListener('click',()=>{
    const stringMessage = document.getElementById('textoIngresado').value;
    const offsetFinal = parseInt(document.getElementById('NumOffset').value);
    const resultadoCipher = cipher.encode(stringMessage,offsetFinal);
    document.getElementById("cifrado").innerHTML = resultadoCipher;
});

  btnDescifrar.addEventListener('click',()=>{
    const stringMessage2 = document.getElementById('textoIngresado').value;
    const offsetFinal2 = parseInt(document.getElementById('NumOffset').value);
    const resultadoDecipher = cipher.decode(stringMessage2,offsetFinal2);
    document.getElementById("cifrado").innerHTML = resultadoDecipher;
  });

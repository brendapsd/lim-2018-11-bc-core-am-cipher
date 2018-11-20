// window.cipher = {
  // ...
/*  let getData = function () {
    let texto = document.getElementById("texto").value;
    console.log(texto);
    document.getElementById("texto").value = "";
    document.getElementById("textoCifrado").value = texto;

  };*/
// };
 const textoCifrado = document.getElementById('texto-cifrado');
 const btnCifrar = document.getElementById('botonCifrar');

const moverTexto = () => {
  const textoACifrar = document.getElementById('textoUsuario').value;
  return textoACifrar;

}

btnCifrar.addEventListener('click', () => {
    textoCifrado.innerHTML = moverTexto();
});

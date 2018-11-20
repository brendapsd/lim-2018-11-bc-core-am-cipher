// window.cipher = {
  // ...
/*  let getData = function () {
    let texto = document.getElementById("texto").value;
    console.log(texto);
    document.getElementById("texto").value = "";
    document.getElementById("textoCifrado").value = texto;

  };*/
// };
 const textoACifrar = document.getElementById('textoIngresado');
 const btnCifrar = document.getElementById('botonCifrar');
 const resultadoCifrado = document.getElementById("texto-cifrado");
 function cifrarTexto(texto){
   let palabraCifrada = "";
   for (let i = 0 ; i < texto.lenght ; i++){
     palabraCifrada = palabraCifrada.concat(texto[i]);
    }
     return palabraCifrada;
}

 function haciendoClick(){
   const resultado = cifrarTexto(textoACifrar.value);
   resultadoCifrado.innerHTML = resultado;
 }

btnCifrar.addEventListener('click', haciendoClick );

/* const moverTexto = () => {
  const textoACifrar = document.getElementById('textoUsuario').value;
  return textoACifrar;
} */

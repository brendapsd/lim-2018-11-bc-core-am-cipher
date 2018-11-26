// window.cipher = {
  // ...
  const btnCifrar = document.getElementById('botonCifrar');
  const palabraCifrada = document.getElementById('cifrado');

  function cifrandoTexto() {
   const offset = parseInt(document.getElementById('offset').value);
   const textoInicial = document.getElementById('inputIngresado').value;
    const mayuscula = textoInicial.toUpperCase();
    let resultadoCifrado = '';
   for (let i = 0 ; i < mayuscula.length ; i++){
     if(mayuscula[i] === ' '){
       resultadoCifrado += ' ';
       // resultadoCifrado = resultadoCifrado + ' '
     } else {
       const cifrando = String.fromCharCode((mayuscula.charCodeAt(i)-65+offset)%26+65);
       resultadoCifrado += cifrando;
 // resultadoCifrado = resultadoCifrado + cifrando; igual que arriba, concatenar
 }}
     return resultadoCifrado;
 }
  btnCifrar.addEventListener('click', () => {
  console.log(cifrandoTexto())
  palabraCifrada.value = cifrandoTexto();
 })

 const botonDescifrar = document.getElementById('botonDescifrar');

 function descifrandoTexto() {
   const offset = parseInt(document.getElementById('offset').value);
   const textoInicial = document.getElementById('inputIngresado').value;
   const mayuscula = textoInicial.toUpperCase();
   let resultadoCifrado = '';
  for (let i = 0 ; i < mayuscula.length ; i++){
    if(mayuscula[i] === ' '){
      resultadoCifrado += ' ';
      // resultadoCifrado = resultadoCifrado + ' '
    } else {
      const cifrando = String.fromCharCode((mayuscula.charCodeAt(i)+65-offset)%26+65);
      resultadoCifrado += cifrando;
 // resultadoCifrado = resultadoCifrado + cifrando; igual que arriba, concatenar
 }}
    return resultadoCifrado;
 }
 botonDescifrar.addEventListener('click', () => {
 console.log(descifrandoTexto())
 palabraCifrada.value = descifrandoTexto();
 })
// };

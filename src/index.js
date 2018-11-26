let string = '';
let offset = '';
let btnCifrar = document.getElementById('botonCifrar');
let btnDescifrar = document.getElementById('botonDescifrar');
let mensajeCifrado = document.getElementById('cifrado');
let resultado = '';

  btnCifrar.addEventListener('click',()=>{
  string = document.getElementById('textoIngresado').value;
  offset = document.getElementById('NumOffset').value;
  resultado = cipher.encode(string,offset);
  console.log("entro1");
  mensajeCifrado.value = resultado ;
});

  btnDescifrar.addEventListener('click',()=>{
      string = document.getElementById('textoIngresado').value;
      offset = document.getElementById('NumOffset').value;
      resultado = cipher.decode(string,offset);
      console.log("entro2");
      mensajeCifrado.value = resultado;
  });

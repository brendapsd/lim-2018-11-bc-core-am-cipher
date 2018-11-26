window.cipher = {
  encode:function (string,offset){

  offset = parseInt(offset);
  let resultEncode = '';
  let textoMayuscula = string.toUpperCase();

  for (let i = 0 ; i < textoMayuscula.length ; i++){
    if(textoMayuscula[i] === ' '){
       resultEncode += ' ';
       // resultadoEncode = resultadoEncode + ' '
     } else {
       const cifrando = String.fromCharCode((textoMayuscula.charCodeAt(i)-65+offset)%26+65);
       resultEncode += cifrando;
 // resultadoEncode = resultadoEncode + cifrando; concatenar
      }

   }
   console.log("enro code");
   return resultEncode;
},

  decode:function (string,offset) {

  offset = parseInt(offset);
  let resultDecode = '';
  let textoMayuscula = string.toUpperCase();

  for (let i = 0 ; i < textoMayuscula.length ; i++){
    if(textoMayuscula[i] === ' '){
       resultDecode += ' ';
       // resultadoEncode = resultadoEncode + ' '
     } else {
       const cifrando = String.fromCharCode((textoMayuscula.charCodeAt(i)-65-(offset%26))%26+65);
       resultDecode += cifrando;
  // resultadoEncode = resultadoEncode + cifrando; concatenar
    }
     }
     console.log("entro decode");
      return resultDecode;
  }

};

window.cipher = {
  encode: (offset,string) => {
    let resultEncode = "";
    let encode = "";
  for (let i = 0 ; i < string.length ; i++){
    let ascii = string.toUpperCase().charCodeAt(i);
      if(ascii === 32){
       encode = " "; // resultadoEncode = resultadoEncode + ' '
        } else {
          encode = String.fromCharCode((ascii-65+offset)%26+65);
         // resultadoEncode = resultadoEncode + cifrando; concatenar
      }
      resultEncode += encode;
    }
   return resultEncode;
  },

  decode: (offset,string) => {
    let resultDecode = "";
    let decode = "";
  for (let j = 0 ; j < string.length ; j++){
    let ascii = string.toUpperCase().charCodeAt(j);
    let newOffset = offset%26;
    if(ascii === 32){
       decode = " "; // resultadoEncode = resultadoEncode + ' '
        } else {
       decode = String.fromCharCode((ascii+65-newOffset)%26+65);
        // resultadoEncode = resultadoEncode + cifrando; concatenar
        }
        resultDecode += decode;
    }
    return resultDecode;
  }
};

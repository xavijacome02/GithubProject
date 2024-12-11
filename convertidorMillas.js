convertir=function(){
  let textIngresado
  let text
  let textConvertido
  let numConvertido
  let cmpConvertido
  textIngresado=document.getElementById("txtIngresado");
  text=textIngresado.value;
  textConvertido=parseFloat(text);
  numConvertido= textConvertido*1.609;
  cmpConvertido=document.getElementById("resultado");
  cmpConvertido.innerHTML= numConvertido + " Km"
}
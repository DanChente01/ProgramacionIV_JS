//enviar formuario
function enviarFormulario(){
  window.parent.frames[2].location="menuPrincipal.html";
}
//ejercicio 1
function textoAleatorio(){
  var tamaño = parseInt(document.getElementById('longitud').value);
  var longitudReal = tamaño+1;
  var arrayLetras = new Array();
  var letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  
	  document.write("<h2 align='center'>Ejercicio 1</h2>");
    document.write("<p align='center'>Vector Caracteres Aleatorios</p>");

  for (var i=0; i < longitudReal; i++){
    var elemento = letras.charAt(Math.floor(Math.random()*letras.length));

    if (arrayLetras.indexOf(elemento)>=0) {
      i--;
    }else{
      arrayLetras[i]=elemento;
    }
  }

  document.write("<table border='1px' align='center'><tr>");
  //var arrayTamaño = arrayLetras.length;
  for (var i=0; i < arrayLetras.length; i++){
    if (arrayLetras.length%2==0) {
      if (arrayLetras[i]=='A'||arrayLetras[i]=='E'||arrayLetras[i]=='I'||arrayLetras[i]=='O'||arrayLetras[i]=='U') {
        if (i != arrayLetras.length/2) {
          document.write("<td><font color='green'>"+arrayLetras[i]+"</font></td>");
        }
      }else{
        if (i != arrayLetras.length/2) {
          document.write("<td><font color='blue'>"+arrayLetras[i]+"</font></td>");
        }
      }
      if (i == (arrayLetras.length/2)) {
        document.write("<td><font color='red'>"+arrayLetras[i]+"</font></td>");
      }
    }else{
      if (arrayLetras[i]=='A'||arrayLetras[i]=='E'||arrayLetras[i]=='I'||arrayLetras[i]=='O'||arrayLetras[i]=='U') {
        if (i != (arrayLetras.length/2)-0.5) {
          document.write("<td><font color='green'>"+arrayLetras[i]+"</font></td>");
        }
      }else{
        if (i != (arrayLetras.length/2)-0.5) {
          document.write("<td><font color='blue'>"+arrayLetras[i]+"</font></td>");
        }
      }
      if (i == (arrayLetras.length/2)-0.5) {
        document.write("<td><font color='red'>"+arrayLetras[i]+"</font></td>");
      }
    }
  }
  document.write("</tr></table>");
  //document.write("<br><center><form action='menuPrincipal.html' method='post' target='actualizar'><input type='submit' name='Atras' value='Atras' ></form> </center>");
  document.write("<br><center><input type='submit' name='aceptar'  value='Aceptar' onclick='enviarFormulario()'></center>");
}//fin ejercicio 1

//ejercicio2
function imagenesAleatorias() {
  var vecIma = new Array("img/1.png","img/2.png","img/3.png","img/4.png","img/5.png","img/6.png","img/7.png","img/8.png","img/9.png","img/10.png");
  var vec = [];
  
  document.write("<h2 align='center'> Ejercicio 2 </h2>")
  document.write("<p align='center'> Vector con valores imagenes aleatorios </p>")
  document.write("<table border='1px' align='center'><tr>");
  for(i = 0; i < 4; i++) {
      var vi = Math.floor(Math.random() * 9 + 1);
      if(vec.indexOf(vi) >= 0){
          i--;
      }else {
          vec[i] = vi;
      document.write("<td><img src='" + vecIma[vi] + "' width='200px' heigth='200px'></td>");
      }
  }
  document.write("</tr></table>");
  document.write("<br><center><input type='submit' name='aceptar'  value='Aceptar' onclick='enviarFormulario()'></center>");;
}
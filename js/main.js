function numerosAleatorios(){
	var vector = new Array();
	for(var i= 0; i < 11; i++){
		var valor = Math.floor((Math.random() * 100)+1);
		vector[i] = valor;
	}
	document.getElementById('respuestas').innerHTML = vector;
}

function buscarElemento(elementoABuscar){
	vector = new Array();
	for (var i = 0; i < 10; i++) {
		
		var valor = Math.floor((Math.random() * 100) + 1);
		vector[i] = valor;
}  
   var auxiliar = parseInt(elementoABuscar);
   var estado = vector.includes(auxiliar);

   if (estado) {
      var mensaje = "Se encuentra en el vector";
   }else{
   	  var mensaje = "No se encuentra en el vector"
   }
   
   document.getElementById('respuestas').innerHTML = "El vector es: " + vector + "<br>" + "<br>" + mensaje;
}

function comparar(a, b) {
	return a - b;
}
  
function ordenarSinBurbuja(){
	  vector = new Array();
	  vector2 = new Array();
	  for (var i = 0; i < 11; i++) {
		  var valor = Math.floor((Math.random() * 100) + 1);
		  vector[i] = valor;
		  vector2[i] = valor;
	  }
	  vector.sort(comparar);
	  document.getElementById('respuestas').innerHTML = "El vector es: " + vector2 + "<br>"+ "<br>"+ "El vector organizado es: "
	  +vector;
}

function textoAleatorio(){
	chars = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
	caracteres = new Array();
	code = "";


for (x=0; x < 11; x++){
rand = Math.floor(Math.random()*chars.length);
code += chars.substr(rand, 1);
caracteres.push(chars.substr(rand, 1));

}

document.getElementById('respuestas').innerHTML = "El vector de caracteres es: " + caracteres;
}

function concatenar(){
	vector = new Array();
	vector2 = new Array();
	for (var i = 0; i < 6; i++) {
		
		var valor = Math.floor((Math.random() * 10) + 1);
		vector[i] = valor;
		
	}

	for (var i = 0; i < 6; i++) {
		
		var valor2 = Math.floor((Math.random() * 10) + 1);
		vector2[i] = valor2;
		
	}

	document.getElementById('respuestas').innerHTML = "El vector 1 es: " + vector + "<br>" + "<br>" + "El vector 2 es: " + vector2+
	                        "<br>" + "<br>" + "La concatenacion es: " + vector.concat(vector2.reverse());


}

function reemplazarCentral(){
	vector = new Array();
	aux = new Array();
	for (var i = 0; i < 11; i++) {
		
		var valor = Math.floor((Math.random() * 10) + 1);
		vector[i] = valor;	
		aux[i] = valor;	
	}

	
	aux[Math.round(aux.length/2)-1] = 100;
	console.log(aux);
	document.getElementById('respuestas').innerHTML = "El vector es: " + vector + "<br>"+ "<br>"+ "Reemplazando: "
	+aux;

}
document.write("<h1 style='color:blue'>Ejemplo de archivo js hola</h1>");
function funcionMostrar(){
	alert('hello');
}
function funcionMostrar2(a){
	alert('hello '+a);
}

function calculadora(a,b){
	c = Number(a)+Number(b);
	d = Number(a)-Number(b);
	e = Number(a)*Number(b);
	f = Number(a)/Number(b);
	alert("la suma: "+c);
	alert("la resta: "+d);
	alert("la multiplicacion: "+e);
	alert("la division: "+f);
}

//VECTOR NORMAL
function vector(){
	v = new Array(10);
	for (var i = 1; i <= 10; i++) {
		v[i] = i;
	}
	for (var i = 1; i <= 10; i++) {
		document.write(v[i]+'  ');	
	}
}
//VECTOR CON TABLA
function vector2(){
	v = new Array(10);
	for (var i = 1; i <= 10; i++) {
		v[i] = i;
	}
	document.write('<table border="2"><tr>');
	for (var i = 1; i <= 10; i++) {
		document.write("<td>"+v[i]+"</td>");
		
	}
	document.write("</tr></table>");
}
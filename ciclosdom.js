var mytext;
var result;
var number = 10;

function creap() {
	var textElement = document.getElementById("mytext");
	my text = textElement.value;
	console.log(mytext);
	result = "";
	for (var i=0; i<number; i++) {
		result += '<p>' + mytext + '</p>';
	}
	console.log(result);
	document.getElementById("parrafos").innerHTML = result;
}

function crearlist() {
	var textElement = document.getElementById("mytext");
	mytext = textElement.value;
	console.log(mytext);
	result = "<ol>";
	for (var i=0; i<number; i++){
		result += '<li>' + mytext + '</li>';
	}
	result += '</ol>';
	console.log(result);
	document.getElementById("listas").innerHTML = result;
}

function createtable() {
	var textElement = document.getElementById("mytext");
	mytext = textElement.value;
	console.log(mytext);
	result = "<table border=1>";
	result += '<tr> <th> texto </th> <tr>';
	for (var i=0; i<number; i++) {
		result += '<tr>' + '<td>' + mytext + '</td>' + '</tr>';
	}
	result += '</table>'
	console.log(result);
	document.getElementById("tabla").innerHTML = result;
}
		



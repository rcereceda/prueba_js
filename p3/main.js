function Alumno(nombre, notas) {
	this.nombre = nombre;
	this.notas = notas;

	this.promedio = function() {
		var suma = 0;
		for (var i = 0; i < this.notas.length; i++) {
			if (!(isNaN(this.notas[i]))) {
				suma += parseInt(this.notas[i]);
			}
		}
		return (suma/this.notas.length);
	}
}

var alumno1 = new Alumno("Rodrigo", [10, 9, 10]);

var promedio1 = alumno1.promedio();

console.log(promedio1);
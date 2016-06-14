function Alumno(nombre, notas) {
	this.nombre = typeof(nombre) == "string" ? nombre : "Juan";
	this.notas = Array.isArray(notas) ? notas : [0, 0, 0];

	this.promedio = function() {
		var suma = 0;
		var n = 0;
		for (var i = 0; i < this.notas.length; i++) {
			if (!(isNaN(this.notas[i]))) {
				suma += parseInt(this.notas[i]);
				n++;
			}
		}
		return n > 0 ? (suma/n) : 0;
	}
}

var alumno1 = new Alumno("Rodrigo", [10, 9, 10]);

var promedio1 = alumno1.promedio();

console.log(promedio1);
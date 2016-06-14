var user1 = {
	nombre: "Rodrigo",
	edad: 33,
	arr: [1,2,3]
};
	
function copiarObjeto(obj) {
	return (JSON.parse(JSON.stringify(obj)));
}

var user2 = copiarObjeto(user1);

user2.nombre = "Jorge";

console.log("Rodrigo: " + user1.arr[0]);
console.log("Jorge: " + user2.arr[0]);
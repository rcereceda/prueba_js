var count = 3;

$("div").on('click', function() {
	count++;
	$("ol").append("<li>Elemento " + count + "</li>");
})

$("div").on('click', 'li' , function (e) {
	e.stopPropagation();
})
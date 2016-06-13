var x = 0;

$("[name=left]").on('click', function() {
	$("[name=box]").css({left: x - 50, position:'absolute'});
	x = $("[name=box]").position().left;
})

$("[name=right]").on('click', function() {
	$("[name=box]").css({left: x + 50, position:'absolute'});
	x = $("[name=box]").position().left;
})
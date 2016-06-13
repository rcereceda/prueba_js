$("textarea").on('keyup', function() {
	$("p").html($(this).val());
	
	if ($("[name=size]").val() != "") {
		$("p").css("font-size", $("[name=size]").val() + "px");
	}

	if ($("[name=font]").val() != "") {
		$("p").css("font-family", $("[name=font]").val());
	}

	if ($("[name=color]").val() != "") {
		$("p").css("color", $("[name=color]").val());
	}
})
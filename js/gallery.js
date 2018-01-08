$(document).ready(function() {
	
$('.gallery').click(function () {
	$('.locker, #modal').fadeIn(300);
	var childHtml = $(this).html();
	var child = $('<div></div>')
	.addClass('gallery')
	.append(childHtml);
	$('#modal').append(child);
});

$('.fa-times').click(function () {
	$('.locker, #modal').fadeOut(300); 
	$('#modal').children('div').remove();
	return false;
	});
	
$('.fa-chevron-right').click(function() {
	$('.gallery').append.next(this);
	});
});


/*$(document).ready(function () {
	$('.gallery').click(function () {
		$(this).modal();
	});
});*/
$(document).ready(function() {
	
$('.gallery').click(function () {
	$('.locker, #modal').show();
	var childHtml = $(this).html();
	var child = $('<div></div>')
	.addClass('gallery')
	.append(childHtml);
	$('#modal').append(child);
});

$('#modal > a').click(function () {
	$('.locker, #modal').hide(); 
	$('#modal').children('div').remove();
	});
});
// On page load, do this
$(document).ready(function(){
  
  //lightbox for newsletter form
	$('#newsletter').click(function() {
		$('.basic.modal').modal('show');
	});

	$('#submit').click(function() {
		$('.basic.modal').modal('hide');
	});

});


// On page load, do this
$(document).ready(function(){
  
  // Your Scripts

  $(window).resize(function(){
	if ($(window).width() <= 480){
		$('div#info').removeClass('twelve wide');
		$('div#info').addClass('sixteen wide')}

	else {$('div#info').removeClass('sixteen wide');
		$('div#info').addClass('twelve wide')}
});

});
$(document).ready(function(){
$('form').submit(function () {
    if ($('input').val() !== '') {
        var input_value = $('input').val();
        $('ul').append('<li>' + input_value + '<a class="delete-button" href=""><i class="fa fa-times fa-2x"></i></a></li>');
        //$('ul').append('<li>' + input_value '<a href="">x</a></li>');

    };
    $('input').val('');
    return false;
});
});	
$(document).on('click', 'a', function (e) {
    e.preventDefault();
    $(this).parent().remove();
});
$(document).on('click touchstart', 'li', function(e){
	$(this).find('.delete-button').css("opacity","1");
//	$(this).find('.delete-button').fadeToggle("slow","linear");
});

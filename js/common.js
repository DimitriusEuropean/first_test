$(document).ready(function(){
    $('.hexagon').hover(function(){
    	var myClass = $(this).attr('data-class');
        var removeClass = $('.description .description_up div').attr('class');
        $('.description .description_up div').removeClass(removeClass);
        $('.description .description_up div').addClass(myClass + ' foto');
        var myDesc = $(this).find('.desc').text();
        $('.description .description_down .text').text(myDesc);
        var myTitle = $(this).find('.name_tool').text();
        $('.description .description_up .name').text(myTitle);
    });

});

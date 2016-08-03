$(document).ready(function(){
    $('.hexagon').hover(function(){
    	var myClass = $(this).attr('data-class');

        var removeClass = $('.description-up div').attr('class');

        
        $('.description-up div').removeClass(removeClass);
        $('.description-up div').addClass('description-up__foto ' + 'description-up__foto_' + myClass);
        var myDesc = $(this).find('.desc').text();        
        $('.description-down__text').text(myDesc);
        var myTitle = $(this).find('.name-tool').text();
        $('.description-up__name').text(myTitle);
        $('.js-hexagon').removeClass('js-hexagon-selected');
        $(this).addClass('js-hexagon-selected');

    });

});

$(document).ready(function(){
    $("img").hover(function() {
        var temp = $(this).attr('data-alt-src');
        $(this).attr('data-alt-src', $(this).attr('src'));
        $(this).attr('src', temp);
    })
});
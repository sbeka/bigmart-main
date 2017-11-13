$(document).ready(function () {
    $('.small-imgs img').click(function () {

        //Remove all class of images
        var small_imgs = $(this).parent().find('img').removeClass('active');

        //Add class for current click image
        $(this).addClass('active');

        //Change big image
        var this_src = $(this).attr("src");
        var big_src = $(this).parent().parent().children('.big-img').children('img');
        big_src.attr("src", this_src);

    });
});
$(document).ready(function () {

    // FETCHING DATA FROM JSON FILE 
    $.getJSON("playground.json",
        function (data) {
            var student = '';

            // ITERATING THROUGH OBJECTS 
            $.each(data, function (key, value) {
                student += '<div class="masonry-item ' + value.code + '"> <div class="masonry-wrap"><a href="/playgroundContent.html?project=' + value.url + '"><img src="' + value.content[0] + '" alt="' + value.title + '" class="masonry-content"></a></div></div>';
            });
            $('.masonry').append(student);
        });
});

function getType(selectObject) {
    if (selectObject.value == "all") {
        $('.masonry-item').show();
        return false;
    }

    if (selectObject.value == "ux") {
        $('.masonry-item').show();
        $('.masonry-item').not('.ux').hide();
        return false;
    }

    if (selectObject.value == "design") {
        $('.masonry-item').show();
        $('.masonry-item').not('.design').hide();
        return false;
    }

    if (selectObject.value == "illustration") {
        $('.masonry-item').show();
        $('.masonry-item').not('.illustration').hide();
        return false;
    }

    if (selectObject.value == "animation") {
        $('.masonry-item').show();
        $('.masonry-item').not('.animation').hide();
        return false;
    }
}
$(document).ready(function () {
    $(".images").css({
        "width": $(".images").children().length * 100 + "%"
    })
    let count = 0;
    $(".right").click(function () {
        if (count < $(".images").children().length - 1) {
            count++;
            $(".images").animate({
                "margin-left": "-" + 100 * count + "%"
            })
            showHide(count);
        }
    })
    $(".left").click(function () {
        if (count > 0) {
            count--;
            $(".images").animate({
                "margin-left": "-" + 100 * count + "%"
            })
            showHide(count);
        }
    })

    function showHide(count) {
        switch (count) {
            case 0:
                $(".left").hide();
                break;
            case $(".images").children().length - 1:
                $(".right").hide();
                break;
            default:
                $(".right, .left").show();
        }
    }
})
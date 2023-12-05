$(document).ready(function () {
    $(".sidenav").sidenav({edge: "right"});
});

$(document).ready(function () {
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('select').formSelect();
    $('.datepicker').datepicker({
        format: "dd mmmm, yyyy",
        yearRange: 3,
        showClearBtn: true,
        i18: {
            done: "Select"
        }
    });
});

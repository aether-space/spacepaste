$(function () {
    var q = $('#wrap-toggle-zone');
    if (q.length) {
        var link = $('<a href="">toggle line wrapping</a>');
        var paste = $('#paste');
        q.append(' | ').append(link);
        link.click(function () {
            paste.toggleClass('nowrap');
            return false;
        });
    }
});

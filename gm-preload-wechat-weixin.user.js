// ==UserScript==
// @name        gm-preload-weixin
// @namespace   gm.weixin.preload
// @description preload image at weixin
// @match        http://mp.weixin.qq.com/*
// @match        https://mp.weixin.qq.com/*
// @version     1
// @grant       none
// ==/UserScript==

function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "//ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.3.min.js");
    script.addEventListener('load', function () {
        var script = document.createElement("script");
        script.textContent = "(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}
function main() {
    //$('title').text($('#activity-name:eq(0)').text());
    $('img').each(function(){
        var dataSrc = $(this).attr('data-src');
        if (dataSrc)
            $(this).attr('src', dataSrc).removeAttr('style').removeAttr('data-s').removeAttr('data-w').removeAttr('data-ratio');
    })
}
addJQuery(window.setTimeout(main, 2000));

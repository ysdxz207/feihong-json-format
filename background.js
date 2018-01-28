var collapseImg = chrome.extension.getURL("images/cursor_collapse.png");
var expandImg = chrome.extension.getURL("images/cursor_expand.png");
$('.json-toggle-btn').css('background', 'url(' + collapseImg + ') no-repeat center');
$('.json-toggle-btn.collapsed').css('background', 'url(' + expandImg + ') no-repeat center');


function initConfig() {
    var config = {
        page_format: true,
        key_with_quotes: false,
        show_link_img: true
    };
    var cfg = {};
    cfg['jf-config'] = config;
    chrome.storage.sync.set(cfg, function() {

    });
}

initConfig();
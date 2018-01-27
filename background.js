var collapseImg = chrome.extension.getURL("images/cursor_collapse.png");
var expandImg = chrome.extension.getURL("images/cursor_expand.png");

$('.json-toggle-btn').css('background', 'url(' + collapseImg + ') no-repeat center');
$('.json-toggle-btn.collapsed').css('background', 'url(' + expandImg + ') no-repeat center');
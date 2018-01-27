//content js,可获取页面内容
chrome.extension.onMessage.addListener(function (request, sender, sendMessage) {
    if (request.jfFormatJson) {
        chrome.storage.local.get('feihongJfCurrentJson', function (json) {
            JFFormatter.format(json['feihongJfCurrentJson']);
        });
    }
});

function getBodyJsonStr() {
    return $('body').text();
}

function formatJson() {
    var bodyText = getBodyJsonStr();
    var jsonObj = {};
    jsonObj['feihongJfCurrentJson'] = bodyText;
    chrome.storage.local.set(jsonObj, function (obj) {
        JFFormatter.format();
    });
}

formatJson();
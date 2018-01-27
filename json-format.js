var JFFormatter = {};
(function () {
    JFFormatter.format = function (json) {
        chrome.storage.sync.get('jf-config', function (obj) {
            var needFormat = obj['jf-config']['page_format'];
            if (!needFormat && json) {
                $('html').empty();
                $('<body>').text(json).appendTo('html');
                json = null;
            }

            if (!needFormat) {
                return;
            }
            $('body').jf(json, {
                fontSize: '14',
                lineHeight: '24',
                collapsed: false,
                showImg: obj['jf-config']['show_link_img'],
                withQuotes: obj['jf-config']['key_with_quotes']
            });
        });
    };
})(jQuery);
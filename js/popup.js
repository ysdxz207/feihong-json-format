$(function () {
    toggleChecked = function (obj) {
        if (obj.hasClass('checked')) {
            obj.removeClass('checked');
            return false;
        } else {
            obj.addClass('checked');
            return true;
        }
    };
    bind = function () {

        $('.popup-main ul li').on('click',function () {
            var _this = $(this);
            var itemCheckedName = _this.attr('id');

            if (itemCheckedName === 'about') {
                return;
            }
            var checked = toggleChecked(_this);
            var itemCheckedValue = checked;

            var config = {};
            chrome.storage.sync.get('jf-config', function (obj) {
                config = obj || {};
                config['jf-config'][itemCheckedName] = itemCheckedValue;
                chrome.storage.sync.set(config, function() {
                    chrome.storage.sync.get('jf-config', function (obj) {
                        // alert(JSON.stringify(obj, undefined, 4));
                        //修改配置后发送格式化json请求,重新格式化json
                        chrome.tabs.getSelected(null, function (tab) {
                            chrome.tabs.sendMessage(tab.id, {
                                jfFormatJson: true
                            },function (response) {

                            });
                        });
                    });
                });
            });
        });
    };



    init = function () {

        chrome.storage.sync.get('jf-config', function (obj) {
            var obj = obj || {},
                config = obj['jf-config'];
            $('.popup-main ul li').each(function (index, el) {
                var id = $(el).attr('id');
                for (var key in config) {
                    if (key === id
                        && config[key]) {
                        $(el).addClass('checked');
                    }
                }
            });

        });
    };

    init();
    bind();
});
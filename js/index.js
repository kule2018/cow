var $ = require('./zepto');
var dom = require('./common/dom');
var url = require('./common/url');
var com = require('./common/const');

Zepto(function() {
    /**
     * 预加载图片
     */
    $("img[data-src]").each(function () {
        var $this = $(this);
        var src = $this.data('src');
        dom.preImage(src, function () {
            $this.attr('src', src);
        });
    });

    var $unit = $('#unit');
    /**
     * 点击图片
     */
    $('.cow').on('touchstart', function(e) {
        e.preventDefault();
        var $this = $(this);
        if($this.index() == 6) {
            $unit.html(3.3);
        }
        $this.addClass('slideUp');
    });

    /**
     * 倒计时
     */
    var countdown, second = 9, count = 100;

    /**
     * 倒计时与游戏逻辑
     * 默认是9秒
     */
    var $thousand = $('#thousand'), $hundred=$('#hundred'), $decade = $('#decade');
    function interval() {
        countdown = setInterval(function() {
            if(second < 0) {
                $decade.html(0);//小数位赋0
                clearInterval(countdown);
            }
            count--;
            if(count <= 0) {
                count = 100;
                second--;
                if(second >= 0) {
                    $thousand.html(second);
                }
            }
            if(second >= 0) {
                $decade.html(count % 10);
                $hundred.html((count /10 >>0) % 10);
            }
        }, 10);
    }
    interval();
});
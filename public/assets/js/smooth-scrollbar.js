/**
 * jQuery Momentum Scroll
 * This will transform the native scroll of the browser into a very smooth scroll with momentum effect
 * https://github.com/iahnn/jQuery-Momentum-Scroll
 * licensed under MIT
 * version 1.0.2
 */
jQuery(function ($) {

    "use strict";

    var win = $(window)
        , target = $('#testing')
        , wrapper = target.find('> div')
        , easing = "ease-out" //css easing
        , duration = "0.8s" //duration ms(millisecond) or s(second)
        , top = 0
        , resizeTimeout
        , jmScroll = {
            _init: function () {
                if (wrapper.length == 1) {
                    target.css({
                        margin: '0',
                        padding: '0',
                        width: '100%',
                        height: wrapper.height() + 'px'
                    });

                    wrapper.css({
                        transition: 'transform ' + duration + ' ' + easing,
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100%',
                        padding: '0',
                        zIndex: '2',
                        display: 'block',
                        backfaceVisibility: 'hidden'
                    });

                    jmScroll._reFlow(function () {
                        jmScroll._scroll();
                    });
                }
            },

            _scroll: function () {
                top = win.scrollTop();
                wrapper.css('transform', 'translateY(-' + top + 'px)');
            },

            _reFlow: function (callback) {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(function () {
                    target.height(wrapper.height());

                    var getType = {};
                    var isCallback = callback && getType.toString.call(callback) === '[object Function]';

                    if (isCallback) {
                        callback();
                    }
                }, 200);
            }
        };

    if (typeof window.ontouchstart == 'undefined') {
        win.on({
            scroll: function () {
                jmScroll._scroll();
            }
            , resize: function () {
                jmScroll._reFlow();
            }
            , load: function () {
                jmScroll._init();
            }
        });
    }

    $(window).scroll(function () {

        if (100 < $(window).scrollTop()) {
            jQuery('.laravel_header').css('box-shadow', '0 4px 4px 0px #0000000f')
        }
        else {
            jQuery('.laravel_header').css('box-shadow', 'none')
        }
    })

    jQuery(document).scroll(function (e) {

        var scrolldata = $(document).height() - $(window).height();
        var docudata = $(document).scrollTop()

        jQuery('.laravel_page_scroller').css('width', (docudata * 100) / scrolldata + "%");
    })
});


jQuery(document).ready(function () {
    jQuery("body").on('click',function(){
        jQuery(".laravel_portfoliyo_view_button").fancybox();  
    })
    jQuery('body').on('click','#careerpopupopen',function(){
        var dataname = jQuery(this).attr('applydata');
        jQuery('#applyname').val(dataname)
        jQuery('#careermodelopen').css('display','block');
    })
    jQuery('#career_model_colse').on('click',function(){
        jQuery('#careermodelopen').css('display','none');
    })
});



var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {

    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }
    else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span>' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    }
    else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};

//IMPORT CSS WEBPACK
import '../css/main.scss';

// IMPORT JQUERY
let $ = require('jquery');
window.$ = $;
window.jQuery = $;

// IMPORT OTHER PACKAGES
import lazyframe from "lazyframe";

//LET'S SCRIPT, OH YEAH !
jQuery( document ).ready(function() {
    
    //STICKY MENU ANIMATIONS
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = jQuery('header').height();
    window.addEventListener('scroll', function(e){
        didScroll = true;
    });
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    function hasScrolled() {
        var st = window.scrollY;
        if(Math.abs(lastScrollTop - st) <= delta) return;
        if (st > lastScrollTop && st > navbarHeight){
            jQuery('header').fadeTo(0, 1).addClass('scrolling');
            jQuery('header').removeClass('nav-up');
        } else {
            if(st < navbarHeight){
                jQuery('header').removeClass('nav-up');
                setTimeout( function() {
                    jQuery('header').removeClass('scrolling');
                }, 250);
            } else{
                if(st + window.outerHeight < document.body.scrollHeight) {
                    jQuery('header').fadeTo(0, 1).addClass('nav-up');
                }
            }
        }
        lastScrollTop = st;
    }

    //BLOC INTERFACES

    jQuery('section#interfaces div.option div.top').on('click', function(){
        var option  = jQuery(this).parent('.option');
        var data    = jQuery(this).data('onglet');
        jQuery('section#interfaces div.option').removeClass('current');
        option.addClass('current');

        var screens = jQuery('section#interfaces div.screens div.screen');
        screens.removeClass('current');
        screens.each(function(){
            if(jQuery(this).data('onglet') == data){
                jQuery(this).addClass('current');
            }
        })

        var icons   = jQuery('section#interfaces div.bottom div.icon');
        icons.removeClass('current');
        icons.each(function(){
            if(jQuery(this).data('onglet') == data){
                jQuery(this).addClass('current');
            }
        })
    });

    //LAZYLOAD IFRAME
    let elements = jQuery(".lazyframe");
    lazyframe(elements, {
        debounce: 250,
        lazyload: true,
        autoplay: true
    });


});
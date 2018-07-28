var $star = $('.star');
var $circle = $('.circle');
var $square = $('.square');

var screenConfig = {
    opening: {
        duration:5
    }
}

var ans = []
opening()

function opening(){
    TweenLite.to($star, screenConfig.opening.duration, {
        rotation:360,
        ease: Power2.easeInOut 
    });
    TweenLite.to($circle, screenConfig.opening.duration, {
        rotation:360,
        ease: Power2.easeInOut 
    });
    TweenLite.to($square, screenConfig.opening.duration, {
        rotation:-360,
        ease: Power2.easeInOut 
    });
    
    TweenLite.to($circle, screenConfig.opening.duration / 2, {
        css: {scale:1.1}
    });
    TweenLite.to($circle, screenConfig.opening.duration / 2, {
        css: {scale: 1}, 
        delay: screenConfig.opening.duration / 2
    })
    TweenLite.to($square, 1.6, {
        css: {scale:7},
        ease: Power2.easeInOut,
        delay: screenConfig.opening.duration - 1
    });
    TweenLite.to($circle, 1.6, {
        css: {scale:7},
        ease: Power2.easeInOut,
        delay: screenConfig.opening.duration - 0.7
    });
    TweenLite.to($star, 0.6, {
        css: {scale:7},
        ease: Power2.easeInOut,
        delay: screenConfig.opening.duration - 0.4,
        onComplete: function() {
            $('.homepage').remove()
            screenQ1Start()
        }
    });
}
screenQ1Start()
function screenQ1Start(){
    $('.question1').css('background', '#1469FF')
    $('.question1 .text_block').animate({opacity: 0}, 500, function() {
        $('.question1 .left').animate({opacity: 1}, 500)
    })

    $('.question1 .option').click(function(e){
        var value = $(e.target).attr('data-value')
        ans.push(value)
        // alert(value)
    })
    var $square = $('.question1 .animate_square') //top: 100
    var $triangle = $('.question1 .animate_triangle') //top: 300
    var $circle = $('.question1 .animate_circle') // bottom: -100

    TweenLite.to($('.question1 .right'), 1, {css: {left: '60%'}, delay: 1})
    // TweenLite.to($square, 2, {css: {top: '100px'}, ease: Power3.easeOut, delay: 2});
    // TweenLite.to($triangle, 2, {css: {top: '300px'}, ease: Power2.easeOut, delay: 2});
    // TweenLite.to($circle, 2, {css: {bottom: '-100px'}, ease: Power2.easeOut, delay: 2});
    
}
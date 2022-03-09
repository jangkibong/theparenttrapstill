$(function(){
    //인트로 이미지 클릭 이벤트
    $('h1').on('click', function(evt){
        evt.preventDefault();
        $(this).addClass('sr-only');
        $("section").removeClass('sr-only')
    });
    
    
    //썸네일 클릭이벤트
    $('.thmbs>li>a').on('click',function(evt){
        evt.preventDefault();
        const imgSrc = $(this).attr('href')
        console.log(imgSrc);
        $('.pht').css({
            'background-image': 'url('+imgSrc+')'
        });

        $(this).parent().addClass('on')
        $(this).parent().siblings().removeClass('on')
    });
});
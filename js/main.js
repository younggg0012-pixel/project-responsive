
//REGIONS OF ICELAND

var swiper_rw = new Swiper('.swiper_rw', {
      autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
      slidesPerView:1,  //단수 (breakpoints: 의 포인트는 먼저 초기값을 모바일로 두어야 한다.640보다 작을 때)
      spaceBetween: 20,  //단사이 여백
      //loop: true,  //무한 loop
      //freeMode: true,  //터치 만큼 자유롭게 이동
      //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
      navigation: {    //이전/다음 버튼
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {   //페이지 네이션
        el: '.swiper-pagination',
        //dynamicBullets: true,
        clickable: true,
        //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
      },
      // autoplay: {  //자동
      //   delay: 3000,
      //   disableOnInteraction: false
      // },
    //   breakpoints:{
    //     641 : {   //브라우저가 641이상 (min-width) - 소형태블릿
    //       slidesPerView: 2,
    //       spaceBetween: 5
    //     },
    //     769 : {   //브라우저가 769이상 - 일반태블릿
    //       slidesPerView: 3,
    //       spaceBetween: 8
    //     },
    //     1025 : {  //브라우저가 1025이상 - 일반 pc
    //       slidesPerView: 4,
    //       spaceBetween: 13
    //     },
    //     1281 : {  //브라우저가 1281이상 - 와이드 pc
    //       slidesPerView: 5,
    //       spaceBetween: 15
    //     }
    //   }
    });



//MEDIA

     var thumb_media_wrap = new Swiper('.thumb_media_wrap', {
            spaceBetween:5,
            slidesPerView:3,
            //loop: true,
            //freeMode: true,
            loopedSlides: 5, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints:{
                769 : {
                   slidesPerView: 4
                }
            }
        });

       var media_container = new Swiper('.media_container', {
            spaceBetween:0,
            //loop:true,
            loopedSlides: 5, //looped slides should be the same
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {   //페이지 네이션
                el: '.swiper-pagination',
                //dynamicBullets: true,
                clickable: true,
                //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
            },
            thumbs: {
                swiper: thumb_media_wrap,
            },
        });

        $('#content .thumb_media_wrap .thumb_list img').click(function(){
            $('#content .thumb_media_wrap .thumb_list img').removeClass('on');
            $(this).addClass('on');
        });
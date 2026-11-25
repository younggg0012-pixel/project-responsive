// JavaScript Document

    var cnt=$('.tabs .tab_menu a');  //탭메뉴 개수 ***

    function tab_call(){
        $('.tabs .contlist').hide();
        $('.tabs .contlist:eq(0)').fadeIn('slow'); // 첫번째 탭 내용만 열어라
      
        $('.tabs .tab').click(function(e){ //각각의 탭메뉴를 클릭하면 
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
          
          var ind = $(this).index('.tabs .tab');  // 클릭시 해당 index를 뽑아준다
          //console.log(ind);

          $(".tabs .contlist").hide(); //모든 탭내용을 안보이게...
          $(".tabs .contlist:eq("+ind+")").fadeIn('slow'); //클릭한 해당 탭내용만 보여라
          $('.tabs .tab').removeClass('active'); //모든 탭메뉴를 비활성화
          $(this).addClass('active'); // 클릭한 해당 탭메뉴만 활성화
        });
    }

    setTimeout(tab_call ,2000); //2초동안의 지도를 그릴 시간을 줌!

    
    
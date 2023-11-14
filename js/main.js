




$(document).ready(function(){
	
$(document).on('change', '.fl_inp', function () {

$(this).parents('.inp-val-wrap').find('.invalid-feedback').removeClass('visible');
var filename = $(this).val().replace(/.*\\/, "");

$(this).parents(".file-form-wrap").find(".file-name1").html(filename);
//$(this).parents('.my-btn').css('backgroundColor', '#008000');

	

});			
	
	
$("#polzunok_1" ).slider({
    animate: "slow",
    range: "min",    
    value: 100,
	min: 100,
	max: 400,
	slide : function(event, ui) {    
            
			$(".inp_1").val(ui.value);        
        }
});	
 $( ".inp_1" ).text($( "#polzunok_1" ).slider( "value" ));  


$("#polzunok_2" ).slider({
    animate: "slow",
    range: "min",    
    value: 100,
	min: 100,
	max: 400,
	slide : function(event, ui) {    
            
			$(".inp_2").val(ui.value);        
        }
});	
 $( ".inp_2" ).text($( "#polzunok_2" ).slider( "value" ));  


$("#polzunok_3" ).slider({
    animate: "slow",
    range: "min",    
    value: 100,
	min: 100,
	max: 400,
	slide : function(event, ui) {    
            
			$(".inp_3").val(ui.value);        
        }
});	
 $( ".inp_3" ).text($( "#polzunok_3" ).slider( "value" ));  	
	
	
	
	
	
	
	
$("#polzunok_4" ).slider({
    animate: "slow",
    range: "min",    
    value: 100,
	min: 100,
	max: 400,
	slide : function(event, ui) {    
            
			$(".inp_4").val(ui.value);        
        }
});	
 $( ".inp_4" ).text($( "#polzunok_4" ).slider( "value" ));  


$("#polzunok_5" ).slider({
    animate: "slow",
    range: "min",    
    value: 100,
	min: 100,
	max: 400,
	slide : function(event, ui) {    
            
			$(".inp_5").val(ui.value);        
        }
});	
 $( ".inp_5" ).text($( "#polzunok_5" ).slider( "value" ));  


$("#polzunok_6" ).slider({
    animate: "slow",
    range: "min",    
    value: 100,
	min: 100,
	max: 400,
	slide : function(event, ui) {    
            
			$(".inp_6").val(ui.value);        
        }
});	
 $( ".inp_6" ).text($( "#polzunok_6" ).slider( "value" ));  	
	
	
	
	
	
	
	
	$(".gal-item a").click(function(e){
$("body").addClass('popim');
});

$(".btn_bord").click(function(e){
$("body").removeClass('popim');
});
	
$(".btn_new	").click(function(e){
$("body").removeClass('popim');
});	

	
	
	
  $(".gal-item").slice(0, 4).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".gal-item:hidden").slice(0, 4).slideDown();
    if($(".gal-item:hidden").length == 0) {
       $("#loadMore").text("No Content").addClass("noContent");
    }
  });
  
})







$(document).ready(function(){
	
	
	








		
	
	
 $('.work-row').slick({
        dots: false,
        arrows: true,
        //infinite: true,
        autoplay: false,
        variableWidth: false,
        centerMode: false,
        slidesToShow: 1
    });		
	
	
	
	
	
$( ".qwiz-inner input[type=radio]" ).change(function() {
	var el = $(this).parents(".qwiz-item");
	
	setTimeout(() => {  el.hide();el.next().show(200); }, 350);
	
	
});
	


$(".qwiz-item .next").click(function(e){
		
		var el = $(this).parents(".qwiz-item");
		var type = $(this).parents(".qwiz-item").data('type');
		
		var flag = false;
		if(type == 'radio'){
			var inch = $(this).parents(".qwiz-item").find('input[type=radio]:checked').length;
			if (inch > 0) {
			flag = true;
			}
		} else if (type == 'text') {
			flag = true;
			
		}
		
		console.log(el);
		console.log(inch);
		
		
		
		if (flag) {
			el.hide();
			el.next().show(200);
		}else{
			alert('Ничего не выбрано');
		}
		
		
	});
	
	
	$(".qwiz-item .prev").click(function(e){
		var el = $(this).parents(".qwiz-item");
		
		el.hide();
		el.prev().show(200);
	});


   });












document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});







$(document).ready(function(){

	
$(document).on('click', '.js--form-submit', function () {
	
	
		
        var btn = $(this);
        var form = btn.closest('form');
        var errors = false;
		
        $(form).find('.required').each(function () {
            var inp = $(this);
            var val = inp.prop('value');
            if (val == '' || val == '0') {
                inp.addClass('error');
				$(this).siblings('.error-p').addClass('visible');
                errors = true;
            } else {
				if (inp.hasClass('inp-mail')) {
                    if (validateEmail(val) == false) {
                        inp.addClass('error');
						$(this).siblings('.error-p').addClass('visible');
                        errors = true;
                    }
                }
                if (inp.hasClass('inp-phone')) {
                    if (val.length < 6) {
                        inp.addClass('error');
						$(this).siblings('.error-p').addClass('visible');
                        errors = true;
                    }
                }
            }
        });

        if (errors == false) {

            var button_value = btn.val();
            btn.val('Отправляем...');
            var data = form.serialize();
            
			var form_id = form.children('.form-id').val();
			
            $.ajax({
                type: "POST",
                url: "/quiz/mail.php",
                data: data,
                success: function (data) {
					console.log (data);
					 window.location.href = "/quiz/thanks.html";
					
				
	
	$("form").trigger('reset');
	btn.val(button_value);
					
					
                },
                error: function (data) {
                    btn.val('Ошибка');
                    setTimeout(function () {
                        btn.val(button_value);
                    }, 2000);
                }
            });
			
        }

        return false;
    });
	
	
	$('.inp').focus(function () {
        $(this).removeClass('error');
		$(this).siblings('.error-p').removeClass('visible');
    });		
	
	
	
	
	
	
	
	
//masked input phone
//$(".phone").mask("+7 (999) 999-99-99",{placeholder:"_"});

//menu
$(".menudef").click(function(e){$(".head_menu").toggleClass("activemenu"),$("#mysidenav").toggleClass("width250"),e.preventDefault()}),$(".closebtn, section, .alinks").click(function(){$(".head_menu").removeClass("activemenu"),$("#mysidenav").removeClass("width250")});

//paralax 
if (window.innerWidth > 800) {var lFollowX=0,lFollowY=0,x=0,y=0,friction=.02;function paralaxbg(){translate="translate("+.5*(x+=(lFollowX-x)*friction)+"px, "+.5*(y+=(lFollowY-y)*friction)+"px) scale(1.1)",translate2="translate("+2*x+"px, "+2*y+"px) scale(1.1)",translate3="translate("+2*x+"px, "+2*y+"px) scale(1.1)",$(".parbg").css({"-webit-transform":translate,"-moz-transform":translate,transform:translate}),$(".parbg2").css({"-webit-transform":translate2,"-moz-transform":translate2,transform:translate2}),$(".parbg3").css({"-webit-transform":translate3,"-moz-transform":translate3,transform:translate3}),window.requestAnimationFrame(paralaxbg)}$(window).on("mousemove",function(a){var t=Math.max(-100,Math.min(100,$(window).width()/2-a.clientX)),r=Math.max(-100,Math.min(100,$(window).height()/2-a.clientY));lFollowX=25*t/100,lFollowY=25*r/100}),paralaxbg();};

// menufixed
/*$(window).on("scroll",function(){var o=$("#header");10<$(window).scrollTop()?o.addClass("fixedm"):o.removeClass("fixedm")});*/

//moreless
var prmCount=3,toggleCount=3,totalCnt=$("#block_otziv .col3").length;$(".morelink").click(function(o){o.preventDefault(),$("#block_otziv .lesslink").removeClass("hiddeni");for(var l=prmCount+$("#block_otziv .col3.active").length,t=l+toggleCount,i=l;i<t;i++)$("#block_otziv").find(".col3").eq(i).addClass("active");(l=prmCount+$("#block_otziv .col3.active").length)==totalCnt&&$(this).addClass("hiddeni")}),$(".lesslink").click(function(o){o.preventDefault(),$("#block_otziv .morelink").removeClass("hiddeni"),$("#block_otziv").find(".col3").removeClass("active"),$(this).addClass("hiddeni")});

//scroll
$(document).on("click",'a[href^="#"]',function(t){t.preventDefault(),$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},500)});



//перенос данных в форму с первой формы
$(".radio2").on("change",function(a){var n=$(this).val();$("#popup_main input[name='kolvo1']").val(n)}),$(".radio1").on("change",function(a){var n=$(this).val();$("#popup_main input[name='type1']").val(n)});
});

//убрать анимацию при первой загрузке
$(window).on('load', function(){$("body").removeClass("preload");});

//Проверка формы
$("form .btn_or").click(function(e){var t=$(this).closest("form"),i=!0;t.find(".required").each(function(){var e=$(this).val();e&&""!=e||($(this).addClass("error"),i=!1)}),i||e.preventDefault()}),$(".required").focus(function(){var e=$(this);e.removeClass("error"),$("span.error",e).fadeOut()}),$(document).on("change","input[name='checkbox']",function(e){var t=$(this).closest("form");$(this).is(":checked")?t.find('button[type="submit"]').removeClass("disabled"):(t.find('button[type="submit"]').addClass("disabled"),t.find('button[type="submit"]').off("click"))}),$(".metrreq").keypress(function(e){if(8!=e.which&&0!=e.which&&(e.which<48||57<e.which))return!1});
//tabs
$(".main_tabs a").on("click",function(a){a.preventDefault(),$(".main_tabs a").removeClass("active"),$(this).addClass("active"),$(".taber").removeClass("active");var t=$(this).attr("data-href");$(".taber."+t).addClass("active")}),$(".inside_tabs.main_tab1 a").on("click",function(a){a.preventDefault(),$(".inside_tabs.main_tab1 a").removeClass("active"),$(this).addClass("active"),$(".main_tab1 .inside_tab").removeClass("active");var t=$(this).attr("data-href");$(".main_tab1 #"+t).addClass("active")}),$(".inside_tabs.main_tab2 a").on("click",function(a){a.preventDefault(),$(".inside_tabs.main_tab2 a").removeClass("active"),$(this).addClass("active"),$(".main_tab2 .inside_tab").removeClass("active");var t=$(this).attr("data-href");$(".main_tab2 #"+t).addClass("active")}),

$(".inside_tabs.main_tab3 a").on("click",function(a){a.preventDefault(),$(".inside_tabs.main_tab3 a").removeClass("active"),$(this).addClass("active"),$(".main_tab3 .inside_tab").removeClass("active");var t=$(this).attr("data-href");$(".main_tab3 #"+t).addClass("active")}),

$(".teamtab").on("click",function(a){a.preventDefault(),$(".teamtab").removeClass("active"),$(this).addClass("active"),$(".team_tab").removeClass("active");var t=$(this).attr("data-href");$(".team_tab#"+t).addClass("active")}),$(".inside_tab").each(function(){var t=$(this).attr("id");$("#"+t+" .thumbs_img").on("click",function(){$("#"+t+" .thumbs_img.active").removeClass("active"),$(this).addClass("active");var a=$(this).find("img").attr("src");$("#"+t+" .big_img").find("img").attr("src",a)})});

//карта






var event = function() {
  $("#maps").html('<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0f316b49915be8fd2de3451200facc5bb2d8466faaa1884f34e86db2d118429a&amp;source=constructor" width="100%" height="480" frameborder="0"></iframe>');
  window.removeEventListener('scroll', event);
}

window.addEventListener('scroll', event);

//cookie exit
/*if (window.innerWidth > 800) {$(document).ready(function(){function e(e){var o=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return o?decodeURIComponent(o[1]):void 0}document.cookie="time=null; path=/;",moved=!1,$(document).mousemove(function(e){e.clientY<=50?moved=!0:moved=!1}),$(document).mouseleave(function(){if(!0===moved&&(void 0===e("time")||"null"===e("time"))){$(".exitbutton").click();var o=new Date((new Date).getTime()+18000);document.cookie="time=true; path=/; expires="+o.toUTCString()}})});
};*/
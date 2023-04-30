(function($){
	$(document).ready(function(){

		$(window).scroll(function(){
			if($(window).scrollTop() > 0){
				$('.header-area').addClass('header-fixed');
			}else{
				$('.header-area').removeClass('header-fixed');
			}
		});
		$('.scroll').click(function(){
			$('html,body').animate({
				scrollTop:'0'
			},2000);
		});
		$(window).scroll(function(){
			if($(window).scrollTop() > 2000){
				$('.scroll').fadeIn(1000);
			}else{
				$('.scroll').fadeOut(1000);
			}
		});
//slide-menu
		$('.toogle').click(function(){
			$('.slide-menu-main').css({
				left:'0',
				transition:'.9s'
			});
		});
		$('#cross').click(function(){
			$('.slide-menu-main').css({
				left: '-280px',
			transition: '.9s'
			});
		});

		
		//slide-right
		$('.slide-right').click(function(){
			$('.slide-main').css({
				right:'0',
				transition:'.9s'
			});
		});

		$('.cross span').click(function(){
			$('.slide-main').css({
				right:'-100vw',
				transition:'.9s'
			});
		});

		//owl
		$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        650:{
            items:1,
            nav:false
        },
         960:{
            items:2,
            nav:true,
            loop:false
        },
         1050:{
            items:2,
            nav:true,
            loop:false
        },
        1200:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
	});
})(jQuery)
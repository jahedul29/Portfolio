$(document).ready(function(){
    
    var btns = $('.project-area .button-group button');
    
    btns.click(function(e){
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');
        
        var selector = $(e.target).attr('data-filter');
        
        $('.project-area .grid').isotope({
            filter:selector
        });
        
        return false;
    })
    
    //Fixed nav bar
    var nav_header_area_height = $('.header_aria').height() + 50;
    
    function navbarFixed(){
        
            $(window).scroll(function(){
                var scroll = $(window).scrollTop();
                
                if (scroll >= nav_header_area_height) {
                    // alert(scroll);
                    // alert(nav_header_area_height);
                    $('.main-menu').addClass('navbar_fixed');
                } else {
                    $('.main-menu').removeClass('navbar_fixed');
                    
                }
            })
        
    }
    
    navbarFixed();
    
});

function showAbility(){
	$('.ability').each(function(){
		$(this).find('.ability-bar').animate({
			width:$(this).attr('data-percent')
		},2000);
	});
}
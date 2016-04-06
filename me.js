


	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

		
		if(wScroll > $('#banner').offset().top){

			$('.main_nav').css({
				'height': '40px',
				'transition': 'all 1000ms cubic-bezier(1, 1.48, 0.47, 0.96) 0s',
				'-mo-transition':'all 1000ms cubic-bezier(1, 1.48, 0.47, 0.96) 0s'
			});

		}

		if(wScroll < $('#banner').offset().top){

			$('.main_nav').css({
				'height': '45px',
				'background-color' : '#fafafa',
				'transition': 'all 1000ms cubic-bezier(1, 1.48, 0.47, 0.96) 0s',
			'-mo-transition':'all 1000ms cubic-bezier(1, 1.48, 0.47, 0.96) 0s'
			});

		}


		//script for nav links
		if(wScroll > $('#banner').offset().top){

			$('.main_nav ul li a').css({
				'font-size': '10px',				
				'transition': 'all 1000ms cubic-bezier(1, 1.48, 0.47, 0.96) 0s',
				'-mo-transition':'all 1000ms cubic-bezier(1, 1.48, 0.47, 0.96) 0s'
			});

		}

		if(wScroll < $('#banner').offset().top){

			$('.main_nav ul li a').css({
				'font-size': '12px',
				
			});

		}

	});
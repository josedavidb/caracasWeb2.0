$(document).ready(function(){

	var header = document.getElementById('header');
	var headroom = new Headroom(header);
	headroom.init();

	var botonBuscador = $('#botonBuscador');
	busquedaActivada = 0;

	$('#botonBuscador').on('click', function(e){
		e.preventDefault();
		if (busquedaActivada == 0){
			$('#input-search').css("display","block");
			$('#table').css("display","block");
			busquedaActivada = 1;
		}
		else{
			$('#input-search').css("display","none");
			$('#table').css("display","none");
			busquedaActivada = 0;
		}
		
	});


	var botonMenu = $('.botonMenu');
	espacioNav = $('.espacioNav');
	botonesMenu = $('.botonesMenu');
	menuPrincipal = $('.menuPrincipal');
	espacioLogo = $('.espacioLogo');
	navegacionAct = false;
	tamano = $(window).width();

	$(botonMenu).on('click', function(e){
		if (navegacionAct == false){
			espacioNav.css('display','block');
			botonesMenu.css('flex-direction','column');
			menuPrincipal.css('flex-wrap','wrap');
			navegacionAct = true;
		}
		else{
			espacioNav.css('display','none');
			navegacionAct = false;
		}
		

	});

	$(window).on('resize',function(){
		if ($(this).width() >= 780){
			espacioNav.css('display','none');
			botonMenu.css('display','none')
			espacioLogo.css('width','20%');
			//botonesMenu.css('width','80%');
			menuPrincipal.css('flex-wrap','nowrap');	
			botonesMenu.css('flex-direction','row');
			espacioNav.css('display','block');		
	}

	});

	$(window).on('resize',function(){
		if ($(this).width() < 780){
			navegacionAct = false;
			espacioNav.css('display','none');
			botonMenu.css('display','block');
			espacioLogo.css('width','100%');
			espacioLogo.css('justify-content','space-between');
			botonMenu.css('font-size','40px');
			botonMenu.css('margin-right','20px');
			botonMenu.css('cursor','pointer');
			
	}

	});



});
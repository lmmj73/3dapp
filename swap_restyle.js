var counter = 0;
$(document).ready(function() {
	
	selectPage();
	selectModel();

	function selectPage() {

		$('#home').show();
		$('#about').hide();
		$('#models').hide();
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide(); 
        $('#costaDescription').hide();
        $('#coke').show();
        $('#sprite').hide();
        $('#pepper').hide();
        $('#costa').hide();


		$('#navHome').click(function(){
			$('#home').show();
            $('#gallery').show();
			$('#about').hide();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide(); 
            $('#costaDescription').hide();	  
		});

		$('#navAbout').click(function(){
			$('#home').hide();
            $('#gallery').show();
			$('#about').show();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide(); 
            $('#costaDescription').hide();		  
		});

		$('#navModels').click(function(){
			$('#home').hide();
			$('#about').hide();
            $('#gallery').show();
			$('#models').show();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide(); 
            $('#costaDescription').hide();	
		});
	}

	function selectModel() {

		$('#navCoke').click(function(){
			$('#coke').show();
			$('#sprite').hide();
			$('#pepper').hide();
            $('#costa').hide();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide(); 
            $('#costaDescription').hide();	
		});

		$('#navSprite').click(function(){
			$('#coke').hide();
			$('#sprite').show();
			$('#pepper').hide();
            $('#costa').hide();
			$('#interaction').show(); 
			$('#cokeDescription').hide();
			$('#spriteDescription').show();
			$('#pepperDescription').hide();
            $('#costaDescription').hide();		  	  
		});

		$('#navPepper').click(function(){
			$('#coke').hide();
			$('#sprite').hide();
			$('#pepper').show();
            $('#costa').hide();
			$('#interaction').show(); 
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').show();
            $('#costaDescription').hide();		   
		});
        $('#navCosta').click(function(){
			$('#coke').hide();
			$('#sprite').hide();
			$('#pepper').hide();
            $('#costa').show();
			$('#interaction').show(); 
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide();
            $('#costaDescription').show();		   
		});
	}

});

function changeLook() {
	counter += 1;
	switch (counter) {
		case 1:
			document.getElementById('bodyColor').style.backgroundColor = 'rgb(79, 145, 209)';
			document.getElementById('headerColor').style.backgroundColor = 'rgb(85, 221, 155)';
			document.getElementById('footerColor').style.backgroundColor = 'rgb(79, 145, 209)';
			break;
		case 2:
			document.getElementById('bodyColor').style.backgroundColor = 'rgb(113, 22, 38)';
			document.getElementById('headerColor').style.backgroundColor = 'rgb(13, 13, 13)';
			document.getElementById('footerColor').style.backgroundColor = 'rgb(113, 22, 38)';
			break;
		case 3:
            counter = 0;
			document.getElementById('bodyColor').style.backgroundColor = 'white';
			document.getElementById('headerColor').style.backgroundColor = 'rgb(133, 89, 92)';
			document.getElementById('footerColor').style.backgroundColor = 'rgb(133, 89, 92)';
			break;
	}
}

function changeBack() {
	document.getElementById('bodyColor').style.backgroundColor = '#F8F8F8';
	document.getElementById('headerColor').style.backgroundColor = '#C00';
	document.getElementById('footerColor').style.backgroundColor = '#C00';
}

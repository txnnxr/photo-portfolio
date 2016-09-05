$(document).ready(function(){
	$("#myCarousel").carousel({interval: 3500, pause: "hover"});



	$(".post").hover(function(){
		$(".res-text", this).css("color", "black");
		$("img", this).css("opacity", "0.5");
	},
	function(){
		$(".res-text", this).css("color", "white");
		$("img", this).css("opacity", "1.0");
	});


//Search Page
	//show advanced search options
	$('.advanced-link').click(function(){
		if($('.advanced-options').is(':visible')){
			$('.advanced-options').hide();
		}else{
			$('.advanced-options').show();
		}
	});

	//load more
	$('.load-more').click(function(){
		
	});

	
	//swipe plugin
	$('.carousel').bcSwipe({ threshold: 50 });


	//image upload preview
	function readURL(input) {

	    if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function (e) {
	            $('#preview').attr('src', e.target.result);
	            $('#preview').css('display', 'block');
	            $('#photo-info').show();

	            //gets file name and displays it in title
	            var name = $('#get-img')[0].files[0].name;
	       	 	$('#img-title').attr('value', name);
	        }

	        reader.readAsDataURL(input.files[0]);

	    }
	}

	$("#get-img").change(function(){
	    readURL(this);

	});
});



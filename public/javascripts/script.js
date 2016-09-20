$(document).ready(function(){
$("#myCarousel").carousel({interval: 3500, pause: "hover"});


	var showTime = 500;

//changes title colors to correspond with current model box
var name = '';
$('.model-box').hover(function(){
	//title color
	$('a.title').removeClass('schmid-colors')
	name = $(this).attr('name');
	$('a.title').addClass(name);


	//checks the width and then opens model boxes appropriately 
	var w = $(window).width();
	if((w >= 0) && (w <= 640)){
		$(this).css({width: '90%', filter: 'grayscale(0%)'});
		$(this).siblings().css({width: '2.5%'});
	}else if((w >= 641) && (w <= 1024)){
		$(this).css({width: '80%', filter: 'grayscale(0%)'});
		$(this).siblings().css({width: '5%'});
	}else if((w >= 1025) && (w <=1279)){
		$(this).css({width: '63%', filter: 'grayscale(0%)'});
		$(this).siblings().css({width: '9.25%'});
	}else if(w >= 1280){
		$(this).css({width: '65%', filter: 'grayscale(0%)'});
		$(this).siblings().css({width: '7.5%'});
	}

	//shows model box title 
	$('p.box-title', this).show(showTime);

}, function(){
	//title color
	$('a.title').addClass('schmid-colors')
	$('a.title').removeClass(name);

	//reset the model box sizes and reset to grayscale
	$(this).css({width: '20%', filter: 'grayscale(100%)'});
	$(this).siblings().css({width: '20%'});
	$('p.box-title', this).hide(300);

});

//clean up this messy ass function

//this should take the width
// function checkWidth(w){
// 	if((w >= 0) && (w <= 640)){
// 		$('.model-box').hover(function(){  //should only run hover once 
// 			//then inside hover use variables to set the widths of the current and not-current boxes
// 			$(this).css({width: '90%', filter: 'grayscale(0%)'});
// 			$(this).siblings().css({width: '2.5%'});
// 			$('p.box-title', this).show(showTime);
// 		}, function(){
// 			$(this).css({width: '20%', filter: 'grayscale(100%)'});
// 			$(this).siblings().css({width: '20%'});
// 			$('p.box-title', this).hide(showTime);
// 		});
// 	}else if((w >= 641) && (w <= 1024)){
// 		$('.model-box').hover(function(){
// 			$(this).css({width: '80%', filter: 'grayscale(0%)'});
// 			$(this).siblings().css({width: '5%'});
// 			$('p.box-title', this).show(showTime);
// 		}, function(){
// 			$(this).css({width: '20%', filter: 'grayscale(100%)'});
// 			$(this).siblings().css({width: '20%'});
// 			$('p.box-title', this).hide(showTime);
// 		});
// 	}else if((w >= 1025) && (w <=1279)){
// 		$('.model-box').hover(function(){
// 			$(this).css({width: '63%', filter: 'grayscale(0%)'});
// 			$(this).siblings().css({width: '9.25%'});
// 			$('p.box-title', this).show(showTime);
// 		}, function(){
// 			$(this).css({width: '20%', filter: 'grayscale(100%)'});
// 			$(this).siblings().css({width: '20%'});
// 			$('p.box-title', this).hide(showTime);
// 		});
// 	}else if(w >= 1280){
// 		$('.model-box').hover(function(){
// 			$(this).css({width: '65%', filter: 'grayscale(0%)'});
// 			$(this).siblings().css({width: '7.5%'});
// 			$('p.box-title', this).show(showTime);
// 		}, function(){
// 			$(this).css({width: '20%', filter: 'grayscale(100%)'});
// 			$(this).siblings().css({width: '20%'});
// 			$('p.box-title', this).hide(showTime);
// 		});
// 	}
// }

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
	            initialize();
	            //gets file name and displays it in title
	            var name = $('#get-img')[0].files[0].name;
	       	 	$('#img-title').attr('value', name);
	        }

	        reader.readAsDataURL(input.files[0]);

	    }
	}
function initialize() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13
        });

        var input = document.getElementById('pac-input');

        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);

        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        var infowindow = new google.maps.InfoWindow();
        var marker = new google.maps.Marker({
          map: map
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

        autocomplete.addListener('place_changed', function() {
          infowindow.close();
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            return;
          }

          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
          }

          // Set the position of the marker using the place ID and location.
          marker.setPlace({
            placeId: place.place_id,
            location: place.geometry.location
          });
          marker.setVisible(true);
          //set hidden form input to equal the placeID
          $('#placeID').attr('value', place.place_id);
          window.alert($('#placeID').val());

          infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
              place.formatted_address);
          infowindow.open(map, marker);
        });
}

	$("#get-img").change(function(){
	    readURL(this);

	});
});




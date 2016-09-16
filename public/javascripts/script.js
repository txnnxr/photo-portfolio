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


	 $('.model-box').hover(function(){
	 	$(this).css({width: '70%', filter: 'grayscale(0%)'});
	 	$(this).siblings().css({width: '7.5%'});
	 }, function(){
	 	$(this).css({width: '20%', filter: 'grayscale(100%)'});
	 	$(this).siblings().css({width: '20%'});
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




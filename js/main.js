   // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDsltjoopDKJ4kGUUFkvVVvwkwVV62_ugM",
    authDomain: "reservation-site-4cb62.firebaseapp.com",
    databaseURL: "https://reservation-site-4cb62.firebaseio.com",
    storageBucket: "reservation-site-4cb62.appspot.com",
    messagingSenderId: "421936455026"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


// SUBMIT //
$('#reservation-form').on('submit', function(e){

    e.preventDefault();

    var userInput = {
      qty: $('#qty-field').val(), 
      name: $('#name-field').val(),
      date: $('#datepicker').val()
    };
    
	
	var reservationResult = database.ref('reservations');
	reservationResult.push({
		reservation: userInput,
		});
	
    $('#reservation-form')[0].reset();
});


// GET RESERVATIONS //
function getReservations(){
database.ref('reservations').on('child_added', function (snapshot) {
	var activeReservation = snapshot.val();
	
	var context = {
		qty: activeReservation.reservation.qty,
		name: activeReservation.reservation.name,
        date: activeReservation.reservation.date
      };
      
      var source = $("#reservation-template").html();
     
      var template = Handlebars.compile(source);
      
      var reservationListElement = template(context);
      
      $('.form-result').append(reservationListElement);
	
	});

  
	}
	
	getReservations();

// MAP //
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 41.8893236, lng: -87.6374185},
		zoom: 16,
	});
  
	var marker = new google.maps.Marker({
	  position: {lat: 41.8893236, lng: -87.6374185},
	  map: map
	});
}

// DATE PICKER //
  $( function() {
    $( "#datepicker" ).datepicker({ dateFormat: 'mm/dd' }).val();
  } );

  console.log('working');


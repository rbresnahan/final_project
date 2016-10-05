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
  
  var reservationData = {
	  qty: $('#qty-field').val(), 
      name: $('#name-field').val(),
      date: $('#datepicker').val()
      }

  console.log('test hello');
  console.log(reservationData);

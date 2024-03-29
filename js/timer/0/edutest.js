var yyyy = 2022; var mm = 00; var dd = 17;

var myTime = yyyy+mm+dd;
var textLive = "<p class='live-text'>En Vivo <i class='fa fa-circle faa-flash animated'></i></p>";
var textRepe = "<p class='live-text'>Repetición <i class='fa fa-circle faa-flash animated'></i></p>"
var textEnd = "Finalizó";


function d1t12am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              12:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 00, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t12am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t12am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t12am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t12am()


function d1t1230am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              12:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 00, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t1230am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t1230am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t1230am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t1230am()


function d1t1am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              01:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 01, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t1am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t1am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t1am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t1am()


function d1t130am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              01:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 01, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t130am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t130am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t130am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t130am()


function d1t2am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              02:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 02, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t2am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t2am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t2am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t2am()


function d1t230am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              02:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 02, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t230am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t230am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t230am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t230am()


function d1t3am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              03:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 03, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t3am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t3am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t3am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t3am()


function d1t330() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              03:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 03, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t330")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t330")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t330")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t330()


function d1t4am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              04:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 04, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t4am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t4am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t4am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t4am()


function d1t430am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              04:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 04, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t430am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t430am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t430am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t430am()

var yyyy = 2021; var mm = 07; var dd = 17;


function d1t5am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              05:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 05, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t5am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t5am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t5am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t5am()


function d1t530am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              05:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 05, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t530am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t530am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t530am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t530am()


function d1t6am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              06:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 06, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t6am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t6am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t6am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t6am()


function d1t630am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              06:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 06, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t630am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t630am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t630am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t630am()


function d1t7am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              07:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 07, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t7am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t7am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t7am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t7am()


function d1t730am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              07:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 07, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t730am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t730am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t730am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t730am()


function d1t8am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              08:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 08, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t8am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t8am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t8am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t8am()


function d1t830am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              08:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 08, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t830am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t830am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t830am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t830am()


function d1t9am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              09:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 09, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t9am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t9am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t9am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t9am()


function d1t930am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              09:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 09, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t930am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t930am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t930am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t930am()


function d1t10am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 10, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t10am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t10am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t10am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t10am()


function d1t1030am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 10, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t1030am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t1030am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t1030am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t1030am()

var yyyy = 2021; var mm = 07; var dd = 17;


function d1t11am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 11, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t11am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t11am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t11am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t11am()


function d1t1130am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 11, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t1130am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t1130am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t1130am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t1130am()


function d1t12am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              12:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 12, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t12am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t12am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t12am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t12am()


function d1t1230am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              12:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 12, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t1230am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t1230am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t1230am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t1230am()


function d1t1pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              01:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 13, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t1pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t1pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t1pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t1pm()


function d1t130pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              01:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 13, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t130pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t130pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t130pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t130pm()


function d1t2pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              02:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 14, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t2pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t2pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t2pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t2pm()


function d1t230pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              02:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 14, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t230pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t230pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t230pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t230pm()


function d1t3pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              03:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 15, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t3pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t3pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t3pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t3pm()


function d1t330pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              03:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 15, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t330pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t330pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t330pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t330pm()


function d1t4pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              04:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 16, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t4pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t4pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t4pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t4pm()


function d1t430pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              04:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 16, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t430pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t430pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t430pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t430pm()


function d1t5pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              05:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 17, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t5pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t5pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t5pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t5pm()


function d1t530pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              05:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 17, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t530pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t530pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t530pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t530pm()


function d1t6pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              06:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 18, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t6pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t6pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t6pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t6pm()


function d1t630pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              06:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 18, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t630pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t630pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t630pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t630pm()


function d1t7pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              07:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 19, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t7pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t7pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t7pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t7pm()


function d1t730pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              07:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 19, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t730pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t730pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t730pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t730pm()


function d1t8pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              08:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 20, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t8pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t8pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t8pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t8pm()


function d1t830pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              08:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 20, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t830pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t830pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t830pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t830pm()


function d1t9pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              09:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 21, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t9pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t9pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t9pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t9pm()


function d1t930pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              09:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 21, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t930pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t930pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t930pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t930pm()


function d1t10pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 22, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t10pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t10pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t10pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t10pm()


function d1t1030pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 22, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t1030pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t1030pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t1030pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}


d1t1030pm()
function d1t11pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 23, 00, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t11pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t11pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t11pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t11pm()


function d1t1130pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, MM, SS));
	var countDownDate = new Date(Date.UTC(yyyy, mm, dd, 23, 30, 00));

// Update the count down every 1 second
    var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
	var distance = countDownDate - now - (3600000 * -6);

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	for (const ele of document.getElementsByClassName("d1t1130pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d1t1130pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d1t1130pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d1t1130pm()
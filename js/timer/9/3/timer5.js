var yyyy = 2021; var mm = 08; var dd = 17;

var myTime = yyyy+mm+dd;
var textLive = "<p class='live-text'>En Vivo <i class='fa fa-circle faa-flash animated'></i></p>";
var textRepe = "<p class='live-text'>Repetición <i class='fa fa-circle faa-flash animated'></i></p>"
var textEnd = "Finalizó";


function d5t12am() {
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
	for (const ele of document.getElementsByClassName("d5t12am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t12am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t12am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("r1t12am")) {
        ele.innerHTML = textRepe;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("r1t12am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t12am()


function d5t1230am() {
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
	for (const ele of document.getElementsByClassName("d5t1230am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t1230am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t1230am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t1230am()


function d5t1am() {
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
	for (const ele of document.getElementsByClassName("d5t1am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t1am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t1am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t1am()


function d5t130am() {
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
	for (const ele of document.getElementsByClassName("d5t130am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t130am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t130am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t130am()


function d5t2am() {
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
	for (const ele of document.getElementsByClassName("d5t2am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t2am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t2am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t2am()


function d5t230am() {
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
	for (const ele of document.getElementsByClassName("d5t230am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t230am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t230am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t230am()


function d5t3am() {
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
	for (const ele of document.getElementsByClassName("d5t3am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t3am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t3am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t3am()


function d5t330am() {
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
	for (const ele of document.getElementsByClassName("d5t330am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t330am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t330am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t330am()


function d5t4am() {
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
	for (const ele of document.getElementsByClassName("d5t4am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t4am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t4am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t4am()


function d5t430am() {
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
	for (const ele of document.getElementsByClassName("d5t430am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t430am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t430am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t430am()


function d5t5am() {
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
	for (const ele of document.getElementsByClassName("d5t5am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t5am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t5am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t5am()


function d5t530am() {
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
	for (const ele of document.getElementsByClassName("d5t530am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t530am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t530am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t530am()


function d5t6am() {
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
	for (const ele of document.getElementsByClassName("d5t6am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t6am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t6am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t6am()


function d5t630am() {
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
	for (const ele of document.getElementsByClassName("d5t630am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t630am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t630am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t630am()


function d5t7am() {
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
	for (const ele of document.getElementsByClassName("d5t7am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t7am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t7am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t7am()


function d5t730am() {
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
	for (const ele of document.getElementsByClassName("d5t730am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t730am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t730am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t730am()


function d5t8am() {
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
	for (const ele of document.getElementsByClassName("d5t8am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t8am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t8am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t8am()


function d5t830am() {
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
	for (const ele of document.getElementsByClassName("d5t830am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t830am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t830am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t830am()


function d5t9am() {
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
	for (const ele of document.getElementsByClassName("d5t9am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t9am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t9am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t9am()


function d5t930am() {
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
	for (const ele of document.getElementsByClassName("d5t930am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t930am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t930am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t930am()


function d5t10am() {
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
	for (const ele of document.getElementsByClassName("d5t10am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t10am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t10am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t10am()


function d5t1030am() {
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
	for (const ele of document.getElementsByClassName("d5t1030am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t1030am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t1030am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t1030am()


function d5t11am() {
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
	for (const ele of document.getElementsByClassName("d5t11am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t11am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t11am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t11am()


function d5t1130am() {
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
	for (const ele of document.getElementsByClassName("d5t1130am")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t1130am")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t1130am")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t1130am()


function d5t12pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              12:00 PM                  ::::::::::::
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
	for (const ele of document.getElementsByClassName("d5t12pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t12pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t12pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t12pm()


function d5t1230pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              12:30 PM                  ::::::::::::
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
	for (const ele of document.getElementsByClassName("d5t1230pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t1230pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t1230pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t1230pm()


function d5t1pm() {
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
	for (const ele of document.getElementsByClassName("d5t1pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t1pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t1pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t1pm()


function d5t130pm() {
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
	for (const ele of document.getElementsByClassName("d5t130pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t130pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t130pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t130pm()


function d5t2pm() {
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
	for (const ele of document.getElementsByClassName("d5t2pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t2pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t2pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t2pm()


function d5t230pm() {
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
	for (const ele of document.getElementsByClassName("d5t230pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t230pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t230pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t230pm()


function d5t3pm() {
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
	for (const ele of document.getElementsByClassName("d5t3pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t3pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t3pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t3pm()


function d5t330pm() {
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
	for (const ele of document.getElementsByClassName("d5t330pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t330pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t330pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t330pm()


function d5t4pm() {
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
	for (const ele of document.getElementsByClassName("d5t4pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t4pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t4pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t4pm()


function d5t430pm() {
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
	for (const ele of document.getElementsByClassName("d5t430pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t430pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t430pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t430pm()


function d5t5pm() {
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
	for (const ele of document.getElementsByClassName("d5t5pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t5pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t5pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t5pm()


function d5t530pm() {
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
	for (const ele of document.getElementsByClassName("d5t530pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t530pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t530pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t530pm()


function d5t6pm() {
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
	for (const ele of document.getElementsByClassName("d5t6pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t6pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t6pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t6pm()


function d5t630pm() {
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
	for (const ele of document.getElementsByClassName("d5t630pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t630pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t630pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t630pm()


function d5t7pm() {
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
	for (const ele of document.getElementsByClassName("d5t7pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t7pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t7pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t7pm()


function d5t730pm() {
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
	for (const ele of document.getElementsByClassName("d5t730pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t730pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t730pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t730pm()


function d5t8pm() {
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
	for (const ele of document.getElementsByClassName("d5t8pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t8pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t8pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t8pm()


function d5t830pm() {
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
	for (const ele of document.getElementsByClassName("d5t830pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t830pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t830pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t830pm()


function d5t9pm() {
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
	for (const ele of document.getElementsByClassName("d5t9pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t9pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t9pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t9pm()


function d5t930pm() {
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
	for (const ele of document.getElementsByClassName("d5t930pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t930pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t930pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t930pm()


function d5t10pm() {
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
	for (const ele of document.getElementsByClassName("d5t10pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t10pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t10pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t10pm()


function d5t1030pm() {
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
	for (const ele of document.getElementsByClassName("d5t1030pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t1030pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t1030pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}


d5t1030pm()
function d5t11pm() {
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
	for (const ele of document.getElementsByClassName("d5t11pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t11pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t11pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t11pm()


function d5t1130pm() {
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
	for (const ele of document.getElementsByClassName("d5t1130pm")){
	   ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
       + minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
	// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t1130pm")) {
        ele.innerHTML = textLive;
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t1130pm")) {
          allEllements.innerHTML = textEnd;
        }
      }
    }
  }, 1000);
}

d5t1130pm()
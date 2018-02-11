  function fakeLogin(){
	var user = document.getElementById('username').value;
	var pass = document.getElementById('password').value;
	if(user == "user" && pass == "pass"){
		window.location = "/";
	}
	else{
		alert("Incorrect username/password");
	}
  }

    //------- HELP POP-UPS -------//
    function helpStart() {
      alert("Every time you go off-task, SoundTrack will alert you at decreasing" +
        " intervals to help you stay productive and focused. To get started, simply" +
        " choose your favorite soundscape and customize the alert for your current task!");
    }

    function helpListen() {
      alert("In this screen, you can see how productive you are and how much time" +
        " you have left for your breaks. Change your current soundscape by swiping or" +
        " clicking the slider. You can customize alerts in Alert Settings at the bottom.");
    }

    function helpSettings() {
      alert("In the settings, you can change your alert sound, how much break time " +
        "you want to give yourself, and the volume of the alerts. Be as productive " +
        "as you want!");
    }

  //------- VARIABLES -------//
  var isActive;
  var start = 0;
  var end = 0;
  var checkPage, checkEnd, onPage, offPage;
  var elapsed, elapsedSeconds, elapsedMinutes;
  var productiveTime = document.getElementById('productiveTime');
  var productiveMin = "00"; 
  var productiveSec = "00";
  var timer = document.getElementById('timer');
  var DowntimeMin = "03"; // replace later with downtime sliders
  var DowntimeSec = "00";


    //------- TIMERS -------//
    // Productivity Timer
    if(productiveTime != null){
      productiveTime.innerHTML = productiveMin + ":" + productiveSec;
      startPTimer();
    }

      // Downtime Timer
      if(timer != null){
        timer.innerHTML = DowntimeMin + ":" + DowntimeSec;
      }

  // start productivity timer from 0
  function startPTimer() {
    var presentTime = document.getElementById('productiveTime').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = parseInt(timeArray[0]);
    var s = checkSecond(parseInt(timeArray[1]) + 1);
    if(s == 59) { 
      s = 00;
      m = m + 1;
    }
    document.getElementById('productiveTime').innerHTML = m + ":" + s;
    setTimeout(startPTimer, 1000);
  }

  // fix formatting of timers
  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
  }

  // update timers with new values
  function updateTimers() {     // FIX PRODUCTIVITY TIMER VALUES LATER (always increments a little bit, even while off tab)
    productiveMin = parseInt(productiveMin) - elapsedMinutes;
    productiveSec = parseInt(productiveSec) - elapsedSeconds;
    DowntimeMin = parseInt(DowntimeMin) - elapsedMinutes;
    DowntimeSec = parseInt(DowntimeSec) - elapsedSeconds;

  // fix formatting of time
  if (DowntimeSec < 0) {
    DowntimeSec = DowntimeSec + 60;
    DowntimeMin = DowntimeMin - 1;
  } else if (DowntimeSec < 10 && DowntimeSec > 0) {
    DowntimeSec = "0" + DowntimeSec;
  } else if (productiveSec < 0) {
    productiveSec = productiveSec + 60;
    productiveMin = productiveMin - 1;
  } else if (productiveSec < 10 && productiveSec > 0) {
    productiveSec = "0" + productiveSec;
  }

  // set new time values
  if(timer != null) {
    timer.innerHTML = DowntimeMin.toString() + ":" + DowntimeSec.toString();
  } else if (productiveTime != null) {
    productiveTime.innerHTML = productiveMin.toString() + ":" + productiveSec.toString();
    startPTimer();
  }
  }


function checkDowntime() {
  if (DowntimeMin < 0) {
    alert("You've goofed off long enough!");
  }
}

    //------- CHECK ACTIVE/INACTIVE -------//

    // set isActive status
    window.onfocus = function () { 
      isActive = true; 
    }; 
    window.onblur = function () { 
      isActive = false; 
    }; 

  // check if user is off tab
  offPage = function () { 
    console.log(window.isActive ? 'active' : 'inactive'); 
    // implement start of timer when user is inactive
    if ( isActive == false ) {
      start = Date.now();
      checkEnd = setInterval(onPage, 1000);
      clearInterval(checkPage);
    } 
  }

  // check if user has come back to tab
  onPage = function () { 
    if ( start > 0 && isActive) {
      end = Date.now();
    elapsed = (end - start) / 1000; // number of seconds away from tab
    elapsedMinutes = Math.floor(elapsed / 60);
    elapsedSeconds = Math.floor(elapsed % 60);
    // alert("Welcome back! You spent " + elapsedMinutes + " minutes and " + elapsedSeconds + " seconds off-task!");
    
    // update timers
    updateTimers();
    checkDowntime();
    
    // restart checking for inactive/active tab
    clearInterval(checkEnd);
    checkPage = setInterval(offPage, 1000); 
  }
  }

  // start cycle of checking for inactivity
  checkPage = setInterval(offPage, 1000); 

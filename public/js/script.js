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



  //------- TIMER -------//

  // countuptimer - fix for productivity later

  var productiveTime = document.getElementById('productiveTime');

  if(productiveTime != null){

    productiveTime.innerHTML = 00 + ":" + 00;

    startPTimer();

  }



  function startPTimer() {

    var presentTime = document.getElementById('productiveTime').innerHTML;

    var timeArray = presentTime.split(/[:]+/);

    var m = timeArray[0];

    var s = checkSecond(parseInt(timeArray[1]) + 1);

    if(s == 59) { 

      s = 00;

      m = m + 1;

    }



    document.getElementById('productiveTime').innerHTML =

    m + ":" + s;

    setTimeout(startPTimer, 1000);

  }





  // countdown timer - fix for off-task later (pause while on screen)

  var timer = document.getElementById('timer');

  if(timer != null){

    timer.innerHTML = 03 + ":" + 00;

    startTimer();

  }



  function startTimer() {

    var presentTime = document.getElementById('timer').innerHTML;

    var timeArray = presentTime.split(/[:]+/);

    var m = timeArray[0];

    var s = checkSecond((timeArray[1] - 1));

    if(s == 59) { 

      m = m - 1

    }

  //if(m<0){alert('timer completed')}



  document.getElementById('timer').innerHTML =

  m + ":" + s;

  setTimeout(startTimer, 1000);

}



function checkSecond(sec) {

  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10

  if (sec < 0) {sec = "59"};

  return sec;

}











   // RETURN TO THIS LATER FOR CHECKING WHETHER USER IS ON TAB



  // function checkActive() {



  // check if user is active

  var isActive;

  window.onfocus = function () { 

    isActive = true; 

  }; 

  window.onblur = function () { 

    isActive = false; 

  }; 



  var start = 0;

  var end = 0;

////////////////





  var offPage = function () { 

    console.log(window.isActive ? 'active' : 'inactive'); 



  // implement start of timer when user is inactive

  if ( isActive == false ) {

    start = Date.now();

   

    var checkEnd = setInterval(onPage, 1000);

  clearInterval(checkPage);

  } 

}



var onPage = function () { 

  if ( start > 0 && isActive) {

    end = Date.now();

  var elapsed = Math.floor((end - start) / 1000); // number of seconds away

  var elapsedMinutes = elapsed / 60;

  var elapsedSeconds = elapsed % 60;

  if (elapsedMinutes <  1) {

    elapsedMinutes = 0;

  }

  alert("Welcome back! You spent " + elapsedMinutes + " minutes and " + elapsedSeconds + " seconds off-task!");

  



  //start = 0;

  clearInterval(checkEnd);

 
  var checkPage = setInterval(offPage, 1000); 

  }

}





// var checkEnd = setInterval(onPage, 1000);





/*if (start > 0 && isActive) {

  end = Date.now();

    alert(end);

  var elapsed = (end - start) / 1000; // number of seconds away

  var elapsedMinutes = elapsed / 60;

  var elapsedSeconds = elapsed % 60;  

  alert("Welcome back! You spent " + elapsedMinutes + " minutes and " + elapsedSeconds + " seconds off-task!");

}*/





  ///////



  /*// check if user is active

  var isActive;

  window.onfocus = function () { 

    isActive = true; 

  }; 

  window.onblur = function () { 

    isActive = false; 

  }; 



  var checkPage = null; // name of setInterval

  var checkActive = function() {

    console.log(window.isActive ? 'active' : 'inactive'); 



  // start timer when user is inactive

  if ( isActive ) {

    continue;

  } else {

    start = Date.now();

    clearInterval(checkPage);

    }

  };



   checkPage = setInterval(checkActive, 1000);

   alert("Test");







  if ( start > 0 && isActive) {

    end = Date.now();

  var elapsed = (end - start) / 1000; // number of seconds away

  var elapsedMinutes = elapsed / 60;

  var elapsedSeconds = elapsed % 60;  

  alert("Welcome back! You spent " + elapsedMinutes + " minutes and " + elapsedSeconds + " seconds off-task!");

}*/



  // }


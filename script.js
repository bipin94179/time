
var partyTime;
// to show current time on page
var showCurrentTime = function()
{
  var clock = document.getElementById('clock');

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";


  //set hours
  if (hours > 12)
  {
    meridian = "PM";
  }
  if (hours > 12)
  {
    hours = hours - 12;
  }
  //set minutes
  if (minutes < 10)
  {
    miutes = "0" + minutes;
  }
  //set seconds
  if (seconds < 10)
  {
    seconds = "0" + seconds;
  }

  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

  clock.innerText = clockTime;
};

showCurrentTime();

var oneSecond = 1000;
setInterval( showCurrentTime, oneSecond);

//party button code
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
  if (partyTime < 0)
  {
    partyTime = new Date().getHours();
    partyTimeButton.innerText = "Party Over!";
    partyTimeButton.style.backgroundColor = "#0A8DAB";
  }
  else
  {
    partyTime = -1;
    partyTimeButton.innerText = "Party Time!";
    partyTimeButton.style.backgroundColor = "#222";
  }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();
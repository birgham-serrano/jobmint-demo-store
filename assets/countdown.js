function startCountdown() {
    var inputDate = document.querySelectorAll("#countdown-timer")[0].getAttribute('data-deadline');
    var deadline = new Date(inputDate).getTime();
  
    if (isNaN(deadline)) {
      return;
    }
  
    var countdownTimer = setInterval(function() {
      var now = new Date().getTime();
  
      var timeRemaining = deadline - now;
  
      if (timeRemaining < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown-timer").innerHTML = "Countdown expired.";
        return;
      }
  
      var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      document.getElementById("countdown-timer").innerHTML = 
        formatTime(days) + "d " +
        formatTime(hours) + "h " +
        formatTime(minutes) + "m " +
        formatTime(seconds) + "s";
    }, 1000);
  }
  
  function formatTime(time) {
    return (time < 10 ? "0" + time : time);
  }
  
  startCountdown();
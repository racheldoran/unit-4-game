$(document).ready(() => {

  
  var randNumber = Math.floor(Math.random() * ((150 - 10) + 1) + 10);
  $('#randNum').html(randNumber);

  var greenCrystal= Math.floor(Math.random() * 10) + 1;
  var blueCrystal = Math.floor(Math.random() * 10) + 1;
  var pinkCrystal = Math.floor(Math.random() * 10) + 1;
  var yellowCrystal = Math.floor(Math.random() * 10) + 1;
  
  var wins = 0; 
  var losses = 0;  

  var totScore = 0;
  $('#totScore').text(totScore);

  function win() {
      wins++;
      $('#wins').text(wins);
      reset();
  }

  function lose() {
      losses++;
      $('#losses').text(losses);
      reset();
  }

  $('#green-crystal').click(() => {
      totScore = totScore + greenCrystal
      $('#totScore').text(totScore);
      if (totScore === randNumber) {
          win();
          reset()
      } else if (totScore > randNumber) {
          lose();
          reset();
    
      }
  });

  $('#blue-crystal').click(() => {
      totScore = totScore + blueCrystal;
      $('#totScore').text(totScore);
      if (totScore === randNumber) {
          win();
          reset();
      } else if (totScore > randNumber) {
          lose();
          reset();
          
      }
  });

  $('#pink-crystal').click(() => {
      totScore = totScore + pinkCrystal;
      $('#totScore').text(totScore);
      if (totScore === randNumber) {
          win();
          reset();
      } else if (totScore > randNumber) {
          lose();
          reset();
      
      }
  });

  $('#yellow-crystal').click(() => {
      totScore = totScore + yellowCrystal;
      $('#totScore').text(totScore);
      if (totScore === randNumber) {
          win();
          reset();
      } else if (totScore > randNumber) {
          lose();
          reset();
      }
  });


  function reset() {
      totScore = 0;
      $('#totScore').text(totScore);
  }
});
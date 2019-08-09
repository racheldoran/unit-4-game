$(document).ready(() => {

  
  let randNumber = Math.floor(Math.random() * ((150 - 10) + 1) + 10);
  $('#randNum').html(randNumber);

  let greenCrystal= Math.floor(Math.random() * 10) + 1;
  let blueCrystal = Math.floor(Math.random() * 10) + 1;
  let pinkCrystal = Math.floor(Math.random() * 10) + 1;
  let yellowCrystal = Math.floor(Math.random() * 10) + 1;

  
  let wins = 0; 
  let losses = 0;  

  let totScore = 0;
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
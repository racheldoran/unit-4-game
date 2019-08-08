

var targetNumber = 45;

$("#number-to-guess").text(targetNumber);

var counter = 0;

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.
var numberOptions = [21, 11, 5, 3];

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");
  var imageCrystal2 = $("<img>");
  var imageCrystal3 = $("<img>");
  var imageCrystal4 = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");
  imageCrystal2.addClass("crystal-image");
  imageCrystal3.addClass("crystal-image");
  imageCrystal4.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src", "https://img.pngmix.com/pm/crystals/crystals_004.png");
  imageCrystal2.attr("src", "https://png.pngtree.com/element_origin_min_pic/16/12/03/58a98b42a3b72436a8d3de6e4b5304ee.jpg");
  imageCrystal3.attr("src", "https://www.crystalinks.com/aquamarine.jpg");
  imageCrystal4.attr("src", "http://24.media.tumblr.com/56d2cea9a56966fa3e1d26d559579c6b/tumblr_mv0wya4Kev1rmdrjqo1_400.png");

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  imageCrystal2.attr("data-crystalvalue", numberOptions[i]);
  imageCrystal3.attr("data-crystalvalue", numberOptions[i]);
  imageCrystal4.attr("data-crystalvalue", numberOptions[i]);
  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }

});
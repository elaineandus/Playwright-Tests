const images = document.querySelectorAll('.image');

   // Add click event listener to each image
   images.forEach(image => {
     image.addEventListener('click', () => {
       // Remove highlight from all images
       images.forEach(image => image.classList.remove('highlight'));
       
       // Add highlight to clicked image
       image.classList.add('highlight');
     });
   });
  
  // Define the game settings
  var totalGold = 0;
  var attempts = 20;
  var maxGold = 250;
  var locations = ["Cave", "Casino", "House", "Goldmine"];
  
  // Update the attempts count
  function updateAttempts() {
    $('#attempts').text(attempts);
  }
  
  // Log a new event
  function logEvent(location, amount) {
    var event = {
      time: new Date().toISOString(),
      location: location,
      amount: amount
    };
    $('#events').append('<li>' + event.time + ': ' + event.location + ' (' + event.amount + ')</li>');
  }
  
  // Check if the game is over
  function checkGameOver() {
    if (totalGold >= maxGold) {
      alert('Congratulations! You completed the game!');
      startGame();
    } else if (attempts <= 0) {
      alert('Game over! You ran out of attempts.');
      startGame();
    }
  }
  
  // Disable the locations that have already been visited
  function disableLocations() {
    $('.location').each(function() {
      var location = $(this).attr('id');
      if ($.inArray(location, locations) === -1) {
        $(this).addClass('disabled');
      }
    });
  }
  
  // Handle a location click
  $('.location').on('click', function() {
    var location = $(this).attr('id');
    var gold;
    switch (location) {
      case 'cave':
        gold = Math.floor(Math.random() * 50) + 1;
        totalGold
        += gold;
    locations.push(location);
    logEvent(location, gold);
    break;
  case 'casino':
    gold = Math.floor(Math.random() * 100) - 50;
    totalGold += gold;
    locations.push(location);
    logEvent(location, gold);
    break;
  case 'house':
    gold = Math.floor(Math.random() * 30) + 1;
    totalGold += gold;
    locations.push(location);
    logEvent(location, gold);
    break;
  case 'goldmine':
    gold = Math.floor(Math.random() * 200) + 1;
    totalGold += gold;
    locations.push(location);
    logEvent(location, gold);
    break;
}
attempts--;
updateAttempts();
checkGameOver();
disableLocations();
});

// Start a new game
function startGame() {
totalGold = 0;
attempts = 20;
locations = ["Cave", "Casino", "House", "Goldmine"];
updateAttempts();
$('#events').empty();
$('.location').removeClass('disabled');
}

// Start the game on page load
$(document).ready(function() {
startGame();
});
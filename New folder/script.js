
var totalGold = 0;
var attempt = 20;
var totalGains = 0;
var totalLosses = 0;

$('#log-container').hide();

$('.btn-secondary').click(function() {
    $('#log-container').toggle();
});

function generateGold(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateattempt() {
    attempt--;
    $('#attempts').text(attempt);
}

function updatetotalGold(value) {
    totalGold += value ;
    $('#totalGold').text(totalGold);
    
    if (totalGold >= 250 && attempt === 0) {
    Message('Congratulations! You completed the game!', 'green');
    } else if (attempt === 0 && totalGold < 250) {
        Message('Game over! You ran out of attempts.', 'red');
    }
}

function Message(message, color) {
    console.log($('#message'));
    $('#message').text(message);
    $('#message').css('color', color);
}

function addToLog(date, time, location, gold) {
    let logEntry = `<p>Amount:   ${gold} <br>Time: ${time}
    <br>Location: ${location}`;
    $('#log-container').prepend(logEntry);
}

function resetGame() {
    attempt = 20;
    totalGold = 0;
    $('#attempts').text(attempt);
    $('#totalGold').text(totalGold);
    $('#log-container').empty();
    $('#message').empty();
}

$('#cave').click(function() {
    if (attempt > 0) {
        let gold = 5;
        updateattempt();
        updatetotalGold(gold);
        addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'Cave', gold);
        Message(`You earned ${gold} gold from the Cave.`, 'green');
            } else {
                Message(`ou ran out of attempts.`, 'red');
                if (totalGold >= 250 && attempt === 0) {
                    Message('Congratulations! You completed the game!', 'green');
                } else if (attempt === 0 && totalGold < 250) {
                    Message('Game over! You ran out of attempts.', 'red');
                }
    }
});

$('#casino').click(function() {
    if (attempt > 0) {
        let gold = Math.random() < 0.5 ? generateGold(-50, -40) : generateGold(40, 50);
        updateattempt();
        updatetotalGold(gold);
        if (gold < 0) {
            addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'Casino', gold);
            Message(`You lost ${Math.abs(gold)} gold at the Casino.`, 'red');
        } else {
            addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'Casino', gold);
            Message(`You earned ${gold} gold from the Casino.`, 'green');
        }
            } else {
                Message(`ou ran out of attempts.`, 'red');
            if (totalGold >= 250 && attempt === 0) {
                Message('Congratulations! You completed the game!', 'green');
            } else if (attempt === 0 && totalGold < 250) {
                Message('Game over! You ran out of attempts.', 'red');
            }
    }
});

$('#house').click(function() {
    if (attempt > 0) {
        let gold = Math.random() < 0.8 ? 10 : 0;
        updateattempt();
        updatetotalGold(gold);
        addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'House', gold);
        Message(`You earned ${gold} gold from the House.`, 'green');
            } else {
                Message('ou ran out of attempts.', 'red');
                if (totalGold >= 250 && attempt === 0) {
                    Message('Congratulations! You completed the game!', 'green');
                } else if (attempt === 0 && totalGold < 250) {
                    Message('Game over! You ran out of attempts.', 'red');
                }
        }
});

$('#goldmine').click(function() {
    if (attempt > 0) {
        let gold = Math.random() < 0.8 ? generateGold(1, 25) : 0;
        updateattempt();
        updatetotalGold(gold);
        addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'Goldmine', gold);
        Message(`You earned ${gold} gold from the Goldmine.`, 'green');
            } else {
                Message(`ou ran out of attempts.`, 'red');
                if (totalGold >= 250 && attempt === 0) {
                    Message('Congratulations! You completed the game!', 'green');
                } else if (attempt === 0 && totalGold < 250) {
                    Message('Game over! You ran out of attempts.', 'red');
            }
    }
});

$("#cave").click(function(){
    $("#ninja").animate({marginLeft: "-400px", marginTop: "-100px"}, 500, function(){
    $(this).css({marginLeft: 0, marginTop: 0});
    });
    });

$("#casino").click(function(){
    $("#ninja").animate({marginLeft: "-100px", marginTop: "-100px"}, 500, function(){
    $(this).css({marginLeft: 0, marginTop: 0});
    });
    });  

$("#house").click(function(){
    $("#ninja").animate({marginLeft: "150px", marginTop: "-100px"}, 500, function(){
    $(this).css({marginLeft: 0, marginTop: 0});
    });
    });  

$("#goldmine").click(function(){
    $("#ninja").animate({marginRight: "-400px", marginTop: "-100px"}, 500, function(){
    $(this).css({marginRight: 0, marginTop: 0});
    });
    }); 
 





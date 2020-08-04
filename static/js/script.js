//Challenge 1: Your age in days

function ageInDays()
{
    var birthYear = prompt('What year were you born?');
    var daysage = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var answer = document.createTextNode('You are ' + daysage + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(answer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset()
{
    document.getElementById('ageInDays').remove()
}

//Challenge 2: Cat Generator
function generate()
{
    var image = document.createElement('img');
    var div = document.getElementById('flex-gen-cat');

    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);

}

//Challenge 3: Rock, paper and scissors

function rpsGame(yourChoice)
{
var humanChoice, botChoice, results;

 humanChoice = yourChoice.id;  
 botChoice = numberToChoice(rand());

 console.log('Computer Choice:',botChoice);

 results = decideWinner(humanChoice, botChoice);
 console.log(results);

 message = finalMessage(results);
 console.log(message)

 display(yourChoice.id, botChoice, message);

}

function rand()
{
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number)
{
    return ['rock', 'paper' , 'scissors'] [number];
}

function decideWinner(yourChoice, computerChoice)
{
    var rpsDatabase =
    {
        'rock' : 
        {
            'scissors' :1,
            'rock' : 0.5,
            'paper': 0
        },

        'paper' : 
        {
            'scissors' :0,
            'rock' : 1,
            'paper': 0.5
        },

        'scissors' : 
        {
            'scissors' :0.5,
            'rock' : 0,
            'paper': 1
        },

    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore])
{
  
    if (yourScore === 0)
    {
        return {'message' : 'You lost!', 'color' : 'red'};
    }

    else if (yourScore === 0.5)
    {
        return {'message' : 'You tied!', 'color' : 'yellow'};
    }

      else
    {
        return {'message' : 'You won!', 'color' : 'green'};
    }
}

function display(humanImageChoice, botImageChoice, finalMessage)
{
    var imagesDatabase =
    {
        'rock' : document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors' :document.getElementById('scissors').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src=' " + imagesDatabase[humanImageChoice] + " ' height= 150 width = 150 style =' box-shadow: 0px 10px 50px rgba(37,50,233,1)' >"
    messageDiv.innerHTML = "<h1 style= 'color: " + finalMessage['color'] + "; font-size: 60px; padding:30px; '>" 
    + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src=' " + imagesDatabase[botImageChoice] + " ' height= 150 width = 150 style =' box-shadow: 0px 10px 50px rgba(255,0,0,1)'>"

    document.getElementById('flex-box-div').appendChild(humanDiv);
    document.getElementById('flex-box-div').appendChild(messageDiv);
    document.getElementById('flex-box-div').appendChild(botDiv);

}

//Challenge 4: Change the color of all the buttons
var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++)
{
   copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(button)
{
    if (button.value === 'red')
    {
        buttonsRed();
    }

    else if(button.value === 'green')
    {
        buttonsGreen();
    }

    else if(button.value === 'reset')
    {
        buttonsReset();
    }

    else if(button.value === 'random')
    {
        randomColors();
    }


}

function buttonsRed()
{
    for (let i =0; i < all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}


function buttonsGreen()
{
    for (let i =0; i < all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsReset()
{
    for (let i =0; i < all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors()
{
   let choices = ['btn-primary', 'btn-warning', 'btn-success', 'btn-danger'];

    for (let i =0; i < all_buttons.length; i++)
    {
        let selection = Math.floor(Math.random () * 4) ;
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[selection]);
    }
}

//Challenge 5: Blackjack
let blackjackGame = {
    'you' : 
    {
        'scoreSpan' : '#your-blackjack-result',
        'div' : '#your-box',
        'score' : 0
    },

    'dealer':
    {
        'scoreSpan' : '#dealer-blackjack-result',
        'div' : '#dealer-box',
        'score' : 0
    },

    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],

    'cardsMap': {'2' : 2, '3' : 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 8, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1,11]},
};
 const YOU = blackjackGame['you'];
 const DEALER = blackjackGame['dealer'];

 const hitSound = new Audio('static/sounds/swish.m4a');
 const winSound = new Audio('static/sounds/cash.mp3');
 const loseSound = new Audio('static/sounds/aww.mp3');

 let wins = 0;
 let draws = 0;
 let loss = 0;
 let winner;


 //Button Event Listeners
document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click',blackjackStand);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);


function blackjackHit()
{
 let card = randomCard();
 showCard(card, YOU);
 updateScore(card,YOU);
 showScore(YOU);
}

function showCard(card, activePlayer)
{ 
    //If the score of the active player is less than 21, show the cards
    if(activePlayer['score'] <= 21)
    {
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
    
}

function blackjackDeal()
{
    // Select all the images in both the user and dealer box
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

     document.querySelector('#blackjack-result').style.color = 'black';

    //Removes the cards in the user's box
    for(let i=0; i < yourImages.length; i++)
    {
        yourImages[i].remove();
    }

    //Removes the cards in the dealer's box
    for(let i=0; i < dealerImages.length; i++)
    {
        dealerImages[i].remove();
    }

     //Sets the user and dealers scors to zero
     YOU['score'] = DEALER['score'] = 0;
     document.querySelector('#your-blackjack-result').textContent = 0;
     // or you can use this
     //document.querySelector(YOU['scoreSpan']).textContent = 0;
     document.querySelector('#dealer-blackjack-result').textContent = 0;

     //Reset color back to white
     document.querySelector('#your-blackjack-result').style.color= 'white';
     document.querySelector('#dealer-blackjack-result').style.color= 'white';

     //Reset to Let's Play
     document.querySelector('#blackjack-result').textContent = 'Lets Play';

}

function blackjackStand()
{
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');

    for(let i = 0; i <  yourImages.length; i++)
    {
        let card = randomCard();
        showCard(card,DEALER);
        updateScore(card,DEALER);
        showScore(DEALER);
    }
   
    computeWinner();
    showWinner(winner);

}

function randomCard()
{
    let randomIndex = Math.floor ( Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function updateScore(card, activePlayer)
{
    if(card === 'A')
    {
        if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21)
        {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1]; 
        }

        else
        {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0]; 
        }
    }

    else
    {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
   
}

function showScore(activePlayer)
{
    //Bust logic if score is over 21
    if(activePlayer['score'] > 21)
    {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }

    else
    {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
    
}

function computeWinner()
{
    
    
    if (YOU['score'] <= 21)
    {
        if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21)
        {
            winner = YOU;
        }

        else if(YOU['score'] < DEALER['score'] )
        {
            winner = DEALER;
        }

        else if(YOU['score'] === DEALER['score'] )
        {
            winner = 'Draw';
        }
    }

    else if(YOU['score'] > 21 && DEALER['score'] <= 21)
    {
        winner = DEALER;
       
    }

    else if(YOU['score'] > 21 && DEALER['score'] > 21)
    {
        winner = 'None';
       
    }

    return winner;
}

function showWinner(winner)
{

    if(winner === YOU)
    {
        wins+=1;
        document.querySelector('#blackjack-result').textContent = 'You Won';
        document.querySelector('#blackjack-result').style.color = 'green';
        document.querySelector('#wins').textContent= wins;
        winSound.play();
        
    }

    else if (winner === DEALER)
    {
        loss+=1;
        document.querySelector('#blackjack-result').textContent = 'You Lost';
        document.querySelector('#blackjack-result').style.color = 'red'; 
        document.querySelector('#losses').textContent = loss;
        loseSound.play();
       
    }

    else if(winner === 'Draw')
    {
        draw+=1;
        document.querySelector('#blackjack-result').textContent = 'You drew';
        document.querySelector('#blackjack-result').style.color = 'yellow';
        document.querySelector('#draws').textContent = draw;
        loseSound.play();
       
    }

    else if(winner === 'None')
    {
        document.querySelector('#blackjack-result').textContent = 'You lost';
        document.querySelector('#blackjack-result').style.color = 'red';
        loseSound.play();
       
    }
}


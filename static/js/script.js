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

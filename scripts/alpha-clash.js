// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     // step:2 show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     console.log(playgroundSection.classList);

// }

document.addEventListener('keyup', function(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to be pressed
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, currentAlphabet);
    
    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you got a point');

        const currentScore = getTextElementValueById('current-score');
        // console.log(currentScore);
        const updatedScore = currentScore + 1;

        setTextElementValueById('current-score', updatedScore);





        // -----------------------------
        // update score:
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // 2. increase the score by 1
        // const newScore = currentScore + 1;
        // 3. show the updated score
        // currentScoreElement.innerText = newScore;



        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else{
        console.log('you missed. you lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }



        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // // console.log('your life decreased to', currentLifeText)
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife - 1;
        // console.log('remaining life', newLife)
        // currentLifeElement.innerText = newLife;
    }

})

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    // hide everything except only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1. get the last score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('score-output', lastScore);
    console.log(lastScore);

    // clear the last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}


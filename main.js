const winScore=100;
let player1 ={
    name:'player1',
    currentScore:0,
    setCurrentScore:function(currentScore) {
        this.currentScore=currentScore;
        document.querySelector(`.${this.class} .currentBox .currentScore`).textContent = `${this.currentScore}`
    },
    totalScore:0,
    setTotalScore: function(totalScore){
        this.totalScore=totalScore;
        document.querySelector(`.${this.class} .player .totalScore`).textContent = `${this.totalScore}`
    },
    class:'leftBox',
    turn:1
};
let player2 ={
    name:'player2',
    currentScore:0,
    setCurrentScore:function(currentScore) {
        this.currentScore=currentScore;
        document.querySelector(`.${this.class} .currentBox .currentScore`).textContent = `${this.currentScore}`
    },
    totalScore:0,
    setTotalScore: function(totalScore){
        this.totalScore=totalScore;
        document.querySelector(`.${this.class} .player .totalScore`).textContent = `${this.totalScore}`
    },
    class:'rightBox',
    turn:0
};
let message = {
    text : '',
    setMessageText:function(text1) 
    {
        this.text= text1;
        document.querySelector('.message').textContent = `${this.text}`;
    }
};
let player = whosTurn();
let isGameFinished = false;
let dice = 0;

// -----------------------------------rollDiceLogic  start-------------------------------------------
function rollDice(){
    if(isGameFinished === true)
        alert('click on newGame button');
    else{    
    player = whosTurn();
    // generate a random number between 1 to 6
    const randNum = Math.floor(Math.random() * 6)+1;
    if(dice){    
        if(document.querySelector('.dice').classList.contains(`dice-${dice}`))
            document.querySelector('.dice').classList.remove(`dice-${dice}`);
    }
    switch (randNum) {     //variable(role) insted of condition
		case 1:
            document.querySelector('.dice').classList.add('dice-1');
			break;
		case 2:
			document.querySelector('.dice').classList.add('dice-2');
			break;
        case 3:
            document.querySelector('.dice').classList.add('dice-3');
            break;
        case 4:
            document.querySelector('.dice').classList.add('dice-4');
            break;
        case 5:
            document.querySelector('.dice').classList.add('dice-5');
            break;
        case 6:
            document.querySelector('.dice').classList.add('dice-6');
            break;           
		default:
			console.log('Unknown roll');
	}
    dice = randNum;
    if(dice === 1){
        player.setCurrentScore(0);
        changeTurn();
    }    
    else{
        player.currentScore += dice;
        player.setCurrentScore(player.currentScore);
    }    
}
}

document.querySelector('.btnRollDice').addEventListener('click',function(){
    if(!document.querySelector('.dice').classList.contains('dice-show'))
        document.querySelector('.dice').classList.add('dice-show');

    rollDice();
    
});

// -----------------------------------rollDiceLogic  finished-------------------------------------------
// -----------------------------------changeTurnLogic  start-------------------------------------------
function changeTurn(){
    document.querySelector('.leftBox').classList.toggle('yourTurn');
    document.querySelector('.rightBox').classList.toggle('yourTurn');
    if(player1.turn===1){
        player1.turn=0;
    }else{
        player1.turn=1;
        message.setMessageText("👆🏼 player's one turn");
    }
    if(player2.turn===1){
        player2.turn=0;
    }else{
        player2.turn=1;
        message.setMessageText("player's two turn ☝🏼");
    }
}
// -----------------------------------changeTurnLogic  finished---------------------------------------
// -----------------------------------whosTurnFunc  start---------------------------------------
function whosTurn(){
    if(player1.turn===1){
        return player1;
    }
    if(player2.turn===1){
        return player2;
    }    
            
}
// -----------------------------------whosTurnFunc  start---------------------------------------

// -----------------------------------holdButton  start-------------------------------------------
function hold(){
    player=whosTurn();
       
    player.totalScore += player.currentScore;
    player.setTotalScore(player.totalScore);
    player.setCurrentScore(0);

    if(player.totalScore >= winScore){
        message.setMessageText(`✨🎉won ${player.name}✨🎉`);
        isGameFinished = true;
    }
    else{
        changeTurn();
    }
    
    }

document.querySelector('.btnHold').addEventListener('click', hold);

// -----------------------------------holdButton  finished-------------------------------------------
// -----------------------------------newGameLogic start----------------------------------------
function newGame(){
    isGameFinished = false;
    player1.setTotalScore(0);
    player1.setCurrentScore(0);
    player2.setTotalScore(0);
    player2.setCurrentScore(0);
    player1.turn=1;
    document.querySelector('.message').textContent = "👆🏼 player's one turn";
    if(!document.querySelector('.leftBox').classList.contains('yourTurn'))
        document.querySelector('.leftBox').classList.add('yourTurn');
    player2.turn=0;
    if(document.querySelector('.rightBox').classList.contains('yourTurn'))
        document.querySelector('.rightBox').classList.remove('yourTurn');
    if(document.querySelector('.dice').classList.contains('dice-show'))
        document.querySelector('.dice').classList.remove('dice-show');    
}
document.querySelector('.btnNew').addEventListener('click', newGame);
// -----------------------------------newGameLogic finish-----------------------------------------

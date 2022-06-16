let player1 ={
    name:'player1',
    currentScore:0,
    totalScore:0,
    class:'leftBox',
    turn:1
};
let player2 ={
    name:'player2',
    currentScore:0,
    totalScore:0,
    class:'rightBox',
    turn:0
};
let player = whosTurn();
let dice = 0;
function rollDice(){
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
        player.currentScore = 0;
        document.querySelector(`.${player.class} .currentBox .currentScore`).textContent = `${player.currentScore}`;
        changeTurn();
    }    
    else{
        player.currentScore += dice;
        document.querySelector(`.${player.class} .currentBox .currentScore`).textContent = `${player.currentScore}`;
    }    
    
}



document.querySelector('.btnRollDice').addEventListener('click',function(){
    if(!document.querySelector('.dice').classList.contains('dice-show'))
        document.querySelector('.dice').classList.add('dice-show');

    rollDice();
    
});

function changeTurn(){
    document.querySelector('.leftBox').classList.toggle('yourTurn');
    document.querySelector('.rightBox').classList.toggle('yourTurn');
    if(player1.turn===1){
        player1.turn=0;
    }else{
        player1.turn=1;
        document.querySelector('.message').textContent = "👆🏼 player's one turn";
    }
    if(player2.turn===1){
        player2.turn=0;
    }else{
        player2.turn=1;
        document.querySelector('.message').textContent = "player's two turn ☝🏼";
    }
    // player1.turn = player1.turn === 1 ? 0 : 1; 
    // player2.turn = player2.turn === 1 ? 0 : 1; 
}

function whosTurn(){
    if(player1.turn===1){
        return player1;
    }
    if(player2.turn===1){
        return player2;
    }    
            
}
function hold(){
    player=whosTurn();
       
    player.totalScore += player.currentScore;
    document.querySelector(`.${player.class} .player .totalScore`).textContent = `${player.totalScore}`;
    player.currentScore=0;
    document.querySelector(`.${player.class} .currentBox .currentScore`).textContent = `${player.currentScore}`;

    if(player.totalScore >= 100)
        document.querySelector('.message').textContent = `✨🎉${player.name} won✨🎉`;
    else{
        changeTurn();
    }
    
    }

document.querySelector('.btnHold').addEventListener('click', hold);

function newGame(){
    player1.totalScore=0;
    document.querySelector(`.${player1.class} .player .totalScore`).textContent = `${player1.totalScore}`;
    player1.currentScore=0;
    document.querySelector(`.${player1.class} .currentBox .currentScore`).textContent = `${player1.currentScore}`;
    player2.totalScore=0;
    document.querySelector(`.${player2.class} .player .totalScore`).textContent = `${player2.totalScore}`;
    player2.currentScore=0;
    document.querySelector(`.${player2.class} .currentBox .currentScore`).textContent = `${player2.currentScore}`;
    player1.turn=1;
    document.querySelector('.message').textContent = "👆🏼 player's one turn";
    if(!document.querySelector('.leftBox').classList.contains('yourTurn'))
        document.querySelector('.leftBox').classList.add('yourTurn');
    player2.turn=0;
    if(document.querySelector('.rightBox').classList.contains('yourTurn'))
        document.querySelector('.rightBox').classList.remove('yourTurn');
}
document.querySelector('.btnNew').addEventListener('click', newGame);
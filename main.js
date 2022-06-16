
let dice = 0;
function rollDice(){
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
}

document.querySelector('.btnRollDice').addEventListener('click',function(){
    if(!document.querySelector('.dice').classList.contains('dice-show'))
        document.querySelector('.dice').classList.add('dice-show');

    rollDice();
});
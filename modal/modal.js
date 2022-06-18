



const overlay = document.createElement('div');
const closeI = document.createElement('span');
const modal = document.createElement('div');
const h2 = document.createElement('h2');
const p = this.document.createElement('p');
let isModalOpen = false;

function createModalElements(){
    document.body.appendChild(overlay); 
    document.body.appendChild(modal);
    modal.appendChild(closeI);
    modal.appendChild(h2);
    modal.appendChild(p);
}
function openModalBox(header,text){
    window.addEventListener('DOMContentLoaded',function(){
            isModalOpen = true;
            createModalElements();
            overlay.classList.add('backgroundBlure');
            modal.classList.add('modalBox');
            closeI.classList.add("closeIcon");
            closeI.textContent = "✖"
            h2.textContent = header;
            p.textContent = text;
    },false)

}
// use escape key to close the modal
document.addEventListener('keydown',function(e){
    // console.log(e);
    if(e.key === 'Escape'){
        // console.log('the Escape was pressed');
        if(isModalOpen === true)
            closeModal();
    }
});
// ---------------------------------

function closeModal(){
    isModalOpen = false;
    overlay.remove();
        modal.remove();
        h2.remove();
        p.remove();
}

overlay.addEventListener('click',closeModal);
closeI.addEventListener('click',closeModal);



openModalBox("Pig Game",`On a turn, a player rolls the die repeatedly. The goal is to accumulate as many points as possible, adding up the numbers rolled on the die. However, if a player rolls a 1, the player's turn is over and any points they have accumulated during this turn are forfeited. Rolling a 1 doesn't wipe out your entire score from previous turns, just the total earned during that particular roll.
A player can also choose to hold (stop rolling the die) if they do not want to take a chance of rolling a 1 and losing all of their points from this turn. If the player chooses to hold, all of the points rolled during that turn are added to his or her score.
When a player reaches a total of 100 or more points, the game ends and that player is the winner. `);

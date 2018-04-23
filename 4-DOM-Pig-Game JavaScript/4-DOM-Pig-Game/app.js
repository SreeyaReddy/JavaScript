/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var score,roundScore,activePlayer,gamePlaying,prevDice;

//document.getElementByName("ScorePoint").textContent=WinningScore;
init();
 
document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gamePlaying){
       //document.getElementByName("ScorePoint").textContent=WinningScore;
       var dice = Math.floor(Math.random()*6)+1; 
    
var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
       
       var dice1 = Math.floor(Math.random()*6)+1; 
       var diceDOM1=document.querySelector('.dice1');
    diceDOM1.style.display='block';
    diceDOM1.src='dice1-'+dice1+'.png';
     
       
  /*if(dice==6 && prevDice==6)
  {
    nextPlayer();
      score[activePlayer]=0;
     document.querySelector('#score-'+activePlayer).textContent='0';  
  }     
     
else*/ if(dice!==1 && dice1!==1)
{
 //var roundScore=0;
    roundScore = roundScore+dice+dice1;
    
           document.querySelector('#current-' + activePlayer).textContent = roundScore;
}
else{
    nextPlayer();
}
        

 prevDice=dice;
    
}
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        
      score[activePlayer]+=roundScore;  //add score to Global score
    document.querySelector('#score-'+activePlayer).textContent=score[activePlayer]; //update UI
   
        var input=document.querySelector('.final-score').value;
        //console.log(input);
        var WinningScore;
        
        if(input){
            WinningScore=input;
            
        }else{
            WinningScore=30;
        }
    if(score[activePlayer]>=WinningScore)
        {
            document.querySelector('#name-'+activePlayer).textContent='Winner!';
            document.querySelector('.dice').style.display='none'; 
            document.querySelector('.dice1').style.display='none';//dice should disappear
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            //document.querySelector('.btn-new').addEventListener('click',init());
            gamePlaying=false;
        }
    else
        {
           nextPlayer();  
        }
      
    }
    
    
    
   

});
     
function nextPlayer(){
    activePlayer === 0? activePlayer = 1 :activePlayer = 0;  //ternary operator
    roundScore = 0;
    
   /* document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');*/
    
    
    document.querySelector('.dice').style.display='none';
    document.querySelector('.dice1').style.display='none';
    document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active'); //to change css of player panel
    document.querySelector('.player-1-panel').classList.toggle('active');
                     };


document.querySelector('.btn-new').addEventListener('click',init);  //when we place () after init once the player wins it automatically calls for a new game but that should happen we want a new game to start when someone clicks on the button so we just call the function as init.

function init(){
    
    score=[0,0];
    
roundScore=0;
activePlayer=0;
    gamePlaying=true;
     //document.getElementById('WinScore').value= WinningScore;
    
   
/*var a = 4;
var c = a + 28;
console.log(c);*/
/*document.querySelector('#current-' + activePlayer).textContent=dice; //get values
var x = document.querySelector('#score-0').textContent;  //set values
console.log(x);*/

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
 document.querySelector('#name-0').textContent='Player-1';
  document.querySelector('#name-1').textContent='Player-2'; 
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.dice').style.display='none';
   document.querySelector('.dice1').style.display='none'; 
    //document.getElementByName("ScorePoint").textContent=WinningScore;
}

/*for(var i=0;i<2;i++)
    {var prevDice[i]=document.querySelector('.dice');
    console.log('prevDice[0]'+'prevDice[1]')}
prevDice[0]==prevDice[1];
prevDice[1]==0;
console.log('prevDice[0]'+'prevDice[1]')*/
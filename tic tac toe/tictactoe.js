document.addEventListener("DOMContentLoaded",function(){
    function containsDigitsUnordered(mainString, subString) {
  const mainDigits = mainString.match(/\d/g) || []; 
  const subDigits = subString.match(/\d/g) || [];

  mainDigits.sort();
  subDigits.sort();
  return subDigits.every(digit => mainDigits.includes(digit)) && mainDigits.length >= subDigits.length; // Ensure all substring digits are present and that the main string has at least as many digits
}

const controller = new AbortController();
const signal = controller.signal;
let draw=true;
let arr=["123","147","159","357","456","789","258","369"];
let patternX="";
let patternO="";
let sign=true;
let identity="";
let box=document.querySelectorAll('.grid-item');
let player=document.getElementById("player");
let reset=document.getElementById("reset");

box.forEach(function(button){
button.addEventListener("click",function game(event){
identity=event.target.getAttribute('id');
let item=document.getElementById(identity);
item.removeAttribute('id');
if (sign==true){
   item.innerHTML="X"
   sign=false;
   player.innerHTML="Current Player:O"
   patternX+=event.target.getAttribute('value');
   console.log(patternX);
   for(let i=0;i<arr.length;i++){
   if(containsDigitsUnordered(patternX,arr[i])){
    player.innerHTML="Player X wins";
    draw=false;
    controller.abort();
   }
   
   
  
   }
}

else{
   item.innerHTML="O";
   sign=true;
   player.innerHTML="Current Player:X"
   patternO+=event.target.getAttribute('value');
   for(let i=0;i<arr.length;i++){
   if(containsDigitsUnordered(patternO,arr[i])){
    player.innerHTML="Player O wins";
    draw=false;
   controller.abort();
   }
  
   }
  
}
if(patternX.length>=5 && draw==true){
   player.innerHTML="Its a tie";
}
    
},{signal})
 })
 reset.addEventListener("click",function(){
   window.location.reload();
 })
}


)

   



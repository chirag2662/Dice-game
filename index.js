var randomnumber =Math.floor(((Math.random()*6)+1));
var randomnumber1 =Math.floor(((Math.random()*6)+1));

document.querySelector(".img1").setAttribute("src","images/dice"+randomnumber+".png");

document.querySelector(".img2").setAttribute("src","images/dice"+randomnumber1+".png");
if(randomnumber>randomnumber1){
  document.querySelector(".container h1").innerHTML="🚩Player 1 Wins";
}
else if(randomnumber1>randomnumber){
  document.querySelector(".container h1").innerHTML="Player 2 Wins🚩";
}
else{
  document.querySelector(".container h1").innerHTML="Draw!";
}

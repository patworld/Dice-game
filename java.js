var randomnumber1=Math.random();
var randomnumber2=Math.random();
randomnumber2=Math.floor(randomnumber2*6)+1;
randomnumber1=Math.floor(randomnumber1*6)+1;
var randomdice1="dice"+randomnumber1;
var randomdice2="dice"+randomnumber2;
var address1="images/"+randomdice1+".png";
var address2="images/"+randomdice2+".png";

var name1=prompt("1st person's name");
var name2=prompt("2nd person's name");
if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").innerHTML=name1+" wins 🚩";
}
else if(randomnumber2>randomnumber1)
{
  document.querySelector("h1").innerHTML= name2+" wins 🚩";
}
else{
  document.querySelector("h1").innerHTML="DRAW ";
}
document.querySelector(".img1").setAttribute("src",address1);
document.querySelector(".img2").setAttribute("src",address2);
document.querySelectorAll("p")[0].innerHTML=name1;
document.querySelectorAll("p")[1].innerHTML=name2;

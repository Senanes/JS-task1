var time = new Date().getHours();


if (time > 6 && time < 12)
{
  alert("Good Morning");
  document.body.style.backgroundColor = "blue";
} 
else if (time > 12 && time < 18) 
{
  alert ("Good Afternoon");
  document.body.style.backgroundColor = "yellow";
}

else if(time > 18 && time < 24)
{
    alert("Good Evening")
    document.body.style.backgroundColor = "gray";
}
 else  
{
  alert ("Good Night");
  document.body.style.backgroundColor = "black"
}







var r = 5
console.log(Math.PI*r*r)




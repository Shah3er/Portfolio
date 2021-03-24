
 function largerNum(){
     //propt the user for 2 numbers and outputs the larger of the 2 numbers//
    var num1, num2;
    num1 = parseInt(window.prompt("Input the First integer", "0"));
    num2 = parseInt(window.prompt("Input the second integer", "0"));
                                                 
    if(num1 > num2)
    { 
    document.getElementById("Integer").innerHTML="The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".";
    }   
    else if (num2 > num1) 
    {
    document.getElementById("Integer").innerHTML="The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".";
    }                  
    else
    {
    document.getElementById("Integer").innerHTML="The values "+ num1+ " and "+num2+ " are same.";
    }
}
//Gives user the correct symbol//
function FindProduct(){
    var x=3;
var y=-7;
var z=2;
if (x>0 && y>0 && z>0)
{
}
    else if (x<0 && y<0 && z<0)
        {
            document.getElementById("Product").innerHTML="The sign is +";
        }
        else if (x>0 && y<0 && z<0)
        {
            document.getElementById("Product").innerHTML="The sign is +";
        }
        else if (x<0 && y>0 && z<0)
        {
            document.getElementById("Product").innerHTML="The sign is +";
        }
        else
        {
            document.getElementById("Product").innerHTML="The sign is -";
        }
}
//Sorting the numbers//
var points = [0, -1, 4];
document.getElementById("Sort").innerHTML = points;

function Sorting() {
  points.sort(function(a, b){return a-b});
  document.getElementById("Sort").innerHTML = points;
}
//Giving the multiples of three//
function Summing(){
    var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0) 
    {
       sum += x;
    }
}
document.getElementById("Sum").innerHTML=sum;
}
//while loop//
function sumWhile(){
    let Whiles= 0;
  let i = 0;
    while(i<1000){
      i++
      if(i%3===0){
        document.getElementById("While").innerHTML = Whiles += i;
      }
    }  
}

//It works but does not give you the number list and this is for counting from 1 to 100//
function Counts(){
    for ( var i = 1; i <= 100; i++ )
{
  if ( i%4 === 0 && i%10 === 0 )
  {
    document.getElementById("Count").innerHTML= i + " Ten&four";
  }
  else if ( i%4 === 0 ) 
  {
    document.getElementById("Count").innerHTML= i+ " Four";
  }
  else if ( i%10 === 0 ) 
  {
    document.getElementById("Count").innerHTML= i+ " Ten";
  }
  else
  {
    document.getElementById("Count").innerHTML=i;
  }
}
}
//year to century//
function Years(){
    var x = parseInt(prompt("Year to century converter: "));
    if (x >= 1601 && x <= 1700) {
        output = 17;
    }
    if (x >= 1701 && x <= 1800) {
        output = 18;
    }
    if (x >= 1801 && x <= 1900) {
        output = 19;
    }
    if (x >= 1901 && x <= 2000) {
        output = 20;
    }
    
document.getElementById("Year").innerHTML = output;
} 

//Triangle angles//
function Triangles(){
    var angle1 = parseInt(prompt(" First Angle: "));
    var angle2 = parseInt(prompt(" Second Angle: "));
    var angletotal = 180 - angle1 - angle2;
    if (angletotal <= 180) {
       output = angletotal;
    }
    
document.getElementById("Tri").innerHTML = output;
}
function function9(){
    alert("Assignment 9 coming soon");
}
function function10(){
    alert("Assignment 10 coming soon");
}
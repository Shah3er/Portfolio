
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
    console.log= i + " Ten&four";
  }
  else if ( i%4 === 0 ) 
  {
    console.log= i+ " Four";
  }
  else if ( i%10 === 0 ) 
  {
    console.log= i+ " Ten";
  }
  else
  {
    console.log= i;
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
//Encryption//
function encrypt(){
  //This is the prompt//
  let splits = prompt ("Encrypt whatever you want");
  //These are the variables//
  let text = "";
  let first="";
  let wordlist = splits.split(" "); 
  //reverses the letters and words//
  wordlist.reverse();

  //This is the for loop for the words in the wordlist//
  for(let i = 0; i < wordlist.length; i= i+1){
    //this saves the first letter of the word you type//
     first = wordlist[i][0]; 
    //This adds the words from the text string but the letter will be in slice command so it will slice of the word//
     text += (wordlist[i]).slice(1);
    //this command adds the first letter and "!!" of your word
     text += first + "!! ";
  }
    //this command outputs your encryption letter and also replaces your specified letters and numbers with numbers//
    document.getElementById("output").innerHTML =text.replace(/a/g,"1").replace(/b/g,"3").replace(/c/g,"5").replace(/d/g,"7").replace(/e/g,"9").replace(/f/g,"2").replace(/g/g,"4").replace(/h/g,"6");   
}
//Decryption//
function Decrypt(){
  //This is the prompt//
    let ciphertext= prompt ("Decrypt whatever you want");
    //These are the variables//
    let txt="";
    let last="";
    let cipherlist= ciphertext.split(" ");
    //reverses the letters and words//
    cipherlist.reverse();
    //This is the for loop for the words in the cipherlist//
    for(let i = 0 ; i < cipherlist.length ; i=i+1){
      //this command sets a constant for the 3rd letter of each word you type on the cipherlist//
      const dep = cipherlist[i].length -3;
    //this saves the 3rd letter//
     last = cipherlist[i][dep];
    //this adds the last letter to the front of the word and then it adds it to the txt//
     txt += last + (cipherlist[i]).slice(0,-3) + " ";
    }
    //this command outputs your decryption letter and also replaces your encryption letters and numbers with letters//
    document.getElementById("input").innerHTML =txt.replace(/1/g,"a").replace(/3/g,"b").replace(/5/g,"c").replace(/7/g,"d").replace(/9/g,"e").replace(/2/g,"f").replace(/4/g,"g").replace(/6/g,"h");
}
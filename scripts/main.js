const audioX = new Audio('../audio/Click2-Sebastian-759472264.mp3');
const audioy = new Audio('../audio/Click sound effect.mp3');
const audiow= new Audio('../audio/Audience Clapping.mp3');
const audiol= new Audio('../audio/FAIL SOUND EFFECT.mp3');

$(function(){
  let count = 0;
  function game(){

  const element =  $(event.target)
  $('element').css({
    color:'wihte'
  })
 if(count % 2 === 0){
  audioX.play();
  $(element).text('x')
   $(element).off("click")
   
   }
   else{
    audioy.play();
  $(element).text('o')
  $(element).off("click")
  }
   count++;
   checkGame()
 }   
 $('.box').on('click',game)
   function checkGame(){
   if($('#0').text()  == $('#1').text() && $('#2').text() == $('#1').text() && $('#2').text() != "")
  {
  setTimeout(function() {alert(  `player ${$('#0').text()}  is win` )},500)
   audiow.play() 
  }

  if($('#3').text()  == $('#4').text() && $('#5').text() == $('#4').text() && $('#5').text() != "")
  {
  setTimeout(function(){ alert(  `player ${$('#3').text()}  is win` )},500)
    audiow.play()
  }

  if($('#6').text()  == $('#7').text() && $('#8').text() == $('#7').text() && $('#8').text() != "")
  {
 setTimeout(function()  {alert(  `player ${$('#6').text()}  is win` )},500)
    audiow.play() 
  }

 if($('#0').text()  == $('#3').text() && $('#6').text() == $('#3').text() && $('#6').text() != "")
  {
 setTimeout(function()  {alert(  `player ${$('#0').text()}  is win` )},500)
    audiow.play()
  }

 if($('#1').text()  == $('#4').text() && $('#7').text() == $('#4').text() && $('#7').text() != "")
 {
  setTimeout(function()  { alert(  `player ${$('#1').text()}  is win` )},500)
   audiow.play()
 }

 if($('#2').text()  == $('#5').text() && $('#8').text() == $('#5').text() && $('#8').text() != "")
 {
 setTimeout(function() { alert(  `player ${$('#2').text()}  is win` )},500)
   audiow.play()
 }

if($('#0').text()  == $('#4').text() && $('#8').text() == $('#4').text() && $('#8').text() != "")
{
setTimeout(function() { alert(  `player ${$('#0').text()}  is win` )},500)
  audiow.play()
}

if($('#2').text()  == $('#4').text() && $('#6').text() == $('#4').text() && $('#6').text() != "")
{
setTimeout(function() {alert(  `player ${$('#2').text()}  is win` )},500)
   audiow.play() 
} 

else if(count == 9 ) 
  {
setTimeout(function()  {alert(  `player is tie` )},500) 
    audiol.play() 
  }


  }
 function rest(){
 count =0
 $(".box").html("")
  $(".box").off()
 $(".box").on('click', game)
  
  }
           
  $('#i1').on('click',function(){

    rest()
      })
      
      
      
    });

   


<!-- md => markdown -->
<!-- Github markdown -->


<!-- heading part -->
#  Project Tic Tac Toe

The project is a game Tic tac toe and plays two users. The first user plays X and then second user plays o.

## My Project Deployment
---
## Technologies used in the project
---
* Visual Studio Code
* Github
- fornt End
   * HTML
   * CSS
* Js
* Jquery
* Sweet Alert
* Make responsive mobile version

## Wireframes and user stories
---
* As a user, I should be able to open a new tic- tac -toe game.
* As a user, I should be able to click on a square to add X first and then O, and so on.
* As a user, I should be shown a message after each turn for if I win and tie. 
* As a user, I should not be able to click the same square twice
* As a user, I should be shown a message when ( x) or  (o) win or tie.
* As a user, I should be able to play the game again without refreshing the page.


## Planning and Development Process
---
## Day 1:
* Make the Structure of HTML file 
* Make CSS file 
* Link the CSS file with HTML 
## Day 2:
* Make JavaScript file 
* Link JavaScript file in HTML file 
* Make if Statement function for winner condition
## Day 3:
* Make Rest buuton to restart game 
* Make Style in CSS 
## Day 4:
* Make the game Respoonsive for version mobile and Desktop
---
# Describe any lines or function in the code

```js
function checkGame(){
   if($('#0').text()  == $('#1').text() && $('#2').text() == $('#1').text() && $('#2').text() != "")
  {
  setTimeout(function() {alert( `player ${$('#0').text()}  is win`)},500)
   audiow.play()
   $('#move').text(count)
  }

  if($('#3').text()  == $('#4').text() && $('#5').text() == $('#4').text() && $('#5').text() != "")
  {
  setTimeout(function(){ alert(  `player ${$('#3').text()}  is win` )},500)
    audiow.play()
    $('#move').text(count)
  }

  if($('#6').text()  == $('#7').text() && $('#8').text() == $('#7').text() && $('#8').text() != "")
  {
 setTimeout(function()  {alert(  `player ${$('#6').text()}  is win` )},500)
  audiow.play()
  $('#move').text(count) 
  }

 if($('#0').text()  == $('#3').text() && $('#6').text() == $('#3').text() && $('#6').text() != "")
  {
 setTimeout(function()  {alert(  `player ${$('#0').text()}  is win` )},500)
    audiow.play()
    $('#move').text(count)
  }

 if($('#1').text()  == $('#4').text() && $('#7').text() == $('#4').text() && $('#7').text() != "")
 {
  setTimeout(function()  { alert(  `player ${$('#1').text()}  is win` )},500)
   audiow.play()
   $('#move').text(count) 
 }

 if($('#2').text()  == $('#5').text() && $('#8').text() == $('#5').text() && $('#8').text() != "")
 {
 setTimeout(function() { alert(  `player ${$('#2').text()}  is win` )},500)
   audiow.play()
   $('#move').text(count)
   
 }

if($('#0').text()  == $('#4').text() && $('#8').text() == $('#4').text() && $('#8').text() != "")
{
setTimeout(function() { alert(  `player ${$('#0').text()}  is win` )},500)
  audiow.play()
  $('#move').text(count)
}

if($('#2').text()  == $('#4').text() && $('#6').text() == $('#4').text() && $('#6').text() != "")
{
setTimeout(function() {alert(  `player ${$('#2').text()}  is win` )},500)
   audiow.play()
   $('#move').text(count) 
   
} 

else if(count == 9 ) 
  {
setTimeout(function()  {alert(  `player is tie` )},500) 
    audiol.play() 
    $('#move').text(count)
  }
```
## Challenges

* How to start make the game from scratch 
* How to dealing with CSS file like the size each container 






# Unsolved problems which would be fixed in future iterations.

* Set a timer for the game 
* Set a counter to count the Winner 
* Make the Computer play with the User 





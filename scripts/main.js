$(function(){
    let count = 0;
    function game(){
        const element =  $(event.target)
       if(count % 2 === 0){
        $(element).text('x')
        $(element).off("click")
       }else{
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
        setTimeout(function() {alert(  `player ${$('#0').text()}  is win` )},1000)
          rest()
        }
        if($('#3').text()  == $('#4').text() && $('#5').text() == $('#4').text() && $('#5').text() != "")
        {
        setTimeout(function(){ alert(  `player ${$('#3').text()}  is win` )},1000)
          rest()
        }
        if($('#6').text()  == $('#7').text() && $('#8').text() == $('#7').text() && $('#8').text() != "")
        {
         setTimeout(function()  {alert(  `player ${$('#6').text()}  is win` )},1000)
         rest()
        }
         if($('#0').text()  == $('#3').text() && $('#6').text() == $('#3').text() && $('#6').text() != "")
        {
         setTimeout(function()  {alert(  `player ${$('#0').text()}  is win` )},1000)
         rest()
        }
         if($('#1').text()  == $('#4').text() && $('#7').text() == $('#4').text() && $('#7').text() != "")
        {
        setTimeout(function()  { alert(  `player ${$('#1').text()}  is win` )},1000)
            rest()
        }
        if($('#2').text()  == $('#5').text() && $('#8').text() == $('#5').text() && $('#8').text() != "")
        {
        setTimeout(function() { alert(  `player ${$('#2').text()}  is win` )},1000)
           rest()
        }
         if($('#0').text()  == $('#4').text() && $('#8').text() == $('#4').text() && $('#8').text() != "")
        {
         setTimeout(function() { alert(  `player ${$('#0').text()}  is win` )},1000)
           rest()
        }
        if($('#2').text()  == $('#4').text() && $('#6').text() == $('#4').text() && $('#6').text() != "")
       {
         setTimeout(function() {alert(  `player ${$('#2').text()}  is win` )},1000)
           rest()
       }
      else  if (count == 9 ) 
       {
          setTimeout(function()  {alert(  `player is tie` )},1000)
          rest()
       }
    }
      function rest(){
         count =0
         $(".box").html("")
         $(".box").off()
         $(".box").on('click', game)
       }
       $("#i1").on("click", rest)
            
      
    

        
       
    

 
 
});




$(function(){
    let count = 0;
    $('.box').on('click',function(event){
        count++;
        const element =  $(event.target)
       if(count %3 ==1){
        
        $(element).text('x')
        $(element).off("click")
       }
       else if (count %2 == 0)
       {
        $(element).text('o')
        $(element).off("click")
       }
       
       
       
 
    })
   







})
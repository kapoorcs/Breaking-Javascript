$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=100px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=100px'
       }); 
   });
   $('div').click(function() {
       $(this).toggle(1000);
   }); 
});
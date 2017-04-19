$(document).ready(function(){
  $("input").keypress(function(e){
    if (e.which == 13){
        getLineInput()
    }
  });
});
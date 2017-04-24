// the j-query function to get the submit on enter

$(document).ready(function(){
  $("input").keypress(function(e){
    if (e.which == 13){
        getLineInput()
    }
  });
});
$(function(){
  $("#package-form").submit(function(event){
    var country = $("#countries").val();





    event.preventDefault();
  });


  $("select").change(function() {
    var country = $("select").val();
    if (country === "United States") {
      $("#zip").show();
    }

  });



});


(function($){
  $(function(){
    $('select').selectToAutocomplete();
    $('form').submit(function(){

    });
  });
})(jQuery);

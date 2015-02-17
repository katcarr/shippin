$(function(){
  $("#package-form").submit(function(event){
    var country = $("#countries").val();





    event.preventDefault();
  });



  $("#country-selector").change(function() {
    var country = $("select").val();
    if (country === "United States") {
      $(".hiddenStuff").show();
      $('#state-selector').selectToAutocomplete();
    }

  });



});


(function($){
  $(function(){
    $('#country-selector').selectToAutocomplete();
  });
})(jQuery);

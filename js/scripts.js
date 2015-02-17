$(function(){
  $("#package-form").submit(function(event){
    var country = $("#countries").val();





    event.preventDefault();
  });


  $('select').selectToAutocomplete();

  $("#from-country").change(function() {
    var fromCountry = $("#from-country").val();
    if (fromCountry === "United States") {
      $(".hiddenFrom").show();
      $('#from-state').selectToAutocomplete();
    }
  });

  $("#to-country").change(function() {
    var toCountry = $("#to-country").val();
    if (toCountry === "United States") {
      $(".hiddenTo").show();
      $('#to-state').selectToAutocomplete();
    }

  });



});

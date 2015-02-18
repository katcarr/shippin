$(function(){
  $("#package-form").submit(function(event){
    var fromCountry = $("#from-country").val();
    var fromState = $("#from-state").val();
    var fromZip = $("#from-zip").val();
    var toCountry = $("#to-country").val();
    var toState = $("#to-state").val();
    var toZip = $("#to-zip").val();
    var length = parseInt($("#length").val());
    var height = parseInt($("#height").val());
    var width = parseInt($("#width").val());
    var weight = parseInt($("#weight").val());

    $(".form-group input").val("");
    $("select").val("");


    var fromAddress = { country: fromCountry, state: fromState, zip: fromZip };
    var toAddress = { country: toCountry, state: toState, zip: toZip };
    var dimensions = { height: height, length: length, width: width };
    var packageToShip = { from: fromAddress, to: toAddress, dimensions: dimensions, weight: weight };


    var cost = function() {
      return this.weight * this.dimensions.height * this.dimensions.width * this.dimensions.length / 100;
    };
    packageToShip.cost = cost;

    var draw = function() {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.clearRect(0,0,canvas.width,canvas.height);

        ctx.beginPath();
        ctx.moveTo(0,300); // starting point at lower left corner of 150x150 grid
        ctx.lineTo(this.dimensions.length,300); // draw side1 as bottom
        ctx.lineTo(this.dimensions.length,300-this.dimensions.height);
        ctx.lineTo(0, 300-this.dimensions.height);
        ctx.fill();
      }
    }
    packageToShip.draw = draw;


    $("#cost").text(packageToShip.cost());
    $("#country-result").text(packageToShip.to.country);

    $("#hiddenCost").show();
    packageToShip.draw();

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

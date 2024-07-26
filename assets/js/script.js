$(document).ready(function() {
  $(".btn-ver-mas").click(function() {
      var idBoton = $(this).attr("id");
      $(".detalles").hide(); 
      $("#detalles" + idBoton).show(); 
  });

  $(".btn-close").click(function() {
      $(".detalles").hide(); 
  });
});

$(document).ready(function(){     
  $("#oui").click(function(){

    $("#formulaire1").hide();
    $("#formulaire2").show();
    $("#oui").preventDefault();
  });

  $('.js_goform3').click(function(){
    $("#formulaire1").hide();
    $("#formulaire2").hide();
    $("#formulaire3").show();
    
  });

  $("#oui-footer").click(function(){

    $("#formulaire-footer1").hide();
    $("#formulaire-footer2").show();
    $("#oui-footer").preventDefault();
  });

  $('.js_goform3').click(function(){
    $("#formulaire-footer1").hide();
    $("#formulaire-footer2").hide();
    $("#formulaire-footer3").show();
    
  });
  

});

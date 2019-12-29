$(document).ready(function(){     
  $("#oui").click(function(){
      $("#formulaire1").hide();
      $(".formulaire2").show();
  });
  var start = document.getElementsByName('envoyer');

    function valider()
    {
    if (document.getElementById('prenom') == ""){
    alert ("Veuillez entrer votre prénom!");
    return false;
    }

    if (document.getElementById('nom') == ""){
     alert ("Veuillez entrer votre nom!");
     return false;
    }

    if (document.getElementById('email') == ""){
    alert ("Veuillez entrer votre e-mail!");
      return false;
    }

    if (document.getElementById('text') == ""){
    alert ("Veuillez composer votre message!");
       return false;
    }
}
    
    start[0].addEventListener('click', valider, false);
});
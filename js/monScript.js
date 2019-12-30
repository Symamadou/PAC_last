$(document).ready(function(){     
  $("#oui").click(function(){

    $("#formulaire1").hide();
    $("#formulaire2").show();
    //$("#oui").preventDefault();
  });

  $('.js_goform3').click(function(){
    $("#formulaire1").hide();
    $("#formulaire2").hide();
    $("#formulaire3").show();
    
  });

  $("#oui-footer").click(function(){

    $("#formulaire-footer1").hide();
    $("#formulaire-footer2").show();
    //$("#oui-footer").preventDefault();
  });

  $('.js_goform3').click(function(){
    $("#formulaire-footer1").hide();
    $("#formulaire-footer2").hide();
    $("#formulaire-footer3").show();
    
  });

   // au clic sur un lien
   $('a.scroll').on('click', function(evt){

    evt.preventDefault(); 
    
var target = $(this).attr('href');
   
$('html, body') 
    .stop()
    .animate({scrollTop: $(target).offset().top}, 1500 );
 });
  
  //validation formulaire 1
  
  var $form = $('#formulaire3');
   var url = $form.attr('action');
   var zapierURL = "https://hooks.zapier.com/hooks/catch/3040808/ouv7028/";
 
 
   var urlParams = new URLSearchParams(window.location.search);
 
 
 
   $("#formulaire3 button[type='submit']").on("click", function(e) {
       e.preventDefault();
 
       // iziToast.destroy();
 
 
       var nom = $('#name').val();
       var dep = $('#departement').val();
       var tel = $('#telephone').val();
       var email = $('#email').val();
       var conso = $('#consommation').val();
 
       var campagne = "PAC";
 
       if (urlParams.has('utm_source')) {
 
           campagne = urlParams.get('utm_source')
       }
 
       var error = false;
 
       //consommation
 
       if (conso == null) {
           $('#consommation').addClass("is-invalid");
           error = true;
           iziToast.error({
               title: 'Erreur',
               message: 'Merci de renseigner votre consommation actuelle'
           });
 
       } else {
           $('#consommation').removeClass("is-invalid");
       };

       //departement
 
       if (dep == null) {
        $('#departement').addClass("is-invalid");
        error = true;
        iziToast.error({
            title: 'Erreur',
            message: 'Merci de renseigner votre département'
        });

    } else {
        $('#departement').removeClass("is-invalid");
    };
 
       // Nom
       if (!nom.length > 0) {
           $('#name').addClass("is-invalid");
           error = true;
           iziToast.error({
               title: 'Erreur',
               message: 'Merci de renseigner votre nom et prenom'
           });
 
       } else {
           $('#name').removeClass("is-invalid");
       };

       // Telephone
       if (!tel.length > 0) {
        $('#telephone').addClass("is-invalid");
        iziToast.error({
            title: 'Erreur',
            message: 'Merci de renseigner un numéro de téléphone'
        });

        error = true;

    } else if (tel.match(/^(0|\+33|0033)[0-9]([0-9]{8})$/) == null) {
        $('#telephone').addClass("is-invalid");
        iziToast.error({
            title: 'Erreur',
            message: 'Merci de vérifier votre numéro de téléphone'
        });

        error = true;

    } else {
        $('#telephone').removeClass("is-invalid");

    };
 
       // Email
       if (!email.length > 0) {
           $('#email').addClass("is-invalid");
           error = true;
           iziToast.error({
               title: 'Erreur',
               message: 'Merci de renseigner votre email'
           });
 
       } else if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) == null) {
           $('#email').addClass("is-invalid");
           error = true;
           iziToast.error({
               title: 'Erreur',
               message: 'Merci de vérifier votre email'
           });
 
       } else {
           $('#email').removeClass("is-invalid");
       };
 
 
       if (!error) {
 
           //Zapier WebHook
           $.get(zapierURL, { nom: nom, dep: departement, email: email, tel: telephone, conso: vconsommation, campagne: PAC })
               .done(function(data) {
 
                   $form.fadeOut("slow", function() {
                       // Animation complete.
                       $('.sucess_form').fadeIn(1000);
                   });
 
 
                   //Leads FB
 
                   fbq('track', 'Lead');
 
                   // taboola
 
                   _tfa.push({ notify: 'event', name: 'lead_M_Fenetre', id: 1204046 });
 
                   var image = new Image(1, 1);
                   image.src = '//trc.taboola.com/1204046/log/3/unip?en=lead_M_Fenetre';
 
 
 
               });
 
 
 
 
       } // fin Error
 
 
 
   });

  

});

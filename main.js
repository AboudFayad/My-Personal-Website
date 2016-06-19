$(document).ready(function(e) {   
    $("#about").click(function() {
        $('html,body').animate({
            scrollTop: $("#about_skill_widget").offset().top -80},
            'slow');
    });  
 });
$(document).ready(function(e) {
    
    $("#work-done").click(function() {
        console.log("clecked");
        console.log($("#workDone").hasClass('active'));
        if (!$("#workDone").hasClass('active')){
            $("#workOn").removeClass('active');
            $("#workDone").addClass('active');
            $("#workDone").animate({left: "+=100%"}, 1000);
            $("#workOn").animate({left: "+=100%"}, 1000);
        };
        
    });
    
    $("#working-on").click(function() {
        console.log($("#workOn").hasClass('active'));
        if (!$("#workOn").hasClass('active')){
            console.log("I am in");
            $("#workDone").removeClass('active');
            $("#workOn").addClass('active');
            $("#workDone").animate({left: "-=100%"}, 1000);
            $("#workOn").animate({left: "-=100%"}, 1000);
        };
        
    });
    
 });
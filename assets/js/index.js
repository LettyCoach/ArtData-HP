$(document).ready(function(){
    $("#header .toggle").click(function () {

        if ($("body").hasClass('toggle-active')) {
            $("body").removeClass('toggle-active');
    
            $("#gnavi").slideUp(200);
        } else {
            $("body").toggleClass('toggle-active');
    
            $("#gnavi").slideDown(200);
    
        }
    
    });
});
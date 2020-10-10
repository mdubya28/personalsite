$(".prog_man").click(function(){   
        $(".expand-pm").slideToggle();

        if (!$(".prog_man").hasClass('experience-circle-clicked')) {
                $(this).addClass("experience-circle-clicked");
        }
        else {
                $(this).removeClass("experience-circle-clicked");
        }      
});
        

  

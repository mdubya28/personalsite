var display = false;

$(".experience-circle").click(function(){
        var clicked = $(this).attr("id");

        if ($(".expand-" + clicked).is(":visible")) {
                $(".expand-" + clicked).slideUp();
                $(this).removeClass("experience-circle-clicked");
                display = false;
        }

        if (display === true){
                $(".xp").slideUp();
                $(".experience-circle").removeClass("experience-circle-clicked");
                display = false;

                displayXp(clicked);
                $(this).addClass("experience-circle-clicked");
        }
        
        
        if (display === false) {
                displayXp(clicked);
                $(this).addClass("experience-circle-clicked");
        }

        
        

});

function displayXp(name) {
        $(".expand-"+ name).slideDown();
        display = true;
}


//         if (display = true) {
//                 $(".xp").slideUp
//                 $(clicked).removeClass("experience-circle-clicked");
//                 display = false;
//         }
//         if (display = false) {
//                 displayXp();
//                 $(this).addClass("experience-circle-clicked");
//                 display = true;
//         }
// });




        // if (!$(".experience-circle").hasClass('experience-circle-clicked')) {
        //         $(this).addClass("experience-circle-clicked");
        // }
        // else {
        //         $(this).removeClass("experience-circle-clicked");
        // }      



//         if ($(".expand-" + clicked).is(":visible")) {
        //         $(".expand-" + clicked).slideUp();
        //         $(this).removeClass("experience-circle-clicked");
                // display = false;





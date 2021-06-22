console.log("Your index.js file is loaded correctly!");

$(".resumeButton").on("click", function(){
    
    $('a[href$=".pdf"]')
         .attr('download', '')
         .attr('target', '_blank'); 
});




$("#res").hover(function () {
        // over
       $("#res").removeClass("resumeButton");
       $("#res").addClass("newbuttoncolor"); 
    }, function () {
        // out
        $("#res").removeClass("newbuttoncolor");
        $("#res").addClass("resumeButton");
    }
);

$("#newskillscolor").hover(function () {
    // over
   $("#newskillscolor").removeClass("active");
   $("#newskillscolor").addClass("newmenucolor");
   $("#aboutmenucolor").removeClass("newmenucolor"); 
}, function () {
    // out
    $("#newskillscolor").removeClass("newmenucolor");
    $("#newskillscolor").addClass("active");
    $("#aboutmenucolor").addClass("newmenucolor");
}
);

$("#newworkcolor").hover(function () {
    // over
   $("#newworkcolor").removeClass("active");
   $("#newworkcolor").addClass("newmenucolor");
   $("#aboutmenucolor").removeClass("newmenucolor"); 
}, function () {
    // out
    $("#newworkcolor").removeClass("newmenucolor");
    $("#newworkcolor").addClass("active");
    $("#aboutmenucolor").addClass("newmenucolor");
}
);
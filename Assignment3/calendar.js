
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){
		
        var d 	= new Date();
        var mth = d.getMonth()+1;
        var yr 	= d.getFullYear();

        $("#month").val(mth);
        $("#year").val(yr);
        showCalendar (mth, yr);

        $("#month,#year").change(function(e) {
            showCalendar ($("#month").val(), $("#year").val());
        });
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}


function showCalendar (mth, yr) {
		
		
    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();

    var cal = "";
    var numberedDay = 1;

    //days in the week
    for (var y = 0; y < 6; y++){
        //weeks in a month
        for (var x = 0; x < 7; x++){
            //check if we need to add another .day, so no unessesary days after the end of the month
            if (numberedDay <= numberOfDaysInMonth){
                cal+= "<div class='day'>";
            }
            //Don't print date until it's the right day of the week
            if (x == firstDayOfWeek && y === 0){
                cal+= numberedDay;
                numberedDay = numberedDay+1;
            }
            //don't print dates after the month is over
            else if (numberedDay > 1 &&
                       numberedDay <= numberOfDaysInMonth){
                cal+= numberedDay;
                numberedDay = numberedDay+1;
            }
            //close day div
            cal+= "</div>";
        }
        //end of row; week
        cal += "<div class='row'/>";
    }

    //display calender
    $("#results").html(cal);
    
    $(document).ready(function () {
        //changing one day
        $(".day").click(function (){
            //get class name
            var thisClass = $(this).attr("class");
            //get the inner html of div; the dated date
            var datedDate = $(this).html();
            if ( thisClass == "day" && datedDate !== ""){
                    $(this).addClass('avalible');
            } else if (thisClass == "day avalible" && datedDate !== ""){
                    $(this).removeClass("avalible");
                    $(this).addClass("unavalible");
            } else if (datedDate !== ""){
                    $(this).removeClass("unavalible");
            }
        });
        //button for complete avaliblity
        $("#yes").click(function (){
                //get each div with the day class
            $(".day").each(function (){
                    //avoid the nondays
                    if ($(this).html() !== ""){
                        //add avalible | remove unavalible
                        $(this).addClass('avalible');
                        $(this).removeClass('unavalible');
                    }     
            });
        });
        //button for complete unavaliblity
        $("#no").click(function (){
            $(".day").each(function (){
                    if ($(this).html() !== ""){
                            $(this).addClass('unavalible');
                            $(this).removeClass('avalible');
                    }     
            });
        });
    });
}




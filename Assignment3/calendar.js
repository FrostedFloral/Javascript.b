    /* Nathan Stone | SE251.05 | 04/04/2017

    Assignment 3

    The objective of this assignment is to practice DOM manipulation with jQuery.
    Download lab3.zipView in a new window as your base assignment.
    Your task is to create a JavaScript application that allows a user to specify
    their availability to an employer. You will need to dynamically create a grid
    that looks like the below. It is okay to hard code the months and years (2016-2018).
    Changing the month and/or year will update the grid to represent the correct month and year.
    Note the following:
    - clicking a cell in the grid once will set the availability to green;
    - if a cell is green and you click it again; it will turn red
    - clicking a red cell will clear the background color
    - clicking the all month available button will set all days of the month to green
    - clicking the all month unavailable (red) button will set all days of the month to red */

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
            //get only day class divs and only if there is html inside
            if ( thisClass == "day" && datedDate !== ""){
                    $(this).addClass('available');
            } else if (thisClass == "day available" && datedDate !== ""){
                    $(this).removeClass("available");
                    $(this).addClass("unavailable");
            } else if (datedDate !== ""){
                    $(this).removeClass("unavailable");
            }
        });
        $(".day").hover(function () {
            if ($(this).html() !== ""){
                $(this).css("cursor", "pointer");
            }
        });
        //button for complete availability
        $("#yes").click(function (){
                //get each div with the day class
            $(".day").each(function (){
                    //avoid the non-days
                    if ($(this).html() !== ""){
                        //add available | remove unavailable
                        $(this).addClass('available');
                        $(this).removeClass('unavailable');
                    }
            });
        });
        //button for complete unavailability
        $("#no").click(function (){
            $(".day").each(function (){
                    if ($(this).html() !== ""){
                            $(this).addClass('unavailable');
                            $(this).removeClass('available');
                    }     
            });
        });
    });
}




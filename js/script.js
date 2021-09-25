// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {

    $(".saveBtn").on("click", function () {
       
        var text = $(this).siblings(".index").val();
        var time = $(this).parent().attr("id");

      
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
       
        var timeNow = moment().hour();

        $(".time-line").each(function () {
            var lineTime = parseInt($(this).attr("id").split("hour")[1]);

            if (lineTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (lineTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

  
    $("#hour8 .description").val(localStorage.getItem("8am"));
    $("#hour9 .description").val(localStorage.getItem("9am"));
    $("#hour10 .description").val(localStorage.getItem("10am"));
    $("#hour11 .description").val(localStorage.getItem("11am"));
    $("#hour12 .description").val(localStorage.getItem("12am"));
    $("#hour13 .description").val(localStorage.getItem("1pm"));
    $("#hour14 .description").val(localStorage.getItem("2pm"));
    $("#hour15 .description").val(localStorage.getItem("3pm"));
    $("#hour16 .description").val(localStorage.getItem("4pm"));
    $("#hour17 .description").val(localStorage.getItem("5pm"));

    timeTracker();
})

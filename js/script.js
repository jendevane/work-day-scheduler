
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {

    $(".savebtn").on("click", function () {
       
        var text = $(this).siblings(".index").val();
        var time = $(this).parent().attr("id");
        
        window.localStorage.setItem
      
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

  
    $("#8am .index").val(localStorage.getItem("8am"));
    $("#9am .index").val(localStorage.getItem("9am"));
    $("#10am .index").val(localStorage.getItem("10am"));
    $("#11am .index").val(localStorage.getItem("11am"));
    $("#12pm .index").val(localStorage.getItem("12pm"));
    $("#1pm .index").val(localStorage.getItem("1pm"));
    $("#2pm .index").val(localStorage.getItem("2pm"));
    $("#3pm .index").val(localStorage.getItem("3pm"));
    $("#4pm .index").val(localStorage.getItem("4pm"));
    $("#5pm .index").val(localStorage.getItem("5pm"));

    timeTracker();
})

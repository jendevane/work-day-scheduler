
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
window.onload=timeTracker()


var save = document.querySelectorAll(".savebtn");

for (var i = 0, len = save.length-1; i < len; i++) {
    save[i].addEventListener('click', function (e) {
        var text = e.target.parentNode.children
        text=text[1].value
        console.log(text[1])
        var time = e.target.parentNode.id
        console.log(time)
       
        window.localStorage.setItem(time, text);
    });
    }

    
  
   
function timeTracker() {
       
    var timeNow = moment().hour();

    var timeline = document.querySelectorAll(".time-line")
    for (var i = 0, len = timeline.length; i < len; i++) {
        console.log(timeline[i])
        var timelineid = timeline[i].id
     
        
        var hour
        if (timelineid.length === 3) {
             hour = parseInt(timelineid.substring(0, 1)) 
        } else if (timelineid.length === 4){
             hour = parseInt(timelineid.substring(0, 2))
        }
        console.log(hour)

        if (hour < timeNow) {
            timeline[i].classList.remove("future")
            timeline[i].classList.remove("present")
            timeline[i].classList.add("past")
            
        } else if (hour===timeNow){

            timeline[i].classList.remove("future")
            timeline[i].classList.remove("past")
            timeline[i].classList.add("present")
            
        } else {
            timeline[i].classList.remove("present")
            timeline[i].classList.remove("past")
            timeline[i].classList.add("future")
        }
            
        
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

}
  

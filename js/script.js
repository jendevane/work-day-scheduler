
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
window.onload=timeTracker()


var save = document.querySelectorAll(".savebtn");

for (var i = 0, len = save.length-1; i < len; i++) {
    save[i].addEventListener('click', function (e) {
        var text = e.currentTarget.parentNode.children
        console.log(e.target)
        text=text[1].value
        console.log(text[1])
        var time = e.currentTarget.parentNode.id
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
        if (hour < 6 ) {
            hour += 12
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
    document.getElementsByClassName("index")[0].innerHTML = localStorage.getItem("8am");
    console.log("8am")
    document.getElementsByClassName("index")[1].innerHTML = localStorage.getItem("9am");
    document.getElementsByClassName("index")[2].innerHTML = localStorage.getItem("10am");
    document.getElementsByClassName("index")[3].innerHTML = localStorage.getItem("12pm");
    document.getElementsByClassName("index")[4].innerHTML = localStorage.getItem("1pm");
    document.getElementsByClassName("index")[5].innerHTML = localStorage.getItem("2pm");
    document.getElementsByClassName("index")[6].innerHTML = localStorage.getItem("3pm");
    document.getElementsByClassName("index")[7].innerHTML = localStorage.getItem("4pm");
    document.getElementsByClassName("index")[8].innerHTML = localStorage.getItem("5pm");
    


   

}
  


$(function () {
//displays current date    
      var currentDate = dayjs().format('dddd, MMM DD, YYYY');
  $('#currentDay').text(currentDate); 

//saves event to local storage. key=event, value=timeblock id       
  $('.saveBtn').on('click', function() {
        
            var event = $(this).siblings('.description').val();
            var time = $(this).parent().attr('id');
            localStorage.setItem(time, event);
            console.log(event);

        });
//time tracked and respected time blocks change accordingly.
function update() {

var timeBlock = $('.time-block');
var currentTime = dayjs().hour();

timeBlock.each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentTime) {

        $(this).addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');


    } else if (blockHour === currentTime) {

        $(this).removeClass('past');
        $(this).addClass('present');

    } else {

        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');

    }


});

}


update();

setInterval(update(), 15000);

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));


});








$(function () {
      var currentDate = dayjs().format('dddd, MMM DD, YYYY');
  $('#currentDay').text(currentDate); //displays current date

 //saves event to local storage. key=event, value=timeblock id       
  $('.saveBtn').on('click', function() {
        
            var event = $('.description').val();
            var time = $(this).parent().attr('id');
            var savedEvent = localStorage.setItem(event, time);

        });
//time tracked and respected time blocks change accordingly.
var timeBlock = $('.time-block');
var currentTime = dayjs().hour();

timeBlock.each(function(){
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    
    if(blockHour === currentTime) {
        $(this).addClass('present');
    } else if(blockHour < currentTime) {
        $(this).addClass('past');
    } else {
        $(this).addClass('future');
    }
})



   

});







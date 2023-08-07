
$(function () {
//displays current date    
      var currentDate = dayjs().format('dddd, MMM DD, YYYY');
  $('#currentDay').text(currentDate); 

//saves event to local storage. key=event, value=timeblock id       
  $('.saveBtn').on('click', function() {
        
            var event = $('.description').val();
            var time = $(this).parent().attr('id');
            localStorage.setItem(time, event);

        });
//time tracked and respected time blocks change accordingly.
var timeBlock = $('.time-block');
var currentTime = dayjs().hour();

timeBlock.each(function(){
    // var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    
    // if(blockHour === currentTime) {
    //     $(this).addClass('present');
    //     $(this).removeClass('past');
    //     $(this).removeClass('future');
    // } else if(blockHour < currentTime) {
    //     $(this).addClass('past');
    //     $(this).removeClass('present');
    //     $(this).removeClass('future');
    // } else {
    //     $(this).addClass('future');
    //     $(this).removeClass('past');
    //     $(this).removeClass('present');
    // }



});

//get item from local storage
// $('.description').val(savedEvent('.time-block'))

});







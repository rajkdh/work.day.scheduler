
$(function () {
      var currentDate = dayjs().format('dddd, MMM DD, YYYY');
  $('#currentDay').text(currentDate); //displays current date

 //saves event to local storage. key=event, value=timeblock id       
  $('.saveBtn').on('click', function() {
        
            var event = $('.description').val();
            var time = $(this).parent().attr('id');
            var savedEvent = localStorage.setItem(event, time);

        });




});








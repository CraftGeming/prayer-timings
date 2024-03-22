jQuery(function($) {
  // تعريف وظيفة لجلب الوقت الحالي وتحديث الوقت على الصفحة
  function updateCurrentTime() {
    var currentTime = new Date().toLocaleTimeString('en-US', {hour12: false});
    $('#current-time').text('Current Time: ' + currentTime);
  }

  // تحديث الوقت الحالي عندما يتم تحميل الصفحة لأول مرة
  updateCurrentTime();

  // تحديث الوقت الحالي بانتظام كل ثانية (1000 مللي ثانية)
  setInterval(updateCurrentTime, 1000);

  $('#submit').click(function() {
    var country = $('#country').val();

    $.getJSON('https://muslimsalat.com/' + country + '/daily.json?key=API_KEY&jsoncallback=?', function(times) {
      var currentTime = new Date().toLocaleTimeString('en-US', {hour12: false});
      $('#current-time').text('Today in ' + times.title + ': ' + currentTime);
      $('#fajr').text('Fajr: ' + times.items[0].fajr);
      $('#dhuhr').text('Dhuhr: ' + times.items[0].dhuhr);
      $('#asr').text('Asr: ' + times.items[0].asr);
      $('#maghrib').text('Maghrib: ' + times.items[0].maghrib);
      $('#isha').text('Isha: ' + times.items[0].isha);
    });
  });
});

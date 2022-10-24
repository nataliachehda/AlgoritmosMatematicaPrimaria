$('#submit').click(function() {
  var abc = $('#text1').val();
  var def = $('#text2').val();
  var ghi = $('#text3').val();
  $('#container').html('<div class = text1>' + abc + '</div><div class = text2>' + def + '</div><div class = text3>' + ghi + '</div>');
  html2canvas($('#container'), {
    onrendered: function(canvas) {
      myImage = canvas.toDataURL("image/png");
      $('#image').append(canvas);
      //$.ajax({
      //data: myImage
      // ....
    }
  });
});
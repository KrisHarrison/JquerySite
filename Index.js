$(document).ready(function(){

  $.ajax({
    url:'a1.xml',
    data:{},
    type:'GET',
    dataType:'xml',
    success:function(data){
      xmlDoc = data
      var studentNum = $(xmlDoc).find('student').attr("studentNumber");
      $("#studentNum").html(studentNum);
      var name = $(xmlDoc).find('studentName').text();
      $("#name").html(name);
      var program = $(xmlDoc).find('studentProg').text();
      $("#program").html(program);
      var campus = $(xmlDoc).find('studentCampus').text();
      $("#campus").html(campus);
      var myImg = $(xmlDoc).find('image:nth(0)').text();
        $("#myPhoto").html(
          "<img src='"+myImg+"'></img>"
        );
    }
  });

  $("#berlinLink").mouseover(function(){
      $("#berlinLink").css('color','red');
  });
  $("#berlinLink").mouseout(function(){
      $("#berlinLink").css('color','black');
  });

  $("#parisLink").mouseover(function(){
      $("#parisLink").css('color','red');
  });
  $("#parisLink").mouseout(function(){
      $("#parisLink").css('color','black');
  });

  $("#gdanskLink").mouseover(function(){
      $("#gdanskLink").css('color','red');
  });
  $("#gdanskLink").mouseout(function(){
      $("#gdanskLink").css('color','black');
  });
});

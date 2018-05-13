
$(document).ready(function(){
  $.ajax({
    url:'a1.xml',
    data:{},
    type:'GET',
    dataType:'xml',
    success:function(data){
      xmlDoc = data;
      var latBerlin = $(xmlDoc).find('city:nth(0)').attr("lat");
      $("#lat").html(latBerlin);
      var longBerlin = $(xmlDoc).find('city:nth(0)').attr("long");
      $("#long").html(longBerlin);
      var city = $(xmlDoc).find('name:nth(0)').text();
      $("#city").html(city);
      var country = $(xmlDoc).find('country:nth(0)').text();
      $("#country").html(country);
      var province = $(xmlDoc).find('province:nth(0)').text();
      $("#province").html(province);
      var berlinImg = $(xmlDoc).find('image:nth(1)').text();
        $("#image").html(
          "<img src='"+berlinImg+"'></img>"
        );
    }
  });

  $("#mainMenu").mouseover(function(){
      $("#mainMenu").css('color','red');
  });
  $("#mainMenu").mouseout(function(){
      $("#mainMenu").css('color','black');
  });
});

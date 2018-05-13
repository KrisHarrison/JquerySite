$(document).ready(function(){
  $.ajax({
    url:'a1.xml',
    data:{},
    type:'GET',
    dataType:'xml',
    success:function(data){
      xmlDoc = data;
      var latParis = $(xmlDoc).find('city:nth(1)').attr("lat");
      $("#lat").html(latParis);
      var longParis = $(xmlDoc).find('city:nth(1)').attr("long");
      $("#long").html(longParis);
      var city = $(xmlDoc).find('name:nth(1)').text();
      $("#city").html(city);
      var country = $(xmlDoc).find('country:nth(1)').text();
      $("#country").html(country);
      var province = $(xmlDoc).find('province:nth(1)').text();
      $("#province").html(province);
      var parisImg = $(xmlDoc).find('image:nth(2)').text();
        $("#image").html(
          "<img src='"+parisImg+"'></img>"
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

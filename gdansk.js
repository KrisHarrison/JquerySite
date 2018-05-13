$(document).ready(function(){
  $.ajax({
    url:'a1.xml',
    data:{},
    type:'GET',
    dataType:'xml',
    success:function(data){
      xmlDoc = data;
      var latGdansk = $(xmlDoc).find('city:nth(2)').attr("lat");
      $("#lat").html(latGdansk);
      var longGdansk = $(xmlDoc).find('city:nth(2)').attr("long");
      $("#long").html(longGdansk);
      var city = $(xmlDoc).find('name:nth(2)').text();
      $("#city").html(city);
      var country = $(xmlDoc).find('country:nth(2)').text();
      $("#country").html(country);
      var province = $(xmlDoc).find('province:nth(2)').text();
      $("#province").html(province);
      var gdanskImg = $(xmlDoc).find('image:nth(3)').text();
        $("#image").html(
          "<img src='"+gdanskImg+"'></img>"
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

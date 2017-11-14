$("#search").on("click", function(){
  var getIncident = $("option").val();
  console.log(getIncident);

  var cityName = $("#city").val();
  console.log(cityName);

  var apiURL ="https://bikewise.org:443/api/v2/incidents?page=1&incident_type="+getIncident+"&proximity="+cityName+"&proximity_square=100";
  console.log(apiURL);

  $.ajax({
    url: apiURL,

    success: function(response){
      console.log(response);
      $("p").text(response.incidents[0].description)
    },

    error: function(error){
      console.log(error);
    }
  })
  $("#city").val("");
})

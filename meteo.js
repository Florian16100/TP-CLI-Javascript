var callBackGetSuccess = function(data) {
    console.log("donnees api", data)
    var element = document.getElementById("zone_meteo");
    element.innerHTML = "La temperature est de " + data.main.temp + " degres";
}

inquirer.prompt([
    {
    type: 'input',
    message: 'Entrez une ville : ',
    name: 'data'
    },
    ])
    .then((data) => {
    console.log(data)
   });

function buttonClickGET() {
    var queryLoc = document.getElementById("queryLoc").value;
    
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" +queryLoc+ "&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric" 

    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
    })
    .fail(function() {
        alert( "error" );
    })
    .always(function() {
        //alert( "finished" );
    });
}
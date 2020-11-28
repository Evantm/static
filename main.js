fetch('http://evanmackay.ca/static/time.json').then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data) 
        $("#time").html("The time is: " + data.utc_datetime);
    }).catch((err) => { // Really? This code broke? Well okay then 
}) 

        
fetch('http://evanmackay.ca/static/bc.json').then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data) 
        $("active").html("New Cases on" + data[data.date -1].numtoday + ": " + data[data.length -1].numtoday);
    }).catch((err) => { // Really? This code broke? Well okay then 
}) 

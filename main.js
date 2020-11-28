fetch('http://evanmackay.ca/static/time.json').then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data) $("#time").html("The time is: " + data.utc_datetime);
    }).catch((err) => { // Really? This code broke? Well okay then }) 

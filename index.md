

## Welcome
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<div id="time"></div>
<script>
fetch('http://evanmackay.ca/static/time.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
    $("#time").html(data.utc_datetime);
  })
  .catch((err) => {
    // Really? This code broke? Well okay then
  })
</script>

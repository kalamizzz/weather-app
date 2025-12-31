function getWeather() {
    let location = document.getElementById("locationInput").value;

    if (location === "") {
        alert("Please enter a city name");
        return;
    }

    let apiKey = "18e796955aac4452808141644252912";
    let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let temp = data.current.temp_c;
            let condition = data.current.condition.text;
            let city = data.location.name;
            let country = data.location.country;

            document.getElementById("weatherResult").innerHTML = `
                <p><b>${city}, ${country}</b></p>
                <p>🌡 Temperature: ${temp} °C</p>
                <p>☁ Condition: ${condition}</p>
            `;
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML =
                "<p style='color:red;'>Location not found</p>";
        });
}

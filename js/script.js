
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('inputcity');
    const form = document.getElementById('form');
    let gorod;

    form.onsubmit = function (e) {
        e.preventDefault();

        gorod = input.value.trim();
        const apiKey = '201ea6c5a0e8449faac204622243011';
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${gorod}&days=3`;

        console.log(gorod);

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                displayWeatherData(data);
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            });
    };


    function times() {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let formattedTime = `${hours}:${String(minutes).padStart(2, '0')}`;
        return formattedTime;
    }
    
    function updatetime() {
        const timeupdate = document.querySelectorAll('.time-w');
        timeupdate.forEach(element => {
            element.textContent = times();
        });
    }

    setInterval(updatetime, 60000);

    updatetime();

    // document.querySelectorAll('.podtext-today').forEach(ec => {
    //     const englishText = data.current.condition.text;
    //     const translatedText = translations[englishText] || englishText;
    //     ec.innerHTML = translatedText;
    // });
    
});
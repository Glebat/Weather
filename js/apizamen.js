import { translations } from './array.js';

export function translate (podtext) {
    let orig = podtext;
    let translated = translations[orig] || orig;
    return translated;
}

function convertTimeTo24HourFormat(time) {
    let [timePart, period] = time.split(' ');
    let [hours, minutes] = timePart.split(':').map(Number);

    if (period === 'PM' && hours !== 12) {
        hours += 12;
    } else if (period === 'AM' && hours === 12) {
        hours = 0;
    }

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

export function displayWeatherData(data) {
// отображение маленьких  и больших карт карта сегодня
document.querySelectorAll('.time-w-city').forEach(ec => ec.innerHTML = data.location.name);
//document.querySelectorAll('.time-w').forEach(ec => ec.innerHTML = data.location.localtime.split(' ')[1]);
document.querySelectorAll('.temperature-today').forEach(ec => ec.innerHTML = data.current.temp_c + '°C');
document.querySelectorAll('.podtext-today').forEach(ec => {ec.innerHTML = translate(data.forecast.forecastday[0].day.condition.text)});
document.querySelectorAll('.speed-today').forEach(ec => {
    let maxwind_kph = data.forecast.forecastday[0].day.maxwind_kph;
    ec.innerHTML = (maxwind_kph * 0.277778).toString().slice(0, 4) + 'м/c';
});
document.querySelectorAll('.avghumidity-today').forEach(ec => ec.innerHTML = data.forecast.forecastday[0].day.avghumidity + '%');

document.querySelectorAll('.sunr').forEach(ec => ec.innerHTML = data.forecast.forecastday[0].astro.sunrise);
document.querySelectorAll('.photo-today').forEach(ec => ec.src = data.forecast.forecastday[0].day.condition.icon);
    
//карточка завтра 
document.querySelectorAll('.temperature-tomorrow').forEach(ec => ec.innerHTML = data.forecast.forecastday[1].day.avgtemp_c+ '°C');
document.querySelectorAll('.podtext-tomorrow').forEach(ec => {ec.innerHTML = translate(data.forecast.forecastday[1].day.condition.text)});
document.querySelectorAll('.speed-tomorrow').forEach(ec => {
    let maxwind_kph = data.forecast.forecastday[1].day.maxwind_kph;
    ec.innerHTML = (maxwind_kph * 0.277778).toString().slice(0, 4) + 'м/c';
});    
document.querySelectorAll('.avghumidity-tomorrow').forEach(ec => ec.innerHTML = data.forecast.forecastday[1].day.avghumidity + '%');
document.querySelectorAll('.sunr-tomorrow').forEach(ec => ec.innerHTML = data.forecast.forecastday[1].astro.sunrise);
document.querySelectorAll('.photo-tomorrow').forEach(ec => ec.src = data.forecast.forecastday[1].day.condition.icon);

//карточка послезавтра

document.querySelectorAll('.temperature-aftertomorrow').forEach(ec => ec.innerHTML = data.forecast.forecastday[2].day.avgtemp_c+ '°C');
document.querySelectorAll('.podtext-aftertomorrow').forEach(ec => {ec.innerHTML = translate(data.forecast.forecastday[2].day.condition.text)});
document.querySelectorAll('.speed-aftertomorrow').forEach(ec => {
    let maxwind_kph = data.forecast.forecastday[2].day.maxwind_kph;
    ec.innerHTML = (maxwind_kph * 0.277778).toString().slice(0, 4) + 'м/c';
});    
document.querySelectorAll('.avghumidity-aftertomorrow').forEach(ec => ec.innerHTML = data.forecast.forecastday[2].day.avghumidity + '%');
document.querySelectorAll('.sunr-aftertomorrow').forEach(ec => ec.innerHTML = data.forecast.forecastday[2].astro.sunrise);
document.querySelectorAll('.photo-aftertomorrow').forEach(ec => ec.src = data.forecast.forecastday[2].day.condition.icon);

// работа с таблицей 
// утро 
document.querySelectorAll('.morning-pressure').forEach(ec => ec.innerHTML = data.forecast.forecastday[0].hour[6].pressure_mb);
document.querySelectorAll('.morning-humidity').forEach(ec => ec.innerHTML = data.forecast.forecastday[0].hour[6].humidity + '%' );
document.querySelectorAll('.morning-wind').forEach(ec => {
    let wind_kph = data.forecast.forecastday[0].hour[6].wind_kph;
    ec.innerHTML = (wind_kph * 0.277778).toString().slice(0, 4);
});
document.querySelectorAll('.morning-sensations').forEach(ec => ec.innerHTML = data.forecast.forecastday[0].hour[6].feelslike_c +'°C' );

// день

document.querySelectorAll('.day-pressure').forEach(ec => ec.innerHTML = data.forecast.forecastday[0].hour[12].pressure_mb);
document.querySelectorAll('.day-humidity').forEach(ec => ec.innerHTML = data.forecast.forecastday[0].hour[12].humidity + '%' );
document.querySelectorAll('.day-wind').forEach(ec => {
    let wind_kph = data.forecast.forecastday[0].hour[12].wind_kph;
    ec.innerHTML = (wind_kph * 0.277778).toString().slice(0, 4);
});
document.querySelectorAll('.day-sensations').forEach(ec => ec.innerHTML = data.forecast.forecastday[0].hour[12].feelslike_c +'°C' );

// вечер 

document.querySelectorAll('.evening-pressure').forEach(ec => ec.innerHTML = data.forecast.forecastday[0].hour[18].pressure_mb);
document.querySelectorAll('.evening-humidity').forEach(ec => ec.innerHTML = data.forecast.forecastday[0].hour[18].humidity + '%' );
document.querySelectorAll('.evening-wind').forEach(ec => {
    let wind_kph = data.forecast.forecastday[0].hour[18].wind_kph;
    ec.innerHTML = (wind_kph * 0.277778).toString().slice(0, 4);
});
document.querySelectorAll('.evening-sensations').forEach(ec => ec.innerHTML = data.forecast.forecastday[0].hour[18].feelslike_c +'°C' );

// ночь 

document.querySelectorAll('.night-pressure').forEach(ec => ec.innerHTML = data.forecast.forecastday[0].hour[0].pressure_mb);
document.querySelectorAll('.night-humidity').forEach(ec => ec.innerHTML = data.forecast.forecastday[0].hour[0].humidity + '%' );
document.querySelectorAll('.night-wind').forEach(ec => {
    let wind_kph = data.forecast.forecastday[0].hour[0].wind_kph;
    ec.innerHTML = (wind_kph * 0.277778).toString().slice(0, 4);
});
document.querySelectorAll('.night-sensations').forEach(ec => ec.innerHTML = data.forecast.forecastday[0].hour[0].feelslike_c +'°C' );

//фотки таблица 

    const weatherIcon06 = document.getElementById('weather-icon-06');
    weatherIcon06.src = data.forecast.forecastday[0].hour[6].condition.icon;
    const weatherIcon12 = document.getElementById('weather-icon-12');
    weatherIcon12.src = data.forecast.forecastday[0].hour[12].condition.icon;
    const weatherIcon18 = document.getElementById('weather-icon-18');
    weatherIcon18.src = data.forecast.forecastday[0].hour[18].condition.icon;
    const weatherIcon00 = document.getElementById('weather-icon-00');
    weatherIcon00.src = data.forecast.forecastday[0].hour[0].condition.icon;


//время 




document.querySelectorAll('.time-sunrise').forEach(ec => {
    const sunr = convertTimeTo24HourFormat(data.forecast.forecastday[0].astro.sunrise);
    ec.innerHTML = sunr + '*';
});
document.querySelectorAll('.time-sunset').forEach(ec => {
    const suns = convertTimeTo24HourFormat(data.forecast.forecastday[0].astro.sunset);
    ec.innerHTML = suns + '*';
});
//forecast.forecastday[0].astro.sunrise
}


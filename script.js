const API_KEY = '3c2566aad903928e6d98b27537b60133';

const handleSearch = () => {
    const search_country = document.getElementById("search-text").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search_country}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const temperatureInfo = (id, info) => {
    const countryName = document.getElementById(id);
    countryName.innerText = info;
    // console.log(id, info);
}

const displayTemperature = data => {
    console.log(data);
    temperatureInfo('country', data.name);
    temperatureInfo('temperature', data.main.temp);
    temperatureInfo('condition', data.weather[0].main);

    // change image 
    const img_url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById('image').setAttribute('src', img_url);
}
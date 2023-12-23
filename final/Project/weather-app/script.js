const btn = document.getElementById('submit');

btn.addEventListener('click', () => {
    const location = document.getElementById('location').value;
    const api_key = '';

    console.log(location);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            const cityName = data.name;
            const tem = data.main.temp;
            const temp = tem - 273.15;

            document.getElementById('loc').innerText = cityName;
            document.getElementById('temp').innerText = temp.toFixed(1);
        })
        .catch(error => {
            console.error(error);
            alert('Please enter a correct city name.');
        });
});

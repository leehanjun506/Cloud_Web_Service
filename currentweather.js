function select_value(select_obj){
    var selected_index = select_obj.selectedIndex;
    var selected_value = select_obj.options[selected_index].value;
    var city1 = 'seoul'
    var city2 = 'da'
    if (selected_value == city1){
        var API_KEY = '1ffaa33a3e5c89370422112722775663';
var city = selected_value;
const getJSON = function(url,callback){
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.responseType = 'json';
    xhr.onload = function(){
        const status = xhr.status;
        if(status === 200){
            callback(null,xhr.response);
        } else {
            callback(status,xhr.response);
        }
    };
    xhr.send();
};
getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
function(err,data) {
    if(err!==null){
        alert('오류발생'+err);
    } else{
        loadWeather(data);
    }
});

function loadWeather(data){
    let location = document.querySelector('.location');
    let currentTime2 = document.getElementById('.current-time');
    let currentTime = document.querySelector('.current-time');
    let currentTemp = document.querySelector('.current-temp');
    let feelsLike = document.querySelector('.feels-like');
    let minTemp = document.querySelector('.min-temp');
    let maxTemp = document.querySelector('.max-temp');
    let icon = document.querySelector('.icon');
    let weatherIcon = data.weather[0].icon;

    let date = new Date();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();




    
    location.append(data.name);
    //currentTemp2.innerHTML('');
    //currentTime2.appendChild(`${data.main.temp}도`);
    //currentTemp.innerHTML(`${data.main.temp}도`);
    currentTemp.append(`${data.main.temp}도`);
    feelsLike.append(`${data.main.feels_like}도`);
    maxTemp.append(`최고 : ${data.main.temp_max}도`);
    minTemp.append(`최저 : ${data.main.temp_min}도`);
    icon.innerHTML = `<img src='http://openweathermap.org/img/wn/${weatherIcon}.png' > `;
    currentTime.append(`${month}월 ${ day}일 ${hours}:${minutes}`);

}
    }
}




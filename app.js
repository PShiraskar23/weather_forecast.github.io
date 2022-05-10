//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherApi={
    baseUrl:"https://api.openweathermap.org/data/2.5/weather",
    key:"69e5ff4a36bcadaf66ef384e0e3824f4"
}

const serchBar=document.querySelector(".search-box")
const weatherBody=document.querySelector(".weather-info-wrapper")

// //1. add event listner to keypress event
serchBar.addEventListener("keypress",(eve)=>{
    if(eve.keyCode == 13){
        // console.log(serchBar.value);
        eve.preventDefault()
        getweatherReort(serchBar.value)
        if(serchBar.value){
            weatherBody.style.display="block"
            // weatherBody.style.height="450px"
            serchBar.value=""
        }

    }
})


// //2. create function of Get Weather Report
function getweatherReort(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(response=>{
        return response.json();
    })
    .then(showWeatherReport)
    .catch(error=>{
    weatherBody.innerHTML=error
        
    })
}

// //3. create function of Show Weather Report
function showWeatherReport(data){
    // console.log(data);
    const city=document.querySelector(".city")
    city.textContent=`${data.name},${data.sys.country}`
   
    const temp=document.querySelector(".temp")
    temp.innerHTML=`${Math.round(data.main.temp)}&deg;C`

    const minMaxTemp=document.querySelector(".min-max")
    minMaxTemp.innerHTML=`${Math.floor(data.main.temp_min)}&deg;C(min) / ${Math.ceil(data.main.temp_max)}&deg;C(max)`

    const weatherType=document.querySelector(".weather-status")
    weatherType.textContent=data.weather[0].main
    
    let date=document.querySelector(".date")
    let todaysDate=new Date()
    date.textContent=dateManage(todaysDate)
   

    switch(weatherType.textContent){
        case "Clear":
            document.body.style.backgroundImage="url('images/clear.jpg')"
            break;
        case "Clouds":
            document.body.style.backgroundImage="url('images/cloudy.jpg')"
            break;
        case "Haze":
            document.body.style.backgroundImage="url('images/cloudy.jpg')"
            break;
        case "Rain":
            document.body.style.backgroundImage="url('images/rainy.jpg')"
            const heading=document.querySelector(".heading")
            break;
        case "Thunderstorm":
            document.body.style.backgroundImage="url('images/thunderstorm.jpg')"
            break;
        case "Snow":
            document.body.style.backgroundImage="url('images/snow.jpg')"
            break;
            default:
                document.body.style.backgroundImage="url('images/bg.jpg')"

    }
    
}

//4. create function of Date Manage
function dateManage(dateObj){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    let months=["January","February","March","April","May","June","July","August","September","October","November","December"]

    let  year=dateObj.getFullYear();
    let  month=months[dateObj.getMonth()]
    let  date=dateObj.getDate()
    let  day=days[dateObj.getDay()]

    return `${date} ${month} ${day} ${year}`
}








































// const baseUrl="https://api.openweathermap.org/data/2.5/weather"
// const key="69e5ff4a36bcadaf66ef384e0e3824f4"
// const city="yavatmal"

// fetch(`${baseUrl}?q=${city}&appid=${key}&units=metric`)
// .then(response=>{
//     // console.log(response);
//     return response.json()
// })
// .then(data=>{
//     console.log(data);
// })
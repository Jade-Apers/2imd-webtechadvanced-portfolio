class App{
    constructor(){
        this.getLocation(); 
        this.lat;
        this.long;
        this.apiKey = "222e90a01c3e820ef42bfd90b735c6c7";
    }

    //locatie gegevens krijgen zoals de lattitude en longitude
    //via bind geven we mee dat het moet doen voor huidig object
    getLocation(){
        navigator.geolocation.getCurrentPosition(
            this.gotLocation.bind(this), 
            this.errorLocation.bind(this)   
        ); 
    }
     //gegevens opnemen en in object steken
     gotLocation(result){
        this.lat = result.coords.latitude;
        this.long = result.coords.longitude;
        if(this.checkLocalStorage() === false){
            this.getWeather();
        } else{
            this.dataFromStorage();
        }
        //this.getWeather(); //eens je de coordinaten hebt gaan we het weer oproepen
        console.log(result);
        console.log(this.lat);
    }

    checkLocalStorage(){
        let storageTime = localStorage.getItem("storageTime");
        let actualTime = new Date().getTime();
        if(actualTime-storageTime < 1000 * 60 * 60){
            if(localStorage.getItem("storageTemp") === null) {
                return false;
            } 
            else{
                return true;
            }
        }
        else{
            localStorage.clear();
            return false;
        }
    }

    dataFromStorage(){
      temperature = localStorage.getItem("storageTemp");
      this.showTemperature(temperature);
    }

    getWeather(){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${this.apiKey}&units=imperial`;
    fetch(url)
    .then(response =>{
        return response.json();
    } ) .then(data =>{
        let fahr = data.main.temp;
        let temperature = (fahr - 32)/1.8;
        temperature = temperature.toFixed(2);
        this.showTemperature(temperature);
    })
    .catch(err =>{
        console.log(err);
    })
    console.log("check");
}
    showTemperature(temperature){
        document.querySelector("#weather").innerHTML= "it's " + temperature + " degrees outside";
        document.querySelector("#weather").style.color="white"; 
        if (temperature < 15){
            this.activityInside();
            document.querySelector(".container").style.background = `url(cloudy.jpg)`;
            document.querySelector(".container").style.backgroundSize = "150%";
            document.querySelector(".container").style.backgroundRepeat = "no-repeat";
        }
        else{
            this.activityOutside();
            document.querySelector(".container").style.background = `url(sunny.jpg)`;
            document.querySelector(".container").style.backgroundSize = "500%";
            document.querySelector(".container").style.backgroundRepeat = "no-repeat";
        }  
    }
  
    activityInside(){
        let urlactivity= "http://www.boredapi.com/api/activity?type=relaxation";
        fetch(urlactivity)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            console.log(data);
            document.querySelector("#activityInside").innerHTML= data.activity;
            document.querySelector("#activityInside").style.color="white";  
        })
        .catch(err => {
            console.log(err);
        });
    }

    activityOutside(){
        let urlactivity= "http://www.boredapi.com/api/activity?type=social";
        fetch(urlactivity)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            console.log(data);
            document.querySelector("#activityOutside").innerHTML= data.activity;
            document.querySelector("#activityOutside").style.color="white";
        })
        .catch(err => {
            console.log(err);
        });
    }

    errorLocation(err){
        console.log(err);
    }
}
let app = new App();
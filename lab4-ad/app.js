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
        this.getWeather(); //eens je de coordinaten hebt gaan we het weer oproepen
      
        console.log(result);
        console.log(this.lat);
    }

    getWeather(){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${this.apiKey}&units=imperial`;
    fetch(url)
    .then(response =>{
        return response.json();
    } ) .then(data =>{
        let fahr= data.main.temp;
        let temperature = (fahr - 32)/1.8;
        temperature = Math.round(temperature);
        

        document.querySelector("#weather").innerHTML= temperature;
        console.log(data);
    }).catch(err =>{
        console.log(err);
    });
}

    errorLocation(err){
        console.log(err);
    }
}

let app = new App();
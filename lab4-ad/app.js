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
    }

    getWeather(){
    let url = 'https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${this.apiKey}&units=metric`'
    fetch(url)
    .then((response) =>{
        console.log(response);
        return response.json();
    } ) .then((data) =>{
        console.log(data);
    }).catch((err) =>{
        console.log(err);
    });
    }

    errorLocation(err){
        console.log(err);
    }
}

let app = new App();
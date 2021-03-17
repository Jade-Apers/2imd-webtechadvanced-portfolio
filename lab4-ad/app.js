class App{
    constructor(){
        this.getLocation(); 
        this.lat;
        this.lng;
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

    errorLocation(err){
        console.log(err);
    }

    getWeather(){
    let url = 'pro.openweathermap.org/data/2.5/forecast/39e1f326a97afb89e561b6ec8d92849c/$(this.lat),$(this.long)'
    fetch(url).then(response =>{
        response.json();
    } ) .then(data =>{
        console.log(data);
    }).catch(err =>{
        console.log(err);
    })
    }
}

let app = new App();
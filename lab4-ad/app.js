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
    }

    checkLocalStorage(){

        if(localStorage.length===0){
            return false;
        }

        var storageTime = localStorage.getItem("storageTime");
        var actualTime = new Date().getTime();

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
      let temp = localStorage.getItem("storageTemp");
      this.showTemperature(temp);
    }

    getWeather(){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${this.apiKey}&units=imperial`;
    fetch(url)
    .then(response =>{
        return response.json();} ) 
        .then(data =>{
        let fahr = data.main.temp;
        let temperature = (fahr - 32)/1.8;
        temperature = temperature.toFixed(2);
        this.showTemperature(temperature);
        localStorage.setItem("storageTime", new Date().getTime());
        localStorage.setItem("storageTemp", temperature);
        console.log(localStorage);
    })
    .catch(err =>{
        console.log(err);
    })
}
    showTemperature(temperature){
        if (temperature < 10){
            this.activityInside();
            document.querySelector(".title").innerHTML= "It's " + temperature + " °C outside." + "<br> Are you meeting us today inside the bar?";
            document.querySelector(".container").style.background = `url(cloudy.jpg)`;
            document.querySelector(".container").style.backgroundSize = "150%";
            document.querySelector(".container").style.backgroundRepeat = "no-repeat";
        }
        else{
            this.activityOutside();
            document.querySelector(".title").innerHTML= "It's " + temperature + " °C outside." + "<br> Are you meeting us today at our terras?";
            document.querySelector(".container").style.background = `url(sunny.jpg)`;
            document.querySelector(".container").style.backgroundSize = "500%";
            document.querySelector(".container").style.backgroundRepeat = "no-repeat";
        }  
    }

    activityInside(){
        let urlactivity= "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        fetch(urlactivity)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            console.log(data);
            document.querySelector("#cocktail").innerHTML= data.drinks[0].strDrink;
            let picture = document.querySelector('#picture');
            let img= document.createElement('img');
            img.src= data.drinks[0].strDrinkThumb;
            picture.appendChild(img);
            document.querySelector("#ingredient1").innerHTML= data.drinks[0].strIngredient1;
            document.querySelector("#ingredient2").innerHTML= data.drinks[0].strIngredient2;
            document.querySelector("#ingredient3").innerHTML= data.drinks[0].strIngredient3;
            document.querySelector("#ingredient4").innerHTML= data.drinks[0].strIngredient4;
            document.querySelector("#cocktail").style.color="white";  
            document.querySelector("#ingredient1").style.color="white";  
            document.querySelector("#ingredient2").style.color="white"; 
            document.querySelector("#ingredient3").style.color="white"; 
            document.querySelector("#ingredient4").style.color="white"; 
            document.querySelector("#cocktail").style.fontSize="25px";
            document.querySelector("#cocktail").style.padding= "4px"; 
            document.querySelector("#cocktail").style.fontFamily= "calibri";  
        })
        .catch(err => {
            console.log(err);
        });
    }

    activityOutside(){
        let urlactivity= "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        fetch(urlactivity)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            console.log(data);
            document.querySelector("#cocktail").innerHTML= data.drinks[0].strDrink;
            let picture = document.querySelector('#picture');
            let img= document.createElement('img');
            img.src= data.drinks[0].strDrinkThumb;
            picture.appendChild(img);
            document.querySelector("#ingredient1").innerHTML= data.drinks[0].strIngredient1;
            document.querySelector("#ingredient2").innerHTML= data.drinks[0].strIngredient2;
            document.querySelector("#ingredient3").innerHTML= data.drinks[0].strIngredient3;
            document.querySelector("#ingredient4").innerHTML= data.drinks[0].strIngredient4;
            document.querySelector("#cocktail").style.color="white";  
            document.querySelector("#cocktail").style.fontSize="25px";
            document.querySelector("#cocktail").style.padding= "4px"; 
            document.querySelector("#cocktail").style.fontFamily= "calibri";  
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
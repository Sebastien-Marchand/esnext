
//----let----

let favoriteCityId = "rome";		//let déclare une variable restreint au bloc
console.log(favoriteCityId);

favoriteCityId = "paris";
console.log(favoriteCityId);

//----Constante----
										//tab constante
const citiesId = ["paris" , "nys" , "rome" , "rio-de-janeiro"];
console.log(citiesId);

					//Une erreur est généré car on essaye de modifier une constante
//citiesId = [];  //TypeError: Assignment to constant variable.

citiesId.push ("tokyo");
console.log(citiesId);

//----Création d'objet----

function getWeather(cityId){
	
	let city = cityId;
	let temperature = 20;
	
	return {city,temperature};
}
const weather = getWeather(favoriteCityId);

console.log(weather);

//----Affectation destructurée----

const { city , temperature } = weather;

console.log(city);
console.log(temperature);

//----Rest operator----

const [ parisId , nycId , ...otherCitiesId] = citiesId;	//créer tab

console.log(parisId);								//affiche val 1er variable
console.log(nycId);									//affiche val 2eiem variable
console.log(nycId);
console.log(otherCitiesId.length);					//affiche taille du tableau des valeurs restante


console.log(otherCitiesId.length);					//affiche taille du tableau des valeurs restante

//----Classe----

class Trip {
    constructor(id,name,imageUrl) {
        this.id = id;
        this.name = name;
		this.imageUrl = imageUrl;
    }
	
	toString (){
		return '[' +this.id + ',' + this.name + ',' + this.imageUrl + ',' + this._price +']';
	}
	
	set price(price) {
        this._price = price;
    }
	get price() {
        return _price ;
    }
	
	static getDefaultTrip(){
		return new Trip('rio-de-janeiro' , 'Rio-de-janeiro' , 'img/rio-de-janeiro.jpg');
	}
}
var parisTrip = new Trip('paris' , 'Paris' , 'img/paris.jpg');

console.log("objet parisTrip : ");
console.log(parisTrip);

console.log("propriété name de l'objet parisTrip : " + parisTrip.name);

console.log(parisTrip.toString());

parisTrip.price = 100;								//valorisation variable privé price

console.log("objet parisTrip : ");					//affichage la variable valorisé
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();

console.log("objet defaultTrip : ");					//affichage la variable valorisé par default
console.log(defaultTrip.toString());

//----Héritage----

class FreeTrip extends Trip{
	constructor(id,name,imageUrl) {
        super(id,name,imageUrl);
		this.price = 0;
    }
	toString (){
		return "Free"+super.toString();
	}
}

const freeTrip = new FreeTrip( 'nantes' , 'Nantes' , 'img/nantes.jpg' );
console.log("objet freeTrip : ");					//affichage la variable valorisé par default
console.log(freeTrip.toString());

//----Promise,Set,Map,ArrowFunction----


class TripService {
	
	constructor(){
		// TODO Set of 3 trips
		//
		// new Trip('paris', 'Paris', 'img/paris.jpg')
		// new Trip('nantes', 'Nantes', 'img/nantes.jpg')
		// new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
		}
		
		findByName(tripName){
			return new Promise((resolve,reject)=>{
				setTimeout( ()=>{
					// ici l'exécution du code est asynchrone
					// TODO utiliser resolve et reject en fonction du résultat de larecherche
				},2000)
			});
		}
}
class PriceService{
	
	constructor(){
		// TODO Map of 2 trips
		// 'paris' --> price == 100
		// 'rio-de-janeiro' --> price == 800)
		// no price for 'nantes'
		}
		
		findPriceByTripId(tripId){
			return new Promise( (resolve,reject)=>{
				setTimeout( ()=>{
					// ici l'exécution du code est asynchrone
					// TODO utiliser resolve et reject en fonction du résultat dela recherche
					},2000)
			});
		}
}
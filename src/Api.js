const faker = require("faker/locale/es");
let wines = [];
let element = {};
const countries = ["España", "Francia", "Italia", "Portugal", "Alemania","Australia", "Chile", "EEUU"];


function getData (){

for (let i = 1; i <= 15 ; i++){
    const country = Math.floor(Math.random()*countries.length);
    
   element = {id: i, name: faker.lorem.word(5).toUpperCase(), country: countries[country], 
      image: `Vino${Math.ceil(Math.random()*5)}.jpg`, 
      price: 5 + Math.floor(Math.random()*20), quantity: Math.floor(Math.random()*100)};

      wines.push(element);
      
}
       
      return wines;
}

wines = getData();






export default wines;
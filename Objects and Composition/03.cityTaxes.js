function cityTaxes (name, population, treasury){
    const city = {};

    city.name = name;
    city.population = population;
    city.treasury = treasury;
    city.taxRate = 10;

    city.collectTaxes = function(){
        this.treasury += Math.floor(this.population * this.taxRate);
    };

    city.applyGrowth = function(percent){
        this.population += Math.floor(this.population * percent / 100);
    };

    city.applyRecession = function(percent){
        this.treasury -= Math.ceil(this.treasury * percent / 100)
    }; 

    return city;
}

const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

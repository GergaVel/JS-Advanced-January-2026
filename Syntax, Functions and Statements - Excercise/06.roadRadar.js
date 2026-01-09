// level BASICS - even a bad practice: repeating code, copy pasting too muck

function roadRadar(speed, area) {
    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLymit = 20;

    if (area === 'motorway' && speed <= motorwayLimit){
        console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);  
    } else if (area === 'interstate' && speed <= interstateLimit){
        console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`); 
    } else if (area === 'city' && speed <= cityLimit){
        console.log(`Driving ${speed} km/h in a ${cityLimit} zone`); 
    } else if (area === 'residential' && speed <= residentialLymit){
        console.log(`Driving ${speed} km/h in a ${residentialLymit} zone`); 
    } else if (area === 'motorway' && speed > motorwayLimit) {
        let diff = speed - motorwayLimit;
        if (diff <= 20){
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorwayLimit} - speeding`);  
        } else if (diff <= 40){
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorwayLimit} - excessive speeding`);
        } else {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorwayLimit} - reckless driving`);
        }
    } else if (area === 'interstate' && speed > interstateLimit) {
        let diff = speed - interstateLimit;
        if (diff <= 20){
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstateLimit} - speeding`);  
        } else if (diff <= 40){
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstateLimit} - excessive speeding`);
        } else {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstateLimitt} - reckless driving`);
        }
    } else if (area === 'city' && speed > cityLimit) {
        let diff = speed - cityLimit;
        if (diff <= 20){
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${cityLimit} - speeding`);  
        } else if (diff <= 40){
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${cityLimit} - excessive speeding`);
        } else {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${cityLimit} - reckless driving`);
        }

    } else if (area === 'residential' && speed > residentialLymit) {
        let diff = speed - residentialLymit;
        if (diff <= 20){
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residentialLymit} - speeding`);  
        } else if (diff <= 40){
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residentialLymit} - excessive speeding`);
        } else {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residentialLymit} - reckless driving`);
        }
    }

}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');


// level ADVANCED 

function roadRadar(speed, area) {
    //for these, we can make an object, bc the value is constant (will not change at any moment)
    // let motorwayLimit = 130;
    // let interstateLimit = 90;
    // let cityLimit = 50;
    // let residentialLymit = 20;

    const speedLimit = { 
        "motorway" : 130,
        "interstate" : 90,
        "city" : 50,
        "residential" : 20
    }

   if (speed > speedLimit[area]){
        let diff = speed - speedLimit[area];
        let status = findStatus(diff);
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit[area]} - ${status}`);
        
   } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit[area]} zone`);  
   }

   function findStatus (diff){

        if (diff <= 20){
            return "speeding"
        } else if (diff <= 40){
            return "excessive speeding"
        } 
            return "reckless driving"
    }

}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');



// const data = { ... };

// function main(input) {
//     let value = data[input.key];
//     let result = helper(value);
// }

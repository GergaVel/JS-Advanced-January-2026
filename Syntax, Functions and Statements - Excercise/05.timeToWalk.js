function timeToWalk(steps, footprintLength, speedKmH) {
    // Step 1: distance in meters
    let distance = steps * footprintLength;

    // Step 2: speed in m/s
    let speedMS = speedKmH * 1000 / 3600;

    // Step 3: walking time in seconds
    let walkingTime = distance / speedMS;

    // Step 4: rest time
    let rests = Math.floor(distance / 500);
    let restTime = rests * 60;

    // Step 5: total time
    let totalTime = walkingTime + restTime;

    // Step 6: convert to hh:mm:ss
    let hours = Math.floor(totalTime / 3600);
    let minutes = Math.floor((totalTime % 3600) / 60);
    let seconds = Math.round(totalTime % 60);

    // Step 7: formatting
    if (hours < 10) {
        console.log( `0${hours}:${minutes}:${seconds}`);
    } else {
         console.log( `${hours}:${minutes}:${seconds}`);
    }

}

timeToWalk(4000, 0.60, 5);
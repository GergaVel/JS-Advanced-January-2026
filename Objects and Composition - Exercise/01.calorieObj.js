function calorieObj (data) {
    let result = {};

    for (let i = 0; i < data.length; i += 2){
        let key = data[i];
        let value = data[i + 1];

        result[key] = Number(value);
    }

    console.log(result );
}

calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
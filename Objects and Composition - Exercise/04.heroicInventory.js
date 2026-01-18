function heroincInventory(data) {
    let result = [];

    for (let el of data){
        if (!el.trim()) continue;

        let [name, level, items] = el.split(' / ');
        level = Number(level);

        items = items? items.split(', ') : [];

        result.push({name, level, items});
    }
    console.log(JSON.stringify(result));
}

heroincInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
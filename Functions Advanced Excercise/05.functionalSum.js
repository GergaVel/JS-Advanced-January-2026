function add(num){
    let state = 0;
    stateManipulator(num);
    function stateManipulator(num){
        state += num;
        return stateManipulator;
    }
    stateManipulator.toString = () => state; //overwrite default method  
    return stateManipulator;
}

add(1)(6)(-3);
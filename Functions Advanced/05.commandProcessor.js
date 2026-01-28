function solve(){
    let str = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    }

    function append(value) {
        str += value;
    }

    function removeStart(n) {
        str = str.slice(n);
    }

    function removeEnd(n) {
        str = str.slice(0, -n);
    }

    function print() {
        console.log(str);
    }
}




const processor = solve();

processor.append('hello');
processor.append('again');
processor.removeStart(3);
processor.removeEnd(4);
processor.print();
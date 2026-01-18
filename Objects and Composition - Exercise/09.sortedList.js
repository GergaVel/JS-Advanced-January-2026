function sortedList() {
    return {
        _list: [],//_ means private, gives a sign to other developers to not touch, osvobojdava ot otgovornost, I can do wht ever I want with it
        _mySort: ((a, b) => a - b),
        size: 0,
        add: function(element){
            if (typeof(element) !== 'number'){
                return;
            }
            this._list.push(element);
            this.size = this._list.length;
            this._list.sort(this._mySort);
        },
        remove: function(index){
            if (index < 0 || index >= this._list.lenght){
                return;
            }
            this._list.splice(index, 1);
            this.size = this._list.length;
            this._list.sort(this._mySort);
        },
        get: function(index){
            if (index < 0 || index >= this._list.lenght){
                return;
            }
            return this._list[index];
        }            
    }
}

let list = sortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
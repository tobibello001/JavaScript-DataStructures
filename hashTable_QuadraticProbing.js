/*
 * Hash Table - Quadratic Probing
*/

var HashEntry = function(key, value) {
    this.key = key;
    this.value = value;
}

var HashTable = function(size) {
    this.array = new Array(size);
    this.count = 0;
}

HashTable.prototype.isFull= function() {
    return this.count === this.array.length;
}

HashTable.prototype.insert = function(key, value) {
    var i = base = key % this.array.length;

    var step = 1;

    // handle collision
    while (this.array[i]) {
        i = (base+step*step) % this.array.length;
        step++;
    }

    // insert
    this.array[i] = new HashEntry(key, value);
    this.count++;
    return true;
}

HashTable.prototype.find = function(key) {
    // get hash index
    var i = base = key % this.array.length;

    var step = 1;
    while(true) {
        if (!this.array[i]) {
            return "not found"
        }
        else if (this.array[i].key === key) {
            return this.array[i].value;
        }
        else {
            i = (base+step*step) % this.array.length;
        }
        step++;
    }
}

HashTable.prototype.remove = function(key) {
    // get hash index
    var i = base = key % this.array.length;
    
    var step = 1;
    while(true) {
        if (!this.array[i]) {
            return "not found"
        }
        else if (this.array[i].key === key) {
            this.array[i] = -1;  
            this.count--; 
            return true;
            break;
        }
        else {
            i = (base+step*step) % this.array.length;
        }
        step++;
    }

}
const logOut = console.log;
const logHashTable = (table) => {
    console.log(table.array);
}
var table = new HashTable(0);
logOut(table.insert(8, "hello"));
logHashTable(table);
logOut(table.insert(3, "bye"));
logHashTable(table);
logOut(table.insert(8, "hi"));
logHashTable(table);
logOut(table.find(8));
logHashTable(table);
// logOut(table.remove(3));
// logHashTable(table);

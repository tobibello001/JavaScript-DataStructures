/*
 * Hash Table - Quadratic Probing
*/

var HashEntry = function (key, value) {
    this.key = key;
    this.value = value;
}

var HashTable = function (size = 127) {
    this.array = new Array(size);
    this.count = 0;
}

HashTable.prototype.isFull = function () {
    return this.count === this.array.length;
}

HashTable.prototype.hashFunction = function (key) {
    const keyType = typeof key;

    const getASCIISumOf = (text) => {
        let sum = 0;
        for (let i = 0; i <= text.length - 1; i++) {
            sum += text.charCodeAt(i);
        }
        return sum;
    }

    switch (keyType) {
        case "number":
            return key % this.array.length;
            break;
        case "string":
            return getASCIISumOf(key) % this.array.length;
            break;
        default:
            throw "invalid key";
    }
}

HashTable.prototype.insert = function (key, value) {
    // get hash index
    var i = base = this.hashFunction(key);
    
    let step = 1;

    // handle collision
    while (this.array[i]) {
        i = (base + step * step) % this.array.length;
        step++;
    }

    // insert
    this.array[i] = new HashEntry(key, value);
    this.count++;
    return true;
}

HashTable.prototype.find = function (key) {
    // get hash index
    var i = base = this.hashFunction(key);

    var step = 1;
    while (true) {
        if (!this.array[i]) {
            return "not found"
        }
        else if (this.array[i].key === key) {
            return this.array[i].value;
        }
        else {
            i = (base + step * step) % this.array.length;
        }
        step++;
    }
}

HashTable.prototype.remove = function (key) {
    // get hash index
    var i = base = this.hashFunction(key);

    var step = 1;
    while (true) {
        if (!this.array[i]) {
            return "not found"
        }
        else if (this.array[i].key === key) {
            this.array[i] = undefined;
            this.count--;
            return true;
            break;
        }
        else {
            i = (base + step * step) % this.array.length;
        }
        step++;
    }

}
const logOut = console.log;
const logHashTable = (table) => {
    console.log(table.array);
}
var table = new HashTable(5);
logOut(table.insert(8, "hello"));
logHashTable(table);

logOut(table.insert(3, "bye"));
logHashTable(table);

logOut(table.insert("greetings", {
    "english": "Hello",
    "spanish": "Halo",
    "french": "Bonjour",
    "yoruba": "Bawo"
}));
logHashTable(table);

logOut(table.remove(3));
logHashTable(table);

logOut(table.find("greetings").english);

const HashTable = require("./HashTable_QuadraticProbing").HashTable;

const logOut = console.log;
const logHashTable = (table) => {
  console.log(table.array);
}
var table = new HashTable(255);

logOut(table.insert("foo", "bar"));
logHashTable(table);

logOut(table.insert(130805001, {
  "name": "Tobi Bello",
  "matricNumber": 130805001,
}));
logHashTable(table);

logOut(table.insert("unilag", {
  "name": "University of lagos",
  "slug": "unilag",
  "address": "Akoka, Yaba"
}));
logHashTable(table);

logOut(table.insert("greetings", {
  "english": "Hello",
  "spanish": "Halo",
  "french": "Bonjour",
  "yoruba": "Bawo"
}));
logHashTable(table);

logOut(table.remove("foo"));
logHashTable(table);

logOut(table.find("greetings").english);

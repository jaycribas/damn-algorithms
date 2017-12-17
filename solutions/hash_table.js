/*
Create a Hash Table class that contains table and size properties inside its constructor. It should create an array of size n based on a given integer n.

The Hash Table class should have the following methods:
generate_hash - generates an index within the table where the value should be stored
add - inserts a value into the index position generated by the hash function
remove - deletes a value from the table based on the given key
get - retrieves a value based on the given key

Note: Don't worry about handling collisions yet. For this implementation, it's okay if we overwrite values that have the same hash. We will address collisions later.

Examples:

const ht = new HashTable(5); => array with 5 empty items, size = 5
ht.add('album', 'good kid maad city'); => generates a hash of 1, stores 'good kid maad city' at index 1 of table
ht.add('artist', 'Kendrick Lamar'); => generates a hash of 3, stores 'Kendrick Lamar' at index 3 of table
ht.get('album'); => returns 'good kid maad city'
ht.get('artist'); => returns 'Kendrick Lamar'
ht.remove('artist'); => deletes 'Kendrick Lamar' from table
*/

class HashTable {
  constructor(size) {
    this._table = new Array(size);
    this._size = size;
  }

  generate_hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this._size;
  }

  add(key, value) {
    let hash = this.generate_hash(key);
    this._table[hash] = value;
  }

  remove(key) {
    let hash = this.generate_hash(key);
    delete this._table[hash];
  }

  get(key) {
    let hash = this.generate_hash(key);
    return this._table[hash];
  }
}

export default HashTable;

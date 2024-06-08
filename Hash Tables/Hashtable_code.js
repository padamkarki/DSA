// Hashtable, hashmap, dictionary

class HashTables {
  constructor(size) {
    this.data = new Array(size);
  }

  //BigO(1)
  //Dummy hashing function
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  //BigO(1) - push is BigO(1)
  set(key, value) {
    let adr = this._hash(key);
    if (!this.data[adr]) {
      this.data[adr] = [];
    }
    this.data[adr].push([key, value]);
    return this.data;
  }

  //mostly BigO(1) if no collision or subarrays
  get(key) {
    let adr = this._hash(key);
    const currArr = this.data[adr];
    if (currArr) {
      for (let i = 0; i < currArr.length; i++) {
        if (currArr[i][0] === key) {
          return currArr[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keyArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keyArr.push(this.data[i][0][0]);
      }
    }
    console.log("key array : ", keyArr);
    return keyArr;
  }
}

const myHashTable = new HashTables(2); // 2 size for collision showcase
myHashTable.set("grapes", 1000);
myHashTable.set("apples", 100);
myHashTable.set("oranges", 21);
myHashTable.keys();

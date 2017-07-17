const StorageKeys = {
  API_KEY: "API_KEY",
  PROJECT_SELECTED: "PROJECT_SELECTED"
};

class Storage {
  constructor(name = "localStorage") {
    this.store = window[name];

    // Utility declarations
    this.stringify = JSON.stringify;
    this.toJSON = JSON.parse;
    // Constant name of the entity array where we store all entities key
    this.KEY_LIST_NAME = "KEY_LIST";
  }

  //  Set items in store with key and data
  storeSetItems(key, data) {
    const transformed = this.stringify(data);
    this.store.setItem(key, transformed);
  }

  // Add key to the entity KEY_LIST_NAME
  addKeyToList(key) {
    const keyList = this.get(this.KEY_LIST_NAME) || [];
    // If exist, don't do anything
    if (keyList.length > 0 && keyList.indexOf(key) > -1) {
      return;
    }
    keyList.push(key);
    // I can't use set() function, because this create a infinite loop
    this.storeSetItems(this.KEY_LIST_NAME, keyList);
  }

  // Remove key from the entity KEY_LIST_NAME
  removeKeyToList(key) {
    const keyList = this.get(this.KEY_LIST_NAME);
    if (!keyList) {
      return;
    }
    // Security check
    if (keyList.length === 0) {
      return;
    }
    // Search key on KeyList Array
    const indexOfKey = keyList.indexOf(key);
    // Security check
    if (indexOfKey > -1) {
      keyList.splice(indexOfKey, 1);
    }

    // I can't use set() function, because this create a infinite loop
    this.storeSetItems(this.KEY_LIST_NAME, keyList);
  }

  // Set data into entity with name key
  set(key, data) {
    this.storeSetItems(key, data);
    // For "list" functionality
    this.addKeyToList(key);
  }

  // Get data from entity with name key
  get(key) {
    const data = this.store.getItem(key);
    return data ? this.toJSON(data) : undefined;
  }

  // Remove entire entity from the store with name key
  remove(key) {
    this.store.removeItem(key);
    this.removeKeyToList(key);
  }

  // Return the list of keys present in the store
  list() {
    return this.get(this.KEY_LIST_NAME);
  }

  // Return boolean if exist the key and the data
  exist(key) {
    const data = this.get(key);
    return !!data;
  }
}

export default Storage;

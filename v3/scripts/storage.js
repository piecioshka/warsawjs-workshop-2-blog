class MyStorage {

    static save(key, value) {
        const serialized = JSON.stringify(value);
        localStorage.setItem(key, serialized);
    }

    static read(key) {
        const serialized = localStorage.getItem(key);
        return JSON.parse(serialized);
    }

}

// MyStorage.save();
// MyStorage.read();

class Array {
    
    constructor() {
        
        this._array = [];
    }
    
    add(x) {
        
        this._array.push(x);
    }
    
    get array() {
        
        return [].concat(this._array);
    }
}
const path = require('path'); //to respond index.html

class BaseControl{
    static rotes(){
        return {
            home: '/',
        }
    }

    home() {
        return function(req, resp) {
            resp.sendFile(
               (path.resolve(__dirname, '../index.html'))
            );
        };
    }
}

module.exports = BaseControl;
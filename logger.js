const EventEmitter = require('events');
const uuid = require('uuid');


// console.log(uuid.v4());


class Logger extends EventEmitter {

    log(user) {
        // Call Event
        this.emit('message', { id: uuid.v4(), user });

    }
}

module.exports = Logger;

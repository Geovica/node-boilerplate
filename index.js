const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Generating USER', data));


//Users
logger.log('Geo');
logger.log('Niccu');
logger.log('Dan');
logger.log('Ephy');

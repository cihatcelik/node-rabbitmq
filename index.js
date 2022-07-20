require('dotenv').config({ path: './config/.env' });
require('./message-broker/consumer');
const rabbitMQSender = require('./message-broker/publisher');

rabbitMQSender.sendMessageTo(process.env.TEST_QUEUE_NAME, JSON.stringify({Name : 'Cihat', Value : 10, Result : true}));

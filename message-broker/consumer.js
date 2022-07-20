var amqp = require('amqplib/callback_api');

amqp.connect(process.env.RABBITMQ_URL, function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }
        var queue = process.env.TEST_QUEUE_NAME;

        channel.assertQueue(queue, {
            durable: false
        });

        channel.consume(queue, function (msg) {
            console.log('<- Received',JSON.parse(msg.content.toString()));
         
        }, {
            noAck: true
        });
    });
});
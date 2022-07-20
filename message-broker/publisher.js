var amqp = require('amqplib/callback_api');
const sendMessageTo = (queue, data)=>{

    amqp.connect(process.env.RABBITMQ_URL, function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }
    
            channel.assertQueue(queue, {
                durable: false
            });
    
            channel.sendToQueue(queue, Buffer.from(data));
            console.log('-> Send',data);
        });
    
        setTimeout(function () {
            connection.close();
        }, 500);
    
    });
}

module.exports={sendMessageTo}

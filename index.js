var time = require('time');

exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone("XXXX/XXXX");
    callback(null, {
        statusCode: '200',
        body: 'La hora exacta en XXXX es: ' + currentTime.toString(),
    });
};
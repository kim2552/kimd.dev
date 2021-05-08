const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {
    let data = JSON.parse(event.body);

    let transporter = nodemailer.createTransport({
        host:"smtp.zoho.com",
        port:465,
        auth:{
         user:process.env.KIMDDEV_EMAIL,
         pass:process.env.KIMDDEV_EMAIL_PASS
    }
    });

    transporter.sendMail({
        from: "kimddev@zohomail.com",
        to: "davidkim2552@gmail.com",
        subject: `Message from kimd.dev`,
        html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
            `
    }, function(error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                   'result': 'success'
                })
        });
        }
    });
}

const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {
    console.log("Hello World");
    let data = JSON.parse(event.body);

    let transporter = nodemailer.createTransport({
        host:"smtp.zoho.com",
        port:465,
        auth:{
         user:"kimddev@zohomail.com",
         pass:"pv213@7n#ehRZvaU#gs"
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
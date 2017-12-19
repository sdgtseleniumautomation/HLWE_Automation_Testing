'use strict';
const nodemailer = require('nodemailer');

module.exports = {

    sendEmailReport: function() {
        console.log ('In send email report');
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'payal@coditation.com',
                pass: 'payal404289.'
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '<payal@coditation.com>', // sender address
            to: 'rhishikesh@coditation.com,priyanka@coditation.com',// list of receivers
            subject: 'Automation Report', // Subject line
            text: 'Hello', // plain text body
            html: '<b>Hi Team,</b><b>Please find attached Automation Report below.</b>', // html body
            attachments: [
            { // utf-8 string as an attachment
                filename: 'report.html',
                
                path: 'E://backup//testautomation-withoutverify//testautomation-withoutverify//16june//16june//test automation//reports//report.html' // stream this file
            
            }

            ]
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
    }

}
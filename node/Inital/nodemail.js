const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kartik71900@gmail.com',
        pass: 'xflmdsdvdgeyhhrs'
        
    }
});

const maildata = {
    to: 'kartikkamble3700@gmail.com',
    subject: 'Sending sample mail',
    text: 'Hello',
    attachments: [
        {
            filename: 'OFL.txt',
            path: '/home/apis/Downloads/OFL.txt'
        }
    ]
};

transport.sendMail(maildata, function(err, data){
    if(err){
        console.log(err);
    } else {
        console.log('Mail Sent');
    }
})
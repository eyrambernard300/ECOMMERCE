const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host :"smtp-relay.brevo.com",
    port :587,
    auth :{
        user :"beyram300@gmail.com",
        pass :"yH2KdbzZCRhVgF0U"
    }
        
})

const sendMail =async()=>{
    await transporter.sendMail({
        to :"quarshiebernard428@gmail.com",
        from:"qbg@gmail.com",
        subject:"hello world",
        html:"<h1>hello world</h1>",
    })
}

sendMail()
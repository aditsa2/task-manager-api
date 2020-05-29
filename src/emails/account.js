const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aditsa2@gmail.com',
        subject: 'Thanks for joining in!',
        text: `welcome to the app, ${name}`
    })
    console.log(`sent an email to ${email}`)
}
const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aditsa2@gmail.com',
        subject: 'Cancelation Account',
        html: `<h1><span style="color:green">${name}</span>, you cancel your account. I would like if you tell me why </h1>`
    })
    console.log(`sent an email to ${email}`)
}
module.exports = { sendWelcomeEmail, sendCancelationEmail }
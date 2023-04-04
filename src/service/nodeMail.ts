import nodemailer from 'nodemailer';

export type EmailData = {
    from: string;
    subject: string;
    message: string;
}
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.AUTH_USER, // generated ethereal user
        pass: process.env.AUTH_PASS, // generated ethereal password
    },
});
export const sendNodeEmail = async ({ from, subject, message }: EmailData) => {
    const mailData = {
        from, // sender address
        to: process.env.AUTH_USER, // list of receivers
        subject,
        html: `
        <h1> [BLOG] ${subject}</h1>
        <div>${message}</div>
        <br/>
        <p>보낸사람 : ${from}</p>
        `
    }
    return transporter.sendMail(mailData);
}

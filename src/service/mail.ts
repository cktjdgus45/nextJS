import nodemailer from 'nodemailer';

type MailInfo = {
    to: string;
    subject: string;
    text: string;
}

let transporter = nodemailer.createTransport({
    port: 587,
})

export const sendMail = async (mailInfo: MailInfo) => {
    const { to, subject, text } = mailInfo;
    let info = await transporter.sendMail({
        to,
        subject,
        text
    });
    console.log(info);
}
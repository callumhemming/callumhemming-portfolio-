import nodemailer from "nodemailer";

interface Data {
  subject: string;
  name: string;
  email: string;
  message: string;
  sendCopy: boolean;
}

type Route = (param1:Data, param2:any)=>any

export default function ({body},res) {
  const {subject, 
    name,
    email, 
    message, 
    sendCopy} = body 

  const toList : string[] = sendCopy?[process.env.MAILER_USERNAME,email] : [process.env.MAILER_USERNAME] ;


  
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.MAILER_USERNAME,
      pass: process.env.MAILER_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.MAILER_USERNAME,
    to: toList,

    subject: `CallumHemming.tech message: ${subject}`,
    text: `${message} \n 
    Sent from: \n 
    ${name} \n 
    ${email}`,
    html: `<div>${message}
    <hr/>
     <p> Sent from: </p> 
     <p> ${name} </p>
     <p> ${email} </p>
     </div>`,
  };

  console.log(nodemailer);

  transporter.sendMail(mailData, function (err, info) {
    if (err) res.status(400)
    else res.status(200)
  });


  
}

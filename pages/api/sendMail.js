import nodemailer from "nodemailer";

export default function handler(req, res) {
  const {name,email,message} = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.Contact_Mail, // generated ethereal user
      pass: process.env.Contact_Mail_Password, // generated ethereal password
    },
  });
  const mailOptions = {
    from: email, // sender address
    to: process.env.Contact_Mail, // list of receivers
    subject: `TerranKartikTellus Website Contact Effort by ${name} : ${email}`, // Subject line
    html: `
    <div>
    <p><strong>name: </strong><span>${name}</span></p>
    <p><strong>email: </strong><span>${email}</span></p>
    <p><strong>message: </strong><span>${message}</span></p>
    </div>`// plain text body
  };
  
  try{
  transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log("Mail sent :"+ JSON.stringify(info));
  });
  res.status(200);
  
  }catch(err){
   console.log(err);
  }

  res.status(200).json(req.body)
}

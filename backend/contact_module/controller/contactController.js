const Contact = require("../model/contact");
const nodemailer = require('nodemailer')

const postContact = async (req,res) => {
    try{
    const { name, email, contact, subject, message } = req.body;

    if(!name || !email || !contact || !subject || !message){
        return res.status(404).json({message: "ALL INPUT REQUIRED"});
    }

      const queryNumber = Math.floor(100000 + Math.random() * 900000);

    const newContact = new Contact({
      name, email, contact, subject, message, queryNumber
    })

    const saveContact = await newContact.save();

     // Send thank-you email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank You for Contacting Us! [Query #${queryNumber}]`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto;">
          <h2 style="color: #2E86C1;">Thank you, ${name}!</h2>
          <p>We have received your query and our team will reach out to you soon.</p>
          <p><strong>Your Query Number:</strong> ${queryNumber}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p style="margin-top: 20px;">Regards,<br>Medicare Plus Team</p>
        </div>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending thank-you email:", error);
      } else {
        console.log("Thank-you email sent:", info.response);
      }
    });

    res.status(200).json({success: true, message: "Query Saved", data: saveContact})
}catch(error){
 res.status(500).json({success: true, message: "Query Failed", error: error.message});
}

}


module.exports = {
    postContact
}
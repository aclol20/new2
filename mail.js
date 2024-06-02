const nodemailer = require('nodemailer');

async function sendmail(message) {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 465, // Use 587 if STARTTLS is required
      secure: true, // Use false if using port 587
      auth: {
        user: "i@oxamptrades.online", // Your full email address
        pass: "@Ac0706465" // Your email password
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
        ciphers: 'SSLv3' // Add this if necessary for SSL/TLS
      },
      logger: true, // Enable logging
      debug: true   // Enable debug mode
    });

    let info = await transporter.sendMail({
      from: 'i@oxamptrades.online', // Sender address
      to: "marokemaroke2020@gmail.com", // List of receivers
      subject: "helo", // Subject line
      html: message // HTML body
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

module.exports = sendmail;

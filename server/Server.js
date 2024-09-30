require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');


const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000' // Allow requests from your React app
  }));
app.use(express.json());

// Log SMTP configuration
console.log('SMTP Configuration:');
console.log('Host:', process.env.EMAIL_HOST);
console.log('Port:', process.env.EMAIL_PORT);
console.log('Secure:', process.env.EMAIL_SECURE);
console.log('User:', process.env.EMAIL_USER);

// Create a transporter using SMTP
let transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify SMTP connection
transporter.verify(function(error, success) {
    if (error) {
      console.log('SMTP connection error:', error);
    } else {
      console.log('SMTP connection successful');
    }
  });

// API endpoint for form submission
app.post('/api/contact', async (req, res) => {
  const { name, company, email, message, requestResume } = req.body;

  try {
    // Send email to yourself
    await sendEmailToYourself({ name, company, email, message, requestResume });

    // Send automated response to the recruiter
    await sendAutomatedResponse(email);

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ message: 'An error occurred while submitting the form' });
  }
});

async function sendEmailToYourself(data) {
  const { name, company, email, message, requestResume } = data;
  
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.YOUR_EMAIL,
    subject: `New Contact Form Submission${requestResume ? ' - Resume Requested' : ''}`,
    text: `
      Name: ${name}
      Company: ${company}
      Email: ${email}
      Message: ${message}
      Resume Requested: ${requestResume ? 'Yes' : 'No'}
    `,
  };

  await transporter.sendMail(mailOptions);
}

async function sendAutomatedResponse(recruiterEmail) {
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: recruiterEmail,
    subject: 'Thank you for your message',
    text: `
      Thank you for reaching out. I have received your message and will review it shortly.
      I'll get back to you as soon as possible.

      Best regards,
      [Your Name]
    `,
  };

  await transporter.sendMail(mailOptions);
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
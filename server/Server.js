require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { EmailClient } = require("@azure/communication-email");

console.log('Environment variables:');
console.log('COMMUNICATION_SERVICES_CONNECTION_STRING:', process.env.COMMUNICATION_SERVICES_CONNECTION_STRING);
console.log('SENDER_EMAIL_ADDRESS:', process.env.SENDER_EMAIL_ADDRESS);
console.log('YOUR_EMAIL:', process.env.MY_EMAIL);

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3002'], // Allow requests from both origins
  methods: ['GET', 'POST'], // Specify the allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Specify the allowed headers
}));
app.use(express.json());

// Initialize Azure Communication Services Email Client
const connectionString = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
console.log('Connection string:', connectionString);

if (!connectionString) {
  console.error('Connection string is undefined. Please check your .env file.');
  process.exit(1);
}
const client = new EmailClient(connectionString);

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
  
  const emailMessage = {
    senderAddress: process.env.SENDER_EMAIL_ADDRESS,
    content: {
      subject: `New Contact Form Submission${requestResume ? ' - Resume Requested' : ''}`,
      plainText: `
        Name: ${name}
        Company: ${company}
        Email: ${email}
        Message: ${message}
        Resume Requested: ${requestResume ? 'Yes' : 'No'}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Resume Requested:</strong> ${requestResume ? 'Yes' : 'No'}</p>
      `,
    },
    recipients: {
      to: [{ address: process.env.MY_EMAIL }],
    },
  };

  const poller = await client.beginSend(emailMessage);
  await poller.pollUntilDone();
}

async function sendAutomatedResponse(recruiterEmail) {
  const emailMessage = {
    senderAddress: process.env.SENDER_EMAIL_ADDRESS,
    content: {
      subject: 'Thank you for your message',
      plainText: `
        Thank you for reaching out. I have received your message and will review it shortly.
        I'll get back to you as soon as possible.

        Best regards,
        Praveen Kalavai
      `,
      html: `
        <p>Thank you for reaching out. I have received your message and will review it shortly.</p>
        <p>I'll get back to you as soon as possible.</p>
        <p>Best regards,<br>Praveen Kalavai</p>
      `,
    },
    recipients: {
      to: [{ address: recruiterEmail }],
    },
  };

  const poller = await client.beginSend(emailMessage);
  await poller.pollUntilDone();
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
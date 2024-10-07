const { EmailClient } = require("@azure/communication-email");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const connectionString = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
    const client = new EmailClient(connectionString);

    const { name, company, email, message, requestResume } = req.body;

    try {
        // Send email to yourself
        await sendEmailToYourself({ name, company, email, message, requestResume }, client);

        // Send automated response to the recruiter
        await sendAutomatedResponse(email, client);

        context.res = {
            status: 200,
            body: { message: 'Form submitted successfully' }
        };
    } catch (error) {
        context.log.error('Error:', error);
        context.res = {
            status: 500,
            body: { message: 'An error occurred while submitting the form' }
        };
    }
};

async function sendEmailToYourself(data, client) {
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

async function sendAutomatedResponse(recruiterEmail, client) {
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
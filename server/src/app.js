const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(name, email, message) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken?.token,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `You received a new message from ${name} (${email}): \n\n${message}`,
    };

    const result = await transport.sendMail(mailOptions);

    console.log("Email sent successfully:");
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await sendMail(name, email, message);
    res.status(200).send("Your message has been sent successfully.");
  } catch (error) {
    res.status(500).send("There was an error sending your message.");
  }
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

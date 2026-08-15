require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const MESSAGES_FILE = path.join(__dirname, 'data', 'messages.json');

// Ensure data folder and file exist
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });
}
if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify([]), 'utf8');
}

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'prasanata4@gmail.com',
    pass: process.env.EMAIL_PASS || ''
  }
});

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    developer: 'Prashanta Nayak',
    role: 'MERN Stack & Full-Stack Developer',
    emailConfigured: !!process.env.EMAIL_PASS
  });
});

// Resume Profile API
app.get('/api/resume', (req, res) => {
  res.json({
    name: "PRASHANTA NAYAK",
    title: "MERN Stack / Full Stack Developer",
    phone: "+91 9078197216",
    email: "prasanata4@gmail.com",
    linkedin: "https://linkedin.com/in/prashanta-nayak",
    github: "https://github.com/Prashanta-Codes",
    mca_cgpa: "8.18",
    education: [
      {
        degree: "Master of Computer Application (MCA)",
        institution: "Gandhi Institute For Education And Technology (GIET), Bhubaneswar",
        period: "2024 - 2026",
        score: "Cumulative CGPA: 8.18"
      },
      {
        degree: "Bachelor of Science (Statistics)",
        institution: "Marshaghai Degree College, Marshaghai",
        period: "2021 - 2024",
        score: "Percentage: 80.03%"
      }
    ],
    experience: [
      {
        role: "MERN STACK Intern",
        company: "Code Uplifter",
        period: "Jun 2025 - Dec 2025"
      }
    ]
  });
});

// Recruiter Contact API (Saves to file AND sends Email via Nodemailer)
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message, company } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required.'
    });
  }

  const newMessage = {
    id: Date.now().toString(),
    name,
    email,
    subject: subject || 'Portfolio Recruiter Inquiry',
    company: company || 'N/A',
    message,
    receivedAt: new Date().toISOString()
  };

  // 1. Save to JSON File
  try {
    const existing = JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf8') || '[]');
    existing.push(newMessage);
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(existing, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing to messages file:', error);
  }

  // 2. Send Real Email Notification via Nodemailer (if EMAIL_PASS is provided)
  if (process.env.EMAIL_PASS) {
    const mailOptions = {
      from: `"Portfolio Recruiter Bot" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || 'prasanata4@gmail.com',
      replyTo: email,
      subject: `🚨 New Portfolio Inquiry: ${subject || 'Recruiter Message'} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #0b101d; color: #e2e8f0; border-radius: 12px;">
          <h2 style="color: #38bdf8;">New Recruiter Inquiry for Prashanta Nayak</h2>
          <p><strong>Sender Name:</strong> ${name}</p>
          <p><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #818cf8;">${email}</a></p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Subject:</strong> ${subject || 'Portfolio Inquiry'}</p>
          <div style="margin-top: 15px; padding: 15px; background-color: #1e293b; border-left: 4px solid #38bdf8; border-radius: 6px;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="margin-top: 20px; border-color: #334155;" />
          <p style="font-size: 12px; color: #94a3b8;">Received at: ${new Date().toLocaleString('en-IN')}</p>
        </div>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`✉️ Email successfully dispatched to prasanata4@gmail.com for message from ${name}`);
    } catch (mailError) {
      console.error('Nodemailer failed to send email:', mailError.message);
    }
  }

  return res.status(201).json({
    success: true,
    message: `Thank you ${name}! Your message has been received. Prashanta will review it shortly!`,
    data: newMessage
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Prashanta's Portfolio Server running on http://localhost:${PORT}`);
});

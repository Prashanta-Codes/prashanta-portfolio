const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

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

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    developer: 'Prashanta Nayak',
    role: 'MERN Stack & Full-Stack Developer'
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
        score: "CGPA: 8.18 | Sem III SGPA: 8.43"
      },
      {
        degree: "Bachelor of Science (Statistics)",
        institution: "Marshaghai Degree College, Marshaghai",
        period: "2021 - 2024",
        score: "Percentage: 80.03%"
      },
      {
        degree: "CHSE (Higher Secondary)",
        institution: "Marshaghai Higher Secondary School, Marshaghai",
        period: "2019 - 2021",
        score: "Percentage: 74%"
      },
      {
        degree: "BSE (Secondary)",
        institution: "Jagannath High School, Patragarh",
        period: "2018 - 2019",
        score: "Percentage: 71%"
      }
    ],
    experience: [
      {
        role: "MERN STACK Intern",
        company: "Code Uplifter",
        period: "Jun 2025 - Dec 2025",
        highlights: [
          "Completed intensive hands-on MERN STACK internship focused on production-ready web application development.",
          "Implemented JWT authentication, OTP-based verification, and granular Role-Based Access Control (RBAC).",
          "Built CRUD APIs with Node.js/Express.js and integrated responsive frontend views using React.js."
        ]
      }
    ],
    projects: [
      {
        name: "Food Waste Reduction System",
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "OTP Verification"],
        description: "Full-stack MERN application connecting food donors with local NGOs. Features OTP handovers, real-time dashboards, and secure JWT auth."
      },
      {
        name: "E-Commerce Backend System",
        techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth", "RBAC"],
        description: "Scalable backend with role-based admin/user access, inventory lock/management, cart logic, order lifecycle, and data consistency."
      }
    ]
  });
});

// Recruiter Contact API
app.post('/api/contact', (req, res) => {
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
    subject: subject || 'Portfolio Contact',
    company: company || 'N/A',
    message,
    receivedAt: new Date().toISOString()
  };

  try {
    const existing = JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf8') || '[]');
    existing.push(newMessage);
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(existing, null, 2), 'utf8');

    return res.status(201).json({
      success: true,
      message: `Thank you ${name}! Your message has been received. Prashanta will get back to you shortly!`,
      data: newMessage
    });
  } catch (error) {
    console.error('Error saving message:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error saving message. Please contact via email directly: prasanata4@gmail.com'
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Prashanta's Portfolio Backend running on http://localhost:${PORT}`);
});

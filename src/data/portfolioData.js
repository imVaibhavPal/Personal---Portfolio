// Portfolio Data - Vaibhav Kumar Pal

export const personalInfo = {
    name: "Vaibhav Kumar Pal",
    title: "Python Backend Developer",
    subtitle: "& AI/ML Engineer",
    email: "vkpal8300@gmail.com",
    location: "Delhi, India",
    github: "https://github.com/imVaibhavPal",
    linkedin: "https://linkedin.com/in/vaibhav-kumar-pal-955aa6293",
    cgpa: "7.47",
    bio: "Python Backend Developer and B.Tech Computer Science (AI & ML) undergraduate at Vellore Institute of Technology. Building production analytics backends with Python, Flask, and FastAPI. Passionate about scalable systems, data science, and AI-powered applications.",
};

// Skills strictly from resume only
export const skills = {
    "Languages": [
        { name: "Python", level: 92 },
        { name: "C++", level: 75 },
        { name: "SQL", level: 85 },
        { name: "HTML", level: 78 },
        { name: "CSS", level: 75 },
    ],
    "Backend": [
        { name: "Flask", level: 90 },
        { name: "FastAPI", level: 88 },
        { name: "RESTful APIs", level: 92 },
        { name: "API Integration", level: 85 },
        { name: "JWT Authentication", level: 80 },
    ],
    "Databases": [
        { name: "MySQL", level: 85 },
        { name: "DBMS", level: 80 },
    ],
    "AI/ML & Data": [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 88 },
        { name: "Matplotlib", level: 85 },
        { name: "Seaborn", level: 78 },
        { name: "Scikit-learn", level: 78 },
        { name: "Plotly", level: 80 },
        { name: "Streamlit", level: 82 },
        { name: "TensorFlow", level: 72 },
        { name: "PyTorch", level: 70 },
        { name: "Prompt Engineering", level: 72 },
        { name: "OpenAI API", level: 70 },
    ],
    "Tools": [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "AWS (EC2/S3/IAM)", level: 70 },
        { name: "Vercel", level: 72 },
        { name: "Docker (basic)", level: 65 },
        { name: "Jupyter Notebook", level: 88 },
    ],
};

export const experience = [
    {
        company: "Pratinik Infotech",
        role: "Python Developer Intern",
        type: "Remote",
        period: "2026 – Present",
        icon: "💼",
        color: "#6366f1",
        highlights: [
            "Built & maintained Python backend for Social Media Analytics Tool integrating 5+ REST APIs across platforms for 10,000+ posts",
            "Used Pandas to clean, transform, and aggregate large-scale JSON datasets (100K+ records), cutting manual data-prep time by 30%",
            "Designed interactive Streamlit dashboard with Plotly visualizations for 3 internal stakeholders",
            "Collaborated with 4-person engineering team via Git/GitHub, following PEP8-compliant coding practices",
        ],
        techs: ["Python", "REST APIs", "Pandas", "Streamlit", "Plotly", "Git"],
    },
];

export const projects = [
    {
        title: "Computer Vision Fruit Detection System",
        description: "Real-time object detection system classifying 8 fruit and vegetable categories at ~30 FPS using YOLOv8. Achieved ~90% detection accuracy with confidence scores and bounding boxes on 1,000+ image dataset.",
        techs: ["Python", "YOLOv8", "OpenCV", "PyTorch", "NumPy", "Matplotlib"],
        icon: "🍎",
        color: "#ec4899",
        gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
        github: "https://github.com/imVaibhavPal",
        highlights: ["~30 FPS real-time inference", "~90% detection accuracy", "1,000+ image dataset", "8 categories"],
    },
    {
        title: "Multithreaded Web Scraper",
        description: "High-performance multithreaded scraping application using Python, Requests, and BeautifulSoup4 to concurrently fetch and parse data from 50+ webpages per run, cutting total scrape time by ~4x versus single-threaded baseline.",
        techs: ["Python", "Requests", "BeautifulSoup4", "Threading", "HTTP", "HTML Parsing"],
        icon: "🕷️",
        color: "#06b6d4",
        gradient: "linear-gradient(135deg, #06b6d4, #6366f1)",
        github: "https://github.com/imVaibhavPal",
        highlights: ["50+ pages per run", "4x speed improvement", "CSV/JSON export", "Async support"],
    },
    {
        title: "Social Media Analytics Platform",
        description: "Production analytics backend for social media with 5+ REST APIs, real-time KPI tracking, and interactive dashboard. Processes 100K+ records with Pandas pipeline optimizations.",
        techs: ["Python", "Flask", "Pandas", "Streamlit", "REST API", "Plotly"],
        icon: "📊",
        color: "#6366f1",
        gradient: "linear-gradient(135deg, #6366f1, #ec4899)",
        github: "https://github.com/imVaibhavPal",
        highlights: ["100K+ records", "5+ REST APIs", "Real-time dashboard", "KPI tracking"],
    },
];

export const education = [
    {
        institution: "Vellore Institute of Technology",
        degree: "B.Tech, Computer Science & Engineering (AI & ML)",
        period: "Apr 2023 – Apr 2027",
        cgpa: "7.47",
        icon: "🎓",
        color: "#6366f1",
    },
    {
        institution: "Indirapuram Public School",
        degree: "Higher Secondary School",
        period: "Apr 2021 – Apr 2022",
        cgpa: "8.2",
        icon: "🏫",
        color: "#8b5cf6",
    },
];

// Only verified certifications with links
export const certifications = [
    {
        name: "Google IT Support Professional Certificate",
        provider: "Google / Credly",
        icon: "🔵",
        link: "https://www.credly.com/badges/ddd7af50-83ae-42cb-994b-f748058ee5bf/print",
    },
    {
        name: "Applied Machine Learning in Python",
        provider: "Coursera",
        icon: "🟠",
        link: "https://www.coursera.org/account/accomplishments/verify/XC50X6PFM9II",
    },
    {
        name: "Beginning C++ Programming – From Beginner to Beyond",
        provider: "Udemy",
        icon: "🔴",
        link: "https://www.udemy.com/certificate/UC-6efe79af-2804-4f48-813a-b65e180c6e3a/",
    },
    {
        name: "Introduction to Internet of Things",
        provider: "NPTEL",
        icon: "🟢",
        link: null, // No link yet
    },
];

export const activities = [
    {
        title: "Tata Imagination Challenge 2025 & Elevate 2026 Hackathon",
        description: "Applied analytical thinking and cross-functional collaboration to prototype solutions in national-level competitions.",
        icon: "🏆",
    },
    {
        title: "IEEE Workshop on VLSI Digital Design Flow (Cadence)",
        description: "Gained exposure to ASIC and RTL design workflows.",
        icon: "⚡",
    },
];

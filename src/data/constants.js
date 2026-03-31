export const projects = [
  {
    title: "BillMate POS",
    subtitle: "Restaurant Management System",
    description: "A full-featured Point-of-Sale system for real-time order management, table tracking, and dynamic menu updates.",
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Redux'],
    image: "/billmate_pos_1774880077614.png",
    github: "https://github.com/AyushGaikwad05/BillMate-Restaurant-POS-System",
    demo: "https://billmate-pos.vercel.app/",
    features: [
      "Real-time table and order tracking",
      "JWT-based secure authentication",
      "Optimized Redux state management"
    ]
  },
  {
    title: "SkillSync AI",
    subtitle: "AI Resume Analyzer & ATS Match",
    description: "SaaS tool leveraging Gemini LLM to analyze resumes against job descriptions, providing ATS scores and insights.",
    tech: ['React.js', 'Node.js', 'Gemini AI', 'LangChain'],
    image: "/skillsync_ai_1774880097567.png",
    github: "https://github.com/AyushGaikwad05/skillsync-ai-resume-analyzer",
    demo: "https://skillsync-resume.vercel.app/",
    features: [
      "PDF parsing and semantic analysis",
      "Keyword match optimization",
      "Advanced prompt engineering"
    ]
  },

  {
    title: "FarmIQ",
    subtitle: "Precision Agriculture Analysis System",
    description: "AI-powered platform for sugarcane crop health monitoring and yield prediction using computer vision.",
    tech: ['Python', 'TensorFlow/PyTorch', 'Flutter', 'FastAPI',],
    image: "farmiq.png",
    github: null,
    demo: null,
    features: [
      "AI-driven disease detection and crop health analysis",
      "Real-time sugarcane growth monitoring and yield estimation",
      "Interactive dashboard for farmers with localized insights",
      "Automated image processing via deep learning models",
      "Integrated a Gemini-powered LLM to deliver real-time diagnostic insights and evidence-based treatment recommendations."
    ]
},
  
  {
  "title": "SafeBite",
  "subtitle": "Food Barcode Scanner & Ingredient Analyzer",
  "description": "A cross-platform mobile application that scans food product barcodes and retrieves detailed ingredient information using the Open Food Facts API. The app helps users make informed dietary choices by analyzing ingredients, nutritional values, and potential health risks.",
  "tech": ["Flutter", "REST API", "Open Food Facts API"],
  "image": "/safebite.jpeg",
  "github": null,
  "demo": null,
  "features": [
    "Barcode scanning to instantly fetch product details",
    "Ingredient analysis for health and dietary awareness",
    "Real-time data fetching using Open Food Facts API",
    "Displays nutritional values and product information",
    "Clean and responsive UI built with Flutter",
    "Error handling for unknown or unsupported products"
  ]
},


{
    title: "MySangamner",
    subtitle: "Community Engagement Platform",
    description: "Cross-platform mobile app delivering local news and events, fostering engagement in the community.",
    tech: ['Flutter', 'Firebase', 'Cloud Firestore'],
    image: "/my-sangamner.jpeg",
    github: null,
    demo: null,
    features: [
      "Secure user management & real-time updates",
      "Media management via Firebase Storage",
      "Material Design UI/UX principles"
    ]
  },
];

export const skillCategories = [
  {
    title: 'Programming Languages',
    icon: "💻",
    skills: [
      { name: 'Java', level: 40 },
      { name: 'JavaScript', level: 75 },
      { name: 'Python', level: 50 },
      { name: 'C++', level: 70 }
    ]
  },
  {
    title: 'Mobile Development',
    icon: "📱",
    skills: [
      { name: 'Flutter', level: 60 },
      { name: 'Firebase', level: 55 },
      { name: 'API Integration', level: 80 },

    ]
  },
  {
    title: 'AI/ML & Data Science',
    icon: "🧠",
    skills: [
      { name: 'Prompt Engineering', level: 85 },
      { name: 'LangChain', level: 35 },
      { name: 'Machine Learning', level: 45 }
    ]
  },
  {
    title: 'Cloud & Tools',
    icon: "☁️",
    skills: [
      { name: 'Git / GitHub', level: 80 },
      { name: 'MongoDB / SQL', level: 75 },
      { name: 'Next.js / Node.js', level: 80 },
      { name: 'REST APIs', level: 95 }
    ]
  }
];

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Code,
  Database,
  Globe,
  Smartphone,
  Terminal,
  Zap,
  GraduationCap,
  Calendar,
  Award,
  Briefcase,
  Building,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Types for all app data
interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  locationLink: string;
  summary: string;
  profileImage: string;
  logo: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  color: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

interface Experience {
  title: string;
  project: string;
  company: string;
  location: string;
  duration: string;
  type: "Current Role" | "Previous Role";
  achievements: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  field: string;
  institution: string;
  university: string;
  graduationDate: string;
  description: string;
  type: string;
}

interface Achievement {
  value: string;
  label: string;
  description: string;
  color: string;
}

interface NavigationItem {
  name: string;
  href: string;
}

interface AppContextType {
  // Calculated values
  experience: string;

  // Static data
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo[];
  socialLinks: SocialLink[];
  skillCategories: SkillCategory[];
  experiences: Experience[];
  education: Education;
  achievements: Achievement[];
  navigationItems: NavigationItem[];

  // Utility functions
  handleDownload: () => void;
  scrollToSection: (href: string) => void;
}


// Create the context
const AppContext = createContext<AppContextType | null>(null);

// Static data definitions
const PERSONAL_INFO: PersonalInfo = {
  name: "Pratik Bhute",
  title: "Frontend Developer",
  email: "pratik.bhute07@gmail.com",
  phone: "+91 8623029271",
  location: "Wardha, Maharashtra",
  locationLink:
    "https://www.google.com/maps/place/Bhute+House/@20.7516575,78.6245111,142m/data=!3m1!1e3!4m6!3m5!1s0x3bd47f0072436ba7:0xee0503c93a58eb57!8m2!3d20.7515208!4d78.624825!16s%2Fg%2F11whhff1nz?authuser=0&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  summary:
    "Passionate about creating seamless user experiences and delivering innovative solutions aligned with business goals.",
  profileImage: "https://raw.githubusercontent.com/PratikBhute/Pratik-UI-Portfolio/refs/heads/main/public/profile-avatar.jpg",
  logo: "PB",
};

// Duplicate CONTACT_INFO declaration removed to fix redeclaration error.

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/pratikbhute",
    icon: <Linkedin size={20} />,
    color: "from-primary to-accent",
  },
  {
    name: "GitHub",
    url: "https://github.com/pratikbhute",
    icon: <Github size={20} />,
    color: "from-accent to-secondary",
  },
  {
    name: "Email",
    url: "mailto:pratik.bhute07@gmail.com",
    icon: <Mail size={20} />,
    color: "from-secondary to-primary",
  },
];

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Technologies",
    icon: <Globe className="w-6 h-6" />,
    skills: [
      "React JS",
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
    color: "from-primary to-primary-glow",
  },
  {
    title: "State Management",
    icon: <Zap className="w-6 h-6" />,
    skills: ["Redux", "Context API", "RxJS"],
    color: "from-accent to-accent-glow",
  },
  {
    title: "Backend & Database",
    icon: <Database className="w-6 h-6" />,
    skills: ["NodeJS", "MongoDB", "RESTful APIs"],
    color: "from-secondary to-accent-glow",
  },
  {
    title: "Frameworks & Tools",
    icon: <Terminal className="w-6 h-6" />,
    skills: [
      "Tailwind CSS",
      "Bootstrap-5",
      "Material UI",
      "GIT",
      "Docker",
      "Agile Methodology",
      "React-Strap",
    ],
    color: "from-primary to-primary-glow",
  },
];

const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const EXPERIENCES: Experience[] = [
  {
    title: "Frontend Engineer",
    project: "AVA+ Michelangelo (AI Web Tool)",
    company: "Ascendion Technologies Pvt Ltd",
    location: "Hyderabad",
    duration: "01/2024 - Present",
    type: "Current Role",
    achievements: [
      "Designed and developed a responsive UI using React, focusing on user-friendliness and alignment with client specifications",
      "Built reusable and modular UI components using libraries like React-Strap, enabling efficient routing and MSAL-based authentication",
      "Integrated a real-time canvas editor, allowing users to create wireframes seamlessly converted to code by AI",
      "Ensured robust API integration with back-end systems to enable real-time data generation from AI LLM modules",
    ],
    technologies: [
      "React",
      "React-Strap",
      "MSAL",
      "RESTful APIs",
      "AI Integration",
    ],
  },
  {
    title: "Frontend Engineer",
    project: "Huron Research Suite (HRS V12)",
    company: "HURON | Ascendion Technologies",
    location: "Remote",
    duration: "11/2022 - 01/2024",
    type: "Previous Role",
    achievements: [
      "Developed features in the Conflict of Interest (COI) module to streamline compliance and user workflows",
      "Enhanced dashboard usability with hyperlink IDs for seamless navigation to detailed information",
      "Reduced critical bugs by 30% through timely debugging and collaboration with QA teams",
      "Delivered agile solutions, adhering to sprint timelines and improving team velocity",
    ],
    technologies: ["React", "JavaScript", "Agile", "QA Collaboration"],
  },
  {
    title: "Frontend Engineer",
    project: "Integrated Banking Solution (IBS) Modernization",
    company: "FIS Global | Ascendion Technologies",
    location: "Remote",
    duration: "02/2022 - 09/2022",
    type: "Previous Role",
    achievements: [
      "Modernised the UI layer by transitioning from IE compatibility to support modern browsers using Angular 12",
      "Enhanced user interactions with AJAX calls and callback functions, ensuring responsiveness",
      "Constructed modular form components with Angular Formly that improved code maintainability",
      "Transformed the user experience by minimising load times from 5 seconds down to under 2 seconds",
      "Implemented data validation logic and custom mappings, ensuring a 95% reduction in manual intervention",
    ],
    technologies: [
      "Angular 12",
      "Angular Formly",
      "AJAX",
      "Performance Optimization",
    ],
  },
];

const EDUCATION: Education = {
  degree: "Bachelor of Engineering",
  field: "Engineering",
  institution: "Datta Meghe Institute of Engineering Technology and Research",
  university: "R.T.M Nagpur University",
  graduationDate: "November 2020",
  description:
    "Completed my Bachelor's degree in Engineering, laying a strong foundation in technical concepts, problem-solving methodologies, and analytical thinking. This educational background has been instrumental in my journey as a frontend developer, providing me with the systematic approach to software development and engineering principles.",
  type: "Bachelor's Degree",
};

const ACHIEVEMENTS: Achievement[] = [
  {
    value: "95%",
    label: "Manual Intervention Reduction",
    description: "Implemented data validation logic reducing manual work",
    color: "from-primary to-accent",
  },
  {
    value: "30%",
    label: "Bug Reduction",
    description: "Reduced critical bugs through collaboration and debugging",
    color: "from-accent to-secondary",
  },
  {
    value: "2s",
    label: "Load Time Optimization",
    description: "Improved load times from 5 seconds to under 2 seconds",
    color: "from-secondary to-primary",
  },
];

const CONTACT_INFO: ContactInfo[] = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "pratik.bhute07@gmail.com",
    link: "mailto:pratik.bhute07@gmail.com",
    color: "from-primary to-accent",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: "+91 8623029271",
    link: "tel:+918623029271",
    color: "from-accent to-secondary",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    value: "Wardha, Maharashtra",
    link: "https://www.google.com/maps/place/Bhute+House/@20.7516575,78.6245111,142m",
    color: "from-secondary to-primary",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    title: "LinkedIn",
    value: "pratikbhute",
    link: "https://linkedin.com/in/pratikbhute",
    color: "from-primary to-secondary",
  },
];

// Provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [experience, setExperience] = useState("0.0+");
  const [downloadCount, setDownloadCount] = useState(14);
  const { toast } = useToast();
  // Calculate experience on mount
  useEffect(() => {
    const calculateExperience = () => {
      const startDate = new Date(2022, 0, 1); // January 2022
      const currentDate = new Date();

      let years = currentDate.getFullYear() - startDate.getFullYear();
      let months = currentDate.getMonth() - startDate.getMonth();

      if (months < 0) {
        years--;
        months += 12;
      }

      setExperience(`${years}.${months}+`);
    };

    calculateExperience();
  }, []);

const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/PratikBhute_Frontend_Developer.pdf";
    link.download = "PratikBhute_CV_UI_Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadCount((prev) => prev + 1);
    toast({
      title: "Success!",
      description: "Resume download started.",
    });
  };

  // Utility function for smooth scrolling
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const value: AppContextType = {
    experience,
    personalInfo: PERSONAL_INFO,
    contactInfo: CONTACT_INFO,
    socialLinks: SOCIAL_LINKS,
    skillCategories: SKILL_CATEGORIES,
    experiences: EXPERIENCES,
    education: EDUCATION,
    achievements: ACHIEVEMENTS,
    navigationItems: NAVIGATION_ITEMS,
    handleDownload,
    scrollToSection,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook for consuming the context
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};

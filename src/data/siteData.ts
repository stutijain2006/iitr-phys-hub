// Central data structure for the website
// This makes it easy to update content without touching components

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  post: string;
  photo: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  researchAreas: string[];
  bio: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  link?: string;
  type: 'news' | 'event' | 'publication';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  status: 'ongoing' | 'completed' | 'planned';
  researchers: string[];
  publications?: string[];
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  images: string[];
  specifications?: string[];
  location?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: 'lab' | 'equipment' | 'events' | 'achievements';
  date?: string;
  description?: string;
}

// Sample data - replace with actual content
export const siteData = {
  groupInfo: {
    title: "Condensed Matter Physics Research Group",
    subtitle: "Department of Physics, IIT Roorkee",
    mission: "Advancing the frontiers of condensed matter physics through cutting-edge research in quantum materials, nanophysics, and theoretical modeling.",
    description: "Our interdisciplinary research group focuses on understanding fundamental physics of quantum materials and their applications in next-generation technologies.",
    established: "2015",
    location: "IIT Roorkee, Uttarakhand, India"
  },

  teamMembers: [
    {
      id: "1",
      name: "Dr. Rajesh Kumar",
      role: "Professor & Group Leader",
      post: "Head of Research Group",
      photo: "/api/placeholder/300/300",
      email: "rajesh.kumar@phy.iitr.ac.in",
      phone: "+91-1332-285XXX",
      linkedin: "https://linkedin.com/in/rajeshkumar",
      researchAreas: ["Quantum Materials", "Spintronics", "Theoretical Physics"],
      bio: "Leading expert in quantum materials research with over 15 years of experience."
    },
    {
      id: "2", 
      name: "Dr. Priya Sharma",
      role: "Associate Professor",
      post: "Principal Investigator",
      photo: "/api/placeholder/300/300",
      email: "priya.sharma@phy.iitr.ac.in",
      researchAreas: ["Nanophysics", "Optical Materials", "Spectroscopy"],
      bio: "Specialist in nanoscale physics and optical characterization techniques."
    },
    {
      id: "3",
      name: "Dr. Amit Singh",
      role: "Assistant Professor", 
      post: "Research Coordinator",
      photo: "/api/placeholder/300/300",
      email: "amit.singh@phy.iitr.ac.in",
      researchAreas: ["Computational Physics", "Machine Learning", "Materials Design"],
      bio: "Computational physicist working on AI-driven materials discovery."
    }
  ],

  news: [
    {
      id: "1",
      title: "New Research Grant Awarded by DST",
      date: "2024-08-15",
      summary: "Received ₹50 Lakhs grant for quantum materials research.",
      link: "https://linkedin.com/posts/example1",
      type: "news" as const
    },
    {
      id: "2", 
      title: "Paper Published in Nature Physics",
      date: "2024-08-10",
      summary: "Groundbreaking work on topological insulators published.",
      link: "https://linkedin.com/posts/example2",
      type: "publication" as const
    },
    {
      id: "3",
      title: "International Conference on Quantum Materials",
      date: "2024-09-01",
      summary: "Hosting international conference at IIT Roorkee.",
      type: "event" as const
    }
  ],

  projects: [
    {
      id: "1",
      title: "Topological Quantum Materials",
      description: "Investigation of topological phases in quantum materials for next-generation electronics.",
      image: "/api/placeholder/600/400",
      category: "Quantum Physics",
      status: "ongoing" as const,
      researchers: ["Dr. Rajesh Kumar", "Dr. Priya Sharma"]
    },
    {
      id: "2",
      title: "AI-Driven Materials Discovery", 
      description: "Using machine learning to predict properties of novel materials.",
      image: "/api/placeholder/600/400",
      category: "Computational Physics",
      status: "ongoing" as const,
      researchers: ["Dr. Amit Singh"]
    }
  ],

  facilities: [
    {
      id: "1",
      name: "Low Temperature Laboratory",
      description: "State-of-the-art cryogenic facility for quantum measurements.",
      images: ["/api/placeholder/800/600"],
      specifications: ["Temperature range: 0.3K - 300K", "Magnetic field up to 9T", "Electrical transport measurements"],
      location: "Physics Department, Block A"
    },
    {
      id: "2",
      name: "Spectroscopy Suite",
      description: "Advanced optical characterization facility.",
      images: ["/api/placeholder/800/600"],
      specifications: ["Raman Spectroscopy", "Photoluminescence", "UV-Vis-NIR Spectroscopy"],
      location: "Physics Department, Block B"
    }
  ],

  gallery: [
    {
      id: "1",
      title: "Research Laboratory",
      image: "/api/placeholder/800/600",
      category: "lab" as const,
      date: "2024-08-01",
      description: "Our main research laboratory facility"
    },
    {
      id: "2", 
      title: "Team Meeting",
      image: "/api/placeholder/800/600", 
      category: "events" as const,
      date: "2024-08-15",
      description: "Weekly research group meeting"
    },
    {
      id: "3",
      title: "Quantum Measurement Setup", 
      image: "/api/placeholder/800/600",
      category: "equipment" as const,
      date: "2024-07-20",
      description: "Advanced cryogenic measurement system"
    },
    {
      id: "4",
      title: "Best Paper Award",
      image: "/api/placeholder/800/600", 
      category: "achievements" as const,
      date: "2024-08-10",
      description: "International conference recognition"
    }
  ]
};
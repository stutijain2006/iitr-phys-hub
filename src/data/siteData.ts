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

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: string;
  volume: string;
  pages: string;
  doi: string;
  category: string;
  citations: number;
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
    title: "Quantum/Nano-Science and Technology Lab",
    subtitle: "Department of Physics, IIT Roorkee",
    mission: "Advancing the frontiers of condensed matter physics through cutting-edge research in quantum materials, nanophysics, and theoretical modeling.",
    description: "Our interdisciplinary research group focuses on understanding fundamental physics of quantum materials and their applications in next-generation technologies.",
    established: "2015",
    location: "IIT Roorkee, Uttarakhand, India"
  },

  teamMembers: {
    principalInvestigators: [
      {
        id: "1",
        name: "Arup Samanta",
        role: "Associate Professor",
        post: "Head of Research Group",
        photo: "/assets/anup_samanta.jpg",
        email: "arup.samanta[at]ph.iitr.ac.in",
        phone: "91-01332-285161",
        linkedin: "https://www.linkedin.com/in/arup-samanta-5885b053?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        researchAreas: ["Quantum and Nano ELectronics", "Photonics, Magnetism & Energy Devices", "Biophysics & Nanobiotechnology"],
        bio: "Associate Professor in the Department of Physics, IIT Roorkee, and a Visiting Researcher at National Taiwan University. Research focuses on quantum and nano-electronics, photonics and spintronics, advanced photovoltaics, and nanobiotechnology, with a special interest in nanoscale device physics and quantum technologies.."
      }
    ],
    collaborators: [
      {
        id: "3",
        name: "Dr. Amit Singh",
        role: "Assistant Professor",
        post: "Research Coordinator",
        photo: "/api/placeholder/300/300",
        email: "amit.singh@phy.iitr.ac.in",
        researchAreas: ["Computational Physics", "Machine Learning", "Materials Design"],
        bio: "Computational physicist working on AI-driven materials discovery."
      },
      {
        id: "4",
        name: "Dr. Sarah Wilson",
        role: "Postdoctoral Fellow",
        post: "Research Collaborator",
        photo: "/api/placeholder/300/300",
        email: "sarah.wilson@phy.iitr.ac.in",
        researchAreas: ["Quantum Computing", "Materials Synthesis"],
        bio: "International postdoc specializing in quantum device fabrication."
      }
    ],
    phdStudents: [
      {
        id: "5",
        name: "Pooja Yadav",
        photo: "/api/placeholder/300/300",
        email: "rahul.gupta@stu.iitr.ac.in",
        researchAreas: ["Topological Materials", "Electronic Structure"],
        bio: "PhD student working on theoretical aspects of topological insulators."
      },
      {
        id: "6",
        name: "Anil Kumar",
        photo: "/api/placeholder/300/300",
        email: "neha.patel@stu.iitr.ac.in",
        researchAreas: ["Experimental Condensed Matter", "Low Temperature Physics"],
        bio: "Experimental physicist studying quantum phase transitions."
      },
      {
        id: "9",
        name: "Divya Rani",
        photo: "/api/placeholder/300/300",
        email: "neha.patel@stu.iitr.ac.in",
        researchAreas: ["Radial junction silicon solar cells", "Silicon nano/microwire array fabrication"],
        bio: "I am pursuing my Ph.D. in Physics at IIT Roorkee under the supervision of Prof. Arup Samanta. My research focuses on the fabrication of radial junction silicon solar cells using nano/microwire arrays and exploring the dual applications of silica nano/microparticles in photovoltaics and bioimaging."
      }, {
        id: "10",
        name: "Pooja Sudha",
        photo: "/api/placeholder/300/300",
        email: "neha.patel@stu.iitr.ac.in",
        researchAreas: ["Experimental Condensed Matter", "Low Temperature Physics"],
        bio: "Experimental physicist studying quantum phase transitions."
      }, {
        id: "11",
        name: "Soumya",
        photo: "/api/placeholder/300/300",
        email: "neha.patel@stu.iitr.ac.in",
        researchAreas: ["Experimental Condensed Matter", "Low Temperature Physics"],
        bio: "Experimental physicist studying quantum phase transitions."
      }, {
        id: "12",
        name: "Hemant Arora",
        photo: "/api/placeholder/300/300",
        email: "harora@ph.iitr.ac.in ",
        researchAreas: ["Spintronics", "Nanotechnology"],
        bio: "Ph.D. Scholar in Physics from IIT Roorkee, where my research focused on spintronics and nanotechnology, particularly dilute magnetic semiconductors for room-temperature spintronics. My expertise lies in first-principles modeling (DFT, NEGF) of electronic, magnetic, and spin transport in low-dimensional materials, along with device-level simulations of quantum and spintronic devices. I also have hands-on experience in nanofabrication, material/device characterization, and computational tools including Python, QuantumATK, Quantum Espresso, and COMSOL."
      }, {
        id: "13",
        name: "Monika",
        photo: "/api/placeholder/300/300",
        email: "neha.patel@stu.iitr.ac.in",
        researchAreas: ["Experimental Condensed Matter", "Low Temperature Physics"],
        bio: "Experimental physicist studying quantum phase transitions."
      }, {
        id: "14",
        name: "Deepika Singh",
        photo: "/api/placeholder/300/300",
        email: "neha.patel@stu.iitr.ac.in",
        researchAreas: ["Experimental Condensed Matter", "Low Temperature Physics"],
        bio: "Experimental physicist studying quantum phase transitions."
      }, {
        id: "15",
        name: "Khalid Ansari",
        photo: "/api/placeholder/300/300",
        email: "neha.patel@stu.iitr.ac.in",
        researchAreas: ["Experimental Condensed Matter", "Low Temperature Physics"],
        bio: "Experimental physicist studying quantum phase transitions."
      }, {
        id: "16",
        name: "Adwaita Nair",
        photo: "/api/placeholder/300/300",
        email: "adwaita_n@nt.iitr.ac.in",
        researchAreas: ["Experimental Condensed Matter", "Low Temperature Physics"],
        bio: "Experimental physicist studying quantum phase transitions."
      }, {
        id: "17",
        name: "Pravesh Negi",
        photo: "/api/placeholder/300/300",
        email: "pravesh_n@ph.iitr.ac.in",
        researchAreas: ["Nano magnetism", "Theoretical Condensed Matter Physics"],
        bio: "My current research interest lies in investigating the emergent phenomenon of photocatalysis. Currently, I am working on solar-driven hydrogen generation using silicon-based nanostructures."
      }, {
        id: "18",
        name: "Rupali Paul",
        photo: "./assets/rupali_garg.jpg",
        email: "neha.patel@stu.iitr.ac.in",
        researchAreas: ["Condensed Matter physics", "Biophysics"],
        bio: "I am a postgraduate in Physics with research interests in Condensed Matter Physics and Biophysics. I have worked on projects ranging from logarithmic/antilogarithmic amplifier design to the development of halide perovskite-based resistive memory devices, and I am currently exploring genome structure–gene expression relationships using simulation approaches"
      }, {
        id: "19",
        name: "Anjali",
        photo: "/api/placeholder/300/300",
        email: "neha.patel@stu.iitr.ac.in",
        researchAreas: ["Experimental Condensed Matter", "Quantum Technology", "Electronics"],
        bio: "Experimental physicist studying quantum phase transitions."
      }, {
        id: "20",
        name: "Teresa Carmel Aruja",
        photo: "/api/placeholder/300/300",
        email: "teresa_c@ph.iitr.ac.in",
        researchAreas: ["Experimental Condensed Matter", "Low Temperature Physics"],
        bio: "My research interest lies in exploring the potential of quantum technology in silicon based single electron transistors and quantum dots."
      }
    ],
    ugStudents: [
      {
        id: "7",
        name: "Arjun Verma",
        role: "Undergraduate Student",
        post: "Research Intern",
        photo: "/api/placeholder/300/300",
        email: "arjun.verma@st.iitr.ac.in",
        researchAreas: ["Materials Characterization"],
        bio: "Final year physics student working on optical spectroscopy."
      },
      {
        id: "8",
        name: "Kavya Sharma",
        role: "Undergraduate Student",
        post: "Research Intern",
        photo: "/api/placeholder/300/300",
        email: "kavya.sharma@st.iitr.ac.in",
        researchAreas: ["Computational Modeling"],
        bio: "Third year student developing simulation codes for nanomaterials."
      }
    ]
  },

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
      title: "Room Temperature Single Atom Transistors and High Temperature Quantum Bits Using Nitrogen Deep Dopant in Silicon",
      description: "Solid-state quantum devices such as qubits, single-electron transistors, and single-photon detectors are key to the future of electronics. Dopants like P and As in silicon have shown promise as nuclear spin, electronic spin, and charge qubits, though mostly limited to low-temperature operation. To enable high-temperature and room-temperature devices, strategies like dielectric confinement, quantum confinement, and dopant clustering have been explored. We propose nitrogen-doped silicon as a promising solution due to its high ionization energy and long coherence times, enabling room-temperature SETs, charge qubits, and single-electron current metrology..",
      image: "/api/placeholder/600/400",
      category: "High Temperature Quantum Bits",
      status: "ongoing" as const,
      researchers: ["Dr. Arup Samanta"]
    },
    {
      id: "2",
      title: "Combating Carbapenem Resistant Enterobacteriacae (CRE): Using combinatorial approach of conventional",
      description: "Using machine learning to predict properties of novel materials.",
      image: "/api/placeholder/600/400",
      category: "Combating Carbapenem Resistant Enterobacteriacae (CRE): Using combinatorial approach of conventional",
      status: "ongoing" as const,
      researchers: ["Dr. Arup Samanta","Prof. Saugata Hazra", "Prof. Pradip K Maji"]
    },
    {
      id: "3",
      title: "Development of catheter-based point of care rapid multi-stage diagnostics towards surveillance of patients",
      description: "Completed study on high-temperature superconducting phenomena in two-dimensional materials.",
      image: "/api/placeholder/600/400",
      category: "Nanobiotechnology",
      status: "completed" as const,
      researchers: ["Dr. Arup Samanta", "Prof. Saugata Hazra", "Prof. Mayank Goswami", "Dr. Amrita Gaurav", "Prof. Manish K. Tiwari"]
    },
    {
      id: "4",
      title: "Silicon nanowire based radial p-n junction solar cells with high and stable efficiency at low-cost",
      description: "Successfully developed novel synthesis methods for quantum dots with enhanced properties.",
      image: "/api/placeholder/600/400",
      category: "Silicon nanowire based radial p-n junction solar cells with high and stable efficiency at low-cost",
      status: "completed" as const,
      researchers: ["Dr. Arup Samanta"]
    },
    {
      id: "5",
      title: "Synthesis of Silicon Nanowire Based Solar Cells by Wet Chemical Methods",
      description: "Successfully developed novel synthesis methods for quantum dots with enhanced properties.",
      image: "/api/placeholder/600/400",
      category: "Synthesis of Silicon Nanowire Based Solar Cells by Wet Chemical Methods",
      status: "completed" as const,
      researchers: ["Dr. Arup Samanta"]
    }
  ],

  researchPapers: [
    {
      id: "1",
      title: "Topological Phase Transitions in Quantum Materials",
      authors: ["Dr. Rajesh Kumar", "Dr. Priya Sharma", "Rahul Gupta"],
      journal: "Nature Physics",
      year: "2024",
      volume: "20",
      pages: "1234-1241",
      doi: "10.1038/s41567-024-01234-5",
      category: "Quantum Physics",
      citations: 45
    },
    {
      id: "2",
      title: "Machine Learning Approaches for Materials Discovery",
      authors: ["Dr. Amit Singh", "Dr. Sarah Wilson"],
      journal: "Physical Review Materials",
      year: "2024",
      volume: "8",
      pages: "045678",
      doi: "10.1103/PhysRevMaterials.8.045678",
      category: "Computational Physics",
      citations: 32
    },
    {
      id: "3",
      title: "Optical Properties of Two-Dimensional Heterostructures",
      authors: ["Dr. Priya Sharma", "Neha Patel", "Dr. Rajesh Kumar"],
      journal: "Advanced Materials",
      year: "2023",
      volume: "35",
      pages: "2301234",
      doi: "10.1002/adma.202301234",
      category: "Nanophysics",
      citations: 67
    },
    {
      id: "4",
      title: "Quantum Transport in Topological Insulators",
      authors: ["Rahul Gupta", "Dr. Rajesh Kumar"],
      journal: "Physical Review B",
      year: "2023",
      volume: "108",
      pages: "195432",
      doi: "10.1103/PhysRevB.108.195432",
      category: "Theoretical Physics",
      citations: 28
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
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { siteData } from "@/data/siteData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Group Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {siteData.groupInfo.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {siteData.groupInfo.subtitle}
            </p>
            <p className="text-sm text-muted-foreground">
              Established: {siteData.groupInfo.established}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/people" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  People
                </a>
              </li>
              <li>
                <a 
                  href="/research" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Research
                </a>
              </li>
              <li>
                <a 
                  href="/facilities" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a 
                  href="/gallery" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Department of Physics<br />
                  IIT Roorkee<br />
                  Roorkee, Uttarakhand 247667<br />
                  India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  +91-1332-285XXX
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:physics@iitr.ac.in" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  physics@iitr.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* External Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.iitr.ac.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  IIT Roorkee
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.iitr.ac.in/departments/PH/pages/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Physics Department
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://arxiv.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  arXiv
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://scholar.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Google Scholar
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {siteData.groupInfo.title}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with ❤️ for scientific research
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
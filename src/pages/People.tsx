import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { siteData } from '@/data/siteData';
import { Mail, Phone, Linkedin, User, Crown, Users, GraduationCap, BookOpen } from 'lucide-react';

const People = () => {
  const { teamMembers } = siteData;

  const categories = [
    {
      key: 'principalInvestigators' as const,
      title: 'Principal Investigators',
      icon: Crown,
      description: 'Leading faculty members driving research excellence',
      members: teamMembers.principalInvestigators
    },
    {
      key: 'collaborators' as const, 
      title: 'Collaborators & Postdocs',
      icon: Users,
      description: 'Research collaborators and postdoctoral fellows',
      members: teamMembers.collaborators
    },
    {
      key: 'phdStudents' as const,
      title: 'PhD Students', 
      icon: GraduationCap,
      description: 'Doctoral researchers advancing scientific knowledge',
      members: teamMembers.phdStudents
    },
    {
      key: 'ugStudents' as const,
      title: 'Undergraduate Students',
      icon: BookOpen,
      description: 'Emerging researchers gaining valuable experience',
      members: teamMembers.ugStudents
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-primary via-primary-variant to-accent text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4" />
              Our Research Community
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-foreground to-accent-foreground bg-clip-text">
              Meet Our Team
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              A diverse community of researchers, faculty, and students dedicated to advancing the frontiers of physics at IIT Roorkee
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((category, categoryIndex) => (
          <section key={category.key} className={categoryIndex > 0 ? "mt-20" : ""}>
            {/* Category Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-full px-6 py-3 mb-6">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <category.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-primary font-medium">{category.title}</span>
              </div>
              
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Members Grid */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
              {category.members.map((member) => (
                <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-l-4 border-l-primary/20 hover:border-l-primary">
                  <CardHeader className="text-center pb-4 bg-gradient-to-br from-background to-primary/5">
                    <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors ring-4 ring-primary/10">
                      <User className="w-12 h-12 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2 text-foreground">{member.name}</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20 font-medium">
                      {member.role}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 p-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Position
                      </h4>
                      <p className="text-muted-foreground pl-4">{member.post}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        Research Areas
                      </h4>
                      <div className="flex flex-wrap gap-2 pl-4">
                        {member.researchAreas.map((area) => (
                          <Badge key={area} variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        About
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                        {member.bio}
                      </p>
                    </div>

                    {/* Contact Information */}
                    <div className="pt-4 border-t border-border space-y-3">
                      <h4 className="font-semibold text-foreground text-sm">Contact Information</h4>
                      
                      {member.email && (
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Mail className="w-4 h-4 text-primary" />
                          </div>
                          <a 
                            href={`mailto:${member.email}`}
                            className="text-primary hover:text-primary/80 transition-colors hover:underline"
                          >
                            {member.email}
                          </a>
                        </div>
                      )}
                      
                      {member.phone && (
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                            <Phone className="w-4 h-4 text-accent" />
                          </div>
                          <a 
                            href={`tel:${member.phone}`}
                            className="text-primary hover:text-primary/80 transition-colors hover:underline"
                          >
                            {member.phone}
                          </a>
                        </div>
                      )}
                      
                      {member.linkedin && (
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-8 h-8 bg-secondary/50 rounded-lg flex items-center justify-center">
                            <Linkedin className="w-4 h-4 text-primary" />
                          </div>
                          <a 
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors hover:underline"
                          >
                            LinkedIn Profile
                          </a>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* Join Us Section */}
        <Card className="mt-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
          <CardContent className="relative p-12 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Research Community</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              We welcome passionate researchers and students to join our collaborative environment. 
              Explore opportunities for PhD programs, postdoctoral fellowships, research collaborations, and undergraduate research projects.
            </p>
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 text-lg">
              Contact Us for Opportunities
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default People;
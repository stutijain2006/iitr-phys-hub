import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { siteData } from '@/data/siteData';
import { Mail, Phone, Linkedin, User } from 'lucide-react';

const People = () => {
  const { teamMembers } = siteData;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/30 mb-4">
              Our Team
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Meet Our Researchers</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Dedicated faculty members advancing the frontiers of physics research at IIT Roorkee
            </p>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-32 h-32 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <User className="w-16 h-16 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  {member.role}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Position</h4>
                  <p className="text-muted-foreground">{member.post}</p>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Research Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.researchAreas.map((area) => (
                      <Badge key={area} variant="secondary" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">About</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Contact Information */}
                <div className="pt-4 border-t border-border space-y-2">
                  {member.email && (
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                  )}
                  
                  {member.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <a 
                        href={`tel:${member.phone}`}
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        {member.phone}
                      </a>
                    </div>
                  )}
                  
                  {member.linkedin && (
                    <div className="flex items-center gap-2 text-sm">
                      <Linkedin className="w-4 h-4 text-muted-foreground" />
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
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

        {/* Join Us Section */}
        <Card className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Join Our Research Group</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for passionate researchers and students to join our team. 
              Explore opportunities for PhD, postdoc, and research collaborations.
            </p>
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
              Contact Us for Opportunities
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default People;
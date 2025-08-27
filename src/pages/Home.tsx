import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import NewsEvents from '@/components/NewsEvents';
import { siteData } from '@/data/siteData';
import { ArrowRight, Users, Microscope, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/physics-lab-hero.jpg';

const Home = () => {
  const { groupInfo, teamMembers, news } = siteData;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/30 mb-6">
              IIT Roorkee Physics Department
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {groupInfo.title}
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              {groupInfo.mission}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground">
                <Link to="/research">
                  Explore Research <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/people">
                  Meet Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* About Section */}
            <section>
              <div className="mb-8">
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                  About Our Group
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Advancing Condensed Matter Physics
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {groupInfo.description}
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{teamMembers.length}+</h3>
                    <p className="text-muted-foreground">Faculty Members</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Microscope className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">50+</h3>
                    <p className="text-muted-foreground">Research Projects</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">100+</h3>
                    <p className="text-muted-foreground">Publications</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Featured Team Section */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                    Our Team
                  </Badge>
                  <h2 className="text-3xl font-bold text-foreground">Meet Our Researchers</h2>
                </div>
                <Button asChild variant="outline">
                  <Link to="/people">
                    View All <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {teamMembers.slice(0, 2).map((member) => (
                  <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Users className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-foreground mb-1">
                            {member.name}
                          </h3>
                          <p className="text-primary font-medium mb-2">{member.role}</p>
                          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                            {member.bio}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {member.researchAreas.slice(0, 2).map((area) => (
                              <Badge key={area} variant="secondary" className="text-xs">
                                {area}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Research Highlights */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                    Research Focus
                  </Badge>
                  <h2 className="text-3xl font-bold text-foreground">Current Research Areas</h2>
                </div>
                <Button asChild variant="outline">
                  <Link to="/research">
                    View Projects <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {['Quantum Materials', 'Nanophysics', 'Theoretical Modeling', 'Spectroscopy'].map((area, index) => (
                  <Card key={area} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Target className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-foreground mb-2">{area}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Cutting-edge research in {area.toLowerCase()} with applications in next-generation technologies.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <NewsEvents news={news} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
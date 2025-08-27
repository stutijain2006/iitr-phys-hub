import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { siteData } from '@/data/siteData';
import { Microscope, Users, Calendar, Target } from 'lucide-react';

const Research = () => {
  const { projects } = siteData;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'completed':
        return 'bg-primary/10 text-primary border-primary/20';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/30 mb-4">
              Research Projects
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Our Research Portfolio</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Exploring the fundamental physics of matter through cutting-edge experimental and theoretical research
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Research Areas Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Research Focus Areas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our interdisciplinary approach combines theoretical insights with experimental innovations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: 'Quantum Materials',
                description: 'Topological insulators, superconductors, and quantum phase transitions',
                icon: Target
              },
              {
                title: 'Nanophysics',
                description: 'Low-dimensional systems and quantum confinement effects',
                icon: Microscope
              },
              {
                title: 'Spectroscopy',
                description: 'Advanced optical characterization and measurement techniques',
                icon: Calendar
              },
              {
                title: 'Theory & Simulation',
                description: 'Computational modeling and theoretical predictions',
                icon: Users
              }
            ].map((area) => (
              <Card key={area.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Active Projects */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Current Projects</h2>
            <p className="text-muted-foreground">
              Ongoing research initiatives pushing the boundaries of physics
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Microscope className="w-16 h-16 text-primary" />
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {project.category}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Research Team
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.researchers.map((researcher) => (
                        <Badge key={researcher} variant="outline" className="text-xs">
                          {researcher}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Impact */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
                  <p className="text-muted-foreground">Active Research Projects</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-accent mb-2">100+</h3>
                  <p className="text-muted-foreground">Published Papers</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">₹10Cr+</h3>
                  <p className="text-muted-foreground">Research Funding</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Research;
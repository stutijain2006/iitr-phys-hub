import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { siteData } from '@/data/siteData';
import { Microscope, Users, Calendar, Target, FileText, ExternalLink, Quote } from 'lucide-react';

const Research = () => {
  const { projects, researchPapers } = siteData;

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
      <div className="relative bg-gradient-to-br from-primary via-primary-variant to-accent text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Microscope className="w-4 h-4" />
              Research Excellence
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-foreground to-accent-foreground bg-clip-text">
              Our Research Portfolio
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              Exploring the fundamental physics of matter through cutting-edge experimental and theoretical research
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Research Areas Overview */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4" />
              Focus Areas
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Research Focus Areas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our interdisciplinary approach combines theoretical insights with experimental innovations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <Card key={area.title} className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-primary/20 hover:border-t-primary">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Projects */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-2 mb-6">
              <Microscope className="w-4 h-4" />
              Current & Completed Projects
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Research Projects</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our comprehensive research initiatives spanning both ongoing explorations and completed breakthroughs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
                  <Microscope className="w-20 h-20 text-primary relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <CardTitle className="text-xl text-foreground leading-tight">{project.title}</CardTitle>
                    <Badge className={`${getStatusColor(project.status)} font-medium`}>
                      {project.status}
                    </Badge>
                  </div>
                  <Badge variant="secondary" className="w-fit bg-secondary/50 text-secondary-foreground">
                    {project.category}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Research Team
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.researchers.map((researcher) => (
                        <Badge key={researcher} variant="outline" className="text-xs border-primary/30 text-foreground">
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

        {/* Research Papers */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground border border-secondary/30 rounded-full px-4 py-2 mb-6">
              <FileText className="w-4 h-4" />
              Publications
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Research Publications</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our latest contributions to the scientific community through peer-reviewed research publications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {researchPapers.map((paper) => (
              <Card key={paper.id} className="hover:shadow-lg transition-shadow group border-l-4 border-l-secondary/30 hover:border-l-secondary">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <CardTitle className="text-lg leading-tight text-foreground group-hover:text-primary transition-colors">
                      {paper.title}
                    </CardTitle>
                    <Badge className="bg-secondary/10 text-secondary-foreground border-secondary/20 shrink-0">
                      {paper.year}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="w-fit text-xs">
                    {paper.category}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
                      <Users className="w-3 h-3 text-primary" />
                      Authors
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {paper.authors.join(', ')}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="font-medium text-foreground">{paper.journal}</span>
                      <span className="text-muted-foreground ml-2">Vol. {paper.volume}, pp. {paper.pages}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Quote className="w-4 h-4 text-accent" />
                      <span className="text-sm text-accent font-medium">{paper.citations} citations</span>
                    </div>
                    <a 
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-3 h-3" />
                      DOI
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Impact */}
        <section>
          <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
            <CardContent className="relative p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Research Impact & Metrics</h2>
                <p className="text-muted-foreground text-lg">Our contributions to the global physics research community</p>
              </div>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <h3 className="text-4xl font-bold text-primary mb-2">{projects.length}+</h3>
                  <p className="text-muted-foreground font-medium">Research Projects</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-accent mb-2">{researchPapers.length}+</h3>
                  <p className="text-muted-foreground font-medium">Published Papers</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-primary mb-2">
                    {researchPapers.reduce((sum, paper) => sum + paper.citations, 0)}+
                  </h3>
                  <p className="text-muted-foreground font-medium">Total Citations</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-accent mb-2">₹10Cr+</h3>
                  <p className="text-muted-foreground font-medium">Research Funding</p>
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
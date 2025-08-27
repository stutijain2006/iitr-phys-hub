import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { siteData } from '@/data/siteData';
import { MapPin, Settings, Zap, Thermometer } from 'lucide-react';

const Facilities = () => {
  const { facilities } = siteData;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/30 mb-4">
              Research Facilities
            </Badge>
            <h1 className="text-4xl font-bold mb-4">State-of-the-Art Equipment</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Advanced instrumentation enabling cutting-edge research in condensed matter physics
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Facilities Overview */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Cryogenic Systems',
                description: 'Ultra-low temperature measurements down to millikelvin range',
                icon: Thermometer,
                count: '3+'
              },
              {
                title: 'Optical Setup',
                description: 'Advanced laser systems and spectroscopy equipment',
                icon: Zap,
                count: '5+'
              },
              {
                title: 'Clean Rooms',
                description: 'Controlled environment for sensitive sample preparation',
                icon: Settings,
                count: '2'
              },
              {
                title: 'Measurement Labs',
                description: 'Specialized laboratories for various characterization techniques',
                icon: MapPin,
                count: '8+'
              }
            ].map((item) => (
              <Card key={item.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-accent mb-1">{item.count}</h3>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Individual Facilities */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Facilities</h2>
            <p className="text-muted-foreground">
              Explore our world-class research infrastructure
            </p>
          </div>

          <div className="space-y-8">
            {facilities.map((facility) => (
              <Card key={facility.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="h-64 lg:h-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Settings className="w-20 h-20 text-primary" />
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl mb-2">{facility.name}</CardTitle>
                      {facility.location && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{facility.location}</span>
                        </div>
                      )}
                    </CardHeader>

                    <CardContent className="p-0 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {facility.description}
                      </p>

                      {facility.specifications && (
                        <div>
                          <h4 className="font-medium text-foreground mb-3">Key Specifications</h4>
                          <div className="space-y-2">
                            {facility.specifications.map((spec, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Access Information */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Facility Access</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our facilities are available for collaborative research projects. 
                Contact us to discuss access arrangements and technical support.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-2">Internal Users</h3>
                  <p className="text-sm text-muted-foreground">
                    Full access for department faculty and students
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-2">Collaborators</h3>
                  <p className="text-sm text-muted-foreground">
                    Shared access for research collaborations
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-2">Industry Partners</h3>
                  <p className="text-sm text-muted-foreground">
                    Commercial access on project basis
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Facilities;
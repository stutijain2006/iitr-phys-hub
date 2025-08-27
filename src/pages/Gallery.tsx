import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { siteData } from '@/data/siteData';
import { Camera, Filter, Calendar } from 'lucide-react';

const Gallery = () => {
  const { gallery } = siteData;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'lab', label: 'Laboratory' },
    { value: 'equipment', label: 'Equipment' },
    { value: 'events', label: 'Events' },
    { value: 'achievements', label: 'Achievements' }
  ];

  const filteredGallery = selectedCategory === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'lab':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'equipment':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'events':
        return 'bg-secondary text-secondary-foreground';
      case 'achievements':
        return 'bg-primary/20 text-primary border-primary/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/30 mb-4">
              Photo Gallery
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Research in Pictures</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Capturing moments of discovery, innovation, and collaboration in our physics research journey
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Section */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold text-foreground">Filter by Category</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className="text-sm"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section>
          {filteredGallery.length === 0 ? (
            <Card className="p-12 text-center">
              <CardContent>
                <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No Photos Found</h3>
                <p className="text-muted-foreground">
                  No photos available in the selected category. Try selecting a different filter.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  {/* Image Container */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                    <Camera className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                    
                    {/* Category Badge */}
                    <Badge 
                      className={`absolute top-3 left-3 ${getCategoryColor(item.category)}`}
                    >
                      {item.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    {item.description && (
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                    
                    {item.date && (
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Statistics */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {gallery.filter(item => item.category === 'lab').length}
                  </h3>
                  <p className="text-muted-foreground">Lab Photos</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">
                    {gallery.filter(item => item.category === 'equipment').length}
                  </h3>
                  <p className="text-muted-foreground">Equipment Shots</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {gallery.filter(item => item.category === 'events').length}
                  </h3>
                  <p className="text-muted-foreground">Event Pictures</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">
                    {gallery.filter(item => item.category === 'achievements').length}
                  </h3>
                  <p className="text-muted-foreground">Achievements</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
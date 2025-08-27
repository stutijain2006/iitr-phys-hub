import { NewsItem } from '@/data/siteData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, FileText, Award } from 'lucide-react';

interface NewsEventsProps {
  news: NewsItem[];
}

const NewsEvents = ({ news }: NewsEventsProps) => {
  const getIcon = (type: NewsItem['type']) => {
    switch (type) {
      case 'event':
        return <Calendar className="w-4 h-4" />;
      case 'publication':
        return <FileText className="w-4 h-4" />;
      default:
        return <Award className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: NewsItem['type']) => {
    switch (type) {
      case 'event':
        return 'bg-accent/10 text-accent hover:bg-accent/20';
      case 'publication':
        return 'bg-primary/10 text-primary hover:bg-primary/20';
      default:
        return 'bg-secondary text-secondary-foreground hover:bg-secondary/80';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Award className="w-5 h-5" />
          News & Events
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {news.map((item) => (
          <div key={item.id} className="border-l-2 border-primary/20 pl-4 pb-4">
            <div className="flex items-start justify-between gap-2 mb-2">
              <Badge variant="secondary" className={`${getTypeColor(item.type)} text-xs`}>
                <span className="flex items-center gap-1">
                  {getIcon(item.type)}
                  {item.type}
                </span>
              </Badge>
              <span className="text-xs text-muted-foreground">
                {formatDate(item.date)}
              </span>
            </div>
            
            <h4 className="font-medium text-sm text-card-foreground mb-2 leading-tight">
              {item.title}
            </h4>
            
            <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
              {item.summary}
            </p>
            
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
              >
                Read more <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default NewsEvents;
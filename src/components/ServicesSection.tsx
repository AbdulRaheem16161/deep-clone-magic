import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Custom SVG icons for services
const GameControllerIcon = () => (
  <svg viewBox="0 0 64 64" className="w-10 h-10">
    <rect x="8" y="20" width="48" height="28" rx="6" fill="hsl(42 80% 50%)" stroke="hsl(0 0% 10%)" strokeWidth="2"/>
    <circle cx="20" cy="34" r="6" fill="hsl(0 0% 10%)"/>
    <circle cx="44" cy="30" r="3" fill="hsl(0 0% 10%)"/>
    <circle cx="44" cy="38" r="3" fill="hsl(0 0% 10%)"/>
    <circle cx="40" cy="34" r="3" fill="hsl(0 0% 10%)"/>
    <circle cx="48" cy="34" r="3" fill="hsl(0 0% 10%)"/>
    <rect x="17" y="31" width="6" height="2" fill="hsl(42 80% 60%)"/>
    <rect x="19" y="29" width="2" height="6" fill="hsl(42 80% 60%)"/>
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 64 64" className="w-10 h-10">
    <rect x="8" y="12" width="48" height="40" rx="4" fill="hsl(0 0% 15%)" stroke="hsl(42 80% 50%)" strokeWidth="2"/>
    <path d="M20 28 L12 36 L20 44" stroke="hsl(42 80% 50%)" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <path d="M44 28 L52 36 L44 44" stroke="hsl(42 80% 50%)" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <line x1="36" y1="24" x2="28" y2="48" stroke="hsl(42 80% 60%)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const PaintbrushIcon = () => (
  <svg viewBox="0 0 64 64" className="w-10 h-10">
    <path d="M48 8 L56 16 L24 48 L16 56 L8 48 L16 40 Z" fill="hsl(42 80% 50%)" stroke="hsl(0 0% 10%)" strokeWidth="2"/>
    <path d="M44 12 L52 20" stroke="hsl(42 80% 60%)" strokeWidth="2"/>
    <ellipse cx="12" cy="52" rx="6" ry="4" fill="hsl(0 70% 50%)" stroke="hsl(0 0% 10%)" strokeWidth="1"/>
    <circle cx="20" cy="48" r="2" fill="hsl(200 70% 50%)"/>
    <circle cx="16" cy="44" r="2" fill="hsl(120 70% 50%)"/>
  </svg>
);

const CubeIcon = () => (
  <svg viewBox="0 0 64 64" className="w-10 h-10">
    <polygon points="32,8 56,20 56,44 32,56 8,44 8,20" fill="hsl(42 80% 50%)" stroke="hsl(0 0% 10%)" strokeWidth="2"/>
    <polygon points="32,8 56,20 32,32 8,20" fill="hsl(42 80% 60%)"/>
    <polygon points="32,32 56,20 56,44 32,56" fill="hsl(42 80% 45%)"/>
    <polygon points="32,32 8,20 8,44 32,56" fill="hsl(42 80% 40%)"/>
    <line x1="32" y1="32" x2="32" y2="56" stroke="hsl(0 0% 10%)" strokeWidth="1"/>
    <line x1="32" y1="32" x2="56" y2="20" stroke="hsl(0 0% 10%)" strokeWidth="1"/>
    <line x1="32" y1="32" x2="8" y2="20" stroke="hsl(0 0% 10%)" strokeWidth="1"/>
  </svg>
);

const ClapboardIcon = () => (
  <svg viewBox="0 0 64 64" className="w-10 h-10">
    <rect x="8" y="16" width="48" height="40" rx="2" fill="hsl(0 0% 15%)" stroke="hsl(42 80% 50%)" strokeWidth="2"/>
    <rect x="8" y="8" width="48" height="12" fill="hsl(42 80% 50%)" stroke="hsl(0 0% 10%)" strokeWidth="2"/>
    <line x1="20" y1="8" x2="16" y2="20" stroke="hsl(0 0% 10%)" strokeWidth="2"/>
    <line x1="36" y1="8" x2="32" y2="20" stroke="hsl(0 0% 10%)" strokeWidth="2"/>
    <line x1="52" y1="8" x2="48" y2="20" stroke="hsl(0 0% 10%)" strokeWidth="2"/>
    <polygon points="26,32 26,48 40,40" fill="hsl(42 80% 50%)"/>
  </svg>
);

const StackIcon = () => (
  <svg viewBox="0 0 64 64" className="w-10 h-10">
    <rect x="12" y="36" width="40" height="20" rx="2" fill="hsl(42 80% 40%)" stroke="hsl(0 0% 10%)" strokeWidth="2"/>
    <rect x="16" y="24" width="32" height="16" rx="2" fill="hsl(42 80% 50%)" stroke="hsl(0 0% 10%)" strokeWidth="2"/>
    <rect x="20" y="12" width="24" height="16" rx="2" fill="hsl(42 80% 60%)" stroke="hsl(0 0% 10%)" strokeWidth="2"/>
    <circle cx="32" cy="20" r="3" fill="hsl(0 0% 10%)"/>
  </svg>
);

const services = [
  {
    icon: GameControllerIcon,
    title: 'Full Game Development',
    subtitle: 'Unity Engine',
    description: 'Complete game creation from concept to final polish'
  },
  {
    icon: CodeIcon,
    title: 'Gameplay Programming',
    subtitle: 'Systems & Mechanics',
    description: 'Robust mechanics and interactive game systems'
  },
  {
    icon: PaintbrushIcon,
    title: '2D Art & Characters',
    subtitle: 'Concept Art',
    description: 'Stunning character designs and illustrations'
  },
  {
    icon: CubeIcon,
    title: '3D Models & Animation',
    subtitle: 'Environments',
    description: 'Game-ready assets, environments, and animations'
  },
  {
    icon: ClapboardIcon,
    title: 'Trailers & Cinematics',
    subtitle: 'Video Content',
    description: 'Compelling video content for your games'
  },
  {
    icon: StackIcon,
    title: 'Single Assets or Full Projects',
    subtitle: 'Flexible Scope',
    description: 'From individual assets to complete game packages'
  }
];

const steps = [
  {
    number: '1',
    title: 'Message us on WhatsApp or Email',
    description: "Tell us what you want to build, even if it's just an idea."
  },
  {
    number: '2',
    title: 'Discuss scope and options',
    description: "We'll talk through timelines, features, and what's involved."
  },
  {
    number: '3',
    title: 'Receive a clear plan and cost',
    description: 'You decide, no pressure.'
  },
  {
    number: '4',
    title: 'We build, deliver, and revise',
    description: "On time, with updates and revisions until it's right."
  }
];

const ServicesSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923364518167', '_blank');
  };

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold mb-6">
            <span className="text-foreground">Our</span>{' '}
            <span className="text-orange">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We work with indie developers, creators, and studios.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="card-interactive bg-card border-border/50 hover:border-primary/50 overflow-hidden group"
              >
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center service-icon border border-primary/20 shadow-lg">
                    <IconComponent />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {service.title}
                    </h3>
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      {service.subtitle}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-inter font-bold text-center mb-12">
            <span className="text-foreground">How It</span>{' '}
            <span className="text-orange">Works</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg card-interactive"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-foreground flex items-center justify-center text-orange font-bold text-xl shadow-lg">
                  {step.number}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-foreground hover:bg-foreground text-background hover:text-background text-lg px-8 py-6 gap-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-6 h-6" />
              Start WhatsApp Chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

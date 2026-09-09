import { MapPin, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [{
    icon: MessageCircle,
    title: 'Message Us on WhatsApp',
    info: '03364518167',
    description: 'Our preferred channel. We typically reply within a few hours, 7 days a week.',
    link: 'https://wa.me/923364518167'
  }, {
    icon: MapPin,
    title: 'Visit Us',
    info: 'Mansorah Multan Road, Lahore, Pakistan',
    description: 'Located in the heart of Lahore.',
    link: 'https://maps.app.goo.gl/eANRvQ3ukSj1HhMv6'
  }];


  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 lg:pl-20 lg:pr-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold mb-6 tracking-tight">
            <span className="text-foreground">Let's</span>{' '}
            <span className="text-orange">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            WhatsApp is the fastest way to reach us. Message us about a project, a
            collaboration or a question — our team responds within a few hours, seven days a week.
          </p>

        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card 
                    key={index} 
                    className="group cursor-pointer bg-card/30 backdrop-blur-md border border-border/40 hover:border-foreground/50 transition-all duration-300 hover:shadow-lg card-interactive"
                    onClick={() => window.open(contact.link, '_blank')}
                  >
                    <div className="p-5 flex items-center gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-foreground rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <IconComponent className="h-6 w-6 text-background" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-inter font-semibold text-foreground group-hover:text-foreground transition-colors duration-300">
                          {contact.title}
                        </h4>
                        <p className="font-medium truncate text-foreground">
                          {contact.info}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 opacity-80">
                          {contact.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

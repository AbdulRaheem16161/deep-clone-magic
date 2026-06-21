import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

// Custom WhatsApp icon
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary-foreground" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Contact = () => {
  const contactInfo = [{
    icon: Mail,
    title: 'Email Us',
    info: 'deepcutoriginals@gmail.com',
    description: "Send us an email and we'll respond within 24 hours.",
    link: 'mailto:deepcutoriginals@gmail.com'
  }, {
    icon: MessageCircle,
    title: 'WhatsApp',
    info: '03364518167',
    description: "Send us a message anytime. We'll reply ASAP, 7 days a week.",
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
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold mb-6 tracking-tight">
            <span className="text-foreground">Let's</span>{' '}
            <span className="text-orange">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Thinking about a game or just want to talk? Send us a message. We are always happy to chat, answer questions and see how we can help!
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

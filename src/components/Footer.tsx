import React from 'react';
import { Mail, MapPin, MessageCircle, Linkedin } from 'lucide-react';
import logoImage from '@/assets/logo-new.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Work', href: '#games' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Join Us', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Left: Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logoImage} 
              alt="DeepCut Originals" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-background/70 text-sm text-center md:text-left max-w-xs">
              We work with indie developers, creators, and studios to bring game ideas to life.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold text-background mb-6 text-lg">Quick Links</h4>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-background/70 hover:text-background transition-colors duration-300 text-sm font-medium"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Contact Info */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold text-background mb-6 text-lg">Get in Touch</h4>
            <div className="space-y-4">
              <a 
                href="https://wa.me/923364518167" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <span className="text-sm">03364518167</span>
              </a>
              <a 
                href="mailto:deepcutoriginals@gmail.com"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">deepcutoriginals@gmail.com</span>
              </a>
              <a 
                href="https://maps.app.goo.gl/eANRvQ3ukSj1HhMv6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm">Lahore, Pakistan</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-8"></div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-8">
          <a 
            href="https://wa.me/923364518167" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center text-background/70 hover:text-background transition-all duration-300"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a 
            href="mailto:deepcutoriginals@gmail.com" 
            aria-label="Email"
            className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center text-background/70 hover:text-background transition-all duration-300"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a 
            href="https://maps.app.goo.gl/eANRvQ3ukSj1HhMv6" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Location"
            className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center text-background/70 hover:text-background transition-all duration-300"
          >
            <MapPin className="h-5 w-5" />
          </a>
          <a 
            href="https://www.linkedin.com/company/deepcut-originals/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center text-background/70 hover:text-background transition-all duration-300"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} <span className="text-background font-medium">DeepCut</span>{' '}
            <span className="text-orange font-medium">Originals</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
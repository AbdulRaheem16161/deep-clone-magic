import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open('https://wa.me/923364518167', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 animate-whatsapp-pulse group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-card border border-border rounded-lg text-sm font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md">
        Chat on WhatsApp
      </span>
    </button>
  );
};

export default FloatingWhatsApp;

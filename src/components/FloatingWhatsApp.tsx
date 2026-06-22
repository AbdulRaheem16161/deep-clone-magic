const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open('https://wa.me/923364518167', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 animate-whatsapp-pulse group"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Chat on WhatsApp"
    >
      {/* Official WhatsApp glyph */}
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8"
        fill="white"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.302.13-.616.13-.93 0-.171-.058-.401-.358-.487-.345-.171-2.16-1.075-2.235-1.075zM16.005.075C8.214.075 1.83 6.46 1.83 14.25c0 2.535.69 5.024 1.992 7.197L.213 31.927l10.713-3.45c2.107 1.158 4.49 1.77 6.92 1.77 7.79 0 14.174-6.385 14.174-14.175S23.79.075 16.005.075zm0 25.94c-2.434 0-4.811-.745-6.834-2.146l-.49-.305-6.353 2.046 2.072-6.196-.32-.49a11.748 11.748 0 0 1-1.8-6.27c0-6.532 5.318-11.85 11.85-11.85s11.85 5.318 11.85 11.85-5.318 11.85-11.85 11.85z" />
      </svg>

      <span className="absolute right-full mr-3 px-3 py-1.5 bg-card border border-border rounded-lg text-sm font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md">
        Chat on WhatsApp
      </span>
    </button>
  );
};

export default FloatingWhatsApp;

import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroCharacter from '@/assets/hero-character-new.png';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">

      {/* Content */}
      <div className="container mx-auto px-4 lg:pl-20 lg:pr-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 pt-24 pb-16">
          {/* Left side - Text and Button */}
          <div className="flex-1 text-center lg:text-left animate-slide-up space-y-8">
            <h1 className="w-max max-w-full font-inter leading-[0.95] text-left">
              <span className="block whitespace-nowrap text-[clamp(46px,13vw,64px)] font-bold tracking-[-0.045em] text-foreground md:text-[clamp(56px,7vw,76px)] xl:text-[clamp(64px,5.1vw,92px)]">
                Indie Game
              </span>
              <span className="mt-[6px] flex items-baseline gap-[clamp(16px,1.2vw,22px)] whitespace-nowrap">
                <span className="text-[clamp(38px,10vw,52px)] font-light leading-[0.95] tracking-[-0.04em] text-foreground md:text-[clamp(46px,6vw,62px)] xl:text-[clamp(52px,4.2vw,76px)]">
                  and
                </span>
                <span className="text-[clamp(46px,13vw,64px)] font-bold leading-[0.95] tracking-[-0.045em] text-orange md:text-[clamp(56px,7vw,76px)] xl:text-[clamp(64px,5.1vw,92px)]">
                  Animation
                </span>
              </span>
              <span className="mt-[6px] block whitespace-nowrap text-[clamp(46px,13vw,64px)] font-bold tracking-[-0.045em] text-foreground md:text-[clamp(56px,7vw,76px)] xl:text-[clamp(64px,5.1vw,92px)]">
                Studio
              </span>
            </h1>


            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Crafting original worlds built on creativity, not imitation.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button 
                className="bg-foreground hover:bg-foreground text-background hover:text-background text-lg px-10 py-7 gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" 
                size="lg" 
                onClick={() => scrollToSection('games')}
              >
                Explore Our Games
                <ArrowRight className="h-6 w-6" />
              </Button>
              <Button 
                variant="outline"
                className="text-lg px-8 py-7 border-foreground text-foreground hover:bg-foreground hover:text-background gap-2 transition-all duration-300 hover:scale-[1.02]" 
                size="lg" 
                onClick={() => scrollToSection('services')}
              >
                <ShoppingCart className="h-5 w-5" />
                Work With Us
              </Button>
            </div>
          </div>

          {/* Right side - Character Image with floating animation */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img 
              src={heroCharacter} 
              alt="Game character showcase" 
              className="w-full max-w-[180px] md:max-w-[200px] lg:max-w-[330px] h-auto object-contain drop-shadow-2xl animate-float" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

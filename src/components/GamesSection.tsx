import { useState, useRef, useEffect } from 'react';
import { Download, X, Volume2, VolumeX, Loader2, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Slider } from '@/components/ui/slider';
import { useIsMobile } from '@/hooks/use-mobile';

// Preload priority assets
const preloadAssets = () => {
  // Priority 1: Hero image
  const heroLink = document.createElement('link');
  heroLink.rel = 'preload';
  heroLink.as = 'image';
  heroLink.href = '/src/assets/hero-character-new.png';
  document.head.appendChild(heroLink);

  // Priority 2-4: Game videos in order
  const videoUrls = [
    '/videos/cure-infection.mp4',
    '/videos/raptor-hunter.mp4',
    '/videos/find-imposter.mp4'
  ];
  
  videoUrls.forEach((url, index) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = url;
    (link as any).fetchpriority = index === 0 ? 'high' : 'auto';
    document.head.appendChild(link);
  });
};

// Run preload on module load
if (typeof window !== 'undefined') {
  preloadAssets();
}

// Import game video placeholders
import gameVideoPlaceholderCure from '@/assets/game-placeholder-cure.png';
import gameVideoPlaceholderRaptor from '@/assets/game-placeholder-raptor.png';
import gameVideoPlaceholderImposter from '@/assets/game-placeholder-imposter.png';

// Import game screenshots
import cureInfection1 from '@/assets/cure-infection-screenshot-1.png';
import cureInfection2 from '@/assets/cure-infection-screenshot-2.png';
import cureInfection3 from '@/assets/cure-infection-screenshot-3.png';
import cureInfection4 from '@/assets/cure-infection-screenshot-4.png';
import cureInfection5 from '@/assets/cure-infection-screenshot-5.png';
import cureInfection6 from '@/assets/cure-infection-screenshot-6.png';
import raptorHunter1 from '@/assets/raptor-hunter-screenshot-1.png';
import raptorHunter2 from '@/assets/raptor-hunter-screenshot-2.png';
import raptorHunter3 from '@/assets/raptor-hunter-screenshot-3.png';
import raptorHunter4 from '@/assets/raptor-hunter-screenshot-4.png';
import raptorHunter5 from '@/assets/raptor-hunter-screenshot-5.png';
import raptorHunter6 from '@/assets/raptor-hunter-screenshot-6.png';
import findImposter1 from '@/assets/find-imposter-screenshot-1.png';
import findImposter2 from '@/assets/find-imposter-screenshot-2.png';
import findImposter3 from '@/assets/find-imposter-screenshot-3.png';
import findImposter4 from '@/assets/find-imposter-screenshot-4.png';
import findImposter5 from '@/assets/find-imposter-screenshot-5.png';
import findImposter6 from '@/assets/find-imposter-screenshot-6.png';
import findImposterIcon from '@/assets/find-the-imposter-icon.png';
import cureInfectionIcon from '@/assets/cure-infection-icon.png';
import raptorHunterIcon from '@/assets/raptor-hunter-icon.png';

// Game data
const games = [{
  id: 0,
  title: 'Cure and Infection',
  genre: 'Survival Shooting',
  description: 'A survival FPS developed in just six days, where you help Dr. Cure and his nurse fight a viral outbreak caused by his brother.',
  icon: cureInfectionIcon,
  previewVideo: '/videos/cure-infection.mp4',
  previewPlaceholder: gameVideoPlaceholderCure,
  link: 'https://goncal0.itch.io/cure-and-infection',
  screenshots: [cureInfection1, cureInfection2, cureInfection3, cureInfection4, cureInfection5, cureInfection6]
}, {
  id: 2,
  title: 'Raptor Hunter',
  genre: 'Shooter',
  description: 'Armed with a shotgun and pistol, you must hunt fast and relentless raptors in a survival challenge.',
  icon: raptorHunterIcon,
  previewVideo: '/videos/raptor-hunter.mp4',
  previewPlaceholder: gameVideoPlaceholderRaptor,
  link: 'https://raptorbot.itch.io/raptor-hunter',
  screenshots: [raptorHunter1, raptorHunter2, raptorHunter3, raptorHunter4, raptorHunter5, raptorHunter6]
}, {
  id: 4,
  title: 'Find The Imposter',
  genre: 'Role-Playing / Social Deduction',
  description: 'Uncover and eliminate the imposter before they eliminate the crew. (Among Us Fan-Game)',
  icon: findImposterIcon,
  previewVideo: '/videos/find-imposter.mp4',
  previewPlaceholder: gameVideoPlaceholderImposter,
  link: 'https://raptorbot.itch.io/find-the-imposter',
  screenshots: [findImposter1, findImposter2, findImposter3, findImposter4, findImposter5, findImposter6]
}];

// Video Player Component
const VideoPlayer = ({
  src,
  placeholder
}: {
  src: string;
  placeholder: string;
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(50);
  const [showUnmuteHint, setShowUnmuteHint] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => setIsVideoLoaded(true);
      const handleWaiting = () => setIsBuffering(true);
      const handlePlaying = () => setIsBuffering(false);
      
      video.addEventListener('canplaythrough', handleCanPlay);
      video.addEventListener('waiting', handleWaiting);
      video.addEventListener('playing', handlePlaying);
      
      if (video.readyState >= 3) {
        setIsVideoLoaded(true);
      }
      
      return () => {
        video.removeEventListener('canplaythrough', handleCanPlay);
        video.removeEventListener('waiting', handleWaiting);
        video.removeEventListener('playing', handlePlaying);
      };
    }
  }, []);

  // Show "Click to unmute" hint every 3 seconds when muted
  useEffect(() => {
    if (!isMuted) return;
    
    const interval = setInterval(() => {
      setShowUnmuteHint(true);
      setTimeout(() => setShowUnmuteHint(false), 1500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isMuted]);

  const showLoading = !isVideoLoaded || isBuffering;

  const toggleMute = () => {
    setIsMuted(prev => {
      const newState = !prev;
      if (videoRef.current) {
        videoRef.current.muted = newState;
        if (!newState) {
          videoRef.current.volume = volume / 100;
        }
      }
      return newState;
    });
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume / 100;
      if (newVolume > 0 && isMuted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
      if (newVolume === 0 && !isMuted) {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="h-full rounded-lg overflow-hidden bg-muted border border-border/30 hover:border-primary/50 transition-all relative group">
      {/* Placeholder Image - shown until video loads */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 z-10">
          <img
            src={placeholder}
            alt="Video preview"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Always visible loading overlay when loading or buffering */}
      {showLoading && (
        <div className="absolute inset-0 bg-background/50 flex flex-col items-center justify-center gap-3 z-20">
          <Loader2 className="h-8 w-8 md:h-10 md:w-10 text-primary animate-spin" />
          <span className="text-foreground font-orbitron text-sm md:text-base">
            Loading Video...
          </span>
        </div>
      )}

      {/* Click to unmute hint */}
      {isMuted && !showLoading && (
        <div 
          className={`absolute top-3 left-3 z-20 bg-background/80 px-3 py-1.5 rounded-md transition-opacity duration-500 ${showUnmuteHint ? 'opacity-100' : 'opacity-0'}`}
        >
          <span className="text-foreground text-xs font-medium">Click to unmute</span>
        </div>
      )}

      {/* Video - click toggles mute instead of fullscreen */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        className={`w-full h-full object-cover cursor-pointer transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
        onClick={toggleMute}
      />

      {/* Volume Controls */}
      <div className="absolute bottom-3 right-3 flex items-center gap-2 z-20">
        {/* Volume Slider - Desktop only */}
        {!isMobile && !isMuted && (
          <div className="w-20 h-8 flex items-center bg-background/80 rounded-md px-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Slider
              value={[volume]}
              onValueChange={handleVolumeChange}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
        )}
        {/* Mute/Unmute Toggle */}
        <Button
          size="icon"
          variant="secondary"
          className="opacity-80 hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
          onClick={(e) => {
            e.stopPropagation();
            toggleMute();
          }}
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};

// Game Card Component
const GameCard = ({
  game
}: {
  game: (typeof games)[0];
}) => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <Card className="w-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-4 md:p-6">
        {/* Screenshots (2x3 grid) + Video Preview side by side */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left: Screenshots 2x3 Grid - larger on mobile */}
          <div className="lg:flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2">
              {game.screenshots.slice(0, 6).map((screenshot, index) => (
                <div
                  key={index}
                  className="aspect-video rounded-md sm:rounded-lg overflow-hidden cursor-pointer border-2 border-border/30 hover:border-primary/50 transition-all hover:scale-[1.02] shadow-md hover:shadow-lg"
                  onClick={() => setZoomedImage(screenshot)}
                >
                  <img
                    src={screenshot}
                    alt={`${game.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Video Preview */}
          <div className="lg:w-[40%]">
            <VideoPlayer 
              src={(game as any).previewVideo} 
              placeholder={game.previewPlaceholder} 
            />
          </div>
        </div>

        {/* Control Row */}
        <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-border/30">
          {/* Game Icon */}
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50 flex-shrink-0">
            <img src={game.icon} alt={`${game.title} icon`} className="w-full h-full object-cover" />
          </div>

          {/* Game Title */}
          <div className="flex-1 min-w-0">
            <h3 className="font-orbitron font-bold text-lg text-foreground">{game.title}</h3>
            <p className="text-sm text-muted-foreground">{game.genre}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2">
            <Button 
              size="sm" 
              onClick={() => window.open(game.link, '_blank')} 
              className="gap-2 bg-foreground hover:bg-foreground/90 text-background md:px-4 px-3"
            >
              <Download className="h-4 w-4 hidden md:block" />
              <span className="hidden md:inline">Download for Windows</span>
              <span className="md:hidden">Download (PC)</span>
            </Button>
          </div>
        </div>

        {/* Zoomed Image Dialog */}
        <Dialog open={!!zoomedImage} onOpenChange={() => setZoomedImage(null)}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95">
            <DialogClose className="absolute right-4 top-4 z-10">
              <X className="h-6 w-6 text-white" />
            </DialogClose>
            {zoomedImage && (
              <img src={zoomedImage} alt="Zoomed screenshot" className="w-full h-full object-contain" />
            )}
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

const GamesSection = () => {
  return (
    <section id="games" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground">Games</h3>
          <p className="text-muted-foreground mt-2">Our collection of indie games</p>
        </div>

        {/* Game Cards */}
        <div className="space-y-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useIsMobile } from '@/hooks/use-mobile';

import trailerPlaceholder1 from '@/assets/trailer-placeholder-1.png';
import trailerPlaceholder2 from '@/assets/trailer-placeholder-2.png';
import trailerPlaceholder3 from '@/assets/trailer-placeholder-3.png';

const trailerVideos = [
  { id: 1, src: '/videos/trailer-1.mp4', placeholder: trailerPlaceholder1 },
  { id: 2, src: '/videos/trailer-2.mp4', placeholder: trailerPlaceholder2 },
  { id: 3, src: '/videos/trailer-3.mp4', placeholder: trailerPlaceholder3 },
];

const ComicsTrailersSection = () => {
  const [mutedStates, setMutedStates] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
  });
  const [volumeStates, setVolumeStates] = useState<Record<number, number>>({
    1: 50,
    2: 50,
    3: 50,
  });
  const [loadedVideos, setLoadedVideos] = useState<Record<number, boolean>>({});
  const [bufferingVideos, setBufferingVideos] = useState<Record<number, boolean>>({});
  const [showUnmuteHints, setShowUnmuteHints] = useState<Record<number, boolean>>({});
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  const isMobile = useIsMobile();

  useEffect(() => {
    // Setup buffering listeners for each video
    Object.entries(videoRefs.current).forEach(([idStr, video]) => {
      if (video) {
        const id = parseInt(idStr);
        const handleWaiting = () => setBufferingVideos(prev => ({ ...prev, [id]: true }));
        const handlePlaying = () => setBufferingVideos(prev => ({ ...prev, [id]: false }));
        
        video.addEventListener('waiting', handleWaiting);
        video.addEventListener('playing', handlePlaying);
      }
    });
  }, [loadedVideos]);

  // Show "Click to unmute" hint every 3 seconds for muted videos
  useEffect(() => {
    const interval = setInterval(() => {
      const newHints: Record<number, boolean> = {};
      Object.entries(mutedStates).forEach(([id, isMuted]) => {
        if (isMuted) {
          newHints[parseInt(id)] = true;
        }
      });
      setShowUnmuteHints(newHints);
      
      setTimeout(() => setShowUnmuteHints({}), 1500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [mutedStates]);

  const toggleMute = (id: number) => {
    setMutedStates((prev) => {
      const newState = { ...prev, [id]: !prev[id] };
      const video = videoRefs.current[id];
      if (video) {
        video.muted = newState[id];
        // Restore volume when unmuting
        if (!newState[id]) {
          video.volume = volumeStates[id] / 100;
        }
      }
      return newState;
    });
  };

  const handleVolumeChange = (id: number, value: number[]) => {
    const volume = value[0];
    setVolumeStates((prev) => ({ ...prev, [id]: volume }));
    const video = videoRefs.current[id];
    if (video) {
      video.volume = volume / 100;
      // Auto-unmute when adjusting volume
      if (volume > 0 && mutedStates[id]) {
        video.muted = false;
        setMutedStates((prev) => ({ ...prev, [id]: false }));
      }
      // Auto-mute when volume is 0
      if (volume === 0 && !mutedStates[id]) {
        video.muted = true;
        setMutedStates((prev) => ({ ...prev, [id]: true }));
      }
    }
  };

  const handleVideoLoaded = (id: number) => {
    setLoadedVideos((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="trailers" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground">
            Trailers
          </h3>
          <p className="text-muted-foreground mt-2">
            Cinematic trailers and comic-style content
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trailerVideos.map((video) => {
            const showLoading = !loadedVideos[video.id] || bufferingVideos[video.id];
            return (
              <div
                key={video.id}
                className="relative aspect-video rounded-lg overflow-hidden bg-muted border border-border/30 hover:border-primary/50 transition-all group"
              >
                {/* Placeholder Image - shown until video loads */}
                {!loadedVideos[video.id] && (
                  <div className="absolute inset-0 z-10">
                    <img
                      src={video.placeholder}
                      alt="Loading preview"
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
                {mutedStates[video.id] && !showLoading && (
                  <div 
                    className={`absolute top-3 left-3 z-20 bg-background/80 px-3 py-1.5 rounded-md transition-opacity duration-500 ${showUnmuteHints[video.id] ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <span className="text-foreground text-xs font-medium">Click to unmute</span>
                  </div>
                )}

                <video
                  ref={(el) => {
                    videoRefs.current[video.id] = el;
                  }}
                  src={video.src}
                  autoPlay
                  loop
                  muted={mutedStates[video.id]}
                  playsInline
                  className={`w-full h-full object-cover cursor-pointer transition-opacity duration-500 ${loadedVideos[video.id] ? 'opacity-100' : 'opacity-0'}`}
                  onClick={() => toggleMute(video.id)}
                  onCanPlayThrough={() => handleVideoLoaded(video.id)}
                />
                {/* Volume Controls */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2 z-20">
                  {/* Volume Slider - Desktop only */}
                  {!isMobile && !mutedStates[video.id] && (
                    <div className="w-20 h-8 flex items-center bg-background/80 rounded-md px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Slider
                        value={[volumeStates[video.id]]}
                        onValueChange={(value) => handleVolumeChange(video.id, value)}
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
                      toggleMute(video.id);
                    }}
                  >
                    {mutedStates[video.id] ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default ComicsTrailersSection;

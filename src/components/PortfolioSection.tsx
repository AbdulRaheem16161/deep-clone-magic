import { useState, useRef, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { CharacterDesignsGrid } from '@/components/CharacterDesignsGrid';
import { DigitalPortraitsGrid } from '@/components/DigitalPortraitsGrid';

// Import character designs
import characterDesign1 from '@/assets/character-design-1.jpg';
import characterDesign2 from '@/assets/character-design-2.jpg';
import characterDesign3 from '@/assets/character-design-3.jpg';
import characterDesign4 from '@/assets/character-design-4.jpg';
import characterDesign5 from '@/assets/character-design-5.jpg';
import characterDesign6 from '@/assets/character-design-6.jpg';

// Import portraits
import portrait1 from '@/assets/portrait-1.png';
import portrait2 from '@/assets/portrait-2.png';
import portrait3 from '@/assets/portrait-3.png';
import portrait4 from '@/assets/portrait-4.png';
import portrait5 from '@/assets/portrait-5.png';
import portrait6 from '@/assets/portrait-6.jpg';
import portrait7 from '@/assets/portrait-7.jpg';
import portrait8 from '@/assets/portrait-8.jpg';
import portrait9 from '@/assets/portrait-9.jpg';
import portrait10 from '@/assets/portrait-10.jpg';
import portrait11 from '@/assets/portrait-11.jpg';
import portrait12 from '@/assets/portrait-12.jpg';

// Import environments
import env1 from '@/assets/env-1.png';
import env2 from '@/assets/env-2.png';
import env3 from '@/assets/env-3.png';
import env4 from '@/assets/env-4.png';
import env5 from '@/assets/env-5.png';
import env6 from '@/assets/env-6.png';
import env7 from '@/assets/env-7.png';
import env8 from '@/assets/env-8.png';
import env9 from '@/assets/env-9.png';

// 3D Models data
import model3DPlaceholder from '@/assets/3d-model-placeholder.png';
import placeholderAlosaurus from '@/assets/placeholder-alosaurus.png';
import placeholderTrex from '@/assets/placeholder-trex.png';
import placeholderCar from '@/assets/placeholder-car.png';
import placeholderHuts from '@/assets/placeholder-huts.png';
import placeholderJapaneseHouse from '@/assets/placeholder-japanese-house.png';
const models3DVideos = [{
  id: 1,
  video: '/videos/3d-model-alosaurus.mp4',
  placeholder: placeholderAlosaurus,
  featured: true
}, {
  id: 2,
  video: '/videos/3d-model-6-upload.mp4',
  placeholder: model3DPlaceholder
}, {
  id: 3,
  video: '/videos/3d-model-car.mp4',
  placeholder: placeholderCar
}, {
  id: 4,
  video: '/videos/3d-model-trex.mp4',
  placeholder: placeholderTrex
}, {
  id: 5,
  video: '/videos/3d-model-huts.mp4',
  placeholder: placeholderHuts
}, {
  id: 6,
  video: '/videos/3d-model-japanese-house.mp4',
  placeholder: placeholderJapaneseHouse
}];

// Art data
const artCategories = {
  characterDesigns: [{
    id: 1,
    image: characterDesign1
  }, {
    id: 2,
    image: characterDesign2
  }, {
    id: 3,
    image: characterDesign3
  }, {
    id: 4,
    image: characterDesign4
  }, {
    id: 5,
    image: characterDesign5
  }, {
    id: 6,
    image: characterDesign6
  }],
  digitalPortraits: [{
    id: 1,
    image: portrait1
  }, {
    id: 2,
    image: portrait2
  }, {
    id: 3,
    image: portrait3
  }, {
    id: 4,
    image: portrait4
  }, {
    id: 5,
    image: portrait5
  }, {
    id: 6,
    image: portrait6
  }, {
    id: 7,
    image: portrait7
  }, {
    id: 8,
    image: portrait8
  }, {
    id: 9,
    image: portrait9
  }, {
    id: 10,
    image: portrait10
  }, {
    id: 11,
    image: portrait11
  }, {
    id: 12,
    image: portrait12
  }]
};

// Environments data
const environmentsData = [{
  id: 1,
  image: env1
}, {
  id: 2,
  image: env2
}, {
  id: 3,
  image: env3
}, {
  id: 4,
  image: env4
}, {
  id: 5,
  image: env5
}, {
  id: 6,
  image: env6
}, {
  id: 7,
  image: env7
}, {
  id: 8,
  image: env8
}, {
  id: 9,
  image: env9
}];

// 3D Model Card with Placeholder
const Model3DCard = ({
  model,
  featured = false,
  onVideoClick
}: {
  model: {
    id: number;
    video: string;
    placeholder?: string;
    featured?: boolean;
  };
  featured?: boolean;
  onVideoClick?: (videoSrc: string) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
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
  const showLoading = !isVideoLoaded || isBuffering;
  return <div className={`aspect-video rounded-lg overflow-hidden bg-muted border transition-all relative cursor-pointer ${featured ? 'border-primary/50 hover:border-primary ring-2 ring-primary/20 hover:ring-primary/40' : 'border-border/30 hover:border-primary/50'}`} onClick={() => onVideoClick?.(model.video)}>
      {/* Placeholder image - shown until video loads */}
      {model.placeholder && !isVideoLoaded && <div className="absolute inset-0 z-10">
          <img src={model.placeholder} alt="" className="w-full h-full object-cover" />
        </div>}
      
      {/* Always visible loading overlay when loading or buffering */}
      {showLoading && <div className="absolute inset-0 bg-background/50 flex flex-col items-center justify-center gap-3 z-20">
          <Loader2 className="h-8 w-8 md:h-10 md:w-10 text-primary animate-spin" />
          <span className="text-foreground font-orbitron text-sm md:text-base">
            Loading Video...
          </span>
        </div>}
      
      {/* Video - fades in when loaded */}
      <video ref={videoRef} src={model.video} autoPlay loop muted playsInline className={`w-full h-full object-cover transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`} />
    </div>;
};

// Section Header Component
const SectionHeader = ({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) => <div className="mb-8">
    <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground">{title}</h3>
    {subtitle && <p className="mt-2 text-[#65758b]">{subtitle}</p>}
  </div>;
const PortfolioSection = () => {
  const [zoomedArtImage, setZoomedArtImage] = useState<string | null>(null);
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null);
  return <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 text-muted-foreground">
        {/* 1. ART SECTION */}
        <div id="art" className="mb-20">
          <SectionHeader title="Art" subtitle="Digital art and illustrations" />

          {/* Character Designs */}
          <div className="mb-10">
            <h4 className="text-lg md:text-xl font-orbitron font-semibold text-foreground mb-4">
              Character Designs
            </h4>
            <CharacterDesignsGrid items={artCategories.characterDesigns} onImageClick={setZoomedArtImage} />
          </div>

          {/* Digital Portraits */}
          <div className="mb-10">
            <h4 className="text-lg md:text-xl font-orbitron font-semibold text-foreground mb-4">
              Digital Portraits
            </h4>
            <DigitalPortraitsGrid items={artCategories.digitalPortraits} onImageClick={setZoomedArtImage} />
          </div>
        </div>

        {/* 2. ENVIRONMENTS SECTION */}
        <div id="environments" className="mb-20">
          <SectionHeader title="Environments" subtitle="Environment art and world design" />

          {/* Environment Images Grid - 1 col mobile, 3 cols desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {environmentsData.map(item => <div key={item.id} className="aspect-video rounded-lg overflow-hidden bg-muted border border-border/30 hover:border-primary/50 transition-all cursor-pointer hover:scale-[1.02]" onClick={() => setZoomedArtImage(item.image)}>
                <img src={item.image} alt={`Environment ${item.id}`} className="w-full h-full object-cover" />
              </div>)}
          </div>
        </div>

        {/* 3. 3D MODELS SECTION */}
        <div id="3d-models" className="mb-20">
          <SectionHeader title="3D Models" subtitle="High-quality 3D assets and animations" />

          {/* All Models in a Grid - 1 col mobile, 3 cols desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {models3DVideos.map(model => <div key={model.id}>
                <Model3DCard model={model} featured={model.featured} onVideoClick={setFullscreenVideo} />
              </div>)}
          </div>
        </div>

        {/* Zoomed Art Image Dialog */}
        <Dialog open={!!zoomedArtImage} onOpenChange={() => setZoomedArtImage(null)}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95">
            <DialogClose className="absolute right-4 top-4 z-10">
              <X className="h-6 w-6 text-white" />
            </DialogClose>
            {zoomedArtImage && <img src={zoomedArtImage} alt="Zoomed art" className="w-full h-full object-contain" />}
          </DialogContent>
        </Dialog>

        {/* Fullscreen Video Dialog */}
        <Dialog open={!!fullscreenVideo} onOpenChange={() => setFullscreenVideo(null)}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95">
            <DialogClose className="absolute right-4 top-4 z-10">
              <X className="h-6 w-6 text-white" />
            </DialogClose>
            {fullscreenVideo && <video src={fullscreenVideo} autoPlay loop controls className="w-full h-full object-contain" />}
          </DialogContent>
        </Dialog>
      </div>
    </section>;
};
export default PortfolioSection;
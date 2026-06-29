import { videos } from '@/lib/videos';
import { useState, useRef, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { CharacterDesignsGrid } from '@/components/CharacterDesignsGrid';
import { DigitalPortraitsGrid } from '@/components/DigitalPortraitsGrid';
import HeaderVideo from '@/components/HeaderVideo';

// Import character designs
import characterDesign1 from '@/assets/character-design-1.jpg';
import characterDesign2 from '@/assets/character-design-2.jpg';
import characterDesign3 from '@/assets/character-design-3.jpg';
import characterDesign4 from '@/assets/character-design-4.jpg';
import characterDesign5 from '@/assets/character-design-5.jpg';
import characterDesign6 from '@/assets/character-design-6.jpg';
import characterNew1Asset from '@/assets/character-new/c1.png.asset.json';
import characterNew2Asset from '@/assets/character-new/c2.png.asset.json';
import characterNew3Asset from '@/assets/character-new/c3.png.asset.json';
import portraitNew1Asset from '@/assets/portraits-new/p1.png.asset.json';
import portraitNew4Asset from '@/assets/portraits-new/p4.png.asset.json';
import portraitNew9Asset from '@/assets/portraits-new/p9.png.asset.json';
import iz1Asset from '@/assets/game-icons-art/iz1.png.asset.json';
import iz2Asset from '@/assets/game-icons-art/iz2.png.asset.json';
import iz3Asset from '@/assets/game-icons-art/iz3.png.asset.json';

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

// Import environments (new uploads)
import envNew1Asset from '@/assets/env-new/env-1.png.asset.json';
import envNew2Asset from '@/assets/env-new/env-2.png.asset.json';
import envNew3Asset from '@/assets/env-new/env-3.png.asset.json';
import { assetUrl } from '@/lib/asset-url';
const envNew1 = { url: assetUrl(envNew1Asset.url) };
const envNew2 = { url: assetUrl(envNew2Asset.url) };
const envNew3 = { url: assetUrl(envNew3Asset.url) };

// 3D Models data
import model3DPlaceholder from '@/assets/3d-model-placeholder.png';
import placeholderAlosaurus from '@/assets/placeholder-alosaurus.png';
import placeholderTrex from '@/assets/placeholder-trex.png';
import placeholderCar from '@/assets/placeholder-car.png';
import placeholderHuts from '@/assets/placeholder-huts.png';
import placeholderJapaneseHouse from '@/assets/placeholder-japanese-house.png';
const models3DVideos = [{
  id: 1,
  video: videos.alosaurus,
  placeholder: placeholderAlosaurus,
  featured: true
}, {
  id: 2,
  video: videos.model6Upload,
  placeholder: model3DPlaceholder
}, {
  id: 3,
  video: videos.car,
  placeholder: placeholderCar
}, {
  id: 4,
  video: videos.modelTrex,
  placeholder: placeholderTrex
}, {
  id: 5,
  video: videos.modelHuts,
  placeholder: placeholderHuts
}, {
  id: 6,
  video: videos.japaneseHouse,
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
  }, {
    id: 13,
    image: portraitNew1Asset.url
  }, {
    id: 14,
    image: portraitNew4Asset.url
  }, {
    id: 15,
    image: portraitNew9Asset.url
  }]
};

const gameIconsArt = [
  { id: 1, image: iz1Asset.url },
  { id: 2, image: iz2Asset.url },
  { id: 3, image: iz3Asset.url },
];

const characterDesignRows = [
  [characterDesign1, characterDesign2, characterDesign3],
  [characterNew1Asset.url, characterNew2Asset.url, characterNew3Asset.url],
  [characterDesign4, characterDesign5, characterDesign6],
];

// Environments data
const environmentsData = [
  { id: 1, image: envNew1.url },
  { id: 2, image: envNew2.url },
  { id: 3, image: envNew3.url },
];

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
      <div className="container mx-auto px-4 lg:pl-20 lg:pr-8 text-muted-foreground">
        {/* 1. ART SECTION */}
        <div id="art" className="mb-20">
          <SectionHeader title="Art" subtitle="Digital art and illustrations" />

          {/* Character Designs */}
          <div className="mb-10">
            <h4 className="text-lg md:text-xl font-orbitron font-semibold text-foreground mb-4">
              Character Designs
            </h4>
            <div className="space-y-4">
              {characterDesignRows.map((row, rowIdx) => (
                <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {row.map((src, i) => (
                    <button
                      key={i}
                      type="button"
                      className="rounded-lg overflow-hidden bg-muted border border-border/30 hover:border-primary/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer aspect-square"
                      onClick={() => setZoomedArtImage(src)}
                      aria-label={`Open character design`}
                    >
                      <img src={src} alt="Character design" loading="lazy" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Digital Portraits */}
          <div className="mb-10">
            <h4 className="text-lg md:text-xl font-orbitron font-semibold text-foreground mb-4">
              Digital Portraits
            </h4>
            <DigitalPortraitsGrid items={artCategories.digitalPortraits} onImageClick={setZoomedArtImage} />
          </div>

          {/* Game Icons */}
          <div className="mb-10">
            <h4 className="text-lg md:text-xl font-orbitron font-semibold text-foreground mb-4">
              Game Icons
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {gameIconsArt.map(item => (
                <button
                  key={item.id}
                  type="button"
                  className="aspect-square rounded-lg overflow-hidden bg-muted border border-border/30 hover:border-primary/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
                  onClick={() => setZoomedArtImage(item.image)}
                  aria-label="Open game icon"
                >
                  <img src={item.image} alt="Game icon" loading="lazy" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2. ENVIRONMENTS SECTION */}
        <div id="environments" className="mb-20">
          <SectionHeader title="Environments" subtitle="Environment art and world design" />

          {/* Environment Images Grid - 1 col mobile, 3 cols desktop */}
          <div className="flex flex-col gap-6 w-full">
            {environmentsData.map(item => <div key={item.id} className="aspect-[16/10] w-full rounded-lg overflow-hidden bg-muted border border-border/30 hover:border-primary/50 transition-all cursor-pointer" onClick={() => setZoomedArtImage(item.image)}>
                <img src={item.image} alt={`Environment ${item.id}`} className="w-full h-full object-cover" />
              </div>)}
          </div>
        </div>

        {/* 3. 3D MODELS SECTION */}
        <div id="3d-models" className="mb-20">
          <SectionHeader title="3D Models" subtitle="High-quality 3D assets and animations" />

          <HeaderVideo src={videos.threeDHeader} />
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
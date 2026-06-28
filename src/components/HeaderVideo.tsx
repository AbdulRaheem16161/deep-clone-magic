import { useEffect, useRef, useState } from 'react';
import placeholderAsset from '@/assets/header-placeholder.png.asset.json';
import { assetUrl } from '@/lib/asset-url';

const placeholderUrl = assetUrl(placeholderAsset.url);

type Props = {
  src: string;
  className?: string;
  priority?: boolean;
};

const HeaderVideo = ({ src, className = '', priority = false }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onReady = () => setReady(true);
    if (v.readyState >= 4) setReady(true);
    v.addEventListener('canplaythrough', onReady);
    v.addEventListener('playing', onReady);
    return () => {
      v.removeEventListener('canplaythrough', onReady);
      v.removeEventListener('playing', onReady);
    };
  }, [src]);

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border border-border/40 shadow-xl bg-black ${className}`}>
      {/* Blurred placeholder */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${ready ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: `url(${placeholderUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(24px) brightness(0.6)',
          transform: 'scale(1.1)',
        }}
        aria-hidden
      />

      {/* Minimal spinner */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${ready ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-hidden={ready}
      >
        <div
          className="w-10 h-10 rounded-full border-2 border-white/20 border-t-white/90 animate-spin"
          style={{ animationDuration: '0.9s' }}
        />
      </div>

      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        // @ts-expect-error fetchpriority is valid
        fetchpriority={priority ? 'high' : 'auto'}
        className={`relative w-full block transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

export default HeaderVideo;

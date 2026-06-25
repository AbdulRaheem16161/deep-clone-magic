// Large videos are externalized as .asset.json files (Lovable big assets).
// Wrapped through assetUrl() so they resolve to an absolute Lovable host
// when the app is served from a non-lovable.app domain (e.g. Vercel).
import trailer1 from "../../public/videos/trailer-1.mp4.asset.json";
import trailer2 from "../../public/videos/trailer-2.mp4.asset.json";
import trailer3 from "../../public/videos/trailer-3.mp4.asset.json";
import cureInfection from "../../public/videos/cure-infection.mp4.asset.json";
import raptorHunter from "../../public/videos/raptor-hunter.mp4.asset.json";
import findImposter from "../../public/videos/find-imposter.mp4.asset.json";
import alosaurus from "../../public/videos/3d-model-alosaurus.mp4.asset.json";
import car from "../../public/videos/3d-model-car.mp4.asset.json";
import japaneseHouse from "../../public/videos/3d-model-japanese-house.mp4.asset.json";
import gamesHeader from "../assets/games-header.mp4.asset.json";
import trailersHeader from "../assets/trailers-header.mp4.asset.json";
import threeDHeader from "../assets/3d-header-new.mp4.asset.json";
import { assetUrl } from "./asset-url";

export const videos = {
  trailer1: assetUrl(trailer1.url),
  gamesHeader: assetUrl(gamesHeader.url),
  trailersHeader: assetUrl(trailersHeader.url),
  threeDHeader: assetUrl(threeDHeader.url),
  trailer2: assetUrl(trailer2.url),
  trailer3: assetUrl(trailer3.url),
  cureInfection: assetUrl(cureInfection.url),
  raptorHunter: assetUrl(raptorHunter.url),
  findImposter: assetUrl(findImposter.url),
  alosaurus: assetUrl(alosaurus.url),
  car: assetUrl(car.url),
  japaneseHouse: assetUrl(japaneseHouse.url),
  // these still live in /public/videos
  model6Upload: "/videos/3d-model-6-upload.mp4",
  model6: "/videos/3d-model-6.mp4",
  modelCompressed: "/videos/3d-model-compressed.mp4",
  modelHuts: "/videos/3d-model-huts.mp4",
  modelTrex: "/videos/3d-model-trex.mp4",
};

// Re-export for direct usage in head() loaders where we need the raw URL.
export const gamesHeaderUrl = assetUrl(gamesHeader.url);

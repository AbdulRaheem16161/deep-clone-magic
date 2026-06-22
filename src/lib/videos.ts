// Large videos are externalized as .asset.json files (Lovable big assets).
// Import their URLs here and re-export so components can keep referencing
// videos by a stable key.
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
import threeDHeader from "../assets/3d-header.mp4.asset.json";

export const videos = {
  trailer1: trailer1.url,
  trailer2: trailer2.url,
  trailer3: trailer3.url,
  cureInfection: cureInfection.url,
  raptorHunter: raptorHunter.url,
  findImposter: findImposter.url,
  alosaurus: alosaurus.url,
  car: car.url,
  japaneseHouse: japaneseHouse.url,
  // these still live in /public/videos
  model6Upload: "/videos/3d-model-6-upload.mp4",
  model6: "/videos/3d-model-6.mp4",
  modelCompressed: "/videos/3d-model-compressed.mp4",
  modelHuts: "/videos/3d-model-huts.mp4",
  modelTrex: "/videos/3d-model-trex.mp4",
};

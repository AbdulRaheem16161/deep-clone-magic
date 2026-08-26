import cureInfectionIcon from '@/assets/cure-infection-icon.png';
import cureInfection1 from '@/assets/cure-infection-screenshot-1.png';
import cureInfection2 from '@/assets/cure-infection-screenshot-2.png';
import cureInfection3 from '@/assets/cure-infection-screenshot-3.png';
import cureInfection4 from '@/assets/cure-infection-screenshot-4.png';
import cureInfection5 from '@/assets/cure-infection-screenshot-5.png';
import cureInfection6 from '@/assets/cure-infection-screenshot-6.png';

import doomIcon from '@/assets/icons/doom.png';
import yomaIcon from '@/assets/icons/yoma.png';
import gumperIcon from '@/assets/icons/gumper.png';
import amongusIcon from '@/assets/icons/amongus.png';
import dinoIcon from '@/assets/icons/dino.png';

import rampageIconAsset from '@/assets/rampage/Rampage_Engine_Icon.png.asset.json';
import rampage1Asset from '@/assets/rampage/Rampage_Engine_screen_shot_1.png.asset.json';
import rampage3Asset from '@/assets/rampage/Rampage_Engine_screen_shot_3.png.asset.json';
import rampage4Asset from '@/assets/rampage/Rampage_Engine_screen_shot_4.png.asset.json';
import rampage5Asset from '@/assets/rampage/Rampage_Engine_screen_shot_5.png.asset.json';
import rampage6Asset from '@/assets/rampage/Rampage_Engine_screen_shot_6.webp.asset.json';
import dinoShot1Asset from '@/assets/dino/Dino_RPG_screen_shot_1.png.asset.json';
import dinoShot2Asset from '@/assets/dino/Dino_RPG_screen_shot_2.png.asset.json';
import dinoShot3Asset from '@/assets/dino/Dino_RPG_screen_shot_3.png.asset.json';

import yoma1Asset from '@/assets/yoma/yoma-1.png.asset.json';
import yoma2Asset from '@/assets/yoma/yoma-2.png.asset.json';
import yoma3Asset from '@/assets/yoma/yoma-3.png.asset.json';
import yoma4Asset from '@/assets/yoma/yoma-4.png.asset.json';
import yoma5Asset from '@/assets/yoma/yoma-5.png.asset.json';
import yoma6Asset from '@/assets/yoma/yoma-6.png.asset.json';
import yoma7Asset from '@/assets/yoma/yoma-7.png.asset.json';
import yoma8Asset from '@/assets/yoma/yoma-8.png.asset.json';
import yomaCoverAsset from '@/assets/yoma/yoma-cover.jpg.asset.json';
import yomaAndroid1Asset from '@/assets/yoma-android/yoma-android-1.png.asset.json';
import yomaAndroid2Asset from '@/assets/yoma-android/yoma-android-2.png.asset.json';
import yomaAndroid3Asset from '@/assets/yoma-android/yoma-android-3.png.asset.json';
import yomaAndroid4Asset from '@/assets/yoma-android/yoma-android-4.png.asset.json';
import yomaAndroid5Asset from '@/assets/yoma-android/yoma-android-5.png.asset.json';
import yomaAndroid6Asset from '@/assets/yoma-android/yoma-android-6.png.asset.json';
import doom3Asset from '@/assets/doom/doom-3.png.asset.json';
import doom6Asset from '@/assets/doom/doom-6.png.asset.json';
import doom7Asset from '@/assets/doom/doom-7.png.asset.json';
import doom8Asset from '@/assets/doom/doom-8.png.asset.json';
import doom9Asset from '@/assets/doom/doom-9.png.asset.json';
import softecBadgeAsset from '@/assets/community/softec-badge.png.asset.json';
import ituAwardAsset from '@/assets/community/itu-award.jpg.asset.json';

import { assetUrl } from './asset-url';

export const softecBadgeUrl = assetUrl(softecBadgeAsset.url);
export const ituAwardUrl = assetUrl(ituAwardAsset.url);

export type Review = {
  title: string;
  stars: number;
  date: string;
  author: string;
  body: string;
};

export type Game = {
  id: string;
  title: string;
  tagline?: string;
  icon?: string;
  iconFallback: string;
  /** Windows / PC download */
  downloadUrl?: string;
  /** Android APK download — undefined means "coming soon" (disabled button) */
  apkUrl?: string;
  /** true when the game also targets mobile (shows an APK button) */
  mobile?: boolean;
  inProgress?: boolean;
  videos: { label: string; youtubeId: string }[];
  screenshots?: string[];
  /** Android-specific screenshots — when present the game page shows a platform switch */
  androidScreenshots?: string[];
  badge?: 'softec';
  /** Windows build size, e.g. "111.91 MB" */
  size?: string;
  /** Credits for community-made games */
  createdBy?: string[];
  /** true = made by other creators, shown in its own sub-section */
  community?: boolean;
  rating?: number;
  ratingCount?: number;
  reviews?: Review[];
};

const DOOM_URL =
  'https://www.dropbox.com/scl/fi/my5qkguxsxbjre0vcx6js/DOOM.zip?rlkey=lwdhra4jhatnng4qhfubjf6io&st=tt51avfz&dl=1';
const CURE_URL =
  'https://www.dropbox.com/scl/fi/5dwhp2ny8d54mmrvk76l3/Cure-and-Infection.zip?rlkey=cpedd2ch8svg267aaqbzxrxic&st=vsr9edng&dl=1';
const YOMA_URL =
  'https://www.dropbox.com/scl/fo/oa5ltyhtee8g73fw0p2xa/ALtnP8xIFsdG2-O1uwyw4gU?rlkey=7lf0dnk0bliwowkh1n831pu74&st=s4abhfz5&dl=1';
const GUMPER_URL =
  'https://www.dropbox.com/scl/fi/ndsqrrf3jqf7rnltkbege/Gumper-Bumper-World.zip?rlkey=ucjbkbnceb3en6f5rcfdgfr3n&st=nv6mnys4&dl=1';
const AMONGUS_URL =
  'https://www.dropbox.com/scl/fi/p13p3clm418gebcvwwwz2/AmongUs-3D.zip?rlkey=5w6ph54vjr5oh7jdunhb7oc8j&st=u4h24rkm&dl=1';
const RAMPAGE_URL =
  'https://www.dropbox.com/scl/fi/lzdpgr38pemwng4rv4x0i/Car-Horde-Survival.zip?rlkey=1xei3xn95i7x9it1z1lho0ivm&st=klwb90xd&dl=1';
const YOMA_APK_URL =
  'https://www.dropbox.com/scl/fi/fca7niezgn7abg8s4q67r/YOMA.apk?rlkey=sn5pdsl7vwjjbnxhm6cju7hfj&st=oqdwqq8q&dl=1';
const SHAPIO_URL =
  'https://www.dropbox.com/scl/fi/rav3r6dvn0vjy2x8fsyaw/Saving-shapio.zip?rlkey=h7dkqdowy2u5oypri6bsc7ssy&st=5kqbwrlc&dl=1';
const ROADRUSH_URL =
  'https://www.dropbox.com/scl/fi/mmn0z27hp2orqebpkb80h/Road-Rush.zip?rlkey=lu3221zk7t4uvbvl4or5jvf2k&st=ul52yzeo&dl=1';
const FOXJOURNEY_URL =
  'https://www.dropbox.com/scl/fi/pumuo75n9ms4gg336rvmy/Fox-Journey.zip?rlkey=lxcc8stc4ce1j1r9x3uqyfl9b&st=2vv57jj2&dl=1';


export const games: Game[] = [
  {
    id: 'doom',
    title: 'Doom',
    tagline: 'Fast-Paced Monster-Shooting FPS',
    icon: doomIcon,
    iconFallback: 'D',
    downloadUrl: DOOM_URL,
    size: '103.79 MB',

    videos: [
      { label: 'Gameplay', youtubeId: 'pggCjcIgk7k' },
      { label: 'Gameplay 2', youtubeId: 'i-jQMD8Vezk' },
      { label: 'Devlog 1', youtubeId: '_i2OdAMMVDM' },
      { label: 'Devlog 2', youtubeId: 'VAdKUHrQ3MY' },
    ],
    screenshots: [doom3Asset, doom6Asset, doom7Asset, doom8Asset, doom9Asset].map((a) =>
      assetUrl(a.url),
    ),
  },
  {
    id: 'cure',
    title: 'Cure N Infection',
    tagline: 'Zombie shooting survival',
    icon: cureInfectionIcon,
    iconFallback: 'C',
    downloadUrl: CURE_URL,
    size: '109.58 MB',

    videos: [
      { label: 'Full Length Gameplay', youtubeId: 'Xmvg2rPg59Q' },
      { label: 'Highlights', youtubeId: 'BRfepakrNBo' },
      { label: 'Trailer', youtubeId: 'ZfL6SylckRg' },
    ],
    screenshots: [
      cureInfection1,
      cureInfection2,
      cureInfection3,
      cureInfection4,
      cureInfection5,
      cureInfection6,
    ],
  },
  {
    id: 'yoma',
    title: 'YOMA',
    tagline: 'Horror Escape — Story Based',
    icon: yomaIcon,
    iconFallback: 'Y',
    downloadUrl: YOMA_URL,
    apkUrl: YOMA_APK_URL,
    mobile: true,
    videos: [{ label: 'Gameplay', youtubeId: 'dkD2cCXrAG0' }],
    screenshots: [
      yomaCoverAsset,
      yoma1Asset,
      yoma2Asset,
      yoma3Asset,
      yoma4Asset,
      yoma5Asset,
      yoma6Asset,
      yoma7Asset,
      yoma8Asset,
    ].map((a) => assetUrl(a.url)),
    androidScreenshots: [
      yomaAndroid1Asset,
      yomaAndroid2Asset,
      yomaAndroid3Asset,
      yomaAndroid4Asset,
      yomaAndroid5Asset,
      yomaAndroid6Asset,
    ].map((a) => assetUrl(a.url)),
  },
  {
    id: 'gumper',
    title: 'Gumper Bumper World',
    tagline: 'Bumper-cart chaos',
    icon: gumperIcon,
    iconFallback: 'G',
    downloadUrl: GUMPER_URL,
    size: '39.21 MB',

    badge: 'softec',
    videos: [
      { label: 'Gameplay', youtubeId: 'e059N0rVpPM' },
      { label: 'Devlog', youtubeId: 'e2TcC0cSglE' },
    ],
  },
  {
    id: 'amongus3d',
    title: 'AmongUs 3D',
    tagline: 'Social deduction, 3D',
    icon: amongusIcon,
    iconFallback: 'A',
    downloadUrl: AMONGUS_URL,
    size: '111.91 MB',

    videos: [
      { label: 'Gameplay', youtubeId: 'S9udobAwd8A' },
      { label: 'Devlog', youtubeId: 'S0t_FS6bSyw' },
    ],
  },
  {
    id: 'dino',
    title: 'Dino RPG',
    tagline: 'Development in progress',
    icon: dinoIcon,
    iconFallback: 'D',
    inProgress: true,
    videos: [{ label: 'Devlog', youtubeId: 'FfPBt5r1db8' }],
    screenshots: [dinoShot1Asset, dinoShot2Asset, dinoShot3Asset].map((a) => assetUrl(a.url)),
  },
  {
    id: 'carhorde',
    title: 'Rampage Engine',
    tagline: 'Development in progress',
    icon: assetUrl(rampageIconAsset.url),
    iconFallback: 'R',
    downloadUrl: RAMPAGE_URL,
    mobile: true,
    inProgress: true,
    videos: [
      { label: 'Devlog', youtubeId: 'FY7GR2Z-Pgs' },
      { label: 'Gameplay', youtubeId: 'JeqE6yjx8hA' },
    ],
    screenshots: [
      rampage1Asset,
      rampage3Asset,
      rampage4Asset,
      rampage5Asset,
      rampage6Asset,
    ].map((a) => assetUrl(a.url)),
  },
];

export const getGame = (id: string) => games.find((g) => g.id === id);

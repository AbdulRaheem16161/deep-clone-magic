import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

// Import profile images
import abdulraheemImg from '@/assets/abdulraheem-new.png';
import kairesImg from '@/assets/kaires.jpg';
import aliKhanImg from '@/assets/ali-khan.jpg';
import raptorbotImg from '@/assets/raptorbot.jpg';

// Custom social media icons
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
  </svg>
);

const FiverrIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h1.527v1.316zm-6.786 1.501h-3.39c.07.576.454.865 1.057.865.43 0 .727-.164.91-.492l1.378.616c-.455.854-1.31 1.302-2.397 1.302-1.705 0-2.673-1.114-2.673-2.653 0-1.54.968-2.653 2.673-2.653s2.442 1.114 2.442 2.653v.362zm-1.625-1.025c-.07-.492-.392-.78-.887-.78-.548 0-.868.288-.94.78h1.827zm-4.26.56c0 .947-.726 1.678-1.775 1.678-.63 0-1.163-.293-1.417-.8v.66h-1.616v-6.853h1.616v2.619c.254-.507.787-.8 1.417-.8 1.049 0 1.775.731 1.775 1.678v1.818zm-1.775-.168c.455 0 .787-.347.787-.775v-1.023c0-.428-.332-.775-.787-.775s-.787.347-.787.775v1.023c0 .428.332.775.787.775zm-3.307-1.65v3.558H2.645v-3.558h-.992v-1.316h.992v-1.54h1.61v1.54h1.162v1.316H4.255zm-4.255.18c0-1.54.968-2.653 2.673-2.653.846 0 1.518.293 1.973.87l-1.163.9c-.254-.345-.516-.454-.81-.454-.548 0-.94.41-.94 1.092v.49c0 .682.392 1.092.94 1.092.294 0 .556-.109.81-.454l1.163.9c-.455.577-1.127.87-1.973.87-1.705 0-2.673-1.114-2.673-2.653z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const ItchIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.08-2.99-3.13-3.612-.346-.198-3.028-.39-8.87-.39-5.843 0-8.524.192-8.87.39zm6.376 6.477a2.74 2.74 0 01-.468.602c-.5.49-1.19.795-1.947.795a2.786 2.786 0 01-1.95-.795c-.182-.178-.32-.37-.446-.602-.127.233-.264.424-.446.602a2.786 2.786 0 01-1.95.795c-.09 0-.18-.006-.268-.015-.084.36-.128.753-.128 1.173v1.17c0 4.08 1.554 7.48 4.108 9.478 1.053.823 2.42 1.404 4.02 1.404h.01c1.6 0 2.968-.58 4.02-1.404 2.555-1.997 4.108-5.398 4.108-9.478v-1.17c0-.42-.044-.813-.128-1.173-.088.01-.178.015-.268.015a2.786 2.786 0 01-1.95-.795 2.682 2.682 0 01-.446-.602c-.127.233-.264.424-.446.602a2.786 2.786 0 01-1.95.795 2.786 2.786 0 01-1.947-.795 2.74 2.74 0 01-.468-.602 2.74 2.74 0 01-.468.602 2.786 2.786 0 01-1.947.795 2.786 2.786 0 01-1.95-.795 2.682 2.682 0 01-.446-.602zm.946 4.856c.315-.29.706-.46 1.13-.46h.822c.424 0 .815.17 1.13.46.314.29.49.68.49 1.084v2.135c0 .404-.176.794-.49 1.084-.315.29-.706.46-1.13.46h-.822a1.626 1.626 0 01-1.13-.46 1.506 1.506 0 01-.49-1.084v-2.135c0-.404.176-.794.49-1.084zm.987.814a.538.538 0 00-.168.27v2.135c0 .095.053.186.168.27a.556.556 0 00.323.103h.822a.556.556 0 00.323-.103.538.538 0 00.168-.27v-2.135a.538.538 0 00-.168-.27.556.556 0 00-.323-.103h-.822a.556.556 0 00-.323.103z"/>
  </svg>
);

interface TeamMember {
  name: string;
  role: string;
  intro: string;
  initials: string;
  image?: string;
  socials: {
    linkedin?: string;
    whatsapp?: string;
    discord?: string;
    youtube?: string;
    fiverr?: string;
    instagram?: string;
    itchio?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'AbdulRaheem',
    role: 'Lead Programmer',
    intro: 'I build immersive gaming experiences with clean, efficient code.',
    initials: 'AR',
    image: abdulraheemImg,
    socials: {
      linkedin: 'https://linkedin.com/in/abdulraheem-usman',
      whatsapp: 'https://api.whatsapp.com/qr/MMPUR4R6XWLOD1?autoload=1&app_absent=0',
      discord: 'https://discord.com/users/999356117492707409'
    }
  },
  {
    name: 'Snek RB',
    role: '3D Modeler & Animator',
    intro: 'I bring characters and worlds to life through 3D art and animation.',
    initials: 'SR',
    socials: {
      discord: 'https://discord.com/users/1368565704139476992'
    }
  },
  {
    name: 'Ali Khan',
    role: 'Programmer',
    intro: 'I craft robust game mechanics and interactive systems.',
    initials: 'AK',
    image: aliKhanImg,
    socials: {
      whatsapp: 'https://wa.me/923344535096',
      linkedin: 'https://linkedin.com/in/muhammadalikhan9909'
    }
  },
  {
    name: 'Faris',
    role: '3D Modeler',
    intro: 'I make detailed game-ready 3D assets and environments.',
    initials: 'FA',
    socials: {}
  },
  {
    name: 'Raptor Bot',
    role: 'Game Designer',
    intro: 'I design engaging gameplay loops and memorable experiences.',
    initials: 'RB',
    image: raptorbotImg,
    socials: {
      youtube: 'https://www.youtube.com/@RaptorBot',
      discord: 'https://discord.com/users/358887740458270731',
      itchio: 'https://raptorbot.itch.io/'
    }
  },
  {
    name: 'Kaires',
    role: 'Digital Artist',
    intro: 'I make stunning character designs and concept art.',
    initials: 'KA',
    image: kairesImg,
    socials: {
      linkedin: 'https://linkedin.com/in/kaires-artworks',
      fiverr: 'https://www.fiverr.com/kairesart',
      instagram: 'https://www.instagram.com/kairesartworks/'
    }
  }
];

const SocialButton = ({
  type,
  url
}: {
  type: 'youtube' | 'linkedin' | 'fiverr' | 'whatsapp' | 'discord' | 'instagram' | 'itchio';
  url: string;
}) => {
  const icons = {
    youtube: <YoutubeIcon />,
    linkedin: <LinkedInIcon />,
    fiverr: <FiverrIcon />,
    whatsapp: <WhatsAppIcon />,
    discord: <DiscordIcon />,
    instagram: <InstagramIcon />,
    itchio: <ItchIcon />
  };

  const labels = {
    youtube: 'YouTube',
    linkedin: 'LinkedIn',
    fiverr: 'Fiverr',
    whatsapp: 'WhatsApp',
    discord: 'Discord',
    instagram: 'Instagram',
    itchio: 'Itch.io'
  };

  const colors = {
    youtube: 'hover:bg-red-600 hover:text-white',
    linkedin: 'hover:bg-blue-600 hover:text-white',
    fiverr: 'hover:bg-green-500 hover:text-white',
    whatsapp: 'hover:bg-green-500 hover:text-white',
    discord: 'hover:bg-indigo-600 hover:text-white',
    instagram: 'hover:bg-pink-600 hover:text-white',
    itchio: 'hover:bg-red-500 hover:text-white'
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className={`gap-2 transition-colors ${colors[type]}`}
      onClick={() => window.open(url, '_blank')}
    >
      {icons[type]}
      <span className="hidden sm:inline">{labels[type]}</span>
    </Button>
  );
};

const MeetTheTeam = () => {
  return (
    <section id="team" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold mb-4 text-foreground">
            Meet The <span className="text-primary">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The talented individuals behind DeepCut Originals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map(member => (
            <Card 
              key={member.name} 
              className="hover:shadow-lg transition-shadow duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                {/* Avatar */}
                <Avatar className="w-24 h-24 border-4 border-foreground/30">
                  {member.image ? (
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                  ) : null}
                  <AvatarFallback className="bg-muted text-xl font-semibold">
                    <User className="w-12 h-12 text-muted-foreground" />
                  </AvatarFallback>
                </Avatar>

                {/* Name and Role */}
                <div>
                  <h3 className="text-xl font-semibold font-orbitron mb-1 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    {member.role}
                  </p>
                </div>

                {/* Intro */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.intro}
                </p>

                {/* Social Links */}
                {Object.keys(member.socials).length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    {member.socials.linkedin && <SocialButton type="linkedin" url={member.socials.linkedin} />}
                    {member.socials.whatsapp && <SocialButton type="whatsapp" url={member.socials.whatsapp} />}
                    {member.socials.discord && <SocialButton type="discord" url={member.socials.discord} />}
                    {member.socials.youtube && <SocialButton type="youtube" url={member.socials.youtube} />}
                    {member.socials.fiverr && <SocialButton type="fiverr" url={member.socials.fiverr} />}
                    {member.socials.instagram && <SocialButton type="instagram" url={member.socials.instagram} />}
                    {member.socials.itchio && <SocialButton type="itchio" url={member.socials.itchio} />}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;

import { Button } from '@/components/ui/button';
import { UserPlus, Users, Gamepad2 } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* About Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold mb-6">
            <span className="text-foreground">About</span>{' '}
            <span className="text-orange">DeepCut Originals</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-center text-lg md:text-lg text-base">
            We build complete fully functional games from programming to final polish. Our work includes 3D models animations environments VFX and cinematic post processing. We also create 2D art character designs concept art and illustrations. Whether you need a single asset or a complete game we focus on delivering quality work done right.
          </p>
        </div>

        {/* Team Stats - Redesigned with vibrant icons */}
        <div className="mb-20 flex justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
            {/* Members */}
            <div className="flex items-center gap-4 bg-card border border-border rounded-2xl px-8 py-6 shadow-lg card-interactive group">
              <div className="w-16 h-16 rounded-xl bg-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-background" />
              </div>
              <div>
                <div className="text-5xl font-inter font-bold text-foreground animate-count">6</div>
                <div className="text-muted-foreground text-sm font-medium">Team Members</div>
              </div>
            </div>

            {/* Games Released */}
            <div className="flex items-center gap-4 bg-card border border-border rounded-2xl px-8 py-6 shadow-lg card-interactive group">
              <div className="w-16 h-16 rounded-xl bg-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Gamepad2 className="w-8 h-8 text-background" />
              </div>
              <div>
                <div className="text-5xl font-inter font-bold text-foreground animate-count">3</div>
                <div className="text-muted-foreground text-sm font-medium">Games Released</div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="border border-border rounded-2xl p-12 max-w-4xl mx-auto text-center shadow-lg bg-card card-interactive">
          <h3 className="text-3xl md:text-4xl font-inter font-bold mb-6">
            <span className="text-orange">Join</span>{' '}
            <span className="text-foreground">Our Team</span>
          </h3>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-center text-sm md:text-lg">
            We are a small indie studio of six and we are always open to welcoming new people. We especially enjoy working with beginners who want to learn grow and start their game development journey with us. If you have passion and a willingness to improve, you belong here.
          </p>
          <Button className="bg-foreground hover:bg-foreground text-background hover:text-background text-base px-8 py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            <UserPlus className="mr-2 h-5 w-5" />
            Join Us
          </Button>
        </div>
      </div>
    </section>;
};
export default About;
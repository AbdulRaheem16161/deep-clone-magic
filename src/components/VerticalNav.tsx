import { Gamepad2, Film, Palette, TreePine, Box } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const navItems = [
  { label: 'Games', icon: Gamepad2, target: 'games' },
  { label: 'Trailers', icon: Film, target: 'trailers' },
  { label: 'Art', icon: Palette, target: 'art' },
  { label: 'Environments', icon: TreePine, target: 'environments' },
  { label: '3D Models', icon: Box, target: '3d-models' },
];

const VerticalNav = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <TooltipProvider>
      <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <Tooltip key={item.target} delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => scrollToSection(item.target)}
                >
                  <IconComponent className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-foreground text-background font-medium">
                {item.label}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </nav>
    </TooltipProvider>
  );
};

export default VerticalNav;

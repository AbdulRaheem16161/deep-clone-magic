import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { softecBadgeUrl, ituAwardUrl } from '@/lib/games';

const SoftecBadgeDialog = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-background">
      <DialogTitle className="sr-only">SOFTEC Game Jam — 2nd Position</DialogTitle>
      <div className="flex flex-col items-center text-center space-y-6 py-2">
        <img
          src={softecBadgeUrl}
          alt="SOFTEC Game Jam 2nd Position"
          className="w-44 h-44 md:w-56 md:h-56 object-contain"
        />

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
          SOFTEC is Pakistan's largest student-led technology event, organized annually by the students of FAST National
          University of Computer and Emerging Sciences. Bringing together thousands of participants from across the country, it
          features competitions, exhibitions, workshops, and industry networking opportunities that celebrate innovation and
          technical excellence.
        </p>

        <p className="text-2xl md:text-3xl font-orbitron font-bold text-orange leading-snug max-w-2xl">
          Our team secured 2nd place in the SOFTEC 2026 Game Jam.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full pt-2">
          <div className="rounded-xl overflow-hidden border border-border/40 bg-black">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7451837718075949056"
              height="600"
              width="100%"
              frameBorder="0"
              allowFullScreen
              title="SOFTEC LinkedIn post"
              className="w-full"
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-border/40 bg-muted">
            <img
              src={ituAwardUrl}
              alt="ITU Congratulations — AbdulRaheem Runner-Up"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default SoftecBadgeDialog;

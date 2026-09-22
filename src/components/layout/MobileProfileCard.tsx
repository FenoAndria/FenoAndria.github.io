import { profileData } from '@/data/profile';
import Portrait from '@/components/ui/Portrait';
import ContactInfo from '@/components/ui/ContactInfo';
import SocialLinks from '@/components/ui/SocialLinks';
import CvButton from '@/components/ui/CvButton';
import TechChip from '@/components/ui/TechChip';

/**
 * Carte de profil mobile (< 1024px, structure sidebar) :
 * portrait, nom, tagline, coordonnées, chips, réseaux et bouton CV,
 * centrés. Le menu de navigation est géré séparément par MobileNav
 * (bouton flottant fixe, disponible dans toutes les sections).
 */

export default function MobileProfileCard() {
  return (
    <div className="flex flex-col items-center gap-[18px] rounded-md border border-line bg-card px-[22px] py-7 text-center">
      <Portrait width={100} height={125} radius={8} priority />
      <div className="font-heading text-lg font-semibold text-body">
        {profileData.name}
      </div>
      {/* <div className="text-[11px] text-muted">{profileData.tagline}</div> */}
      <ContactInfo iconSize={13} className="w-full text-[11px]" />
      <div className="flex flex-wrap justify-center gap-1.5">
        {profileData.stack.map((tech) => (
          <TechChip key={tech} label={tech} small />
        ))}
      </div>
      <SocialLinks size={28} className="justify-center" />
      <CvButton />
    </div>
  );
}

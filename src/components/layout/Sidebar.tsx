import { profileData } from '@/data/profile';
import Portrait from '@/components/ui/Portrait';
import ContactInfo from '@/components/ui/ContactInfo';
import SocialLinks from '@/components/ui/SocialLinks';
import CvButton from '@/components/ui/CvButton';
// import LangSwitch from '@/components/ui/LangSwitch';
import Nav from './Nav';

/**
 * Colonne fixe 350px (structure sidebar, desktop) : panneau plein écran
 * collé au bord gauche, sans carte — portrait → nom → coordonnées →
 * réseaux → nav en flux normal ; seul le CV est plaqué en bas (mt-auto).
 * (FR/EN et tagline désactivés pour le moment, voir commentaires ci-dessous)
 */

export default function Sidebar() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-card px-6 py-6 text-center">
      <div className="flex w-full flex-col items-center gap-4">
        {/* <LangSwitch className="self-end" /> */}
        <Portrait width={150} height={195} priority />
        <div>
          <div className="font-heading text-xl font-semibold text-body">
            {profileData.name}
          </div>
          {/* <div className="mt-2 text-xs text-muted">{profileData.tagline}</div> */}
        </div>
        <ContactInfo className="w-full" />
        <SocialLinks className="justify-center" />
        <div className="w-full border-t border-line" />
        <Nav />
      </div>

      <div className="mt-auto w-full pt-5">
        <CvButton />
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';

/**
 * Suit la section active en comparant, pour chaque [data-section], la
 * proportion de SA PROPRE hauteur actuellement visible dans le viewport —
 * la section avec le ratio le plus élevé est active.
 *
 * Un ratio (plutôt qu'une ligne de déclenchement fixe ou une surface en
 * pixels bruts) évite deux écueils rencontrés précédemment :
 * - une section courte en fin de page (ex. Contact) peut ne jamais
 *   atteindre une ligne de référence si le scroll s'épuise avant qu'elle
 *   ne la franchisse ;
 * - forcer la dernière section dès qu'on atteint le bas de la page fait
 *   sauter par-dessus la section précédente (ex. Compétences) alors
 *   qu'elle occupe encore la majorité de l'écran.
 * Avec un ratio, une section devient active dès qu'elle est
 * majoritairement visible, indépendamment de sa position dans le scroll.
 */
export function useActiveSection(initial = 'about'): string {
  const [active, setActive] = useState(initial);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
    if (sections.length === 0) return;

    let ticking = false;

    const updateActive = () => {
      ticking = false;

      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

      let best: HTMLElement | null = null;
      let bestRatio = -1;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const ratio = rect.height > 0 ? Math.max(0, visible) / rect.height : 0;
        // À égalité (deux sections 100% visibles en même temps, ex. une
        // section courte tout juste rejointe et la suivante qui suit
        // immédiatement), on garde en principe celle trouvée en premier —
        // la plus haute à l'écran, donc celle qu'on vient d'atteindre.
        // Exception en bas de page : le scroll est épuisé, la dernière
        // section ne pourrait jamais l'emporter (ex. Compétences et Contact
        // entièrement visibles sur un grand écran) — on tranche alors en
        // faveur de la plus basse.
        if (ratio > bestRatio || (atBottom && ratio === bestRatio)) {
          bestRatio = ratio;
          best = section;
        }
      }

      const id = best?.getAttribute('data-section');
      if (id) setActive(id);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActive);
      }
    };

    updateActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return active;
}

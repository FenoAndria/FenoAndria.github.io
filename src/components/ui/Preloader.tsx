'use client';

/**
 * Composant Preloader
 * 
 * Affiche une animation de chargement pendant l'initialisation de l'application
 * Utilise l'animation Newton's Cradle pour un effet visuel moderne
 * 
 * @param isLoading - État de chargement de l'application
 */

interface PreloaderProps {
  isLoading: boolean;
}

export default function Preloader({ isLoading }: PreloaderProps) {
  if (!isLoading) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="newtons-cradle">
          <div className="newtons-cradle__dot" />
          <div className="newtons-cradle__dot" />
          <div className="newtons-cradle__dot" />
          <div className="newtons-cradle__dot" />
        </div>
      </div>
    </div>
  );
}

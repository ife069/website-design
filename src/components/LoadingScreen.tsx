import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  isVisible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="relative flex items-center justify-center">
        <img
          src="https://static.wixstatic.com/media/077e28_d4159ed6792442fd98c42a5904e837ba~mv2.png/v1/fill/w_148,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/077e28_d4159ed6792442fd98c42a5904e837ba~mv2.png"
          alt="Able Mind & Body Logo"
          className="h-32 w-32 object-contain z-10"
        />
        <div className="absolute w-40 h-40 border-4 border-t-amb-primary border-r-amb-primary border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-lg font-semibold text-foreground">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
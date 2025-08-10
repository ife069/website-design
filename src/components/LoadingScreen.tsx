import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  isVisible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <img
        src="/able-mind-body-website-logo.jpg"
        alt="Able Mind & Body Logo"
        className="h-32 w-32 object-contain animate-pulse"
      />
    </div>
  );
};

export default LoadingScreen;
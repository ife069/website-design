import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // Delay in milliseconds before animation starts
  duration?: number; // Duration in milliseconds of the animation
  offsetY?: number; // Initial Y offset for slide-up effect in pixels
  className?: string; // Additional Tailwind CSS classes
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 500,
  offsetY = 20,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={cn(
        "transition-all ease-out",
        isVisible ? "opacity-100 translate-y-0" : `opacity-0 translate-y-[${offsetY}px]`,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
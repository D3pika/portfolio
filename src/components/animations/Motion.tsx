import React, { useEffect, useRef, ReactNode } from 'react';

type MotionProps = {
  children: ReactNode;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  whileInView?: Record<string, any>;
  viewport?: Record<string, any>;
  className?: string;
};

export const Motion: React.FC<MotionProps> = ({
  children,
  initial,
  animate,
  transition,
  whileInView,
  viewport,
  className,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!ref.current || (!initial && !animate && !whileInView)) return;
    
    const element = ref.current;
    
    // Apply initial styles
    if (initial) {
      Object.keys(initial).forEach((key) => {
        applyStyle(element, key, initial[key]);
      });
    }
    
    // Apply animation
    if (animate) {
      const delay = transition?.delay || 0;
      const duration = transition?.duration || 0.3;
      
      setTimeout(() => {
        element.style.transition = `all ${duration}s ease`;
        
        Object.keys(animate).forEach((key) => {
          applyStyle(element, key, animate[key]);
        });
      }, delay * 1000);
    }
    
    // Handle whileInView animations
    if (whileInView) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const delay = transition?.delay || 0;
              const duration = transition?.duration || 0.3;
              
              setTimeout(() => {
                element.style.transition = `all ${duration}s ease`;
                
                Object.keys(whileInView).forEach((key) => {
                  applyStyle(element, key, whileInView[key]);
                });
              }, delay * 1000);
              
              // Once animation is triggered, stop observing if viewport.once is true
              if (viewport?.once) {
                observer.unobserve(element);
              }
            }
          });
        },
        { threshold: viewport?.threshold || 0.1 }
      );
      
      observer.observe(element);
      
      return () => {
        observer.disconnect();
      };
    }
  }, [initial, animate, transition, whileInView, viewport]);
  
  const applyStyle = (element: HTMLElement, key: string, value: any) => {
    switch (key) {
      case 'opacity':
        element.style.opacity = value;
        break;
      case 'x':
        element.style.transform = element.style.transform.replace(/translateX\([^)]*\)/g, '');
        element.style.transform += ` translateX(${typeof value === 'number' ? `${value}px` : value})`;
        break;
      case 'y':
        element.style.transform = element.style.transform.replace(/translateY\([^)]*\)/g, '');
        element.style.transform += ` translateY(${typeof value === 'number' ? `${value}px` : value})`;
        break;
      case 'scale':
        element.style.transform = element.style.transform.replace(/scale\([^)]*\)/g, '');
        element.style.transform += ` scale(${value})`;
        break;
      case 'rotate':
        element.style.transform = element.style.transform.replace(/rotate\([^)]*\)/g, '');
        element.style.transform += ` rotate(${typeof value === 'number' ? `${value}deg` : value})`;
        break;
      case 'width':
        element.style.width = typeof value === 'number' ? `${value}px` : value;
        break;
      case 'height':
        element.style.height = typeof value === 'number' ? `${value}px` : value;
        break;
      default:
        break;
    }
    
    // Clean up extra spaces in transform
    if (element.style.transform) {
      element.style.transform = element.style.transform.trim();
    }
  };
  
  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
};
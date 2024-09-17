import React, { useState } from 'react';
import { Paper } from '@mantine/core';
import { CardExpandButton } from './CardExpandButton';

export const CardContainer = ({ children }: { children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState(false);
  const [width, setWidth] = useState(0);
  const componentRef = React.useRef<HTMLDivElement>(null);

  const updateWidth = () => {
    if (componentRef.current) {
      setWidth(componentRef.current.offsetWidth);
    }
  };

  React.useEffect(() => {
    // Update width on initial load
    updateWidth();
    // Update width on window resize
    window.addEventListener('resize', updateWidth);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <Paper
      radius={'lg'}
      className={`bg-white dark:bg-customGray-950/90  
        gridItem relative max-w-full flex-1 min-w-[280px] transition-[width] duration-400 ease self-start
        ${
        expanded ? "gridItem w-full col-span-full" : ''
      }
      shadow hover:shadow-lg trsition-all duration-500
      bg-gradient-to-r from-transparent to-purple-400/0
      relative overflow-hidden
      `}
    >
{/* Vector or symbol background */}
<div className="absolute bottom-0 right-0 w-auto  opacity-20 dark:opacity-20 text-purple-400 -mt-10 overflow-hidden pointer-events-none">
        {/* UTF arrow symbol or a vector icon */}
        <div className="relative   top-[116px]  text-[12rem]" style={{
      WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
      maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
    }}>➔</div>
      </div>

      <CardExpandButton expanded={expanded} setExpanded={setExpanded} showWhenCollapsed={false} />

      <div className="p-4">
        {children}
      </div>
    </Paper>
  );
};

import React, { useState } from 'react';
// Adjust the import path as necessary
import { Paper } from '@mantine/core';

//import { CardExpandButton } from '../__atoms/Card/CardExpandButton';

//import classes from './autogrid.module.css';
import { Candidate } from '@/types/Candidate';

import { DeepNullable } from '@/types/utils/DeepNullable';
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
      `}
    >
      <CardExpandButton expanded={expanded} setExpanded={setExpanded} showWhenCollapsed={false} />

      <div className="p-4">
        {children}
      </div>
    </Paper>
  );
};

//import { TAnyFields } from '@/types/types';
import { Paper } from '@mantine/core';
import * as React from 'react';

type TProps = {
  children: React.ReactNode;
  fitCell?: boolean;
  className?: string;
  expanded?: boolean;
  miw?: string | number;
  onClick?: () => void;
  hasShadow?: boolean;
};

export const CardContainer = ({
  children,
  expanded = false,
  fitCell = true,
  className = '',
  onClick,
 // framed = true,
  hasShadow = false,

  ...props
}: // miw="100%"
TProps ) => {
  //React.PropsWithChildren

  return (
    <Paper
      {...props}
      style={{ position: 'relative', alignSelf: fitCell ? 'stretch' : 'start' }} //!!align-self used to make div not to take 100% height in grid cell
      shadow={(expanded && hasShadow) ? 'lg':"0"}
     // p={expanded ? { base: 'md', md: 'xl' } : 'md'} 
    //  p={framed? (expanded ? { base: 'md', md: 'xl' } : 'md') : '0'}
    //  withBorder = {framed}
      className={className}
      onClick={onClick}
      //component='button'
      // miw={miw} //{expanded ? '100%' : ((innerPageMaxWidth  / 2 ) -32) }//448}
    >
      {/*className*/}
      {children}
    </Paper>
  );
};

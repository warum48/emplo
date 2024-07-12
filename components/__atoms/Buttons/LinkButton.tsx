import { Anchor } from '@mantine/core';
import * as React from 'react';

type TChildren = React.ReactNode;



export const LinkButton = ({children, onClick, ...props}:{children:TChildren, onClick: () => void, [key: string]: any}) => {

    return(
        <Anchor 
       // mt='lg' 
       
                  component="button"
                  size="sm"             
                  onClick={onClick}
                  {...props}
                >
                 {children}
                </Anchor>
    )
}
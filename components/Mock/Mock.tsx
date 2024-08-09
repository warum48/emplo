import { Box } from '@mantine/core'
import * as React from 'react'

export const Mock = ({children}:{children:React.ReactNode}) =>{

    return (
        <Box opacity={.3}>{children}</Box>
    )
}
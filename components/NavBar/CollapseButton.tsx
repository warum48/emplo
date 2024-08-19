import { GlobalContext } from "@/global/context/ContextGlobal";
import { Paper, rem } from "@mantine/core"
import { IconChevronRight } from "@tabler/icons-react"
import React from "react";
import classes from "./CollapseButton.module.css"

export const CollapseButton = () => {
   // const {navBarCollapsed, setNavBarCollapsed} = React.useContext(GlobalContext);
    
    return(
        <Paper withBorder shadow="0" className={classes.but} onClick={() => {}
       // setNavBarCollapsed(!navBarCollapsed)
        }>
            <div className={classes.overlay}></div>
            <IconChevronRight
              stroke={1.5}
              style={{

                width: rem(16),
                height: rem(16),
               // transform: !navBarCollapsed ? 'rotate(-180deg)' : 'none',
              }}
            />
        </Paper>
    )
            }
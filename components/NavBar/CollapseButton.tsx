import { GlobalContext } from "@/global/context/ContextGlobal";
import { Paper, rem } from "@mantine/core"
import { IconChevronRight } from "@tabler/icons-react"
import React from "react";
import classes from "./CollapseButton.module.css"
import { RootState } from "@/rtk/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setLeftSideMenuCollapsed } from '@/rtk/slices/UISettings';

export const CollapseButton = () => {
   // const {navBarCollapsed, setNavBarCollapsed} = React.useContext(GlobalContext);
   const leftSideMenuCollapsed = useSelector((state: RootState) => state.UISettings.leftSideMenuCollapsed);
   const dispatch = useDispatch();
    
    return(
        <div className={classes.but + ' bg-customGray-900 border border-customGray-500'} onClick={() => //{}
       // setNavBarCollapsed(!navBarCollapsed)
       dispatch(setLeftSideMenuCollapsed(!leftSideMenuCollapsed))}
        >
            <div className={classes.overlay}></div>
            <IconChevronRight
              stroke={1.5}
              style={{

                width: rem(16),
                height: rem(16),
                transform: !leftSideMenuCollapsed ? 'rotate(-180deg)' : 'none',
              }}
            />
        </div>
    )
            }
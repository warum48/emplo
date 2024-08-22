import { Group, Code, ScrollArea, rem } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
//import { UserButton } from '../UserButton/UserButton';
import { LinksGroup } from './NavbarLinksGroup';
//import { Logo } from './Logo';
import classes from './NavbarNested.module.css';
import { Routes } from '@/global/ROUTES';
import { CollapseButton } from './CollapseButton';
import { STYLES } from '@/global/CONSTS';
import { useSelector } from 'react-redux';
import { RootState } from '@/rtk/store/store';

/*
const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];
*/

export function NavbarNested() {
  const leftSideMenuCollapsed = useSelector((state: RootState) => state.UISettings.leftSideMenuCollapsed);
  const links = Routes.DASHBOARD.pages.map((item) => <LinksGroup {...item} key={item.label} />);
  const isMobile = false;

  return (
    
    <nav className={classes.navbar + ' =transition-all ' +(  leftSideMenuCollapsed ? STYLES.LEFT_SIDE_NAVBAR.navBarInnerWidth_collapsed : STYLES.LEFT_SIDE_NAVBAR.navBarInnerWidth_expanded)}>
      {/*<div className={classes.header}>
        <Group justify="space-between">
          logo
          <Code fw={700}>v3.1.2</Code>
        </Group>
      </div> */}
      {!isMobile && <CollapseButton />}
     

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

  {/*}    <div className={classes.footer}>
        user but
      </div>*/}

      
    </nav>
  );
}
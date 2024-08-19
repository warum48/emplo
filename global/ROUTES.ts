import { Group, Code, ScrollArea, rem } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconUser,
  IconSettings,
} from '@tabler/icons-react';
//import { UserButton } from '../UserButton/UserButton';


export const Routes = {
    MAIN: '/',
    LOGIN: '/login',
    REGISTRATION: '/registration',
    TEMP_PAGE: '/temp-page',
    JOB_SEARCH: '/job-search',
    DASHBOARD:  {
        MAIN: '/dashboard',
        SEARCH: '/dashboard/search',
        PROFILE: '/dashboard/profile',
        SETTINGS: '/dashboard/settings',
        pages: [
            { label: 'Профиль', icon: IconUser, link: '/dashboard' },
            {
              label: 'Поиск вакансий',
              icon: IconNotes,
              initiallyOpened: true,
              links: [
                { label: 'По внутренней базе данных', link: '/dashboard/search' },
                { label: 'ИИ поиск', link: '/dashboard/search/ai' },
              ],
            },
            {
              label: 'Вакансии',
              icon: IconCalendarStats,
              initiallyOpened: true,
              links: [
                { label: 'Список вакансий', link: '/dashboard/vacancies' },
                { label: 'Новая заявка', link: '/dashboard/vacancies/create' },
              ],
            },
            { label: 'Подать резюме', icon: IconPresentationAnalytics, link: '/dashboard/resume' },
          //  { label: 'Contracts', icon: IconFileAnalytics },
            { label: 'Настройки', icon: IconSettings, link: '/dashboard/settings' },
            /*{
              label: 'Security',
              icon: IconLock,
              links: [
                { label: 'Enable 2FA', link: '/' },
                { label: 'Change password', link: '/' },
                { label: 'Recovery codes', link: '/' },
              ],
            },*/
          ]
    }
};

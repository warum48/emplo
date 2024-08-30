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
    AUTH: '/auth',
    REGISTER: '/register',
    REGISTRATION: '/registration',
    TEMP_PAGE: '/temp-page',
    JOB_SEARCH: '/job-search',
    DASHBOARD:  {
        MAIN: '/dashboard',
        SEARCH: '/dashboard/search',
       // PROFILE: '/dashboard/profile',
        SETTINGS: '/dashboard/settings',
        CALENDAR: '/dashboard/calendar',
        RESUME: '/dashboard/resume',
        VACANCIES: '/dashboard/vacancies',
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
                { label: 'Новая заявка 1С', link: '/dashboard/vacancies/create' },
                { label: 'Новая заявка HH', link: '/dashboard/vacancies/createHH' },
              ],
            },
            { label: 'Подать резюме', icon: IconPresentationAnalytics, link: '/dashboard/resume' },
            { label: 'Календарь', icon: IconGauge, link: '/dashboard/calendar' },
            { label: 'Настройки', icon: IconSettings, link: '/dashboard/settings' },
            
          ]
    }
};

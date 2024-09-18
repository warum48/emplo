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
  IconSearch,
  IconRobot,
  IconUpload,
  IconCalendar,
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
              icon: IconSearch,
              initiallyOpened: true,
              links: [
                { label: 'По внутренней базе данных', link: '/dashboard/search' },
                { label: 'ИИ поиск', link: '/dashboard/search/ai' },
              ],
            },
            {
              label: 'Вакансии',
              icon: IconRobot,
              initiallyOpened: true,
              links: [
                { label: 'Список вакансий', link: '/dashboard/vacancies' },
                { label: 'Новая заявка 1С', link: '/dashboard/vacancies/create' },
                { label: 'Новая заявка HH', link: '/dashboard/vacancies/createHH' },
              ],
            },
            { label: 'Подать резюме', icon: IconUpload, link: '/dashboard/resume' },
            { label: 'Календарь', icon: IconCalendar, link: '/dashboard/calendar' },
            { label: 'Настройки', icon: IconSettings, link: '/dashboard/settings' },
            
          ]
    }
};

/*
Профиль (Profile):

IconUser from @tabler/icons-react
Alternative: FaUserAlt from react-icons/fa
Поиск вакансий (Job Search):

IconSearch from @tabler/icons-react
Alternative: FaSearch from react-icons/fa
По внутренней базе данных (Internal Database Search):

IconDatabase from @tabler/icons-react
Alternative: AiOutlineDatabase from react-icons/ai
ИИ поиск (AI Search):

IconRobot from @tabler/icons-react
Alternative: FaRobot from react-icons/fa
Вакансии (Vacancies):

IconClipboardList from @tabler/icons-react
Alternative: FaClipboardList from react-icons/fa
Список вакансий (Vacancy List):

IconListDetails from @tabler/icons-react
Alternative: FaListAlt from react-icons/fa
Новая заявка 1С (New 1C Request):

IconDocument from @tabler/icons-react
Alternative: AiOutlineFileAdd from react-icons/ai
Новая заявка HH (New HH Request):

IconDocument from @tabler/icons-react (reuse for consistency)
Alternative: AiOutlineFileAdd (reuse for consistency)
Подать резюме (Submit Resume):

IconUpload from @tabler/icons-react
Alternative: AiOutlineUpload from react-icons/ai
Календарь (Calendar):

IconCalendar from @tabler/icons-react
Alternative: FaRegCalendarAlt from react-icons/fa
Настройки (Settings):

IconSettings from @tabler/icons-react
Alternative: AiOutlineSetting from react-icons/ai
*/

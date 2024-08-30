'use client';
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // TODO check if I need it
import timeGridPlugin from '@fullcalendar/timegrid'; // TODO check if I need it
import './fullcalendar.css';
import ruLocale from '@fullcalendar/core/locales/ru';

import { Box, Grid, Modal, SimpleGrid, Space } from '@mantine/core';
import { useCookies } from 'react-cookie';

import {
  TextInfo,
  Title1_main,
  Title2_second,
  Title4_second,
} from '@/components/__atoms/TextBlocks/TextBlocks';
import { AppointmentItem } from '@/components/_dashboard/_calendar/AppointmentItem';
import { useDisclosure } from '@mantine/hooks';
import dayjs from 'dayjs';

//import { EventsCalendar } from '@/__generated__/graphql';
////import { SpecialQueryPatientSelector } from '@/components/PatientSelector/SpecialQueryPatientSelector';
//import { DateAndTimeAreLaterThanNow } from '@/utils/DateAndTimeAreLaterThanNow';
//import { formatDateWithTimeToTime } from '@/utils/formatDates';
import { GlobalContext } from '@/global/context/ContextGlobal';
//import { useCalendar, TCalendarService } from '@/global/services/useCalendar';
import { DateUtils } from '@/utils/DateUtils';
import { mock } from './mock';
import { EventsCalendar } from '@/components/_dashboard/_calendar/types';
import { DashBoardPageContainer } from '@/components/_dashboard/predictor/DashBoardPageContainer';
import { BgColors } from '@/components/_dashboard/predictor/BgColors.tsx/BgColors';

export default function CalendarPage() {
  const [cookieToken, setCookieToken, removeCookieToken] = useCookies(['mednekot']);
  const [expandedAppointmentIndex, setExpandedAppointmentIndex] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);
  const [localPatientIdVar, localPatientIdVarSetter] = useState(0);
  const [showAllUsers, setShowAllUsers] = React.useState(true);
  const [calKey, setCalKey] = useState(0);
  const [events, setEvents] = useState<{ title: any; date: any; start: any; end: any }[]>([]);

  const calendarData = mock.data.getEventsCalendar.data;

  //const {CalendarService} = React.useContext(GlobalContext);

  const defEvent = {
    title: '',
    date: '',
    start: '',
    end: '',

    extendedProps: {
      index: 0,
      fullEventInfo: {},
    },
  };

  const [eventView, setEventView] = useState(false);
  const [curEvent, setCurEvent] = useState(defEvent);

  const userHasAppointments = true;

  /*
  const {
    data: data_events_calendar,
    loading: loading_events_calendar,
    error: error_events_calendar,
    refetch: refetch_events_calendar,
    networkStatus: networkStatus_events_calendar,
  } = useQuery(GET_EVENTS_CALENDAR, {
    context: { clientName: APOLLO_LINKS_CONTEXT.main },
    variables: showAllUsers
      ? {
          startDate: '2023-01-01',
          endDate: '2024-12-31',
        }
      : {
          patientIds: [localPatientIdVar], //$patientIds
          startDate: '2023-01-01',
          endDate: '2024-12-31',
        },
  });*/

  /*
  const {
    data_events_calendar,
    loading_events_calendar,
    error_events_calendar,
    refetch_events_calendar,
    networkStatus_events_calendar,
    calendarData
  } = CalendarService;

  React.useEffect(() => {
    CalendarService.loadCalendar({variables: showAllUsers
      ? {
          startDate: '2023-01-01',
          endDate: '2024-12-31',
        }
      : {
          patientIds: [localPatientIdVar], //$patientIds
          startDate: '2023-01-01',
          endDate: '2024-12-31',
        }});
  }, [])
  */

  React.useEffect(() => {
    const transformedArray = calendarData?.map((item, index) => {  //CalendarService.
      return {
        extendedProps: { index: index, fullEventInfo: item, paymentId: item.paymentId },
        title: item.doctorsFio,
        date: item?.serviceDateAndTime?.split('T')[0],
        start: item?.serviceDateAndTime,
        end: calculateEndTime(item?.serviceDateAndTime, item.serviceDuration), // You need to implement the calculateEndTime function
      };
    });
    if (transformedArray && transformedArray.length > 0) {
      setEvents(transformedArray);
    } else {
      setEvents([]);
    }
    setCalKey(calKey + 1);
  }, [calendarData]);

 /* React.useEffect(() => {
    //refetch_events_calendar();
    CalendarService.loadCalendar({variables: showAllUsers
      ? {
          startDate: '2023-01-01',
          endDate: '2024-12-31',
        }
      : {
          patientIds: [localPatientIdVar], //$patientIds
          startDate: '2023-01-01',
          endDate: '2024-12-31',
        }});
  }, [localPatientIdVar]);*/

  function calculateEndTime(startTime: string, duration: string | null | undefined) {
    const start = new Date(startTime);
    const end = duration ? new Date(start.getTime() + parseFloat(duration) * 60000) : null; // Adding duration in minutes to the start time
    return end?.toISOString();
  }


  const handleEventClick = (clickInfo: any) => {
    setEventView(true);
    setCurEvent(clickInfo.event);
    open();
  };

  return (
    <DashBoardPageContainer header="Календарь">
      <Box
        mx="auto"
        w={'100%'}
      >
        <div className="absolute -left-[200px] -top-[20px]  w-full h-full ">
        <div
          className="absolute scale-y-100 scale-x-150 left-0 top-0 h-full w-2/3
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-300/30 via-cyan-300/0 to-blue-600/0
          dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:from-blue-800/30 dark:via-cyan-800/0 dark:to-blue-600/0
          "
          //from-blue-200/50
          //h-[1000px]
        ></div>
      </div>

      <div className="absolute right-[0px] top-0 w-full h-full ">
        <div
          className="absolute scale-y-120 scale-x-150 -right-64 top-0  h-full w-2/3
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-200/30 via-purple-600/0 to-blue-600/0
          dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:from-pink-500/10 dark:via-pink-700/0 dark:to-pink-600/0
          "
        ></div>
      </div>
        
        <div className="hidden">
          
          <h3 className="dashboard-section-header">Ближайшие записи:</h3>
            
            <Space h="xs" />
            <SimpleGrid
              cols={{ base: 1, lg: 2 }}
              spacing={{ base: 'md', sm: 'md' }}
              verticalSpacing={{ base: 'md', sm: 'md' }}
            >
              {calendarData
                ?.filter((item) => DateUtils.DateAndTimeAreLaterThanNow(item?.serviceDateAndTime))
                .map((item: EventsCalendar, index: number) => (
                  <AppointmentItem
                    {...item}
                   // refetch_events_calendar={refetch_events_calendar}
                    setExpandedAppointmentIndex={setExpandedAppointmentIndex}
                    expandedAppointmentIndex={expandedAppointmentIndex}
                    appointmentIndex={index}
                    hasShadow={true}
                    key={'ap' + index + '_'+item?.serviceDateAndTime}
                  />
                ))}
            </SimpleGrid>
            {events.length == 0 && calendarData?.length == 0 && <TextInfo>Нет записей</TextInfo>}
          
        </div>

       

        
        <Box
          className="calendar_page_calendar shadow-2xl bg-white/40 dark:bg-slate-800/20"
          maw={1000}

          mx="auto"
          p="md"
          //mb='xl'
        >
          {userHasAppointments ? (
            <Box>
              {events.length > 0 && (
                <FullCalendar
                  fixedWeekCount={false}
                  key={'ke' + calKey + '_' + localPatientIdVar}
                  plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                  ]}
                  headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridDay', 
                  }}
                  initialView="dayGridMonth"
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  firstDay={1}
                  locale={ruLocale}
                  initialEvents={events} 
                  eventClick={handleEventClick}

                  eventContent={(info) => {
                    return {
                      html: `<div class="fc-daygrid-event-dot"></div>
                              <div class="fc-event-time">${DateUtils.formatDateWithTimeToTime(
                                info.event.startStr
                              )}</div>
                              <div class="fc-event-title">${info.event.title}</div>
                              `,
                    };
                  }}
                />
              )}
            </Box>
          ) : (
            <Box>Нет записей</Box>
          )}
        </Box>
      </Box>
     
      <Modal.Root
        opened={opened}
        onClose={close}
        centered
        size="auto"
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>
              <Title4_second>
                {'Посещение ' + dayjs(curEvent?.start).format('DD.MM.YYYY HH:mm')}
              </Title4_second>
            </Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <AppointmentItem
              onUpdateAppointment={close}
              expandable={false}
              framed={false}
              hasShadow={false}
            //  refetch_events_calendar={refetch_events_calendar}
              {...curEvent.extendedProps.fullEventInfo}
              key={'ap' + curEvent.extendedProps.index}
            />
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </DashBoardPageContainer>
  );
}

//https://stackoverflow.com/questions/57194259/react-fullcalendar-v4-tooltip

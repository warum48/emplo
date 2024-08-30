import { Avatar, Text, Group, Stack, Divider, Box, Center, useMantineTheme } from '@mantine/core';

import { useState } from 'react';
import 'dayjs/locale/ru';
//import { CardContainer } from '../__Atoms&Molecules/Card/CardContainer';
//import { CardExpandButton } from '../__Atoms&Molecules/Card/CardExpandButton';
//import { StyledButton } from '../__Atoms&Molecules/Buttons/StyledButton';
import {
  Card_pretitle,
  Card_title,
  TextInfo,
  TitleLabel,//
} from '@/components/__atoms/TextBlocks/TextBlocks';
//import { SpaceYMain } from '../__Atoms&Molecules/Spacers/Spacers';
//import { EventsCalendar } from '@/__generated__/graphql';
//import { formatDateFullToRuWithTime } from '@/utils/formatDates';
//import { CancelAppointmentWidget } from './CancelAppointmentWidget';
//import { Reschedule } from './Reschedule/Reschedule';
import React from 'react';

import { DateUtils } from '@/utils/DateUtils';
import { SpaceYMain } from '@/components/__atoms/Spacers/Spacers';
import { CardContainer } from '@/components/__atoms/Card/CardContainer';
import { CardExpandButton } from '@/components/__atoms/Card/CardExpandButton';
import type {EventsCalendar} from '@/components/_dashboard/_calendar/types'; // "@/components/_dashboard/_calendar/types";
import { Debugger } from '@/components/__atoms/Debugger/Debugger';
//import { DateAndTimeAreLaterThanNow } from '@/utils/DateAndTimeAreLaterThanNow';

export function AppointmentItem({
  framed = true,
  expandable = true,
  doctorsPosition,
  doctorsFio,
  serviceDateAndTime,
  userId,
  userFio,
  userBirthDate,

  serviceName,
  servicePreparationRules,
  serviceDuration,
  medicalCenterName,
  medicalCenterAddress,
  roomNumber,
  isPaid,
  isDone,
  paymentId,
  userServiceCartClientId,
  accessTicketClientId,
  doctorIdVar,

  medicalCenterId,
  doctorMcentersId,
  serviceId,

  refetch_events_calendar,
  setExpandedAppointmentIndex,
  expandedAppointmentIndex,
  appointmentIndex,
  hasShadow = false,
  onUpdateAppointment,
}: EventsCalendar & {
  expandable?: boolean;
  framed?: boolean;
  hasShadow?: boolean;
  refetch_events_calendar?: () => void;
  doctorIdVar?: number | null;
  setExpandedAppointmentIndex?: React.Dispatch<React.SetStateAction<number>>;
  expandedAppointmentIndex?: number;
  appointmentIndex?: number;
  onUpdateAppointment?: () => void;
}) {
  // avatar,  name, title, timeStart
  // const { classes } = useStyles();
  const [expanded, setExpanded] = useState(expandable ? false : true);
  const [rescheduleOpen, setRescheduleOpen] = useState(false);
  const hasPhoto = false;
  const avatar = '';
  const theme = useMantineTheme();

  React.useEffect(() => {
    if (expanded && setExpandedAppointmentIndex) {
      setExpandedAppointmentIndex(appointmentIndex || 0);
    }
  }, [expanded]);

  React.useEffect(() => {
    if (expanded && expandedAppointmentIndex !== appointmentIndex) {
      //setExpandedAppointmentIndex(appointmentIndex || 0)
      setExpanded(false);
    }
  }, [expandedAppointmentIndex]);

  return (
    <CardContainer
      fitCell={false}
      expanded={expanded}
    //  framed={framed}
      hasShadow={hasShadow}

      //miw={expanded ? '100%' : ((innerPageMaxWidth  / 2 ) -40) }//448} //-32
    >
      {expandable && <CardExpandButton expanded={expanded} setExpanded={setExpanded} />}

      <Group wrap="nowrap">
        {hasPhoto && (
          <>
            <Avatar src={avatar} visibleFrom="md" size={expanded ? 150 : 80} radius="md" />
            <Avatar src={avatar} hiddenFrom="md" size={80} radius="md" />
          </>
        )}
        <div>
          {/*paymentId*/}
          <Card_pretitle>{doctorsPosition}</Card_pretitle>

          <Card_title>{doctorsFio}</Card_title>

          
          <Group gap="xs">
            <TitleLabel>Время приема:</TitleLabel>
            <TextInfo>02.02.2025{/*DateUtils.formatDateFullToRuWithTime(serviceDateAndTime)*/}</TextInfo>
          </Group>

          <Group gap="xs">
            <TitleLabel>Медцентр:</TitleLabel>
            <TextInfo>{medicalCenterName}</TextInfo>
          </Group>
          <Group gap="xs">
            {/*<TitleLabel>Адрес:</TitleLabel>*/}
            <TextInfo>{medicalCenterAddress}</TextInfo>
          </Group>
        </div>
      </Group>
      {expanded && (
        <>
          <Box
            style={{
              //position: rescheduleOpen ? 'absolute' : 'relative',
              //top: 0,
              //right: 0,
              //opacity: rescheduleOpen ? 0 : 1,
              display: rescheduleOpen ? 'none' : 'block',
            }}
          >
            <SpaceYMain />
            {/*<TitleLabel></TitleLabel>userId*/}
            <Stack gap="xs">
              <Group gap="xs">
                <TitleLabel>ФИО пациента:</TitleLabel>
                <TextInfo>
                  {userFio} {/*userId*/}
                </TextInfo>
              </Group>
              <Group gap="xs">
                <TitleLabel>Дата рождения пациента:</TitleLabel>
                <TextInfo>02/02/2002</TextInfo>
              </Group>
              {/*<Group gap='xs'><TitleLabel>Время приема:</TitleLabel><TextInfo>{formatDateNormalFullToRu(serviceDateAndTime)}</TextInfo></Group>*/}
              <Group gap="xs">
                <TitleLabel>Услуга:</TitleLabel>
                <TextInfo>{serviceName}</TextInfo>
              </Group>
              {servicePreparationRules && (
                <Group gap="xs">
                  <TitleLabel>Подготовка к приему:</TitleLabel>
                  <TextInfo>{servicePreparationRules}</TextInfo>
                </Group>
              )}
              <Group gap="xs">
                <TitleLabel>Длительность приема:</TitleLabel>
                <TextInfo>{serviceDuration} мин</TextInfo>
              </Group>

             
              <Group gap="xs">
                <TitleLabel>Статус оплаты:</TitleLabel>
                <TextInfo>{isPaid ? 'оплачено' : 'не оплачено'}</TextInfo>
              </Group>
              {/*!DateUtils.DateAndTimeAreLaterThanNow(serviceDateAndTime) && (
                <Group gap="xs">
                  <TitleLabel>Статус выполнения:</TitleLabel>
                  <TextInfo>{isDone ? 'выполнена' : 'не выполнена'}</TextInfo>
                </Group>
              )*/}
              <Debugger>
                <Group gap="xs">
                  <TitleLabel>paymentId:</TitleLabel>
                  <TextInfo>{paymentId}</TextInfo>
                </Group>
                <Group gap="xs">
                  <TitleLabel>userServiceCartClientId:</TitleLabel>
                  <TextInfo>{userServiceCartClientId}</TextInfo>
                </Group>
              </Debugger>
            </Stack>
            </Box>
{/*
            {isPaid && DateAndTimeAreLaterThanNow(serviceDateAndTime) || true && (
              <>
                <SpaceYMain />
                <TextInfo>
                  <sup>*</sup>
                  <b>
                    Отказ от оплаченной услуги и возврат 
                    <br />денежных  средств возможны только <Text c={theme.other.virilisPink}>при личном посещении медицинского центра</Text>
                  </b>
                </TextInfo>
              </>
            )}
            {DateAndTimeAreLaterThanNow(serviceDateAndTime) && (
              <>
                <Divider my="xl" />
                <Group>
                  {' '}
                  <StyledButton
                    appearance="main_second_outlined"
                    onClick={() => {
                      setRescheduleOpen(true);
                    }}
                  >
                    Перенести запись
                  </StyledButton>
                  {!isPaid && !isDone && (
                    <CancelAppointmentWidget
                      isPaid={isPaid}
                      isDone={isDone}
                      paymentId={paymentId}
                      userServiceCartClientId={userServiceCartClientId}
                      refetch_events_calendar={refetch_events_calendar}
                      onUpdateAppointment={() => {
                        onUpdateAppointment?.(), setExpanded(false);
                      }}
                    />
                  )}
                </Group>
              </>
            )}
          </Box>

          {rescheduleOpen && (
            <Center>
              <Reschedule
                onUpdateAppointment={() => {
                  onUpdateAppointment?.(), setExpanded(false);
                }}
                setRescheduleOpen={setRescheduleOpen}
                doctorIdVar={doctorMcentersId || 0}
                medicalCenterId={medicalCenterId}
                userServiceCartClientId={userServiceCartClientId}
                accessTicketClientId={accessTicketClientId}
                appDuration={serviceDuration}
                refetch_events_calendar={refetch_events_calendar}
                // rescheduleOpen={rescheduleOpen}
              />
            </Center>
          )}
            */}
        </>
      )}
    </CardContainer>
  );
}

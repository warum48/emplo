import { Group, Paper, Grid, List, Space, Center, Avatar, Button } from '@mantine/core';
import { useState } from 'react';
import 'dayjs/locale/ru';

import {
  CardPreTitle,
  CardTitle,
  TextInfo,
  TitleLabel,
} from '@/components/__atoms/TextBlocks/TextBlocks';

//import { useLazyQuery, useQuery, useReactiveVar } from '@apollo/client';
import React from 'react';
import { CardExpandButton } from '@/components/__atoms/Card/CardExpandButton';
import classes from './DoctorChooser.module.css';
//import { GlobalContext } from '@/global/context/ContextGlobal';
//import { SpaceYMain } from '@/components/__atoms/Spacers/Spacers';
import { SpaceYMain } from '@/components/__atoms/Spacers/Spacers';
//import { doctorInfo } from '../../x-mockdata/mockdata';
import { DoctorAvatarContainer } from '@/components/__atoms/AvatarContainer/AvatarContainer';
//import { StyledButton } from '../../__Atoms&Molecules/Buttons/StyledButton';
//import { doctorIdVar, medicalCenterIdVar } from '@/apollo/state/appointment/globalvars';
import { Mock } from '@/components/__atoms/Mock/Mock';

//import { formatDateNormalToRuDayMonth } from '@/utils/formatDates';
//import { formatAgeString } from '@/utils/formatAgeString';
//import getAgeInYearsFromDate from '@/utils/getAgeInYearsFromDate';

//import { medicalCenterIdVar } from '@/apollo/state/medcenter/medcenter';
//import { doctorIdVar } from '@/apollo/state/appointment/_persisted';
import { Preloader } from '@/components/__atoms/Preloader/Preloader';

type TProps = {
 // nextStep: () => void;
 // doctorId: number;
  id: number;
  firstName?: string;
  lastName: string;
  patronymic?: string | null;
  photo?: string | null;
  birthDate?: string;
  specialityName?: string;
  makeAppointment: (id: number | null) => void;
 
};

export function DoctorInfo({
 // doctorId,
  id, //!!TODO check wtf why just id and where this id goes from
  firstName,
  lastName,
  patronymic,
  photo,
  birthDate,
  specialityName,
  //nextStep,
  makeAppointment
}: TProps ) { //Partial<TProps>
  const [expanded, setExpanded] = useState(false);
  //const { isMobile } = React.useContext(GlobalContext);
  //const medicalCenterIdVar_re = useReactiveVar(medicalCenterIdVar);
  //const { AppointmentService } = React.useContext(GlobalContext);


 /* const [
    _getDoctorDates,
    {
      data: data_dates, //DoctorResult
      loading: loading_dates,
      error: error_dates,
    },
  ] = useLazyQuery(GET_ACCESS_TICKET__DATES_LIST, {
    context: { clientName: 'main' },
    variables: {
      descSorting: true,
      limit: getAccessTicketLimit,
      filteringAttrs: {
        doctorMcenters: {
          id: [id || 0], // doctorId//TODO add medcenter
          medicalCenterId: medicalCenterIdVar_re ? [medicalCenterIdVar_re] : undefined, //[35]
        },
      },
    },
  }); */

 
  React.useEffect(() => {
    if (expanded) {
     // _getDoctorsService();
      //_getDoctorDates();
    }
  }, [expanded]);

  return (
    <Paper
      shadow="0"
      p={expanded ? { base: 'xs', md: 'xl' } : 'xs'}
      withBorder
      className={`${classes.gridItem} ${expanded ? classes.expanded : ''}`}
    >
      <CardExpandButton expanded={expanded} setExpanded={setExpanded} showWhenCollapsed={false} />
      <Grid>
        <Grid.Col span="auto" maw="100%">
          <Group wrap="nowrap" align="flex-start">
            <DoctorAvatarContainer
              photo={photo}
              expanded={expanded}
              isMobile={false}
              setExpanded={setExpanded}
            />
            <div>
              <CardPreTitle>{specialityName || 'Кандидат'}</CardPreTitle>
              <CardTitle>
                {(lastName ? lastName : '') +
                  ' ' +
                  (firstName ? firstName : '') +
                  ' ' +
                  (patronymic ? patronymic : '') || 'Неизвестно'}
              </CardTitle>
              <div className='text-sm'>
              <b>Детский Мир</b> - Продавец-кассир<br/>
              <b>Пекарня-кондитерская "крем"</b> - Пекарь<br/>
              <b>Суши бар "shido"</b> - Промоутер-консультант<br/>
              </div>
              <br />

              {!expanded && (
                <>
                  <Button
                    my="xs"
                   // appearance={'main_small_second_transparent'}
                    onClick={() => {
                      makeAppointment(id);
                      //doctorIdVar([ id || 0]); //doctorId
                      //nextStep?.();
                    }}
                  >
                    Отобрать
                  </Button>
                </>
              )}
            </div>
          </Group>
          {expanded && (
            <>
              <SpaceYMain />
              {/*birthDate && (
                <>
                  Возраст: {getAgeInYearsFromDate(birthDate)}{' '}
                  {formatAgeString(getAgeInYearsFromDate(birthDate))}
                  <br />
                </>
              )*/}

              
              <Space h="xxs" />
              <Center>
                <Button
                 // appearance={'main_second'}
                  onClick={() => {
                    //doctorIdVar([ id || 0]); //doctorId
                    //nextStep?.();
                    makeAppointment(id);
                  }}
                >
                  Отобрать
                </Button>
              </Center>
            </>
          )}
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

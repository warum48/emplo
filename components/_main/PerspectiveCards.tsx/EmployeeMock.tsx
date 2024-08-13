import React, { useState } from 'react';
import {
  TitleLabel,
  TextInfo,
  CardPreTitle,
  CardTitle,
} from '@/components/__atoms/TextBlocks/TextBlocks'; // Adjust the import path as necessary
import { Button, Center, Grid, Group, Paper, Space } from '@mantine/core';
import { DoctorAvatarContainer } from '@/components/__atoms/AvatarContainer/AvatarContainer';
import { CardExpandButton } from '@/components/__atoms/Card/CardExpandButton';
import { SpaceYMain } from '@/components/__atoms/Spacers/Spacers';
import classes from './autogrid.module.css';



type DeepNullable<T> = {
  [P in keyof T]: T[P] extends object ? DeepNullable<T[P]> | null : T[P] | null;
};

const EmployeeMock: React.FC<{className?: string}> = ({className}:{className?: string}) => {
  
  const [expanded, setExpanded] = useState(false);
  return (
    <Paper
      p="md"
      shadow="xs"
      withBorder
      className={`border-4 bg-white/90 dark:bg-customGray-950/90  ${classes.gridItem} ${expanded ? classes.expanded : ''}` + (className ? ' ' + className : '')}
    >
      <CardExpandButton expanded={expanded} setExpanded={setExpanded} showWhenCollapsed={false} />
      <Grid>
        <Grid.Col span="auto" maw="100%">
          <Group wrap="nowrap" align="flex-start">
            <DoctorAvatarContainer
              photo={''}
              expanded={expanded}
              isMobile={false}
              setExpanded={setExpanded}
            />

            <div>
              {/*<CardPreTitle>{specialityName || 'Кандидат'}</CardPreTitle>*/}

             
                <CardTitle>
                  Иванов Иван Иванович
                </CardTitle>
              
              <div>
                <TitleLabel>Возраст:</TitleLabel> <TextInfo>{20}</TextInfo>
                {/*<TitleLabel>Опыт работы:</TitleLabel> <TextInfo>12 лет</TextInfo>*/}
              </div>
              <div>
                  <TitleLabel>Пол:</TitleLabel> <TextInfo>Мужской</TextInfo>
                </div>
                <div>
                  <TitleLabel>Зарплата:</TitleLabel> <TextInfo>90000&nbsp;₽</TextInfo>
                </div>
              <br />
              {/*<div className="text-xs">
                <b>Детский Мир</b> - Продавец-кассир
                <br />
                <b>Пекарня-кондитерская "крем"</b> - Пекарь
                <br />
                <b>Суши бар "shido"</b> - Промоутер-консультант
                <br />
              </div>*/}

              <div className="text-xs">
              {/*employee?.experience?.filter(item => item?.company && item?.position)
        .map((item, index) => (
          <div key={index}>
            <b>{item?.company}</b> - {item?.position}
          </div>
        ))*/}
              </div>

              
            </div>
          </Group>

        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default EmployeeMock;

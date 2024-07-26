import React, { useState } from 'react';
import {
  TitleLabel,
  TextInfo,
  CardPreTitle,
  CardTitle,
} from '@/components/__atoms/TextBlocks/TextBlocks'; // Adjust the import path as necessary
import { Button, Center, Grid, Group, Paper, Space } from '@mantine/core';
import { DoctorAvatarContainer } from '../__atoms/AvatarContainer/AvatarContainer';
import { CardExpandButton } from '../__atoms/Card/CardExpandButton';
import { SpaceYMain } from '../__atoms/Spacers/Spacers';
import classes from './autogrid.module.css';

interface Experience {
  start: string;
  end: string | null;
  company: string;
  company_id: string;
  industry: string | null;
  industries: Array<{
    id: string;
    name: string;
  }>;
  area: string | null;
  company_url: string;
  employer: {
    id: string;
    name: string;
    url: string;
    alternate_url: string;
    logo_urls: {
      '90': string;
    };
  };
  position: string;
  description: string;
}

interface Candidate {
  id: number;
  candidate_id: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  age: number;
  gender: string;
  birth_date: string;
  alternate_url: string;
  area: string;
  business_trip_readiness: string;
  skills: string;
  salary: number;
  experience: Experience[];
}

interface EmployeeProps {
  employee: DeepNullable<Candidate>;
}

type DeepNullable<T> = {
  [P in keyof T]: T[P] extends object ? DeepNullable<T[P]> | null : T[P] | null;
};

const Employee: React.FC<EmployeeProps> = ({ employee }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Paper
      p="md"
      shadow="xs"
      withBorder
      className={`bg-neutral-50/90 dark:bg-customGray-950/90  ${classes.gridItem} ${expanded ? classes.expanded : ''}`}
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

              {(employee.last_name || employee.first_name || employee.middle_name) && (
                <CardTitle>
                  {(employee.last_name ? employee.last_name : 'Иванов') +
                    ' ' +
                    (employee.first_name ? employee.first_name : 'Иван') +
                    ' ' +
                    (employee.middle_name ? employee.middle_name : 'Иванович') || ''}
                </CardTitle>
              )}
              <div>
                <TitleLabel>Возраст:</TitleLabel> <TextInfo>{employee.age}</TextInfo>
                {/*<TitleLabel>Опыт работы:</TitleLabel> <TextInfo>12 лет</TextInfo>*/}
              </div>
              <div>
                  <TitleLabel>Пол:</TitleLabel> <TextInfo>{employee.gender}</TextInfo>
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
              {employee?.experience?.filter(item => item?.company && item?.position)
        .map((item, index) => (
          <div key={index}>
            <b>{item?.company}</b> - {item?.position}
          </div>
        ))}
              </div>

              {!expanded && (
                <>
                  <Button
                    my="xs"
                    size="xs"
                    // appearance={'main_small_second_transparent'}
                    onClick={() => {
                      // makeAppointment(id);
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

              <div className="space-y-1">
                <div>
                  <TitleLabel>ID:</TitleLabel> <TextInfo>{employee.id}</TextInfo>
                </div>
                <div>
                  <TitleLabel>Candidate ID:</TitleLabel>{' '}
                  <TextInfo>{employee.candidate_id}</TextInfo>
                </div>
                <div>
                  <TitleLabel>First Name:</TitleLabel> <TextInfo>{employee.first_name}</TextInfo>
                </div>
                <div>
                  <TitleLabel>Last Name:</TitleLabel> <TextInfo>{employee.last_name}</TextInfo>
                </div>
                <div>
                  <TitleLabel>Middle Name:</TitleLabel> <TextInfo>{employee.middle_name}</TextInfo>
                </div>
                {/*} <div>
      <TitleLabel>Age:</TitleLabel> <TextInfo>{employee.age}</TextInfo>
    </div>*/}
                
                <div>
                  <TitleLabel>Birth Date:</TitleLabel> <TextInfo>{employee.birth_date}</TextInfo>
                </div>
                <div>
                  <TitleLabel>Alternate URL:</TitleLabel>{' '}
                  <TextInfo>{employee.alternate_url}</TextInfo>
                </div>
                <div>
                  <TitleLabel>Area:</TitleLabel> <TextInfo>{employee.area}</TextInfo>
                </div>
                <div>
                  <TitleLabel>Business Trip Readiness:</TitleLabel>{' '}
                  <TextInfo>{employee.business_trip_readiness}</TextInfo>
                </div>
                <div>
                  <TitleLabel>Skills:</TitleLabel> <TextInfo>{employee.skills}</TextInfo>
                </div>
                <div>
                  <TitleLabel>Salary:</TitleLabel> <TextInfo>{employee.salary}</TextInfo>
                </div>
                <div>
                  <TitleLabel>Experience:</TitleLabel>
                  <ul className="space-y-4">
                    {employee?.experience?.map((exp, index) => (
                      <li key={index}>
                        <div className="ml-4">
                          <div>
                            <TitleLabel>Start:</TitleLabel> <TextInfo>{exp?.start}</TextInfo>
                          </div>
                          <div>
                            <TitleLabel>End:</TitleLabel> <TextInfo>{exp?.end}</TextInfo>
                          </div>
                          <div>
                            <TitleLabel>Company:</TitleLabel> <TextInfo>{exp?.company}</TextInfo>
                          </div>
                          <div>
                            <TitleLabel>Company ID:</TitleLabel>{' '}
                            <TextInfo>{exp?.company_id}</TextInfo>
                          </div>
                          <div>
                            <TitleLabel>Industry:</TitleLabel> <TextInfo>{exp?.industry}</TextInfo>
                          </div>
                          <div>
                            <TitleLabel>Industries:</TitleLabel>
                            <ul className="ml-4 space-y-2">
                              {exp?.industries?.map((industry) => (
                                <li key={industry?.id}>
                                  <TitleLabel>ID:</TitleLabel> <TextInfo>{industry?.id}</TextInfo>{' '}
                                  <TitleLabel>Name:</TitleLabel>{' '}
                                  <TextInfo>{industry?.name}</TextInfo>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <TitleLabel>Area:</TitleLabel> <TextInfo>{exp?.area}</TextInfo>
                          </div>
                          <div>
                            <TitleLabel>Company URL:</TitleLabel>{' '}
                            <TextInfo>{exp?.company_url}</TextInfo>
                          </div>
                          <div>
                            <TitleLabel>Employer:</TitleLabel>
                            <div className="ml-4">
                              <div>
                                <TitleLabel>ID:</TitleLabel>{' '}
                                <TextInfo>{exp?.employer?.id}</TextInfo>
                              </div>
                              <div>
                                <TitleLabel>Name:</TitleLabel>{' '}
                                <TextInfo>{exp?.employer?.name}</TextInfo>
                              </div>
                              <div>
                                <TitleLabel>URL:</TitleLabel>{' '}
                                <TextInfo>{exp?.employer?.url}</TextInfo>
                              </div>
                              <div>
                                <TitleLabel>Alternate URL:</TitleLabel>{' '}
                                <TextInfo>{exp?.employer?.alternate_url}</TextInfo>
                              </div>
                              <div>
                                <TitleLabel>Logo URL:</TitleLabel>{' '}
                                <TextInfo>{exp?.employer?.logo_urls?.['90']}</TextInfo>
                              </div>
                            </div>
                          </div>
                          <div>
                            <TitleLabel>Position:</TitleLabel> <TextInfo>{exp?.position}</TextInfo>
                          </div>
                          <div>
                            <TitleLabel>Description:</TitleLabel>{' '}
                            <TextInfo>{exp?.description}</TextInfo>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Space h="xxs" />
              <Center>
                <Button
                  // appearance={'main_second'}
                  onClick={() => {
                    //doctorIdVar([ id || 0]); //doctorId
                    //nextStep?.();
                    //makeAppointment(id);
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
};

export default Employee;

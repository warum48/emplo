import React, { useState } from 'react';
import {
  TitleLabel,
  TextInfo,
  CardPreTitle,
  CardTitle,
} from '@/components/__atoms/TextBlocks/TextBlocks'; // Adjust the import path as necessary
import {
  Button,
  Center,
  Grid,
  Group,
  Paper,
  Space,
  Stack,
  Image,
  ActionIcon,
  Badge,
  Divider,
} from '@mantine/core';
import { DoctorAvatarContainer } from '../__atoms/AvatarContainer/AvatarContainer';
import { CardExpandButton } from '../__atoms/Card/CardExpandButton';
import { SpaceYMain } from '../__atoms/Spacers/Spacers';
import classes from './autogrid.module.css';
import { Candidate } from '@/types/Candidate';
import Value from '../__atoms/Value/Value';
import { IconHeart } from '@tabler/icons-react';
import { UIUtils } from '@/utils/UIUtils';
import { DateUtils } from '@/utils/DateUtils';
import { JSONViewer } from '../__atoms/JSONViewer/JSONViewr';
import { IconResize } from '@tabler/icons-react';

import { GrNewWindow } from 'react-icons/gr';
import ResumeCard from '../ResumeCard/ResumeCard';
import { DeepNullable } from '@/types/utils/DeepNullable';

interface EmployeeProps {
  employee: DeepNullable<Candidate>;
}



const Employee: React.FC<EmployeeProps> = ({ employee }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Paper
      p={expanded ? { base: 'md', md: 'xl' } : "md"}
      shadow="xs"
      //withBorder
      //bg-neutral-50/90
      className={`bg-white dark:bg-customGray-950/90  ${classes.gridItem} ${
        expanded ? classes.expanded : ''
      }`}
    >
      <CardExpandButton expanded={expanded} setExpanded={setExpanded} showWhenCollapsed={false} />
      <Grid>
        <Grid.Col span="auto" maw="100%">
          <Group wrap="nowrap" align="flex-start" className={`${!expanded ? "h-full" : ''}`}>
            <div className="flex flex-col gap-4 h-full ">
              <div className="flex flex-col justify-between h-full gap-4">
                <DoctorAvatarContainer
                  photo={employee?.photo}
                  expanded={expanded}
                  isMobile={false}
                  setExpanded={setExpanded}
                />
                <div className="mt-auto flex flex-wrap items-center gap-2">
                  <ActionIcon variant="light" loading={false} size="32px" onClick={()=>setExpanded(true)}>
                    <IconResize size={20} stroke={1.5} />
                  </ActionIcon>
                  <a href={'/resume/' + employee?.id || ''} target="_blank" rel="noreferrer">
                  <ActionIcon variant="light" loading={false} size="32px">
                    <GrNewWindow
                    //size={20} stroke={'1.5'}
                    />
                    
                  </ActionIcon>
                  </a>
                  <div className="h-[32px] w-[32px] block md:hidden">
                    <a href={employee?.alternate_url || ''} target="_blank" rel="noreferrer">
                  <Image
                    src={'/images/external_logos/hh.ru__min_.svg'}
                    alt={''}
                    width={32}
                    height={32}
                  /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-full flex flex-col gap-4  ">
              <div className="flex ^items-center justify-between w-full flex-col md:flex-row gap-4 
              ^w-3/4
              ">
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-bold mb-2">
                    <Value value={employee?.professional_roles} />
                    {/*} Руководитель отдела продаж, специалист ВЭД, ведущий менеджер по работе с клиентами, КАМ */}
                  </div>
                  {(employee.last_name || employee.first_name || employee.middle_name) && (
                    <CardTitle>
                      <Value value={employee.last_name} /> <Value value={employee.first_name} />{' '}
                      <Value value={employee.middle_name} />
                    </CardTitle>
                  )}
                  <div>
                    <TitleLabel>Возраст:</TitleLabel>{' '}
                    <TextInfo>
                      <Value value={employee.age} />
                    </TextInfo>
                  </div>
                  <div>
                    <TitleLabel>Пол:</TitleLabel>{' '}
                    <TextInfo>
                      <Value value={employee.gender} />
                    </TextInfo>
                  </div>
                  <div>
                    <TitleLabel>Зарплата:</TitleLabel>{' '}
                    <TextInfo>
                      <Value value={employee.salary} />
                    </TextInfo>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end md:text-right gap-1 md:gap-2 mt-0 md:mt-0
                
                "
                //w-1/4  border-l border-default
                >
                  <Badge
                    color={UIUtils.getStatusColor(employee?.resume_status)}
                    className="hidden ^md:block"
                  >
                    {employee.resume_status}
                  </Badge>
                  <div
                    className={`block ^md:hidden text-xs 
                 
                  text-${UIUtils.getStatusColor(employee?.resume_status)}-500
                  `}
                    // dark:text-gray-400 text-gray-800
                  >
                    <Value value={employee.resume_status} />
                  </div>
                  <div className={`text-xs dark:text-gray-400 text-gray-800 `}>
                    Обновлено: <Value value={DateUtils.formatDateToRussian(employee?.updated_at)} />
                  </div>
                  <Center className='hidden md:block'>
                  <Image
                    src={'/images/external_logos/hh.ru__min_.svg'}
                    alt={''}
                    width={48}
                    height={48}
                  />
                </Center>
                </div>
              </div>

              <div className="text-xs dark:text-gray-400 text-gray-800">
                {employee?.experience
                  ?.filter((item) => item?.company && item?.position)
                  .map((item, index) => (
                    <div key={index}>
                      <b>
                        <Value value={item?.company} />
                      </b>{' '}
                      - <Value value={item?.position} />
                    </div>
                  ))}
              </div>

              {!expanded && (
                <div className="flex flex-wrap items-center w-full gap-3 mt-auto">
                  <a href={'/resume/' + employee?.id} target="_blank">
                    <Button className="my-0 mx-0 xs:my-2" size="xs" onClick={() => {}}>
                      Пригласить
                    </Button>
                  </a>
                  <Button
                    className="my-0 mx-0 xs:my-2"
                    size="xs"
                    variant="outline"
                    onClick={() => {}}
                  >
                    Сообщения
                  </Button>
                  <Button
                    className="my-0 mx-0 xs:my-2"
                    size="xs"
                    variant="outline"
                    onClick={() => {}}
                  >
                    Комментарии
                  </Button>
                  <div className="ml-auto">
                    <ActionIcon variant="light" loading={false} size="lg" radius={'xl'}>
                      <IconHeart size={18} stroke={1.5} />
                    </ActionIcon>
                  </div>
                </div>
              )}
            </div>
          </Group>
{/*--------------------------------------------------------------------------------*/}

          {expanded && (
            <>
<ResumeCard candidate={employee} showTopInfo={false}/>
{/*
<Divider/>
              <SpaceYMain />
              <div className="space-y-1">
                <div>
                  <TitleLabel>ID:</TitleLabel>{' '}
                  <TextInfo>
                    <Value value={employee.id} />
                  </TextInfo>
                </div>
                <div>
                  <TitleLabel>Candidate ID:</TitleLabel>{' '}
                  <TextInfo>
                    <Value value={employee.candidate_id} />
                  </TextInfo>
                </div>
                <div>
                  <TitleLabel>First Name:</TitleLabel>{' '}
                  <TextInfo>
                    <Value value={employee.first_name} />
                  </TextInfo>
                </div>
                <div>
                  <TitleLabel>Last Name:</TitleLabel>{' '}
                  <TextInfo>
                    <Value value={employee.last_name} />
                  </TextInfo>
                </div>
                <div>
                  <TitleLabel>Middle Name:</TitleLabel>{' '}
                  <TextInfo>
                    <Value value={employee.middle_name} />
                  </TextInfo>
                </div>
                <div>
                  <TitleLabel>Birth Date:</TitleLabel>{' '}
                  <TextInfo>
                    <Value value={employee.birth_date} />
                  </TextInfo>
                </div>
                <div>
                  <TitleLabel>Alternate URL:</TitleLabel>{' '}
                  <TextInfo>
                    <Value value={employee.alternate_url} />
                  </TextInfo>
                </div>
                <div>
                  <TitleLabel>Area:</TitleLabel>{' '}
                  <TextInfo>
                    <Value value={employee.area} />
                  </TextInfo>
                </div>
                <div>
                  <TitleLabel>Business Trip Readiness:</TitleLabel>{' '}
                  <TextInfo>
                    <Value value={employee.business_trip_readiness} />
                  </TextInfo>
                </div>
                <div>
                  <TitleLabel>Skills:</TitleLabel>{' '}
                  <TextInfo>
                    <Value value={employee.skills} />
                  </TextInfo>
                </div>

                <div>
                  <TitleLabel>Experience:</TitleLabel>
                  <ul className="space-y-4">
                    {employee?.experience?.map((exp, index) => (
                      <li key={index}>
                        <div className="ml-4">
                          <div>
                            <TitleLabel>Start:</TitleLabel>{' '}
                            <TextInfo>
                              <Value value={exp?.start} />
                            </TextInfo>
                          </div>
                          <div>
                            <TitleLabel>End:</TitleLabel>{' '}
                            <TextInfo>
                              <Value value={exp?.end} />
                            </TextInfo>
                          </div>
                          <div>
                            <TitleLabel>Company:</TitleLabel>{' '}
                            <TextInfo>
                              <Value value={exp?.company} />
                            </TextInfo>
                          </div>
                          <div>
                            <TitleLabel>Company ID:</TitleLabel>{' '}
                            <TextInfo>
                              <Value value={exp?.company_id} />
                            </TextInfo>
                          </div>
                          <div>
                            <TitleLabel>Industry:</TitleLabel>{' '}
                            <TextInfo>
                              <Value value={exp?.industry} />
                            </TextInfo>
                          </div>
                          <div>
                            <TitleLabel>Industries:</TitleLabel>
                            <ul className="ml-4 space-y-2">
                              {exp?.industries?.map((industry) => (
                                <li key={industry?.id}>
                                  <TitleLabel>ID:</TitleLabel>{' '}
                                  <TextInfo>
                                    <Value value={industry?.id} />
                                  </TextInfo>{' '}
                                  <TitleLabel>Name:</TitleLabel>{' '}
                                  <TextInfo>
                                    <Value value={industry?.name} />
                                  </TextInfo>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <TitleLabel>Area:</TitleLabel>{' '}
                            <TextInfo>
                              <Value value={exp?.area} />
                            </TextInfo>
                          </div>
                          <div>
                            <TitleLabel>Company URL:</TitleLabel>{' '}
                            <TextInfo>
                              <Value value={exp?.company_url} />
                            </TextInfo>
                          </div>
                          <div>
                            <TitleLabel>Employer:</TitleLabel>
                            <div className="ml-4">
                              <div>
                                <TitleLabel>ID:</TitleLabel>{' '}
                                <TextInfo>
                                  <Value value={exp?.employer?.id} />
                                </TextInfo>
                              </div>
                              <div>
                                <TitleLabel>Name:</TitleLabel>{' '}
                                <TextInfo>
                                  <Value value={exp?.employer?.name} />
                                </TextInfo>
                              </div>
                              <div>
                                <TitleLabel>URL:</TitleLabel>{' '}
                                <TextInfo>
                                  <Value value={exp?.employer?.url} />
                                </TextInfo>
                              </div>
                              <div>
                                <TitleLabel>Alternate URL:</TitleLabel>{' '}
                                <TextInfo>
                                  <Value value={exp?.employer?.alternate_url} />
                                </TextInfo>
                              </div>
                              <div>
                                <TitleLabel>Logo URL:</TitleLabel>{' '}
                                <TextInfo>
                                  <Value value={exp?.employer?.logo_urls?.['90']} />
                                </TextInfo>
                              </div>
                            </div>
                          </div>
                          <div>
                            <TitleLabel>Position:</TitleLabel>{' '}
                            <TextInfo>
                              <Value value={exp?.position} />
                            </TextInfo>
                          </div>
                          <div>
                            <TitleLabel>Description:</TitleLabel>{' '}
                            <TextInfo>
                              <Value value={exp?.description} />
                            </TextInfo>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <JSONViewer data={employee} />

              <Space h="xxs" />
              <Center>
                <Button onClick={() => {}}>Пригласить</Button>
              </Center>
              */}
            </>
          )}
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default Employee;

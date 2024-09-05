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
import { ShortDescription } from './ShortDescription';
import { StatusBlock } from './StatusBlock';
import { MainButtons } from './MainButtons';
import { ActionButtons } from './ActionButtons';

interface EmployeeProps {
  employee: DeepNullable<Candidate>;
}

const Employee: React.FC<EmployeeProps> = ({ employee }) => {
  const [expanded, setExpanded] = useState(false);
  const [width, setWidth] = useState(0);
  const componentRef = React.useRef<HTMLDivElement>(null);

  const updateWidth = () => {
    if (componentRef.current) {
      setWidth(componentRef.current.offsetWidth);
    }
  };

  React.useEffect(() => {
    // Update width on initial load
    updateWidth();
    // Update width on window resize
    window.addEventListener('resize', updateWidth);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <Paper
      // p={expanded ? { base: 'md', sm: 'xl' } : 'md'}
      shadow="xs"
      radius={'lg'}
      //withBorder
      //bg-neutral-50/90
      className={`bg-white dark:bg-customGray-950/90  ${classes.gridItem} ${
        expanded ? classes.expanded : ''
      }`}
    >
      <CardExpandButton expanded={expanded} setExpanded={setExpanded} showWhenCollapsed={false} />

      <div>
        <div className={`${!expanded ? 'h-full' : ''} flex flex-col sm:flex-row`}>
          <div className="flex w-full sm:w-3/4 bg-red-400/0 p-4  gap-4 border-default border-b">
            <DoctorAvatarContainer
              photo={employee?.photo}
              expanded={expanded}
              isMobile={false}
              setExpanded={setExpanded}
            />

            <div
              className="w-full h-full flex flex-col  bg-green-400/0 gap-4"
              //
            >
              <ShortDescription employee={employee} />
              <div className="text-xs dark:text-gray-400 text-gray-800 bg-blue-400/0">
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
            </div>
          </div>

          <div
            className="flex flex-col items-start sm:items-end sm:text-right bg-yellow-400/0
              p-4
              w-full sm:w-1/4  border-l border-default border-b
              gap-1 sm:gap-2
                "
            // mt-0 sm:mt-0
          >
            <StatusBlock employee={employee} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row p-4 gap-4">
          <ActionButtons employee={employee} setExpanded={setExpanded} expanded={expanded} />
          {(!expanded || true) && (
            <div className="flex flex-wrap items-center w-full gap-3 ^mt-auto bg-yellow-400/0">
              <MainButtons employee={employee} />
            </div>
          )}
        </div>
      </div>

      {/*--------------------------------------------------------------------------------*/}

      {expanded && (
        <>
          <ResumeCard candidate={employee} showTopInfo={false} />
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
            

              <Space h="xxs" />
              <Center>
                <Button onClick={() => {}}>Пригласить</Button>
              </Center>
          */}
        </>
      )}

      {/*} <JSONViewer data={employee} />*/}
    </Paper>
  );
};

export default Employee;

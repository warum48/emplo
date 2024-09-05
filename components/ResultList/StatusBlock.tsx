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


type TProps = {
    employee: DeepNullable<Candidate>
}
export const StatusBlock = ({employee}:TProps) => {
    return (
        <>
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
                  <Center className="hidden md:block">
                    <Image
                      src={'/images/external_logos/hh.ru__min_.svg'}
                      alt={''}
                      width={48}
                      height={48}
                    />
                  </Center>
        </>
    );
}
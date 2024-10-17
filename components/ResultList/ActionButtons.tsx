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
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>
    expanded: boolean
}
export const ActionButtons = ({employee, setExpanded, expanded}:TProps) => {
    return (
        <div className="^mt-auto flex ^flex-wrap items-start gap-2 ">
                  <ActionIcon
                    variant="light"
                    loading={false}
                    size="32px"
                   // onClick={() => setExpanded(true)}
                   onClick={() => setExpanded(!expanded)}
                  >
                    <IconResize size={20} stroke={1.5} />
                  </ActionIcon>
                  <a href={'/resume/' + employee?.candidate_id || ''} target="_blank" rel="noreferrer">
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
                      />
                    </a>
                  </div>
                </div>
    )
}
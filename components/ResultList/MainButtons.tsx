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

export const MainButtons = ({employee}:TProps) => {
    return (
        <>
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
        </>
    )
}
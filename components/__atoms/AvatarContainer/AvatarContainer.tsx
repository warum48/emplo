import * as React from 'react';
import { StyledButton } from '../Buttons/StyledButton';
import { Avatar, Box } from '@mantine/core';
import  classes  from './AvatarContainer.module.css';

type DoctorAvatarContainerProps = {
  photo?: string | null;
  expanded: boolean;
  isMobile?: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
};

export const DoctorAvatarContainer: React.FC<DoctorAvatarContainerProps> = ({
  photo,
  expanded,
  isMobile,
  setExpanded
}) => {
  return (
    <Box className={(expanded && !isMobile)  ? classes.container_expanded : classes.container}>
      <Avatar src={photo} size={expanded && !isMobile ? 130 : 80} radius="md" />
      <div className={classes.info_button}>
      <StyledButton appearance="info_circle" onClick={() => {setExpanded(!expanded)}} ></StyledButton>
      </div>
    </Box>
  );
};


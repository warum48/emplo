import {
  Table,
  Checkbox,
  Button,
  Badge,
  Menu,
  ActionIcon,
  Group,
  Text,
  Collapse,
} from '@mantine/core';
import { useState } from 'react';
import { IconDotsVertical } from '@tabler/icons-react';
import { StyledButton } from '@/components/__atoms/Buttons/StyledButton';
//import { useGetVacancyByIdQuery, useGetVacancyNegotiationsByIdQuery } from '@/rtk/slices/vacancy/vacancySliceHHReal';
import { JSONViewer } from '@/components/__atoms/JSONViewer/JSONViewr';
import DataDisplay from '@/components/__atoms/DataDisplay/DataDisplay';
import { useGetVacancyByIdQuery, useGetVacancyNegotiationsByIdQuery } from '@/rtk/queries/vacancy';
import { UIUtils } from '@/utils/UIUtils';
import CandidateCard from '../../CandidateCard';
import Value from '@/components/__atoms/Value/Value';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';

type TProps = {
  candidate_: any;
};
export const CandidateTableRow = ({ candidate_ }: TProps) => {
  const [opened, { toggle }] = useDisclosure(false);
  const candidate = candidate_?.resume;
  return (
    <>
      {/*<JSONViewer data={candidate} />*/}
      <Table.Tr key={candidate?.id}>
        <Table.Td>
          <Checkbox size="sm" />
        </Table.Td>
        <Table.Td>{`${candidate?.last_name} ${candidate?.first_name} ${candidate?.middle_name}`}</Table.Td>
        <Table.Td>
          <Badge color={UIUtils.getStatusColor(candidate?.resume_status)}>
            {candidate?.resume_status}
          </Badge>
        </Table.Td>
        <Table.Td>
          {/*<Value value={candidate?.alternate_url ? candidate?.alternate_url : 'Не указан'} />*/}
          <Link href="candidate?.alternate_url ">ХХ Ссылка</Link>
        </Table.Td>
        <Table.Td>
          <Value value={candidate?.area} />
        </Table.Td>
        <Table.Td>
          <Value value={candidate?.gender} />
        </Table.Td>
        <Table.Td>
          <Value value={candidate?.skills} />
        </Table.Td>
        <Table.Td>
          <Value value={candidate?.total_experience} />
        </Table.Td>
        <Table.Td>
          <StyledButton appearance="info_circle" onClick={toggle}></StyledButton>
        </Table.Td>
        <Table.Td>
          <Menu>
            <Menu.Target >
              <ActionIcon >
                <IconDotsVertical size={16} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={toggle}>Изменить</Menu.Item>
              <Menu.Item>Удалить</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Table.Td>
      </Table.Tr>

     
        <Table.Tr key={candidate?.id}>
          <Table.Td colSpan={8}> more info <JSONViewer data={candidate} /></Table.Td>
          
        </Table.Tr>
        
    </>
  );
};

// <Collapse in={opened}></Collapse>
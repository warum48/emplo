import { Table, Checkbox, Button, Badge, Menu, ActionIcon, Group, Text } from '@mantine/core';
import { useState } from 'react';
import { IconDotsVertical } from '@tabler/icons-react';

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
  resume_status: string;
  professional_roles: string;
  total_experience: number;
}

const candidates: Candidate[] = [
  {
    id: 1,
    candidate_id: '1',
    first_name: 'Полина',
    last_name: 'Перевозникова',
    middle_name: 'Ивановна',
    age: 29,
    gender: 'Женский',
    birth_date: '1995-04-15',
    alternate_url: '+7 924 543 32 14',
    area: 'Санкт-Петербург',
    business_trip_readiness: 'Нет',
    skills: 'UI/UX Design, Photoshop, Figma',
    salary: 120000,
    resume_status: 'Собеседование',
    professional_roles: 'Дизайнер',
    total_experience: 6,
  },
  {
    id: 2,
    candidate_id: '2',
    first_name: 'Влад',
    last_name: 'Архипкин',
    middle_name: '',
    age: 25,
    gender: 'Мужской',
    birth_date: '1998-03-22',
    alternate_url: '+7 924 543 32 15',
    area: 'Москва',
    business_trip_readiness: 'Да',
    skills: 'Front-end Development, React, JavaScript',
    salary: 150000,
    resume_status: 'На рассмотрении',
    professional_roles: 'Разработчик',
    total_experience: 3,
  },
  {
    id: 3,
    candidate_id: '3',
    first_name: 'Алексей',
    last_name: 'Борискин',
    middle_name: 'Иванович',
    age: 32,
    gender: 'Мужской',
    birth_date: '1992-12-05',
    alternate_url: 'Не указан',
    area: 'Сыктывкар',
    business_trip_readiness: 'Нет',
    skills: 'Project Management, Agile, Scrum',
    salary: 180000,
    resume_status: 'Новый',
    professional_roles: 'Менеджер проектов',
    total_experience: 10,
  },
  {
    id: 4,
    candidate_id: '4',
    first_name: 'Алексей',
    last_name: 'Иванов',
    middle_name: 'Кириллович',
    age: 28,
    gender: 'Мужской',
    birth_date: '1996-01-11',
    alternate_url: '+7 924 543 32 16',
    area: 'Москва',
    business_trip_readiness: 'Да',
    skills: 'Back-end Development, Node.js, Databases',
    salary: 160000,
    resume_status: 'Тестовое задание',
    professional_roles: 'Разработчик',
    total_experience: 5,
  },
  {
    id: 5,
    candidate_id: '5',
    first_name: 'Анна',
    last_name: 'Александрова',
    middle_name: 'Сергеевна',
    age: 30,
    gender: 'Женский',
    birth_date: '1993-07-08',
    alternate_url: '+7 951 326 42 15',
    area: 'Москва',
    business_trip_readiness: 'Нет',
    skills: 'Marketing, SEO, Content Strategy',
    salary: 140000,
    resume_status: 'Тестовое задание',
    professional_roles: 'Маркетолог',
    total_experience: 7,
  },
];

export default function CandidatesTable() {
  return (
    <div className="p-4 w-full max-w-full text-black dark:text-white">
      <Group 
      //position="apart"
      >
        <Text size="xl" 
       // weight={700}
        >UX/UI дизайнер</Text>
        <Button className="bg-green-600 text-white">Добавить кандидата</Button>
      </Group>
      <Table striped highlightOnHover className="mt-4">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>&nbsp;</Table.Th>
            <Table.Th>Имя</Table.Th>
            <Table.Th>Статус</Table.Th>
            <Table.Th>Телефон</Table.Th>
            <Table.Th>Город</Table.Th>
            <Table.Th>Пол</Table.Th>
            <Table.Th>Навыки</Table.Th>
            <Table.Th>Опыт работы (лет)</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <tbody>
          {candidates.map((candidate) => (
            <Table.Tr key={candidate.id}>
              <Table.Td><Checkbox size="sm" /></Table.Td>
              <Table.Td>{`${candidate.last_name} ${candidate.first_name} ${candidate.middle_name}`}</Table.Td>
              <Table.Td>
                <Badge color={getStatusColor(candidate.resume_status)}>{candidate.resume_status}</Badge>
              </Table.Td>
              <Table.Td>{candidate.alternate_url ? candidate.alternate_url : 'Не указан'}</Table.Td>
              <Table.Td>{candidate.area}</Table.Td>
              <Table.Td>{candidate.gender}</Table.Td>
              <Table.Td>{candidate.skills}</Table.Td>
              <Table.Td>{candidate.total_experience}</Table.Td>
              <Table.Td>
                <Menu>
                  <Menu.Target>
                    <ActionIcon>
                      <IconDotsVertical size={16} />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item>Изменить</Menu.Item>
                    <Menu.Item>Удалить</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Table.Td>
            </Table.Tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function getStatusColor(status: string) {
  switch (status) {
    case 'Собеседование':
      return 'green';
    case 'На рассмотрении':
      return 'blue';
    case 'Новый':
      return 'orange';
    case 'Тестовое задание':
      return 'cyan';
    default:
      return 'gray';
  }
}

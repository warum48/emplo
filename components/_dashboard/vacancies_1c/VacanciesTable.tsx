// PositionTable.tsx
import React from 'react';
import { ActionIcon, Divider, Input, Menu, Select, Table, Text } from '@mantine/core';
import { Button } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IconDotsVertical } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { FiltersOverTableContainer } from '@/components/__atoms/Tables/Filters/FiltersOverTable/FiltersOberTableContainer';
import { useGetVacanciesQuery } from '@/rtk/queries/joborder';



// Sample data based on your CSV
// Complete tableData array
const tableData = [
    {
        "id": 1,
        "name": "Тестовая вакансия 1",
        "job_profile": {
          "id": 1,
          "speciality": "Мерчандайзер",
          "org": "Чистая Линия",
          "org_unit": "Не указано",
          "org_department": "Не указано",
          "org_job_name": "Мерчандайзер",
          "org_project": "",
          "org_area_of_business": "",
          "criteria": {
            "id": 1,
            "speciality": "Мерчандайзер",
            "area": "Санкт-Петербург",
            "metro": "Автово",
            "schedule": "",
            "relocation_type": "",
            "experience": 2,
            "gender": "",
            "age": 20,
            "salary": 50000,
            "job_search_status": "",
            "search_limit_target": 5,
            "created_by": "root"
          },
          "description": "Тест",
          "created_at": "2024-09-19 07:45:12.844000+00:00",
          "created_by": "root"
        },
        "is_opened": true,
        "deadline": "2024-09-20 08:04:49+00:00",
        "responsible": "root",
        "created_by": "root",
        "created_at": "2024-09-19 08:04:56.794000+00:00"
      }
];

const mockFilter = ['все'];

export const VacanciesTable = () => {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const {data, error, isLoading} = useGetVacanciesQuery();
  return (
    <div
      className=""
      //text-black dark:text-white rounded  min-w-full inline-block
      //w-full max-w-full
    >
      <div className="justify-between flex  items-center gap-4">
        
        <div className="form-header">Список профилей вакансий</div>
        <Button className="bg-teal-500 text-white">Добавить профиль</Button>
      </div>

      <FiltersOverTableContainer>
          <Input.Wrapper
            label="Подразделение:"
            labelProps={{ style: { marginRight: '8px', whiteSpace: 'nowrap' } }} // Adjust label styling
            styles={{
              root: { display: 'flex', alignItems: 'center' }, // Flexbox to align label and input
             // label: { minWidth: '120px' }, // Adjust the minimum width of the label to your liking
            }}
          >
            <Select data={mockFilter} placeholder="Все" />
          </Input.Wrapper>
         {/*} <Divider orientation="vertical" className=" vert-divider" /> */}
          <Input.Wrapper
            label="Наименование:"
            labelProps={{ style: { marginRight: '8px', whiteSpace: 'nowrap' } }} // Adjust label styling
            styles={{
              root: { display: 'flex', alignItems: 'center' }, // Flexbox to align label and input
              //label: { minWidth: '120px' }, // Adjust the minimum width of the label to your liking
            }}
          >
            <Select data={mockFilter} placeholder="Все" />
          </Input.Wrapper>
        {/*}  <Divider orientation="vertical" className=" vert-divider" /> */}
          <Input.Wrapper
            label="Город:"
            labelProps={{ style: { marginRight: '8px', whiteSpace: 'nowrap' } }} // Adjust label styling
            styles={{
              root: { display: 'flex', alignItems: 'center', justifyItems:'start'}, // Flexbox to align label and input
              //label: { minWidth: '20px' }, // Adjust the minimum width of the label to your liking
            }}
          >
            <Select data={mockFilter} placeholder="Все" />
          </Input.Wrapper>
          
        </FiltersOverTableContainer>

      <Table
        // striped highlightOnHover
        //Наименование 	Должность	Подразделение	Желаемая дата закрытия
        className="mt-4  min-w-full  overflow-hidden "
      >
        <Table.Thead
         className=""
          //bg-gray-200 dark:bg-gray-700
        >
          <Table.Tr  className="bg-purple-400/10 dark:bg-purple-900/15 rounded-t-lg">
          <Table.Th className="px-4 py-2">Подразделение </Table.Th>
            <Table.Th className="px-4 py-2">Вакансия</Table.Th>
            <Table.Th className="px-4 py-2">Ответсвенный</Table.Th>
            <Table.Th className="px-4 py-2">Ожидаемая дата</Table.Th>
            <Table.Th className="px-4 py-2">Номер</Table.Th>
            <Table.Th className="px-4 py-2">Кандидаты</Table.Th>
            <Table.Th className="px-4 py-2">...</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data?.data?.map((vacancy:any, index:number) => (
            <Table.Tr
              key={index}
            //  onClick={() => router.push('/dashboard/profiles/23')}
              className="cursor-pointer hover:bg-gray-400/10"
            >
              <Table.Td className="px-4 py-2">{vacancy?.job_profile?.org_unit}</Table.Td>
              <Table.Td className="px-4 py-2">{vacancy?.name}</Table.Td>
              <Table.Td className="px-4 py-2">{vacancy?.responsible}</Table.Td>
              <Table.Td className="px-4 py-2">{vacancy?.deadline}</Table.Td>
              <Table.Td className="px-4 py-2">{vacancy?.id}</Table.Td>
              
              <Table.Td className="px-4 py-2">7</Table.Td>
              <Table.Td>
          <Menu>
            <Menu.Target >
              <ActionIcon >
                <IconDotsVertical size={16} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={()=> {toggle(); router.push('/dashboard/profiles/23') }}>Редактировать</Menu.Item>
              <Menu.Item onClick={()=> {toggle(); router.push('/dashboard/vacancies/create') }}>Показать кандидатов</Menu.Item>
              <Menu.Item>Удалить</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};
/*
{
  "data": [
    {
      "id": 1,
      "name": "Тестовая вакансия 1",
      "job_profile": [
        {
          "id": 1,
          "speciality": "Мерчандайзер",
          "org": "Чистая Линия",
          "org_unit": "Не указано",
          "org_department": "Не указано",
          "org_job_name": "Мерчандайзер",
          "org_project": "",
          "org_area_of_business": "",
          "criteria": [
            {
              "id": 1,
              "speciality": "Мерчандайзер",
              "area": "Санкт-Петербург",
              "metro": "Автово",
              "schedule": "",
              "relocation_type": "",
              "experience": 2,
              "gender": "",
              "age": 20,
              "salary": 50000,
              "job_search_status": "",
              "search_limit_target": 5,
              "created_by": "root"
            }
          ],
          "description": "Тест",
          "created_at": "2024-09-19 07:45:12.844000+00:00",
          "created_by": "root"
        }
      ],
      "is_opened": true,
      "deadline": "2024-09-20 08:04:49+00:00",
      "responsible": "root",
      "created_by": "root",
      "created_at": "2024-09-19 08:04:56.794000+00:00"
    }
  ]
}*/

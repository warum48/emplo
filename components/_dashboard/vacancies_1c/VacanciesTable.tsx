// PositionTable.tsx
import React from 'react';
import { ActionIcon, Divider, Input, Menu, Select, Table, Text } from '@mantine/core';
import { Button } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IconDotsVertical } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { FiltersOverTableContainer } from '@/components/FiltersOverTable/FiltersOberTableContainer';



// Sample data based on your CSV
// Complete tableData array
const tableData = [
  {
    subdivision: 'Отдел установки и эксплуатации оборудования',
    profile: 'Инженер, 1 категория /Отдел установки и эксплуатации оборудования/',
    responsible: 'Голихина Надежда Олеговна',
    position: 'Инженер',
    date: '6/9/2016',
    number: 1,
    vacancy: 'Инженер, 1 категория /Отдел установки и эксплуатации оборудования/',
    comment: '',
  },
  {
    subdivision: 'Отдел установки и эксплуатации оборудования',
    profile: 'Ведущий инженер /Отдел установки и эксплуатации оборудования/',
    responsible: 'Шариппе Елена',
    position: 'Ведущий инженер',
    date: '6/9/2016',
    number: 2,
    vacancy: '',
    comment: '',
  },
  {
    subdivision: 'Отдел расчетов по оплате труда',
    profile: 'Начальник отдела /Отдел расчетов по оплате труда/',
    responsible: 'Голихина Надежда Олеговна',
    position: 'Начальник отдела',
    date: '6/9/2016',
    number: 3,
    vacancy: 'Начальник отдела /Отдел расчетов по оплате труда/',
    comment: '',
  },
  {
    subdivision: 'Сметно-штатный отдел',
    profile: 'Начальник отдела – заместитель начальника управления /Сметно-штатный отдел/',
    responsible: 'Плахотина Антонина',
    position: 'Начальник отдела – заместитель начальника управления',
    date: '6/20/2016',
    number: 4,
    vacancy: 'Начальник отдела – заместитель начальника управления /Сметно-штатный отдел/',
    comment: '',
  },
  {
    subdivision: 'Хозяйственный отдел',
    profile: 'Сторож /Хозяйственный отдел/',
    responsible: 'Голихина Надежда Олеговна',
    position: 'Сторож',
    date: '6/20/2016',
    number: 6,
    vacancy: 'Сторож /Хозяйственный отдел/',
    comment: '',
  },
  {
    subdivision: 'Отдел по работе с персоналом',
    profile: 'Эксперт, 1 категория /Отдел по работе с персоналом/',
    responsible: 'Шариппе Елена',
    position: 'Эксперт',
    date: '6/20/2016',
    number: 7,
    vacancy: 'Эксперт, 1 категория /Отдел по работе с персоналом/',
    comment: '',
  },
  {
    subdivision: 'Отдел автоматизированных систем и системного ПО',
    profile: 'Системный администратор /Отдел автоматизированных систем и системного ПО/',
    responsible: 'Голихина Надежда Олеговна',
    position: 'Системный администратор',
    date: '6/20/2016',
    number: 8,
    vacancy: '',
    comment: '',
  },
  {
    subdivision: 'Управление маркетинга и обслуживания клиентов',
    profile: 'Начальник управления /Управление маркетинга и обслуживания клиентов/',
    responsible: 'Голихина Надежда Олеговна',
    position: 'Начальник управления',
    date: '6/20/2016',
    number: 5,
    vacancy: 'Начальник управления /Управление маркетинга и обслуживания клиентов/',
    comment: '',
  },
];

const mockFilter = ['все'];

export const VacanciesTable = () => {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
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
          <Table.Th className="px-4 py-2">Подразделение</Table.Th>
            <Table.Th className="px-4 py-2">Вакансия</Table.Th>
            <Table.Th className="px-4 py-2">Ответсвенный</Table.Th>
            <Table.Th className="px-4 py-2">Ожидаемая дата</Table.Th>
            <Table.Th className="px-4 py-2">Номер</Table.Th>
            <Table.Th className="px-4 py-2">Кандидаты</Table.Th>
            <Table.Th className="px-4 py-2">...</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {tableData.map((row, index) => (
            <Table.Tr
              key={index}
            //  onClick={() => router.push('/dashboard/profiles/23')}
              className="cursor-pointer hover:bg-gray-400/10"
            >
                <Table.Td className="px-4 py-2">{row.subdivision}</Table.Td>
              <Table.Td className="px-4 py-2">{row.profile}</Table.Td>
              <Table.Td className="px-4 py-2">{row.responsible}</Table.Td>
              <Table.Td className="px-4 py-2">{row.date}</Table.Td>
              <Table.Td className="px-4 py-2">{row.number}</Table.Td>
              
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

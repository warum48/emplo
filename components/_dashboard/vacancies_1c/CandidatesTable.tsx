// PositionTable.tsx
import React from 'react';
import { ActionIcon, Divider, Input, Menu, Select, Table, Text } from '@mantine/core';
import { Button } from '@mantine/core';
import { IconDotsVertical } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
import { FiltersOverTableContainer } from '@/components/FiltersOverTable/FiltersOberTableContainer';
//import { FiltersOverTableContainer } from '../FiltersOverTable/FiltersOberTableContainer';

const mockFilter = ['все'];

const tableData = [
    {
      subdivision: 'Отдел установки и эксплуатации оборудования',
      profile: 'Инженер, 1 категория',
      responsible: 'Голихина Надежда',
      position: 'Инженер, 1 категория',
      date: '1/1/2024',
      number: 1,
      vacancy: 'Инженер, 1 категория',
      fio: 'ID - если данные закрыты',
      phone: 'ID - если данные закрыты',
      email: 'ID - если данные закрыты',
      status: 'В работе',
      expectedIncome: 1000000,
      city: '',
      comment: '',
    },
    {
      subdivision: 'Отдел установки и эксплуатации оборудования',
      profile: 'Инженер, 1 категория',
      responsible: 'Шариппе Елена',
      position: 'Инженер, 1 категория',
      date: '1/2/2024',
      number: 2,
      vacancy: 'Инженер, 1 категория',
      fio: 'Махатма Ганди',
      phone: '79952300514',
      email: 'sublimin.genuine@gmail.com',
      status: 'отклонен',
      expectedIncome: 1000000,
      city: '',
      comment: '',
    },
    {
      subdivision: 'Отдел расчетов по оплате труда',
      profile: 'Начальник отдела',
      responsible: 'Голихина Надежда',
      position: 'Начальник отдела',
      date: '1/3/2024',
      number: 3,
      vacancy: 'Начальник отдела',
      fio: 'Ельцин Борис Николаевич',
      phone: '',
      email: '',
      status: 'Закрыт',
      expectedIncome: 1000000,
      city: '',
      comment: '',
    },
    {
      subdivision: 'Сменно-штатный отдел',
      profile: 'Начальник отдела – заместитель начальника управления',
      responsible: 'Плахотина Антонина',
      position: 'Начальник отдела – заместитель начальника управления',
      date: '1/4/2024',
      number: 4,
      vacancy: 'Начальник отдела – заместитель начальника управления',
      fio: '',
      phone: '',
      email: '',
      status: '',
      expectedIncome: 1000000,
      city: '',
      comment: '',
    },
    {
      subdivision: 'Хозяйственный отдел',
      profile: 'Сторож',
      responsible: 'Голихина Надежда',
      position: 'Сторож',
      date: '1/5/2024',
      number: 5,
      vacancy: 'Сторож',
      fio: '',
      phone: '',
      email: '',
      status: '',
      expectedIncome: 1000000,
      city: '',
      comment: '',
    },
    {
      subdivision: 'Отдел по работе с персоналом',
      profile: 'Эксперт, 1 категория',
      responsible: 'Шариппе Елена',
      position: 'Эксперт, 1 категория',
      date: '1/6/2024',
      number: 6,
      vacancy: 'Эксперт, 1 категория',
      fio: '',
      phone: '',
      email: '',
      status: '',
      expectedIncome: 1000000,
      city: '',
      comment: '',
    },
    {
      subdivision: 'Системный администратор',
      profile: 'Системный администратор',
      responsible: 'Голихина Надежда',
      position: 'Системный администратор',
      date: '1/7/2024',
      number: 7,
      vacancy: 'Системный администратор',
      fio: '',
      phone: '',
      email: '',
      status: '',
      expectedIncome: 1000000,
      city: '',
      comment: '',
    },
    {
      subdivision: 'Управление маркетинга и обслуживания клиентов',
      profile: 'Начальник управления',
      responsible: 'Голихина Надежда',
      position: 'Начальник управления',
      date: '1/8/2024',
      number: 8,
      vacancy: 'Начальник управления',
      fio: '',
      phone: '',
      email: '',
      status: '',
      expectedIncome: 1000000,
      city: '',
      comment: '',
    },
  ];
  

export const CandidatesTable = () => {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <div
      className="text-black dark:text-white rounded  min-w-full inline-block"
      //w-full max-w-full
    >
      <div className="justify-between flex  items-center gap-4">
      <div className="form-header">
          Список кандидатов
        </div>
        {/*<Button className="bg-teal-500 text-white">Добавить кандидата</Button> */}
      </div>

      <FiltersOverTableContainer>
          <Input.Wrapper
            label="Подразделение:"
            labelProps={{ style: { marginRight: '8px', whiteSpace: 'nowrap' } }} // Adjust label styling
            styles={{
              root: { display: 'flex', alignItems: 'center' }, // Flexbox to align label and input
            }}
          >
            <Select data={mockFilter} placeholder="Все" />
          </Input.Wrapper>

          <Input.Wrapper
            label="Вакансия:"
            labelProps={{ style: { marginRight: '8px', whiteSpace: 'nowrap' } }} // Adjust label styling
            styles={{
              root: { display: 'flex', alignItems: 'center' }, // Flexbox to align label and input
            }}
          >
            <Select data={mockFilter} placeholder="Все" />
          </Input.Wrapper>

          <Input.Wrapper
            label="Ответственный:"
            labelProps={{ style: { marginRight: '8px', whiteSpace: 'nowrap' } }} // Adjust label styling
            styles={{
              root: { display: 'flex', alignItems: 'center', justifyItems: 'start' }, // Flexbox to align label and input
            }}
          >
            <Select data={mockFilter} placeholder="Все" />
          </Input.Wrapper>

          <Input.Wrapper
            label="Город:"
            labelProps={{ style: { marginRight: '8px', whiteSpace: 'nowrap' } }} // Adjust label styling
            styles={{
              root: {
                display: 'flex',
                alignItems: 'center',
                justifyItems: 'start',
                minWidth: '250px',
              }, // Flexbox to align label and input
            }}
          >
            <Select data={mockFilter} placeholder="Все" />
          </Input.Wrapper>

          <Input.Wrapper
            label="Статус:"
            labelProps={{ style: { marginRight: '8px', whiteSpace: 'nowrap' } }} // Adjust label styling
            styles={{
              root: { display: 'flex', alignItems: 'center', justifyItems: 'start' }, // Flexbox to align label and input
            }}
          >
            <Select data={mockFilter} placeholder="Все" />
          </Input.Wrapper>
          </FiltersOverTableContainer>

          <Table className="mt-4 min-w-full">
  <Table.Thead>
    <Table.Tr className="bg-purple-400/10 dark:bg-purple-900/20">
      <Table.Th className="px-4 py-2">Подразделение</Table.Th>
     {/*} <Table.Th className="px-4 py-2">Профиль</Table.Th>*/}
      <Table.Th className="px-4 py-2">Ответственный</Table.Th>
     {/* <Table.Th className="px-4 py-2">Позиция</Table.Th> */}
      <Table.Th className="px-4 py-2">Дата</Table.Th>
     {/* <Table.Th className="px-4 py-2">Номер</Table.Th>*/}
      <Table.Th className="px-4 py-2">Вакансия</Table.Th>
      <Table.Th className="px-4 py-2">ФИО</Table.Th>
      <Table.Th className="px-4 py-2">Телефон</Table.Th>
      <Table.Th className="px-4 py-2">Почта</Table.Th>
      <Table.Th className="px-4 py-2">Статус</Table.Th>
      <Table.Th className="px-4 py-2">Ожидаемый доход</Table.Th>
      <Table.Th className="px-4 py-2">Город</Table.Th>
      <Table.Th className="px-4 py-2">Комментарий</Table.Th>
      <Table.Th className="px-4 py-2">...</Table.Th>
    </Table.Tr>
  </Table.Thead>
  <Table.Tbody>
    {tableData.map((row, index) => (
      <Table.Tr key={index}>
        <Table.Td className="px-4 py-2">{row.subdivision}</Table.Td>
        {/*<Table.Td className="px-4 py-2">{row.profile}</Table.Td>*/}
        <Table.Td className="px-4 py-2">{row.responsible}</Table.Td>
         {/*<Table.Td className="px-4 py-2">{row.position}</Table.Td>*/}
        <Table.Td className="px-4 py-2">{row.date}</Table.Td>
        {/* <Table.Td className="px-4 py-2">{row.number}</Table.Td>*/}
        <Table.Td className="px-4 py-2">{row.vacancy}</Table.Td>
        <Table.Td className="px-4 py-2">{row.fio || '-'}</Table.Td>
        <Table.Td className="px-4 py-2">{row.phone || '-'}</Table.Td>
        <Table.Td className="px-4 py-2">{row.email || '-'}</Table.Td>
        <Table.Td className="px-4 py-2">{row.status || '-'}</Table.Td>
        <Table.Td className="px-4 py-2">{row.expectedIncome || '-'}</Table.Td>
        <Table.Td className="px-4 py-2">{row.city || '-'}</Table.Td>
        <Table.Td className="px-4 py-2">{row.comment || '-'}</Table.Td>
        <Table.Td>
          <Menu>
            <Menu.Target>
              <ActionIcon>
                <IconDotsVertical size={16} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                onClick={() => {
                  toggle();
                  router.push('/dashboard/requests/23');
                }}
              >
                Редактировать
              </Menu.Item>
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

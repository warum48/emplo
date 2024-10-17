// PositionTable.tsx
import React from "react";
import {
  ActionIcon,
  Divider,
  Input,
  Menu,
  Select,
  Table,
  Text,
} from "@mantine/core";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import { IconDotsVertical } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
//import { FiltersOverTableContainer } from "@/components/__atoms/Tables/Filters/FiltersOverTable/FiltersOberTableContainer";
import { useGetProfilesQuery } from "@/rtk/queries/joborder";
import { JSONViewer } from "@/components/__atoms/JSONViewer/JSONViewr";
import { Debugger } from "@/components/__atoms/Debugger/Debugger";
import dayjs from "dayjs";
import Link from "next/link";
import { BasicError } from "@/components/Errors/BasicError";
import { filterLabelStyle } from "@/styles/mantine_styles";
import { FilterItemContainer } from "@/components/__atoms/Tables/Filters/FilterItemContainer";
import { FiltersContainer } from "@/components/__atoms/Tables/Filters/FiltersContainer";

const mockFilter = ["все"];

export const ProfilesTable = () => {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const { data, error, isLoading } = useGetProfilesQuery();
  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <div className="form-header">Список профилей вакансий</div>
        <Link href="/dashboard/profiles/create">
          <Button className="bg-teal-500 text-white">Добавить профиль</Button>
        </Link>
      </div>
      <FiltersContainer>
        <FilterItemContainer>
          <Select
            data={mockFilter}
            placeholder="Все"
            labelProps={{ style: filterLabelStyle }}
            label="Подразделение:"
          />
        </FilterItemContainer>
        <FilterItemContainer>
          <Select
            data={mockFilter}
            placeholder="Все"
            labelProps={{ style: filterLabelStyle }}
            label="Наименование:"
          />
        </FilterItemContainer>
        <FilterItemContainer>
          <Select
            data={mockFilter}
            placeholder="Все"
            labelProps={{ style: filterLabelStyle }}
            label="Город:"
          />
        </FilterItemContainer>
      </FiltersContainer>

      <div
        className="inline-block min-w-full"
        //text-black dark:text-white rounded   inline-block
      >
        {/*  <FiltersOverTableContainer>
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
          <Divider orientation="vertical" className=" vert-divider" />
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
          <Divider orientation="vertical" className=" vert-divider" />
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
          
        </FiltersOverTableContainer>*/}

        <Table
          // striped highlightOnHover
          //Наименование 	Должность	Подразделение	Желаемая дата закрытия
          className="mt-4 min-w-full overflow-hidden"
        >
          <Table.Thead
            className=""
            //bg-gray-200 dark:bg-gray-700
          >
            <Table.Tr className="^bg-violet-300 ^text-white rounded-t-lg bg-purple-400/10 dark:bg-purple-900/15">
              <Table.Th className="px-4 py-2">
                Наименование<Debugger>row.org_job_name</Debugger>
              </Table.Th>
              <Table.Th className="px-4 py-2">
                Должность<Debugger>row.org_job_name</Debugger>
              </Table.Th>
              <Table.Th className="px-4 py-2">
                Подразделение<Debugger>row.org_job_name</Debugger>
              </Table.Th>
              <Table.Th className="px-4 py-2">
                Желаемая дата закрытия<Debugger>row.org_job_name</Debugger>
              </Table.Th>
              <Table.Th className="px-4 py-2">...</Table.Th>
              {/*} <Table.Th>Ответственный</Table.Th> */}
              {/*  <Table.Th>Номер</Table.Th>
            <Table.Th>Вакансия</Table.Th>
            <Table.Th>Комментарий</Table.Th>*/}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data?.map((row: any, index: number) => (
              <Table.Tr
                key={index}
                //  onClick={() => router.push('/dashboard/profiles/23')}
                className="cursor-pointer hover:bg-gray-400/10"
              >
                <Table.Td className="px-4 py-2">{row.org_job_name}</Table.Td>
                <Table.Td className="px-4 py-2">{row.speciality}</Table.Td>
                <Table.Td className="px-4 py-2">{row.org_unit}</Table.Td>
                <Table.Td className="px-4 py-2">
                  {dayjs(row.created_at).format("DD.MM.YYYY")}
                </Table.Td>
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
                          router.push("/dashboard/profiles/23");
                        }}
                      >
                        Редактировать
                      </Menu.Item>
                      <Menu.Item
                        onClick={() => {
                          toggle();
                          router.push("/dashboard/vacancies/create");
                        }}
                      >
                        Создать вакансию
                      </Menu.Item>
                      <Menu.Item>Удалить</Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Table.Td>
                {/*} <Table.Td className="px-2 py-1">{row.responsible}</Table.Td>*/}
                {/*   <Table.Td className="px-2 py-1">{row.number}</Table.Td>
              <Table.Td className="px-2 py-1">{row.vacancy}</Table.Td>
              <Table.Td className="px-2 py-1">{row.comment || '-'}</Table.Td> */}
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
        <Debugger>
          <JSONViewer data={data} />
        </Debugger>
        {error && <BasicError error={error} className="mt-4" />}
      </div>
    </>
  );
};

/*
org_unit - Подразделение
org_department - Отдел
org_project - Проект
*/

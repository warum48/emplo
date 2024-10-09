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
import { customLabelStyle, filterLabelStyle } from "@/styles/mantine_styles";
import { FilterItemContainer } from "@/components/__atoms/Tables/Filters/FilterItemContainer";
import { FiltersContainer } from "@/components/__atoms/Tables/Filters/FiltersContainer";
import { Preloader } from "../Preloader/Preloader";

const mockFilter = ["все"];

type FilterWithSelect = {
  data: any;
  placeholder: string;
  label: string;
  fieldName: string;
};

type FilterWithComponent = {
  component: JSX.Element;
  fieldName: string;
};

type TFilter = FilterWithSelect | FilterWithComponent;

type TCellValue = { value: string; formatter: (value: any) => string } | string;

type TProps = {
  header: string;
  addButton: {
    text: string;
    link: string;
  };
  filters: TFilter[];

  filterState?: any;//Record<string, string>;
  setFilterState?: React.Dispatch<React.SetStateAction<any>>;
  data: any[];
  ths: string[];
  tds: TCellValue[];
  loading: boolean;
  error: any;
  actionsMenu: {
    text: string;
    link: string;
    onClick?: () => void;
  }[];
};

const getNestedValue = (obj: any, path: string) => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

export const TableView = ({

  filters,
  filterState = {},
  setFilterState = () => {},

  header,
  addButton,

  data,
  ths,
  tds,
  loading,
  error,
  actionsMenu,
}: TProps) => {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);


  const filteredData = React.useMemo(() => {
    return data?.filter((row) => {
      return Object.entries(filterState).every(([key, value]) => {
        if (!value) return true; // Skip filter if no value selected
        return key.split('.').reduce((o, i) => o?.[i], row) === value;
      });
    });
  }, [data, filterState]);

  const numberOfAppliedFilters = React.useMemo(() => {
    return  Object.keys(filterState).reduce((acc, key) => {
      filterState[key] != '' ? acc++ : acc
      return acc;
    }, 0);
  }, [data, filterState]);

  const resetFilters = () => {
    setFilterState((prevState:any) => {
      // Create a new object with the same keys but empty string values
      return Object.keys(prevState).reduce((acc, key) => {
        //acc[key] = '';
        acc[key as keyof typeof acc] = '' as typeof acc[keyof typeof acc];
        return acc;
      }, {});
    });
  };
  



  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <div className="form-header">{header}</div>
        <Link href={addButton.link}>
          <Button className="bg-teal-600 text-white">{addButton.text}</Button>
        </Link>
      </div>
      <FiltersContainer resetFilters={resetFilters}>
        {filters.map((filter, index) => (
          <FilterItemContainer key={index}>
            {"component" in filter ? ( // Type narrowing using "in" to check if it's a component
              filter.component
            ) : (
              <>
              {/*<Select
                data={filter.data} // Safely access Select props
                placeholder={filter.placeholder}
                labelProps={{ style: filterLabelStyle }}
                label={filter.label}
              />*/}
              {filterState[filter.fieldName] }
              <Select
              key={filterState[filter.fieldName]}
                data={filter.data}
                placeholder={filter.placeholder}
                label={filter.label}
                labelProps={{ style: customLabelStyle }}
                value={filterState[filter.fieldName]}
                onChange={(value) =>
                  setFilterState((prev:any) => ({
                    ...prev,
                    [filter.fieldName]: value,
                  }))
                }
              />
              </>
            )
          }
          </FilterItemContainer>
        ))}
      </FiltersContainer>
      <div className="w-full overflow-x-auto"
      //className="inline-block min-w-full"
      >
        <Table className="mt-4 min-w-full overflow-hidden">
          <Table.Thead>
            <Table.Tr className="rounded-t-lg bg-purple-400/10 dark:bg-purple-900/15">
              <Table.Th className="px-4 py-2">...</Table.Th>
              {ths.map((th, index) => (
                <Table.Th className="px-4 py-2" key={index}>
                  {th}
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {//data?.map((row, index) => (
            filteredData?.map((row, rowIndex) => (
              <Table.Tr
                key={rowIndex}
                className="cursor-pointer"
                // hover:bg-gray-400/10
                //  onClick={() => router.push('/dashboard/profiles/23')}
              >
                <Table.Td>
                  <Menu>
                    <Menu.Target>
                      <ActionIcon>
                        <IconDotsVertical size={16} />
                      </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                      {actionsMenu.map((action, index) => (
                        <Menu.Item
                          onClick={
                            action.onClick
                              ? action.onClick
                              : () => {
                                  toggle();
                                  router.push(action.link);
                                }
                          }
                        >
                          {action.text}
                        </Menu.Item>
                      ))}
                    </Menu.Dropdown>
                  </Menu>
                </Table.Td>
                {tds.map((td, index) => (
                  <Table.Td className="px-4 py-2" key={index}>
                    {/*
                      typeof td === "string"
                        ? row[td] // Handle string type
                        : row[td.value] && td.formatter(row[td.value]) // Handle object with formatter
                    */}
                    {typeof td === "string"
      ? getNestedValue(row, td)  // Handle string type, possibly nested
      : getNestedValue(row, td.value) && td.formatter(getNestedValue(row, td.value)) // Handle object with formatter, possibly nested
    }
                  </Table.Td>
                ))}
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
       
        {numberOfAppliedFilters > 1 && filteredData && filteredData.length == 0 && (
          <div className="my-4 text-xs">Данных, удовлетворяющих все выбранные фильтры ({numberOfAppliedFilters}), нет</div>
        )}
        {loading && <Preloader  />}
        <Debugger>
          <JSONViewer data={data} />
        </Debugger>
        {error && <BasicError error={error} className="mt-4" />}
      </div>
    </>
  );
};

/*const exampleTable = () => {
  return (
    <TableView
      header="Список профилей вакансий"
      addButton={{
        text: "Добавить профиль",
        link: "/dashboard/profiles/create",
      }}
      filters={[
        {
          data: mockFilter,
          placeholder: "Все",
          label: "Подразделение:",
        },
        {
          data: mockFilter,
          placeholder: "Все",
          label: "Наименование:",
        },
        {
          data: mockFilter,
          placeholder: "Все",
          label: "Город:",
        },
      ]}
      data={[]}
      ths={["Наименование", "Должность", "Подразделение", "Дата закрытия"]}
      tds={["org_job_name", "speciality", "org_unit", "created_at"]}
      loading={false}
      error={null}
      actionsMenu={[
        { text: "Редактировать", link: "/dashboard/profiles/23" },
        { text: "Создать заявку", link: "/dashboard/vacancies/create" },
        {
          text: "Удалить",
          link: "",
          onClick: () => {
            console.log("remove");
          },
        },
      ]}
    />
  );
};
*/


/*
org_unit - Подразделение
org_department - Отдел
org_project - Проект
*/

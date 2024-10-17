import React from 'react';
import {
  Card,
  Avatar,
  Text,
  Badge,
  Group,
  Button,
  Divider,
  Anchor,
  Stack,
  Collapse,
} from '@mantine/core';
import { format, parseISO } from 'date-fns';
import { IconDownload } from '@tabler/icons-react';
import { LinkButton } from '@/components/__atoms/Buttons/LinkButton';
import { useDisclosure } from '@mantine/hooks';
import Value from '@/components/__atoms/Value/Value';
import dayjs from 'dayjs';
import Link from 'next/link';
//import Value from '@/components/Value'; // Import your Value component

export const VacancyCardPreview = ({ data }: any) => {
  const [opened, { toggle }] = useDisclosure(false);
  const {
    id,
    premium,
    billing_type,
    can_upgrade_billing_type,
    name,
    insider_interview,
    response_letter_required,
    area,
    salary,
    type,
    address,
    allow_messages,
    experience,
    schedule,
    employment,
    department,
    contacts,
    description,
    branded_description,
    vacancy_constructor_template,
    key_skills,
    accept_handicapped,
    accept_kids,
    archived,
    response_url,
    specializations,
    professional_roles,
    code,
    hidden,
    quick_responses_allowed,
    branded_template,
    driver_license_types,
    accept_incomplete_resumes,
    employer,
    published_at,
    created_at,
    initial_created_at,
    negotiations_url,
    suitable_resumes_url,
    apply_alternate_url,
    has_test,
    test,
    alternate_url,
    counters,
    expires_at,
    manager,
    response_notifications,
    working_days,
    working_time_intervals,
    working_time_modes,
    accept_temporary,
    languages,
    approved,
  } = data;

  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1 gap-8">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex gap-4 justify-between mb-4">
              {/*<Text className="text-sm">
                <b>Идентификатор вакансии:</b> <Value value={id} />
              </Text>*/}
              <Text className="text-sm">
              <b>Название:</b> <Value value={name} />
            </Text>
              <Badge c={premium ? 'white' : 'white'} className="bg-cyan-600">
                {premium ? 'Премиум' : 'Стандарт'}
              </Badge>
            </div>
            
            <Text className="text-sm">
            <b>Дата публикации:</b> {published_at ? dayjs(published_at).format('DD MMM YYYY') : 'не указана'}
          </Text>
          <Text className="text-sm">
          <b>Ответы:</b>  <span className="text-red-500 font-bold">{counters?.unread_responses} </span>/ {counters?.responses}
          </Text>
          <Text className="text-sm">
          <b>Резюме в процессе:</b> {counters?.resumes_in_progress}
          </Text>
          </div>
          <div className="flex gap-4 justify-between items-end">
          <LinkButton className="text-sm mt-4" color="gray" onClick={toggle}>
            Развернуть подробности
          </LinkButton>
          <Link href={'/dashboard/vacancies/' + id} >
          <Button size="compact-sm" >Перейти к вакансии</Button></Link>
          </div>
        </div>
        {/*<Text className="text-sm">
          <b>Описание:</b> <Value value={description} />
        </Text>*/}
      </div>

      <Collapse in={opened}>
        <Divider mt="xs" />
        <div className="p-4 grid grid-cols-2 gap-x-8">
          <Text size="xs" c="dimmed">
            Тип оплаты: <Value value={billing_type?.name} />
          </Text>
          {can_upgrade_billing_type && (
            <Text size="xs" c="dimmed">
              Возможность обновления типа оплаты: Да
            </Text>
          )}
          <Text size="xs" c="dimmed">
            Секретное интервью: {insider_interview ? 'Да' : 'Нет'}
          </Text>
          <Text size="xs" c="dimmed">
            Требуется ответное письмо: {response_letter_required ? 'Да' : 'Нет'}
          </Text>
          <Text size="xs" c="dimmed">
            Местоположение: <Value value={area?.name} />
          </Text>
          <Text size="xs" c="dimmed">
            Зарплата: <Value value={`${salary?.to} ${salary?.currency} ${salary?.gross ? '(брутто)' : '(нетто)'}`} />
          </Text>
          <Text size="xs" c="dimmed">
            Тип: <Value value={type?.name} />
          </Text>
          <Text size="xs" c="dimmed">
            Адрес: {address?.show_metro_only ? 'Показать только метро' : 'Указан'}
          </Text>
          <Text size="xs" c="dimmed">
            Разрешены сообщения: {allow_messages ? 'Да' : 'Нет'}
          </Text>
          <Text size="xs" c="dimmed">
            Опыт: <Value value={experience?.name} />
          </Text>
          <Text size="xs" c="dimmed">
            График: <Value value={schedule?.name} />
          </Text>
          <Text size="xs" c="dimmed">
            Занятость: <Value value={employment?.name} />
          </Text>
          <Text size="xs" c="dimmed">
            Отдел: <Value value={department || 'Не указан'} />
          </Text>
          <Text size="xs" c="dimmed">
            Контакты: <Value value={contacts || 'Не указаны'} />
          </Text>
          <Text size="xs" c="dimmed">
            Брендированное описание: <Value value={branded_description || 'Не указано'} />
          </Text>
          <Text size="xs" c="dimmed">
            Шаблон конструктора вакансии: <Value value={vacancy_constructor_template || 'Не указан'} />
          </Text>
          <Text size="xs" c="dimmed">
            Ключевые навыки: <Value value={key_skills?.length > 0 ? key_skills?.join(', ') : 'Нет'} />
          </Text>
          <Text size="xs" c="dimmed">
            Принимаются инвалиды: {accept_handicapped ? 'Да' : 'Нет'}
          </Text>
          <Text size="xs" c="dimmed">
            Принимаются дети: {accept_kids ? 'Да' : 'Нет'}
          </Text>
          <Text size="xs" c="dimmed">
            Архивировано: {archived ? 'Да' : 'Нет'}
          </Text>
          <Text size="xs" c="dimmed">
            URL для ответа: <Value value={response_url || 'Не указан'} />
          </Text>
          <Text size="xs" c="dimmed">
            Специализации: <Value value={specializations?.length > 0 ? specializations?.join(', ') : 'Нет'} />
          </Text>
          <Text size="xs" c="dimmed">
            Профессиональные роли: <Value value={professional_roles?.map((role: any) => role.name).join(', ')} />
          </Text>
          <Text size="xs" c="dimmed">
            Код: <Value value={code || 'Не указан'} />
          </Text>
          <Text size="xs" c="dimmed">
            Скрыто: {hidden ? 'Да' : 'Нет'}
          </Text>
          <Text size="xs" c="dimmed">
            Быстрые ответы разрешены: {quick_responses_allowed ? 'Да' : 'Нет'}
          </Text>
          <Text size="xs" c="dimmed">
            Брендированный шаблон: <Value value={branded_template || 'Не указан'} />
          </Text>
          <Text size="xs" c="dimmed">
            Типы водительских прав: <Value value={driver_license_types?.length > 0 ? driver_license_types?.join(', ') : 'Нет'} />
          </Text>
          <Text size="xs" c="dimmed">
            Принимаются неполные резюме: {accept_incomplete_resumes ? 'Да' : 'Нет'}
          </Text>
          <Text size="xs" c="dimmed">
            Работодатель: <Value value={employer?.name} />
          </Text>
          <Text size="xs" c="dimmed">
            Дата публикации: <Value value={published_at ? format(parseISO(published_at), 'dd MMM yyyy') : 'Не указана'} />
          </Text>
          <Text size="xs" c="dimmed">
            Дата создания: <Value value={created_at ? format(parseISO(created_at), 'dd MMM yyyy') : 'Не указана'} />
          </Text>
          <Text size="xs" c="dimmed">
            Дата первоначального создания: <Value value={initial_created_at ? format(parseISO(initial_created_at), 'dd MMM yyyy') : 'Не указана'} />
          </Text>
          <Text size="xs" c="dimmed">
            URL для переговоров: <Value value={negotiations_url || 'Не указан'} />
          </Text>
          <Text size="xs" c="dimmed">
            URL для подходящих резюме: <Value value={suitable_resumes_url || 'Не указан'} />
          </Text>
          <Text size="xs" c="dimmed">
            URL для отклика:{' '}
            <Anchor href={apply_alternate_url} target="_blank">
              Применить
            </Anchor>
          </Text>
          <Text size="xs" c="dimmed">
            Тест: {has_test ? 'Да' : 'Нет'}
          </Text>
          <Text size="xs" c="dimmed">
            URL на тест: <Value value={test?.url || 'Не указан'} />
          </Text>
          <Text size="xs" c="dimmed">
            Альтернативный URL: <Value value={alternate_url || 'Не указан'} />
          </Text>
        </div>
      </Collapse>
    </div>
  );
};



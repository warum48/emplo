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

const VacancyCard = ({ data }: any) => {
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
      <div className="grid grid-cols-2 gap-8">
  <div className="flex flex-col justify-between h-full">
    <div>
      <div className="flex gap-4 justify-between">
        <Text className="text-sm">
          <b>Идентификатор вакансии:</b> {id}
        </Text>
        <Badge c={premium ? 'white' : 'white'}>
          {premium ? 'Премиум' : 'Стандарт'}
        </Badge>
      </div>
      <Text className="text-sm">
        <b>Название:</b> {name}
      </Text>
    </div>
    <LinkButton className="text-sm mt-auto" color="gray" onClick={toggle}>
      Подробнее
    </LinkButton>
  </div>
  <Text className="text-sm">
    <b>Описание:</b> {description}
  </Text>
</div>


      <Collapse in={opened}>
        <Divider mt="xs" />
        <div className="p-4 grid grid-cols-2 gap-x-8">
          <Text size="xs" c="dimmed">
            Тип оплаты: {billing_type.name}
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
            Местоположение: {area.name}
          </Text>
          <Text size="xs" c="dimmed">
            Зарплата: {salary.to} {salary.currency} {salary.gross ? '(брутто)' : '(нетто)'}
          </Text>
          <Text size="xs" c="dimmed">
            Тип: {type.name}
          </Text>
          <Text size="xs" c="dimmed">
            Адрес: {address.show_metro_only ? 'Показать только метро' : 'Указан'}
          </Text>
          <Text size="xs" c="dimmed">
            Разрешены сообщения: {allow_messages ? 'Да' : 'Нет'}
          </Text>
          <Text size="xs" c="dimmed">
            Опыт: {experience.name}
          </Text>
          <Text size="xs" c="dimmed">
            График: {schedule.name}
          </Text>
          <Text size="xs" c="dimmed">
            Занятость: {employment.name}
          </Text>
          <Text size="xs" c="dimmed">
            Отдел: {department || 'Не указан'}
          </Text>
          <Text size="xs" c="dimmed">
            Контакты: {contacts || 'Не указаны'}
          </Text>

          <Text size="xs" c="dimmed">
            Брендированное описание: {branded_description || 'Не указано'}
          </Text>
          <Text size="xs" c="dimmed">
            Шаблон конструктора вакансии: {vacancy_constructor_template || 'Не указан'}
          </Text>
          <Text size="xs" c="dimmed">
            Ключевые навыки: {key_skills.length > 0 ? key_skills.join(', ') : 'Нет'}
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
            URL для ответа: {response_url || 'Не указан'}
          </Text>
          <Text size="xs" c="dimmed">
            Специализации: {specializations.length > 0 ? specializations.join(', ') : 'Нет'}
          </Text>
          <Text size="xs" c="dimmed">
            Профессиональные роли: {professional_roles.map((role: any) => role.name).join(', ')}
          </Text>
          <Text size="xs" c="dimmed">
            Код: {code || 'Не указан'}
          </Text>
          <Text size="xs" c="dimmed">
            Скрыто: {hidden ? 'Да' : 'Нет'}
          </Text>
          <Text size="xs" c="dimmed">
            Быстрые ответы разрешены: {quick_responses_allowed ? 'Да' : 'Нет'}
          </Text>
          <Text size="xs" c="dimmed">
            Брендированный шаблон: {branded_template || 'Не указан'}
          </Text>
          <Text size="xs" c="dimmed">
            Типы водительских прав:{' '}
            {driver_license_types.length > 0 ? driver_license_types.join(', ') : 'Нет'}
          </Text>
          <Text size="xs" c="dimmed">
            Принимаются неполные резюме: {accept_incomplete_resumes ? 'Да' : 'Нет'}
          </Text>
          <Text size="xs" c="dimmed">
            Работодатель: {employer.name}
          </Text>
          <Text size="xs" c="dimmed">
            Дата публикации: {format(parseISO(published_at), 'dd MMM yyyy')}
          </Text>
          <Text size="xs" c="dimmed">
            Дата создания: {format(parseISO(created_at), 'dd MMM yyyy')}
          </Text>
          <Text size="xs" c="dimmed">
            Дата первоначального создания: {format(parseISO(initial_created_at), 'dd MMM yyyy')}
          </Text>
          <Text size="xs" c="dimmed">
            URL для переговоров: {negotiations_url || 'Не указан'}
          </Text>
          <Text size="xs" c="dimmed">
            URL для подходящих резюме: {suitable_resumes_url || 'Не указан'}
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
            Альтернативный URL:{' '}
            <Anchor href={alternate_url} target="_blank">
              Посмотреть вакансию
            </Anchor>
          </Text>
          <Text size="xs" c="dimmed">
            Ответы: {counters.responses}
          </Text>
          <Text size="xs" c="dimmed">
            Просмотры: {counters.views}
          </Text>
          <Text size="xs" c="dimmed">
            Приглашения: {counters.invitations}
          </Text>
          <Text size="xs" c="dimmed">
            Непрочитанные ответы: {counters.unread_responses}
          </Text>
          <Text size="xs" c="dimmed">
            Резюме в процессе: {counters.resumes_in_progress}
          </Text>
          <Text size="xs" c="dimmed">
            Приглашения и ответы: {counters.invitations_and_responses}
          </Text>
          <Text size="xs" c="dimmed">
            Дата истечения: {format(parseISO(expires_at), 'dd MMM yyyy')}
          </Text>
          <Text size="xs" c="dimmed">
            Менеджер: {manager.id}
          </Text>
          <Text size="xs" c="dimmed">
            Уведомления о ответах: {response_notifications ? 'Да' : 'Нет'}
          </Text>
          <Text size="xs" c="dimmed">
            Рабочие дни: {working_days.length > 0 ? working_days.join(', ') : 'Не указаны'}
          </Text>
          <Text size="xs" c="dimmed">
            Интервалы рабочего времени:{' '}
            {working_time_intervals.length > 0 ? working_time_intervals.join(', ') : 'Не указаны'}
          </Text>
          <Text size="xs" c="dimmed">
            Режимы рабочего времени:{' '}
            {working_time_modes.length > 0 ? working_time_modes.join(', ') : 'Не указаны'}
          </Text>
          <Text size="xs" c="dimmed">
            Принимаются временные сотрудники: {accept_temporary ? 'Да' : 'Нет'}
          </Text>
          <Text size="xs" c="dimmed">
            Языки: {languages.length > 0 ? languages.join(', ') : 'Не указаны'}
          </Text>
          <Text size="xs" c="dimmed">
            Одобрено: {approved ? 'Да' : 'Нет'}
          </Text>
        </div>
      </Collapse>
    </div>
  );
};

export default VacancyCard;

import React from 'react';
import { Card, Avatar, Text, Badge, Group, Button, Divider, Anchor, Stack } from '@mantine/core';
import { format, parseISO } from 'date-fns';
import { IconDownload } from '@tabler/icons-react';

const CandidateCard = ({ data }: any) => {
    const {
        id,
        state,
        created_at,
        updated_at,
        resume,
        viewed_by_opponent,
        has_updates,
        messages_url,
        url,
        counters,
        chat_states,
        source,
        chat_id,
        messaging_status,
        applicant_question_state,
        employer_state,
        funnel_stage,
        templates,
        actions
    } = data;

    return (
        <Card padding="lg" shadow="md" className="max-w-md mx-auto my-4">
            <Card.Section>
                <Group className="p-4">
                    <Text>Идентификатор кандидата: {id}</Text>
                    <Badge color={state.id === 'response' ? 'green' : 'red'}>{state.name}</Badge>
                </Group>
                <Divider />
                <Group className="p-4" gap="md">
                    <Avatar src={resume.photo || '/default-avatar.png'} size="xl" radius="xl" />
                    <div>
                        <Text>{resume.title || 'Без заголовка'}</Text>
                        <Text color="dimmed">Местоположение: {resume.area?.name || 'Не указано'}</Text>
                        <Text color="dimmed">Возраст: {resume.age || 'Не указан'}</Text>
                        <Text color="dimmed">Пол: {resume.gender?.name || 'Не указан'}</Text>
                        <Text color="dimmed">Опыт: {resume.total_experience?.months} месяцев</Text>
                        <Text color="dimmed">Зарплата: {resume.salary?.amount} {resume.salary?.currency}</Text>
                    </div>
                </Group>
                <Divider />
                <Stack className="p-4" gap="md">
                    <Text>Сертификаты:</Text>
                    {resume.certificate.length > 0 ? (
                        resume.certificate.map((cert: any, index: number) => (
                            <Group key={index} className="mb-2">
                                <Text>{cert.title}</Text>
                                <Anchor href={cert.url} target="_blank" className="text-blue-500">
                                    Просмотреть сертификат
                                </Anchor>
                            </Group>
                        ))
                    ) : (
                        <Text>Сертификаты отсутствуют</Text>
                    )}
                </Stack>
                <Divider />
                <Stack className="p-4" gap="md">
                    <Text>Образование:</Text>
                    {resume.education.primary.length > 0 ? (
                        resume.education.primary.map((edu: any, index: number) => (
                            <Group key={index} className="mb-2">
                                <div>
                                    <Text>{edu.name}</Text>
                                    <Text color="dimmed">{edu.organization}</Text>
                                    <Text color="dimmed">Год: {edu.year}</Text>
                                </div>
                            </Group>
                        ))
                    ) : (
                        <Text>Данные об образовании отсутствуют</Text>
                    )}
                </Stack>
                <Divider />
                <Group className="p-4" gap="md">
                    <Text>Действия:</Text>
                    {resume.actions?.download && (
                        <Group gap="md">
                            {resume.actions.download.pdf && (
                                <Button component="a" href={resume.actions.download.pdf.url} target="_blank" className="w-full">
                                    Скачать PDF
                                </Button>
                            )}
                            {resume.actions.download.rtf && (
                                <Button component="a" href={resume.actions.download.rtf.url} target="_blank" className="w-full">
                                    Скачать RTF
                                </Button>
                            )}
                        </Group>
                    )}
                </Group>
                <Divider />
                <Stack className="p-4" gap="md">
                    <Text>Детали статуса:</Text>
                    <Text>Источник: {source}</Text>
                    <Text>Chat ID: {chat_id}</Text>
                    <Text>Статус обмена сообщениями: {messaging_status}</Text>
                    <Text>Состояние вопроса от кандидата: {applicant_question_state ? 'Да' : 'Нет'}</Text>
                    <Text>Состояние работодателя: {employer_state.name}</Text>
                    <Text>Этап воронки: {funnel_stage.state.name}</Text>
                </Stack>
            </Card.Section>
        </Card>
    );
};

export default CandidateCard;

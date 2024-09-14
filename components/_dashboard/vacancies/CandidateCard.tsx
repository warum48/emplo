import React from 'react';
import { Card, Avatar, Text, Badge, Group, Button, Divider, Anchor, Stack } from '@mantine/core';
import { format, parseISO } from 'date-fns';
import { IconDownload } from '@tabler/icons-react';
import { JSONViewer } from '@/components/__atoms/JSONViewer/JSONViewr';

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
        <div className='grid grid-cols-2 gap-4 text-sm w-full bg-gray-400/10'>
            <div>
                
                <Group className="p-4" gap="md">
                    <Avatar src={resume.photo || '/default-avatar.png'} size="xl" radius="xl" />
                    <div>
                        <Text size='sm'>{resume.title || 'Без заголовка'}</Text>
                        <Text size='sm' color="dimmed">Местоположение: {resume.area?.name || 'Не указано'}</Text>
                        <Text size='sm' color="dimmed">Возраст: {resume.age || 'Не указан'}</Text>
                        <Text size='sm' color="dimmed">Пол: {resume.gender?.name || 'Не указан'}</Text>
                        <Text size='sm' color="dimmed">Опыт: {resume.total_experience?.months} месяцев</Text>
                        <Text size='sm' color="dimmed">Зарплата: {resume.salary?.amount} {resume.salary?.currency}</Text>
                    </div>
                </Group>
                <Divider />
                <Stack className="p-4" gap="0">
                    <Text size='sm' mb="md"><b>Сертификаты:</b></Text>
                    {resume.certificate.length > 0 ? (
                        resume.certificate.map((cert: any, index: number) => (
                            <div key={index} className="flex flex-row mb-2 gap-2 justify-between items-start
                            ">
                                <span>{cert.title}</span>
                                <Anchor href={cert.url} target="_blank" className="text-blue-500" size='sm'>
                                    Просмотреть сертификат
                                </Anchor>
                            </div>
                        ))
                    ) : (
                        <Text size='sm'>Сертификаты отсутствуют</Text>
                    )}
                </Stack>
                <Divider />
                </div>
                <div>
                <Stack className="p-4" gap="md">
                    <Text size='sm'><b>Образование:</b></Text>
                    {resume.education.primary.length > 0 ? (
                        resume.education.primary.map((edu: any, index: number) => (
                            <Group key={index} className="mb-2">
                                <div>
                                    <Text size='sm'>{edu.name}</Text>
                                    <Text size='sm' color="dimmed">{edu.organization}</Text>
                                    <Text size='sm' color="dimmed">Год: {edu.year}</Text>
                                </div>
                            </Group>
                        ))
                    ) : (
                        <Text size='sm'>Данные об образовании отсутствуют</Text>
                    )}
                </Stack>
                <Divider />
                <Group className="p-4" gap="md">
                    <Text size='sm'><b>Действия:</b></Text>
                    {resume.actions?.download && (
                        <Group gap="md">
                            {resume.actions.download.pdf && (
                                <Button component="a" href={resume.actions.download.pdf.url} target="_blank" >
                                    Скачать PDF
                                </Button>
                            )}
                            {resume.actions.download.rtf && (
                                <Button component="a" href={resume.actions.download.rtf.url} target="_blank" >
                                    Скачать RTF
                                </Button>
                            )}
                        </Group>
                    )}
                </Group>
                <Divider />
                <Stack className="p-4" gap="0">
                    
                    <Text size='sm' className="mb-2">Источник: {source}</Text>
                    <Text size='sm' className="mb-2">Chat ID: {chat_id}</Text>
                    <Text size='sm' className="mb-2">Статус обмена сообщениями: {messaging_status}</Text>
                    <Text size='sm' className="mb-2">Состояние вопроса от кандидата: {applicant_question_state ? 'Да' : 'Нет'}</Text>
                    <Text size='sm' className="mb-2">Состояние работодателя: {employer_state.name}</Text>
                    <Text size='sm' className="mb-2">Этап воронки: {funnel_stage.state.name}</Text>

                    <Divider />
                    <Group className="py-2">
                    <Text size='sm'>Идентификатор кандидата: {id}</Text>
                    <Badge color={state.id === 'response' ? 'green' : 'red'}>{state.name}</Badge>
                </Group>
                <JSONViewer data={data} />
                </Stack>
                </div>
            </div>
    );
};

export default CandidateCard;

import { Gender, RelocationType, Schedule } from "./CandidateSearchForm";

export interface Vacancy {
  id?: number;
  title: string; // Название вакансии
  description: string; // Описание вакансии
  company_name: string; // Название компании
  location: string; // Местоположение
  salary_from: number; // Зарплата от
  salary_to: number; // Зарплата до
  employment_type: string; // Тип занятости
  experience_required: string; // Требуемый опыт
  skills_required: string; // Требуемые навыки
  contact_email: string; // Контактный email
  contact_phone: string; // Контактный телефон
  publish_date: string; // Дата публикации
  application_deadline: string; // Срок подачи заявок
}

export type Department = 'HR' | 'IT' | 'Finance' | 'Marketing' | 'Sales' | '';
export type ProjectDirection = 'development' | 'analytics' | 'support' | '';
export type MassRecruitment = boolean; // Boolean field for mass recruitment
export type Experience = 'no_experience' | '1_to_3_years' | '3_to_6_years' | 'over_6_years';

export interface VacancyZayavka {
  desiredClosureDate: string,
  jobID: string,
  jobName: string,
  jobTitle: string;
  
  department: Department; // Подразделение
  projectDirection: ProjectDirection; // Проект/направление

  massRecruitment: MassRecruitment; // Массовый подбор
  candidateCount: number; // Количество кандидатов
  responsibilities: string; // Обязанности
  conditions: string; // Условия
  requirements: string; // Требования

  area: string[],
  relocation_type?: RelocationType,
  schedule: Schedule[],
  experience: number;
  gender: Gender;
  age: { from: number, to: number },
  salary:number,
  parsing: any[],//{ hh: boolean, rabota: boolean },
  postVacancy: any[]//{ hh: boolean, rabota: boolean },
}

//
 // vacancyName: string; // Наименование вакансии
 // vacancyId: string; // ID вакансии
 // desiredClosingDate: Date; // Желаемая дата закрытия
 //position: string; // Должность

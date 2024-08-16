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

type Department = 'HR' | 'IT' | 'Finance' | 'Marketing' | 'Sales' | '';
type ProjectDirection = 'development' | 'analytics' | 'support' | '';
type MassRecruitment = boolean; // Boolean field for mass recruitment
type Experience = 'no_experience' | '1_to_3_years' | '3_to_6_years' | 'over_6_years';

export interface VacancyZayavka {
  desiredClosureDate: string,
  jobID: string,
  jobName: string,
  jobTitle: string;
  //position: string; // Должность
  department: Department; // Подразделение
  projectDirection: ProjectDirection; // Проект/направление
 // vacancyName: string; // Наименование вакансии
 // vacancyId: string; // ID вакансии
 // desiredClosingDate: Date; // Желаемая дата закрытия
  massRecruitment: MassRecruitment; // Массовый подбор
  candidateCount: number; // Количество кандидатов
  responsibilities: string; // Обязанности
  conditions: string; // Условия
  requirements: string; // Требования
}

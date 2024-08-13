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
  
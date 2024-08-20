export type SalarySchema = {
    currency: string | null;
    bottom: number | null;
    gross: boolean | null;
    to: number | null;
  };
  
  export type NewVacancyFormValues = {
    name: string;
    professional_roles: string;
    employment: string | null;
    area: string;
    salary: SalarySchema;
    type: string;
    description: string;
    billing_type: string;
    accept_handicapped: boolean | null;
    accept_kids: boolean | null;
    accept_temporary: boolean | null;
    allow_messages: boolean | null;
  };
  
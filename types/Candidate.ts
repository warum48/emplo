export interface Experience {
    start: string;
    end: string | null;
    company: string;
    company_id: string;
    industry: string | null;
    industries: Array<{
      id: string;
      name: string;
    }>;
    area: string | null;
    company_url: string;
    employer: {
      id: string;
      name: string;
      url: string;
      alternate_url: string;
      logo_urls: {
        '90': string;
      };
    };
    position: string;
    description: string;
  }
  
  export interface Candidate {
    id: number;
    candidate_id: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    age: number;
    gender: string;
    birth_date: string;
    alternate_url: string;
    area: string;
    business_trip_readiness: string;
    skills: string;
    salary: number;
    experience: Experience[];
    resume_status: string;
    professional_roles: string;
    total_experience: number;
  }
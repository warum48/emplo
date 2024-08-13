export type JobSearchStatus = 
  | "active_search"
  | "looking_for_offers"
  | "has_job_offer"
  | "not_looking_for_job";

export type Gender = "male" | "female";

export type RelocationType = "living_or_relocation" | "living" | "relocation";

export type Schedule = 
  | "fullDay"
  | "shift"
  | "flexible"
  | "remote"
  | "flyInFlyOut";

export interface CandidateSearchFormValues {
  specialty: string; // Use appropriate type if specific options are available
  area: string[]; // Assuming these are IDs of the areas
  relocation_type?: RelocationType;
  schedule: Schedule[];
  skills?: string[]; // Use appropriate type if specific options are available
  experience: number; //"noExperience" | "between1And3" | "between3And6" | "moreThan6";
  gender: Gender;
  age: number;
  salary: number;
  job_search_status?: JobSearchStatus[];
  limit: number;
}

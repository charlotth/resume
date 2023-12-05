export interface ResumeGroup {
    [key: string]: Resume;
}

export interface ResumeProfile {
  name: string;
  avatar?: string;
  title: string;
  description?: string;
  email?: string;
  phone?: string;
  location?: string;
  github?: string;
}

export interface ResumeSkill {
  categorie?: string;
  items: string[]
}

export interface ResumeLanguage {
  label: string;
  level: string;
}

export interface ResumeExperience {
  title: string;
  society?: string;
  date?: string;
  contact?: string;
  description?: string;
  tools?: string[];
  tasks?: string[];
  experiences?: ResumeExperience[];
}

export interface ResumeTraining extends Omit<ResumeExperience, 'contact' | 'tools' | 'description' | 'tasks' | 'experiences'> {
}

export interface Resume {
    profile: ResumeProfile,
    skills: ResumeSkill[];
    experiences: ResumeExperience[];
    languages: ResumeLanguage[];
    trainings: ResumeTraining[];
    hobbies: string[];
    layout: {
      pages: Array<{ sider: string[]; content: string[]}>;
    };
  }

export interface ResumeGroup {
    [key: string]: Resume;
}

export interface Resume {
    profile: {
      name: string;
      avatar?: string;
      title: string;
      description?: string;
      email?: string;
      phone?: string;
      location?: string;
      github?: string;
    },
    skills: Array<{ categorie?: string; items: string[] }>;
    experiences: Array<{ title: string; society?: string; date?: string; contact?: string; description?: string; tools?: string[]; tasks?: string[] }>;
    languages: Array<{ label: string; level: string; }>;
    trainings: Array<{ title: string; society?: string; date?: string; description?: string; }>;
    hobbies: string[];
    layout: {
      pages: Array<{ sider: string[]; content: string[]}>;
    };
  }

export interface pupilsSchema {
    id?: string;
    name: {
        first: string;
        last: string;
    },
    image: string;
    dateOfBirth: string;
    phones: {
        phone: string;
        primary: boolean;
      } [];
    sex: string;
    description: string
  }

export interface subjectSchema  {
    id?: string;
    title: string;
    lessons: number;
    description: string;
}

export interface teacherSchema  {
    id?: string;
    name: {
        first: string;
        last: string;
    },
    image: string;
    dateOfBirth: string;
    emails: {
        email: string; 
        primary: boolean} [];
    phones: {
        phone: string;
        primary: boolean} [];
    sex: string; 
    subjects: {
        subject: string;
    } [];
    description: string;
  };
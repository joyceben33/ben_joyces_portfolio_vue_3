import type { SimpleIcon } from 'simple-icons';

interface ITechnology {
  name: string;
  icon: SimpleIcon;
  docsLink: string;
}

interface IEmploymentDate {
  month: 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';
  year: string;
}

export interface IJob {
  name: string;
  startDate: IEmploymentDate;
  endDate: IEmploymentDate;
  show: boolean;
  color?: string;
  scrollTag: string;
  description: string;
  image: string;
  technologies: ITechnology[];
}

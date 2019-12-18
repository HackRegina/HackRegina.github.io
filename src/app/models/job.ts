import Label from './label';

export default class Job {
  title: string;
  labels: Label[];
  created_at: Date;
  body: string;
  number: number;
}

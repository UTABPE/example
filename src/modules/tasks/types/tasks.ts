export type Task = {
  businessKey: string;
  startDate: string;
  name: string;
  formId: string;
  sectionsData: {
    id: string;
    inputs: {
      id: string;
      value: any;
    }[];
  }[];
};

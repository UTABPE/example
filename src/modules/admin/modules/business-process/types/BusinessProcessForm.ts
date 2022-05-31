// TODO: fix
export enum BPFormInputType {
  SingleTextField = 'TEXT',
  TextArea = 'textArea',
  FormattedText = 'formattedText',
  NumberInteger = 'numberInteger',
  NumberFraction = 'NUMBER',
  PercentInteger = 'percentInteger',
  PercentFraction = 'percentFraction',
  Date = 'date',
  DateTime = 'dateTime',
  DatePeriod = 'datePeriod',
  UploadFile = 'uploadFile',
  List = 'list',
}
export const BPFormInputRuType: { [key: string]: string } = {
  [BPFormInputType.SingleTextField]: 'Однострочное поле',
  textArea: 'Текстовая область',
  formattedText: 'Форматируемый текст',
  [BPFormInputType.NumberFraction]: 'Целое число',
  numberFraction: 'Дробное число',
  percentInteger: '',
  percentFraction: '',
  date: 'Дата',
  dateTime: 'Дата и время',
  datePeriod: 'Период с-по',
  uploadFile: 'Поле загрузки файла',
  list: 'Список',
};

export type BPTableItemType = {
  readonly elementType?: string;
  readonly label?: string;
  readonly index: number;
};

export interface BPFormSectionElement {
  inputType: string;
  inputLabel: string;
  bpMember?: string;
  options?: [];
  settings?: [];
}

export interface BPSectionFormValues {
  formSectionTitle?: string;
  formSectionElements: BPFormSectionElement[];
}

export type NewBPFormPayload = {
  name: string;
  sections: {
    title: string;
    inputs: {
      title: string;
      type: string;
    }[];
  }[];
};

export type BPForm = {
  id: string;
  name: string;
  sections: {
    id: string;
    title: string;
    inputs: {
      id: string;
      title: string;
      type: string;
    }[];
  }[];
};

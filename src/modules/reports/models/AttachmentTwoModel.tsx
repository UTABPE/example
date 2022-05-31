import { SelectProps } from 'antd';

/**
 * Модель, описывающая поля в форме “Приложение-2“.
 * **TODO:** На данный момент не имеет модели на бэкенде, может быть изменена
 *
 * @link https://petrelai.atlassian.net/browse/EKAP-20
 */
export type AttachmentTwoModel = {
  /** № технологического блока */
  techBlockNumber: string;
  /** ПР, хим. элементы
   * при ортицательной валентности к переменной добавлено "_" в конце
   */
  pr: {
    /** u, мг/дм³ */
    u: number;
    /** кислотность, г/дм³ */
    acidity: number;
    /** рН */
    pH: number;
    /** ОВП, мВ */
    OVP: number;
    /** SO4 2-, г/дм³ */
    SO42_: number;
    /** NO3 3-, г/дм³ */
    NO33_: number;
    /** Fe 3+, г/дм³ */
    Fe3: number;
    /** Fe 2+, г/дм³ */
    Fe2: number;
    /** Al 3+, г/дм³ */
    Al3: number;
    /** Si 4+, г/дм³ */
    Si4: number;
    /** Cl -, г/дм³ */
    Cl_: number;
    /** Ca 2+, г/дм³ */
    Ca2: number;
    /** Mg 2+, г/дм³ */
    Mg2: number;
    /** Сухость, г/дм³ */
    dry: number;
    /** коэффицент окисления Fe */
    FeOxiCoef: number;
  };
  /**МС */
  mc: {
    /** u мг/дм³ */
    u: number;
    /** кислотность г/дм³ */
    acidity: number;
  };
  /** bp */
  bp: {
    /** кислотность г/дм³ */
    acidity: number;
  };
  /** раствор на закисление г/дм³ */
  acidificationSol: {
    /** кислотность */
    acidity: number;
  };
  /** режим закисления */
  acidificationMod: number;
};

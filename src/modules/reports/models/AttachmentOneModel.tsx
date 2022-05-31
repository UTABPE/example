/**
 * Модель, описывающая поля в форме “Приложение-1“.
 * **TODO:** На данный момент не имеет модели на бэкенде, может быть изменена
 *
 * @link https://petrelai.atlassian.net/browse/EKAP-20
 */
export type AttachmentOneModel = {
  /** № технологического блока */
  techBlockNumber: string;
  /** ГРМ, тыс. тонн */
  grm: number;
  /** Проектный коэффициент извлечения, проценты */
  projectExtractionCoefficient: number;
  /** Запасы вскрытые, тонны */
  discoveredReserves: number;

  /** Время работы */
  workTime: {
    /** Закисление */
    acidification: {
      /** за отчетный месяц, дни */
      perReportingMonth: number;
      /** с нарастанием, мес */
      accumulated: number;
    };
    /** Выщелачивание */
    leaching: {
      /** за отчетный месяц, дни */
      perReportingMonth: number;
      /** с нарастанием, мес */
      accumulated: number;
    };
  };

  /** Количество скважин */
  numberOfWells: {
    /** Откачных (скважин) */
    pumpOut: {
      /** всего, шт */
      total: number;
      /** в работе, шт */
      active: number;
    };
    /** закачных (скважин) */
    pumpIn: {
      /** всего, шт */
      total: number;
      /** в работе, шт */
      active: number;
    };
  };

  /** Производительность скважин */
  wellProductivity: {
    /** Откачных (скважин), м³/ч */
    pumpOut: number;
    /** Закачных (скважин), м³/ч */
    pumpIn: number;
  };

  /** Добыто ПР (Продуктивных Растворов выщелачивания) */
  prMined: {
    /** за отчетный месяц, тыс.м³ */
    perReportingMonth: number;
    /** с нарастанием, тыс.м³ */
    accumulated: number;
  };

  /** Средняя концентрация МЕ в ПР */
  averageMeConcentrationInPr: {
    /** за отчетный месяц, мг/дм³ */
    perReportingMonth: number;
    /** с нарастанием, мг/дм³ */
    accumulated: number;
  };

  /** Количество Ме в ПР */
  meAmountInPr: {
    /** за отчетный месяц, кг */
    perReportingMonth: number;
    /** с нарастанием, кг */
    accumulated: number;
  };

  /** Подано Ме в ВР (МС) */
  mePassedToBp: {
    /** за отчетный месяц, кг */
    perReportingMonth: number;
  };

  /** Извлечено Ме из недр */
  extractedMeFromBowels: {
    /** за отчетный месяц, кг */
    perReportingMonth: number;
    /** с нарастанием, т */
    accumulated: number;
    /** Коэффициент извлечения, % */
    extractionCoefficient: number;
    /** Переизвлечение, т */
    reextraction: number;
  };

  /** Выпуск Ме в ГП */
  releaseMeInGp: {
    /** за отчетный месяц, кг */
    perReportingMonth: number;
    /** с нарастанием, т */
    accumulated: number;
  };

  /** Подано растворов на закисление */
  submittedSolutionsForAcidification: {
    /** за отчетный месяц */
    perReportingMonth: {
      /** МС, тыс.м³ */
      ms: number;
      /** ПВ, тыс.м³ */
      pv: number;
    };
    /** с нарастанием, тыс.м³ */
    accumulated: number;
  };

  /** Подано ВР */
  submittedBp: {
    /** за отчетный месяц, тыс.м³ */
    perReportingMonth: number;
    /** с нарастанием, тыс.м³ */
    accumulated: number;
  };

  /** Ж / Т */
  jT: {
    /** закисление */
    acidification: number;
    /** Выщелачивание */
    leaching: number;
  };

  /** Расход серной кислоты */
  sulfuricAcidConsumption: {
    /** за отчетный месяц */
    perReportingMonth: {
      /** сумма, тонны */
      total: number;
      /** закисление, тонны */
      acidification: number;
      /** Выщелачивание, тонны */
      leaching: number;
    };
    /** с нарастанием */
    accumulated: {
      /** сумма, тонны */
      total: number;
      /** закисление, тонны */
      acidification: number;
      /** Выщелачивание, тонны */
      leaching: number;
    };
  };

  /** Удельный расход серной кислоты */
  specificSulfuricAcidConsumption: {
    /** на 1 т ГРМ */
    grmPerTons: {
      /** закисление, кг/т */
      acidification: number;
      /** Выщелачивание, кг/т */
      leaching: number;
    };
    /** на 1 кг Me */
    mePerKg: {
      /** закисление, кг/кг */
      acidification: number;
      /** Выщелачивание, кг/кг */
      leaching: number;
    };
  };
};

import { AttachmentOneModel } from '@modules/reports/models/AttachmentOneModel';
import { useState } from 'react';

const data: AttachmentOneModel[] = [];
for (let i = 0; i < 20; i++) {
  data.push({
    techBlockNumber: '6-0-' + i,
    grm: 0,
    projectExtractionCoefficient: 0,
    discoveredReserves: 0,

    workTime: {
      acidification: {
        perReportingMonth: 0,
        accumulated: 0,
      },
      leaching: {
        perReportingMonth: 0,
        accumulated: 0,
      },
    },

    numberOfWells: {
      pumpOut: {
        total: 0,
        active: 0,
      },
      pumpIn: {
        total: 0,
        active: 0,
      },
    },

    wellProductivity: {
      pumpOut: 0,
      pumpIn: 0,
    },

    prMined: {
      perReportingMonth: 0,
      accumulated: 0,
    },

    averageMeConcentrationInPr: {
      perReportingMonth: 0,
      accumulated: 0,
    },

    meAmountInPr: {
      perReportingMonth: 0,
      accumulated: 0,
    },

    mePassedToBp: {
      perReportingMonth: 0,
    },

    extractedMeFromBowels: {
      perReportingMonth: 0,
      accumulated: 0,
      extractionCoefficient: 0,
      reextraction: 0,
    },

    releaseMeInGp: {
      perReportingMonth: 0,
      accumulated: 0,
    },

    submittedSolutionsForAcidification: {
      perReportingMonth: {
        ms: 0,
        pv: 0,
      },
      accumulated: 0,
    },

    submittedBp: {
      perReportingMonth: 0,
      accumulated: 0,
    },

    jT: {
      acidification: 0,
      leaching: 0,
    },

    sulfuricAcidConsumption: {
      perReportingMonth: {
        total: 0,
        acidification: 0,
        leaching: 0,
      },
      accumulated: {
        total: 0,
        acidification: 0,
        leaching: 0,
      },
    },

    specificSulfuricAcidConsumption: {
      grmPerTons: {
        acidification: 0,
        leaching: 0,
      },
      mePerKg: {
        acidification: 0,
        leaching: 0,
      },
    },
  });
}

export type DataIndex = string | number | readonly (string | number)[];

export const useFakeData = () => {
  const [fakeData, setFakeData] = useState<AttachmentOneModel[]>(data);

  const updateFakeData = (dataIndex: DataIndex, value: number) => {
    console.log('update', dataIndex, value);
  };

  return {
    fakeData,
    setFakeData,
    updateFakeData,
  };
};

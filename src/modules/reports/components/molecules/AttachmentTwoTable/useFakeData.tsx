import { AttachmentTwoModel } from '@modules/reports/models/AttachmentTwoModel';
import { useState } from 'react';
// import { Select } from '../../atoms/Select';

const data: AttachmentTwoModel[] = [];
for (let i = 0; i < 20; i++) {
  data.push({
    techBlockNumber: '6-0-' + i,
    pr: {
      u: 0,
      acidity: 0,
      pH: 0,
      OVP: 0,
      SO42_: 0,
      NO33_: 0,
      Fe3: 0,
      Fe2: 0,
      Al3: 0,
      Si4: 0,
      Cl_: 0,
      Ca2: 0,
      Mg2: 0,
      dry: 0,
      FeOxiCoef: 0,
    },
    mc: {
      u: 0,
      acidity: 0,
    },
    bp: {
      acidity: 0,
    },
    acidificationSol: {
      acidity: 0,
    },
    acidificationMod: 0, // { label: "Some label", value: "Sss" }
  });
}

export type DataIndex = string | number | readonly (string | number)[];

export const useFakeData = () => {
  const [fakeData, setFakeData] = useState<AttachmentTwoModel[]>(data);

  const updateFakeData = (dataIndex: DataIndex, value: number) => {
    console.log('update', dataIndex, value);
  };

  return {
    fakeData,
    setFakeData,
    updateFakeData,
  };
};

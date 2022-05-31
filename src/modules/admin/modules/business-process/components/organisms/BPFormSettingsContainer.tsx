import { InfoCircleOutline } from '@components/atoms/Icon';
import { Row, Typography } from 'antd';
import { FC, ReactElement } from 'react';
import { BPFormInputType } from '../../types/BusinessProcessForm';
import { BusinessProcessFormSettingsListConfigForm } from './BPFormSettingsListConfigForm';
import { BusinessProcessFormSettingsNumberFractionConfigForm } from './BPFormSettingsNumberFractionConfigForm';
import { BusinessProcessFormSettingsSingleFieldConfigForm } from './BPFormSettingsSingleLineFieldConfigForm';
import { BusinessProcessFormSettingsTextAreaConfigForm } from './BPFormSettingsTextAreaConfigForm';
import { BusinessPRocessFormSettingsUploadFileConfigForm } from './BPFormSettingsUploadFileConfigForm';
const { Text } = Typography;

const Components: { [key: string]: ReactElement } = Object.freeze({
  textArea: <BusinessProcessFormSettingsTextAreaConfigForm />,
  [BPFormInputType.SingleTextField]: (
    <BusinessProcessFormSettingsSingleFieldConfigForm />
  ),
  [BPFormInputType.NumberFraction]: (
    <BusinessProcessFormSettingsNumberFractionConfigForm />
  ),
  uploadFile: <BusinessPRocessFormSettingsUploadFileConfigForm />,
  list: <BusinessProcessFormSettingsListConfigForm />,
});

export const BusinessProcessFormSettingsContainer: FC<{
  selectedMenuItem?: string;
}> = ({ selectedMenuItem }) => {
  return (
    <div className="flex flex-col p-8 items-start justify-center border-2 border-primary flex-1 bg-white">
      {selectedMenuItem ? (
        Components[selectedMenuItem]
      ) : (
        <>
          <Text className="text-gray-7 text-sm flex self-center">
            Выберите вид поля из представленного меню для дальнейшей настройки.
          </Text>
          <Row
            align="middle"
            className="text-darkBlue-80 bg-blue-5 border border-darkBlue-80 p-3 flex flex-row text-sm mt-5 flex-nowrap self-center"
          >
            <InfoCircleOutline />
            <Text className="text-darkBlue-80 ml-2">
              Здесь будет краткое разъяснение информационного характера для
              полного понимания Пользователем для каких данных предназначены
              текстовые поля
            </Text>
          </Row>
        </>
      )}
    </div>
  );
};

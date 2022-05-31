import { Col, Divider, Row } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { FC } from 'react';
import { BusinessProcessFormTag } from '../atoms/BusinessProcessFormTag';

const formats = [
  { title: 'Документы', items: ['pdf', 'txt', 'doc', 'docx', 'xls', 'csv'] },
  { title: 'Изображения', items: ['jpg', 'jpeg', 'png', 'bmp', 'svg'] },
  { title: 'Медиа', items: ['mp3', 'mp4', 'mov'] },
  { title: 'Заархивированные файлы', items: ['zip', 'rar', '7z'] },
];

export const BusinessProcessFormSettingsUploadFileFormats: FC = () => {
  return (
    <>
      {formats.map((format) => (
        <Col className="w-full">
          <Checkbox className="text-gray-9 text-sm">{format.title}</Checkbox>
          <Row className="mt-3 ml-6">
            {format.items.map((item: string) => (
              <BusinessProcessFormTag title={item} />
            ))}
          </Row>
          <Divider type="horizontal" />
        </Col>
      ))}
    </>
  );
};

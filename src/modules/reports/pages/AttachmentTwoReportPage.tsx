import { PageMeta } from '@context/PageMetaContext';
import {
  ReportTitle,
  fullScreenValue,
} from '../components/molecules/ReportTitle';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { AttachmentTwoTable } from '../components/molecules/AttachmentTwoTable';
import { Button } from '@components/atoms/Button';

export const AttachmentTwoReportPage = () => {
  const fullscreenHandle = useFullScreenHandle();

  const handleFullScreenToggle = (value: fullScreenValue) => {
    switch (value) {
      case 'fullscreen':
        fullscreenHandle.enter();
        break;
      default:
        fullscreenHandle.exit();
    }
  };

  return (
    <>
      <PageMeta
        title="Приложение 2"
        selectedMenuKeys={['attachment-2']}
        breadcrumbs={[
          { title: 'Модули' },
          { title: 'Производство' },
          { title: 'Отчет ТО-25' },
          { title: 'Приложение 2' },
        ]}
      />

      <FullScreen
        handle={fullscreenHandle}
        className={
          fullscreenHandle.active ? 'p-4 bg-white overflow-x-auto' : ''
        }
      >
        <div className="h-full flex flex-col bg-white space-y-4 mb-4">
          <ReportTitle
            title="«ТОО”Байкен-U”»"
            onFullscreenToggle={handleFullScreenToggle}
          />

          <AttachmentTwoTable />

          <div className="w-full flex justify-center items-center py-4">
            <Button disabled className="px-8">
              Отправить
            </Button>
          </div>
        </div>
      </FullScreen>
    </>
  );
};

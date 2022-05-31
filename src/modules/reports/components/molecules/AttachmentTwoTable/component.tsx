import { Table } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { useState } from 'react';
import { RowEditForm } from '../RowEditForm/component';
import { useColumns } from './useColumns';
import { useFakeData } from './useFakeData';
import { Modal } from '@components/molecules/Modal';
import { css } from '@emotion/react';
import { useWindowSize } from '@hooks/useWindowSize';

const tableCSS = css({
  '& tbody > tr > td.ant-table-cell-fix-left': {
    backgroundColor: 'inherit',
  },
});

export const AttachmentTwoTable = () => {
  const [isRowEdited, setIsRowEdited] = useState<number | boolean>(false);
  const columns = useColumns({
    onRowEdit: (index: number) => setIsRowEdited(index),
  });
  const data = useFakeData();
  const handleClose = () => setIsRowEdited(false);

  /**
   * 56px header
   * + 16px top table margin
   * + 175px table header
   * + 85px table summary
   * + 88px submit button container
   * = 420px total area required for users' main work area
   */
  const { height: windowHeight } = useWindowSize();
  const tableScrollY = windowHeight ? windowHeight - 420 : 500;

  return (
    <Content>
      <Table
        css={tableCSS}
        rowClassName={(_, index) =>
          index % 2 === 0 ? 'bg-white' : 'bg-gray-0'
        }
        pagination={false}
        columns={columns}
        dataSource={data.fakeData}
        bordered
        scroll={{ x: 3115, y: tableScrollY }}
        summary={() => (
          <Table.Summary fixed>
            <Table.Summary.Row>
              {new Array(21).fill(null).map((_, idx) => (
                <Table.Summary.Cell index={idx} className="p-1 text-center">
                  {idx + 1}
                </Table.Summary.Cell>
              ))}
            </Table.Summary.Row>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} className="text-right">
                Итого:
              </Table.Summary.Cell>

              {new Array(20).fill(null).map((_, idx) => (
                <Table.Summary.Cell index={idx + 1} className="p-1 text-center">
                  000
                </Table.Summary.Cell>
              ))}
            </Table.Summary.Row>
          </Table.Summary>
        )}
      />

      <Modal
        visible={isRowEdited !== false}
        onOk={handleClose}
        title={'Технологический блок №6-5-3'}
        width={728}
        onCancel={handleClose}
        okText={'Сохранить'}
        cancelText={'Отменить'}
      >
        <RowEditForm />
      </Modal>
    </Content>
  );
};
